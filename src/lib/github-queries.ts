/**
 * Typed GraphQL document nodes generated from github.graphql.
 * Import the needed query and pass it to `useQuery` / `useLazyQuery`.
 *
 * Example:
 *   const { data } = useQuery(VIEWER_QUERY);
 */

import { gql } from '@apollo/client';

// ---------------------------------------------------------------------------
// Fragments (inline – Apollo Client v4 resolves them automatically when they
// appear in the same document string as the query that uses them)
// ---------------------------------------------------------------------------

const PAGE_INFO_PARTS = `
  fragment PageInfoParts on PageInfo {
    hasNextPage
    endCursor
  }
`;

const REPO_ITEM = `
  fragment RepoItem on Repository {
    owner { login avatarUrl }
    name
    description
    isPrivate
    isFork
    stargazers { totalCount }
    forks { totalCount }
    primaryLanguage { color name }
  }
`;

const USER_ITEM = `
  fragment UserItem on User {
    login name avatarUrl company location createdAt
  }
`;

const REPOS_REPO_ITEM = `
  fragment ReposRepoItem on Repository {
    ...RepoItem
    updatedAt
  }
`;

const USER_PARTS = `
  fragment UserParts on User {
    login avatarUrl name bio company location email createdAt websiteUrl
    viewerCanFollow viewerIsFollowing
    starredRepositories { totalCount }
    followers { totalCount }
    following { totalCount }
    contributionsCollection {
      contributionCalendar {
        weeks { contributionDays { color } }
      }
    }
    repositories(first: 6, ownerAffiliations: OWNER, orderBy: { field: STARGAZERS, direction: DESC }) {
      totalCount
      nodes { ...RepoItem }
    }
    pinnedItems(first: 6) {
      nodes { ... on Repository { ...RepoItem } }
    }
  }
`;

const COMMENT_PARTS = `
  fragment CommentParts on Comment {
    id createdAt body
    author { login avatarUrl }
  }
`;

const REACTION_CONNECTION_PARTS = `
  fragment ReactionConnectionParts on ReactionConnection {
    totalCount viewerHasReacted
  }
`;

const REACTABLE_PARTS = `
  fragment ReactableParts on Reactable {
    THUMBS_UP:   reactions(content: THUMBS_UP)   { ...ReactionConnectionParts }
    THUMBS_DOWN: reactions(content: THUMBS_DOWN) { ...ReactionConnectionParts }
    LAUGH:       reactions(content: LAUGH)        { ...ReactionConnectionParts }
    HOORAY:      reactions(content: HOORAY)       { ...ReactionConnectionParts }
    CONFUSED:    reactions(content: CONFUSED)     { ...ReactionConnectionParts }
    HEART:       reactions(content: HEART)        { ...ReactionConnectionParts }
    ROCKET:      reactions(content: ROCKET)       { ...ReactionConnectionParts }
    EYES:        reactions(content: EYES)         { ...ReactionConnectionParts }
  }
`;

// ---------------------------------------------------------------------------
// Queries
// ---------------------------------------------------------------------------

/** Fetch paginated gists for a given user login. */
export const GISTS_QUERY = gql`
  ${PAGE_INFO_PARTS}
  query Gists($login: String!, $after: String) {
    user(login: $login) {
      gists(first: 30, after: $after) {
        pageInfo { ...PageInfoParts }
        nodes {
          name description updatedAt id
          owner { avatarUrl }
          files { name language { name } text }
        }
      }
    }
  }
`;

/** Fetch a single gist by owner login + gist name. */
export const GIST_QUERY = gql`
  query Gist($login: String!, $name: String!) {
    user(login: $login) {
      gist(name: $name) {
        name
        files { name language { name } text size }
      }
    }
  }
`;

/** Paginated followers list for a user. */
export const FOLLOWERS_QUERY = gql`
  ${PAGE_INFO_PARTS}
  ${USER_ITEM}
  query Followers($login: String!, $after: String) {
    user(login: $login) {
      followers(first: 30, after: $after) {
        pageInfo { ...PageInfoParts }
        nodes { ...UserItem }
      }
    }
  }
`;

/** Paginated following list for a user. */
export const FOLLOWING_QUERY = gql`
  ${PAGE_INFO_PARTS}
  ${USER_ITEM}
  query Following($login: String!, $after: String) {
    user(login: $login) {
      following(first: 30, after: $after) {
        pageInfo { ...PageInfoParts }
        nodes { ...UserItem }
      }
    }
  }
`;

/** Paginated members of an organization. */
export const MEMBERS_QUERY = gql`
  ${PAGE_INFO_PARTS}
  ${USER_ITEM}
  query Members($login: String!, $after: String) {
    organization(login: $login) {
      membersWithRole(first: 30, after: $after) {
        pageInfo { ...PageInfoParts }
        nodes { ...UserItem }
      }
    }
  }
`;

/** Paginated watchers of a repository. */
export const WATCHERS_QUERY = gql`
  ${PAGE_INFO_PARTS}
  ${USER_ITEM}
  query Watchers($owner: String!, $name: String!, $after: String) {
    repository(owner: $owner, name: $name) {
      watchers(first: 30, after: $after) {
        pageInfo { ...PageInfoParts }
        nodes { ...UserItem }
      }
    }
  }
`;

/** Paginated stargazers of a repository. */
export const STARGAZERS_QUERY = gql`
  ${PAGE_INFO_PARTS}
  ${USER_ITEM}
  query Stargazers($owner: String!, $name: String!, $after: String) {
    repository(owner: $owner, name: $name) {
      stargazers(first: 30, after: $after, orderBy: { field: STARRED_AT, direction: DESC }) {
        pageInfo { ...PageInfoParts }
        nodes { ...UserItem }
      }
    }
  }
`;

/** Paginated repositories for a user (sorted by updatedAt). */
export const REPOS_QUERY = gql`
  ${PAGE_INFO_PARTS}
  ${REPO_ITEM}
  ${REPOS_REPO_ITEM}
  query Repos($login: String!, $after: String) {
    user(login: $login) {
      repositories(first: 30, after: $after, orderBy: { field: UPDATED_AT, direction: DESC }) {
        pageInfo { ...PageInfoParts }
        nodes { ...ReposRepoItem }
      }
    }
  }
`;

/** Paginated starred repositories for a user. */
export const STARS_QUERY = gql`
  ${PAGE_INFO_PARTS}
  ${REPO_ITEM}
  ${REPOS_REPO_ITEM}
  query Stars($login: String!, $after: String) {
    user(login: $login) {
      starredRepositories(first: 30, after: $after, orderBy: { field: STARRED_AT, direction: DESC }) {
        pageInfo { ...PageInfoParts }
        nodes { ...ReposRepoItem }
      }
    }
  }
`;

/** Authenticated viewer profile. */
export const VIEWER_QUERY = gql`
  ${REPO_ITEM}
  ${USER_PARTS}
  query Viewer {
    viewer { ...UserParts }
  }
`;

/** A user or organization profile by login. */
export const USER_QUERY = gql`
  ${REPO_ITEM}
  ${USER_PARTS}
  query User($login: String!) {
    repositoryOwner(login: $login) {
      url
      ... on User { ...UserParts }
      ... on Organization {
        login avatarUrl name description location email websiteUrl createdAt
        membersWithRole { totalCount }
        pinnedItems(first: 6) {
          nodes { ... on Repository { ...RepoItem } }
        }
        pinnableItems(first: 6, types: [REPOSITORY]) {
          totalCount
          nodes { ... on Repository { ...RepoItem } }
        }
      }
    }
  }
`;

/** Full repository details, optionally for a specific branch. */
export const REPO_QUERY = gql`
  query Repo($owner: String!, $name: String!, $branchSpecified: Boolean!, $branch: String!) {
    repository(owner: $owner, name: $name) {
      owner { login avatarUrl }
      name description homepageUrl isPrivate isFork diskUsage
      hasIssuesEnabled url viewerHasStarred viewerSubscription projectsUrl
      primaryLanguage { color name }
      stargazers { totalCount }
      forks { totalCount }
      watchers { totalCount }
      issues(states: OPEN) { totalCount }
      pullRequests(states: OPEN) { totalCount }
      projects { totalCount }
      releases { totalCount }
      languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
        totalSize
        edges { size node { name color } }
      }
      defaultBranchRef @skip(if: $branchSpecified) {
        name
        target { ... on Commit { history { totalCount } } }
      }
      ref(qualifiedName: $branch) @include(if: $branchSpecified) {
        name
        target { ... on Commit { history { totalCount } } }
      }
      refs(first: 100, refPrefix: "refs/heads/") {
        totalCount
        nodes { name }
      }
      licenseInfo { name spdxId }
      repositoryTopics(first: 10) {
        nodes { url topic { name } }
      }
    }
  }
`;

/** Paginated commit history on a branch. */
export const COMMITS_QUERY = gql`
  ${PAGE_INFO_PARTS}
  query Commits($owner: String!, $name: String!, $ref: String!, $hasRef: Boolean!, $after: String) {
    repository(owner: $owner, name: $name) {
      defaultBranchRef @skip(if: $hasRef) {
        target {
          ... on Commit {
            history(first: 30, after: $after) {
              pageInfo { ...PageInfoParts }
              nodes {
                url messageHeadline committedDate
                author { name avatarUrl user { login } }
                status { state }
              }
            }
          }
        }
      }
      ref(qualifiedName: $ref) @include(if: $hasRef) {
        target {
          ... on Commit {
            history(first: 30, after: $after) {
              pageInfo { ...PageInfoParts }
              nodes {
                url messageHeadline committedDate
                author { name avatarUrl user { login } }
                status { state }
              }
            }
          }
        }
      }
    }
  }
`;

/** Paginated open issues for a repository. */
export const ISSUES_QUERY = gql`
  ${PAGE_INFO_PARTS}
  query Issues($owner: String!, $name: String!, $cursor: String) {
    repository(owner: $owner, name: $name) {
      issues(states: OPEN, orderBy: { field: CREATED_AT, direction: DESC }, first: 30, after: $cursor) {
        pageInfo { ...PageInfoParts }
        nodes {
          number title updatedAt
          author { login avatarUrl }
          labels(first: 10) { nodes { name color } }
          comments { totalCount }
        }
      }
    }
  }
`;

/** Paginated open pull requests for a repository. */
export const PULLS_QUERY = gql`
  ${PAGE_INFO_PARTS}
  query Pulls($owner: String!, $name: String!, $cursor: String) {
    repository(owner: $owner, name: $name) {
      pullRequests(states: OPEN, orderBy: { field: CREATED_AT, direction: DESC }, first: 30, after: $cursor) {
        pageInfo { ...PageInfoParts }
        nodes {
          number title updatedAt
          author { login avatarUrl }
          labels(first: 10) { nodes { name color } }
          comments { totalCount }
        }
      }
    }
  }
`;

/** Full issue or pull request thread by number. */
export const ISSUE_QUERY = gql`
  ${COMMENT_PARTS}
  ${REACTION_CONNECTION_PARTS}
  ${REACTABLE_PARTS}
  query Issue($owner: String!, $name: String!, $number: Int!, $cursor: String) {
    repository(owner: $owner, name: $name) {
      owner { avatarUrl }
      issueOrPullRequest(number: $number) {
        ... on Issue {
          ...CommentParts ...ReactableParts
          title closed url viewerCanReact viewerCanUpdate
          timelineItems(first: 30, after: $cursor) {
            totalCount
            pageInfo { hasNextPage endCursor }
            nodes {
              ... on IssueComment       { ...CommentParts ...ReactableParts }
              ... on ReferencedEvent    { createdAt isCrossRepository actor { login } commit { oid url } commitRepository { owner { login } name } }
              ... on RenamedTitleEvent  { createdAt previousTitle currentTitle actor { login } }
              ... on ClosedEvent        { createdAt actor { login } }
              ... on ReopenedEvent      { createdAt actor { login } }
              ... on CrossReferencedEvent { createdAt actor { login } source { __typename ... on Issue { number repository { owner { login } name } } ... on PullRequest { number repository { owner { login } name } } } }
              ... on LabeledEvent       { createdAt actor { login } label { name color } }
              ... on UnlabeledEvent     { createdAt actor { login } label { name color } }
              ... on MilestonedEvent    { createdAt actor { login } milestoneTitle }
              ... on DemilestonedEvent  { createdAt actor { login } milestoneTitle }
              ... on LockedEvent        { createdAt actor { login } lockReason }
              ... on UnlockedEvent      { createdAt actor { login } }
              ... on AssignedEvent      { createdAt actor { login } assignee { __typename ... on User { login } ... on Bot { login } ... on Organization { login } ... on Mannequin { login } } }
              ... on UnassignedEvent    { createdAt actor { login } assignee { __typename ... on User { login } ... on Bot { login } ... on Organization { login } ... on Mannequin { login } } }
              ... on SubscribedEvent    { createdAt actor { login } }
              ... on UnsubscribedEvent  { createdAt actor { login } }
              ... on MentionedEvent     { createdAt actor { login } }
              ... on PinnedEvent        { createdAt actor { login } }
              ... on TransferredEvent   { createdAt actor { login } fromRepository { owner { login } name } }
            }
          }
        }
        ... on PullRequest {
          ...CommentParts ...ReactableParts
          title closed url viewerCanReact viewerCanUpdate
          merged additions deletions changedFiles
          commits { totalCount }
          timelineItems(first: 30, after: $cursor) {
            totalCount
            pageInfo { hasNextPage endCursor }
            nodes {
              ... on IssueComment       { ...CommentParts ...ReactableParts }
              ... on ReferencedEvent    { createdAt isCrossRepository actor { login } commit { oid url } commitRepository { owner { login } name } }
              ... on RenamedTitleEvent  { createdAt previousTitle currentTitle actor { login } }
              ... on ClosedEvent        { createdAt actor { login } }
              ... on ReopenedEvent      { createdAt actor { login } }
              ... on CrossReferencedEvent { createdAt actor { login } source { __typename ... on Issue { number repository { owner { login } name } } ... on PullRequest { number repository { owner { login } name } } } }
              ... on LabeledEvent       { createdAt actor { login } label { name color } }
              ... on UnlabeledEvent     { createdAt actor { login } label { name color } }
              ... on MilestonedEvent    { createdAt actor { login } milestoneTitle }
              ... on DemilestonedEvent  { createdAt actor { login } milestoneTitle }
              ... on LockedEvent        { createdAt actor { login } lockReason }
              ... on UnlockedEvent      { createdAt actor { login } }
              ... on AssignedEvent      { createdAt actor { login } assignee { __typename ... on User { login } ... on Bot { login } ... on Organization { login } ... on Mannequin { login } } }
              ... on UnassignedEvent    { createdAt actor { login } assignee { __typename ... on User { login } ... on Bot { login } ... on Organization { login } ... on Mannequin { login } } }
              ... on SubscribedEvent    { createdAt actor { login } }
              ... on UnsubscribedEvent  { createdAt actor { login } }
              ... on MentionedEvent     { createdAt actor { login } }
              ... on PinnedEvent        { createdAt actor { login } }
              ... on TransferredEvent   { createdAt actor { login } fromRepository { owner { login } name } }
              ... on PullRequestCommit  { commit { committedDate oid author { user { login } } } }
              ... on DeployedEvent      { createdAt actor { login } pullRequest { headRef { name } } }
              ... on DeploymentEnvironmentChangedEvent { createdAt actor { login } deploymentStatus { deployment { environment } description } }
              ... on HeadRefRestoredEvent     { createdAt actor { login } pullRequest { headRefName } }
              ... on BaseRefForcePushedEvent  { createdAt actor { login } pullRequest { baseRef { name } } beforeCommit { oid } afterCommit { oid } }
              ... on HeadRefForcePushedEvent  { createdAt actor { login } pullRequest { headRefName } beforeCommit { oid } afterCommit { oid } }
              ... on ReviewRequestedEvent     { createdAt actor { login } requestedReviewer { ... on User { login } } }
              ... on ReviewRequestRemovedEvent { createdAt actor { login } requestedReviewer { ... on User { login } } }
              ... on ReviewDismissedEvent     { createdAt dismissalMessage actor { login } pullRequest { author { login } } }
              ... on PullRequestReview        { createdAt state author { login } comments(first: 10) { nodes { ...CommentParts ...ReactableParts } } }
              ... on MergedEvent              { createdAt mergeRefName actor { login } commit { oid url } }
              ... on HeadRefDeletedEvent      { createdAt headRefName actor { login } }
            }
          }
        }
      }
    }
  }
`;

/** Paginated releases for a repository. */
export const RELEASES_QUERY = gql`
  ${PAGE_INFO_PARTS}
  query Releases($name: String!, $owner: String!, $cursor: String) {
    repository(name: $name, owner: $owner) {
      releases(first: 30, after: $cursor, orderBy: { field: CREATED_AT, direction: DESC }) {
        pageInfo { ...PageInfoParts }
        nodes {
          tagName description name publishedAt url
          author { name avatarUrl }
          releaseAssets(first: 30) {
            nodes { name downloadUrl downloadCount }
          }
        }
      }
    }
  }
`;
