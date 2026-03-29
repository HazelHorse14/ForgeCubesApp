import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import * as SecureStore from 'expo-secure-store';

export const GITHUB_TOKEN_KEY = 'github_token';

/** Retrieve the stored GitHub PAT (null when not logged in). */
export async function getGithubToken(): Promise<string | null> {
  return SecureStore.getItemAsync(GITHUB_TOKEN_KEY);
}

/** Persist / overwrite the GitHub PAT. */
export async function setGithubToken(token: string): Promise<void> {
  return SecureStore.setItemAsync(GITHUB_TOKEN_KEY, token);
}

/** Remove the stored GitHub PAT (logout). */
export async function deleteGithubToken(): Promise<void> {
  return SecureStore.deleteItemAsync(GITHUB_TOKEN_KEY);
}

// ---------------------------------------------------------------------------
// Auth middleware – reads the token synchronously from a module-level ref
// so it can be used inside the synchronous ApolloLink chain.
// The ref is updated every time the client is (re-)created via createGithubClient.
// ---------------------------------------------------------------------------
let _token: string | null = null;

export function setTokenRef(token: string | null) {
  _token = token;
}

const authLink = new ApolloLink((operation, forward) => {
  if (_token) {
    operation.setContext(({ headers = {} }: { headers: Record<string, string> }) => ({
      headers: {
        ...headers,
        Authorization: `Bearer ${_token}`,
      },
    }));
  }
  return forward(operation);
});

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
});

// ---------------------------------------------------------------------------
// Shared client instance – call `createGithubClient(token)` after login or
// on app start once the token has been loaded from SecureStore.
// ---------------------------------------------------------------------------
export const githubClient = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: { fetchPolicy: 'cache-and-network' },
  },
});
