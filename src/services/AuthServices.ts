import { Octokit } from '@octokit/rest';
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Account, PlatformType } from '../models/account';
import { GiteaUser } from '../models/gitea';
import { GitlabUser } from '../models/gitlab';

export class AuthServices {
  static async loginToGithub(token: string): Promise<Account> {
    const httpLink = createHttpLink({
      uri: 'https://api.github.com/graphql',
    });

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    });

    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });

    const { data } = await client.query<{ viewer: { login: string; avatarUrl: string } }>({
      query: gql`
        query {
          viewer {
            login
            avatarUrl
          }
        }
      `,
    });

    if (!data) {
      throw new Error('GitHub login failed: No data returned');
    }

    return {
      platform: 'github',
      domain: 'https://github.com',
      token,
      login: data.viewer.login,
      avatarUrl: data.viewer.avatarUrl,
    };
  }

  static async loginToGitlab(domain: string, token: string): Promise<Account> {
    const cleanDomain = domain.trim().replace(/\/$/, "");
    const response = await fetch(`${cleanDomain}/api/v4/user`, {
      headers: {
        'Private-Token': token,
      },
    });

    if (!response.ok) {
      throw new Error('GitLab login failed');
    }

    const user: GitlabUser = await response.json();

    return {
      platform: 'gitlab',
      domain: cleanDomain,
      token,
      login: user.username || "",
      avatarUrl: user.avatarUrl || "",
      gitlabId: user.id,
    };
  }

  static async loginToGitea(domain: string, token: string): Promise<Account> {
    const cleanDomain = domain.trim().replace(/\/$/, "");
    const response = await fetch(`${cleanDomain}/api/v1/user`, {
      headers: {
        'Authorization': `token ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Gitea login failed');
    }

    const user: GiteaUser = await response.json();

    return {
      platform: 'gitea',
      domain: cleanDomain,
      token,
      login: user.login || "",
      avatarUrl: user.avatarUrl || "",
    };
  }

  // Helper to create octokit for the current account
  static createOctokit(token: string) {
    return new Octokit({ auth: token });
  }

  // Helper to create Apollo Client for the current account
  static createGithubApolloClient(token: string) {
    const httpLink = createHttpLink({
      uri: 'https://api.github.com/graphql',
    });

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    });

    return new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  }
}
