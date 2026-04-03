export interface GitlabUser {
  id?: number;
  username?: string;
  name?: string;
  avatarUrl?: string;
  bio?: string;
  createdAt?: string;
  accessLevel?: number;
}

export interface GitlabProjectNamespace {
  id?: number;
  name?: string;
  path?: string;
  kind?: string;
}

export interface GitlabProjectStatistics {
  commitCount?: number;
  repositorySize?: number;
}

export interface GitlabProject {
  id?: number;
  name?: string;
  avatarUrl?: string;
  description?: string;
  starCount?: number;
  forksCount?: number;
  visibility?: string;
  readmeUrl?: string;
  webUrl?: string;
  namespace?: GitlabProjectNamespace;
  owner?: GitlabUser;
  issuesEnabled?: boolean;
  openIssuesCount?: number;
  mergeRequestsEnabled?: boolean;
  statistics?: GitlabProjectStatistics;
  lastActivityAt?: string;
  createdAt?: string;
  defaultBranch?: string;
}

export interface GitlabGroup {
  id?: number;
  path?: string;
  name?: string;
  avatarUrl?: string;
  description?: string;
  projects?: GitlabProject[];
}

export interface GitlabTodoProject {
  pathWithNamespace?: string;
}

export interface GitlabTodoTarget {
  iid?: number;
  projectId?: number;
  title?: string;
  author?: GitlabUser;
  description?: string;
  createdAt?: string;
}

export interface GitlabTodo {
  author?: GitlabUser;
  project?: GitlabTodoProject;
  actionName?: string;
  targetType?: string;
  target?: GitlabTodoTarget;
}

export interface GitlabIssueNote {
  author?: GitlabUser;
  body?: string;
  system?: boolean;
  createdAt?: string;
}

export interface GitlabProjectBadge {
  renderedImageUrl?: string;
}

export interface GitlabTreeItem {
  type: string;
  path: string;
  name: string;
}

export interface GitlabBlob {
  content?: string;
}

export interface GitlabEventNote {
  body?: string;
  noteableType?: string;
  noteableIid?: number;
}

export interface GitlabEvent {
  author?: GitlabUser;
  actionName?: string;
  targetType?: string;
  note?: GitlabEventNote;
}

export interface GitlabCommit {
  id?: string;
  shortId?: string;
  title?: string;
  createdAt?: string;
  authorName?: string;
  message?: string;
}

export interface GitlabDiff {
  diff?: string;
  newPath?: string;
  oldPath?: string;
}

export interface GitlabIssue {
  title?: string;
  iid?: number;
  projectId?: number;
  author?: GitlabUser;
  userNotesCount?: number;
  updatedAt?: string;
  labels?: string[];
}

export interface GitlabStarrer {
  starredSince?: string;
  user?: GitlabUser;
}

export interface GitlabBranch {
  name?: string;
  merged?: boolean;
}
