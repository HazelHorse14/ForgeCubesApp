import { Account } from './account';

export interface GithubEventUser {
  login?: string;
  avatarUrl?: string;
}

export interface GithubEventRepo {
  name?: string;
}

export interface GithubEventCommit {
  sha?: string;
  message?: string;
}

export interface GithubEventIssue {
  title?: string;
  user?: GithubEventUser;
  number?: number;
  body?: string;
  pullRequest?: any;
  state?: string;
  comments?: number;
  merged?: boolean;
  createdAt?: string;
}

export interface GithubEventComment {
  body?: string;
  user?: GithubEventUser;
  commitId?: string;
  htmlUrl?: string;
}

export interface GithubEventRelease {
  htmlUrl?: string;
  tagName?: string;
}

export interface GithubEventPayload {
  issue?: GithubEventIssue;
  pullRequest?: GithubEventIssue;
  comment?: GithubEventComment;
  release?: GithubEventRelease;
  action?: string;
  ref?: string;
  refType?: string;
  before?: string;
  head?: string;
  commits?: GithubEventCommit[];
  forkee?: any;
  pages?: any[];
  securityAdvisory?: any;
  alert?: any;
  project?: any;
  projectColumn?: any;
  installation?: any;
  checkRun?: any;
  checkSuite?: any;
  contentReference?: any;
}

export interface GithubEvent {
  actor?: GithubEventUser;
  type?: string;
  repo?: GithubEventRepo;
  createdAt?: string;
  payload?: GithubEventPayload;
}

export interface GithubNotificationItemSubject {
  title?: string;
  type?: string;
  url?: string;
}

export interface GithubNotificationItemRepo {
  fullName?: string;
}

export interface GithubNotificationItem {
  id?: string;
  subject?: GithubNotificationItemSubject;
  updatedAt?: string;
  repository?: GithubNotificationItemRepo;
  unread?: boolean;
  state?: string;
}

export interface GithubTreeItem {
  name?: string;
  path?: string;
  size?: number;
  type?: string;
  downloadUrl?: string;
  content?: string;
}

export interface GithubContributorItem {
  id?: number;
  login?: string;
  avatarUrl?: string;
  htmlUrl?: string;
  contributions?: number;
}

export interface GithubUserOrganizationItem {
  id?: number;
  login?: string;
  avatarUrl?: string;
  description?: string;
  url?: string;
}

export interface GistFiles {
  filename?: string;
  size?: number;
  rawUrl?: string;
  type?: string;
  language?: string;
  truncated?: boolean;
  content?: string;
}

export interface GithubGistsItem {
  id?: string;
  description?: string;
  public?: boolean;
  files?: Record<string, GistFiles>;
  owner?: GithubEventUser;
  createdAt?: string;
  updatedAt?: string;
}

export interface GithubFilesItem {
  filename?: string;
  status?: string;
  additions?: number;
  deletions?: number;
  changes?: number;
  patch?: string;
}

export interface GithubComparisonItem {
  files?: GithubFilesItem[];
  status?: string;
  aheadBy?: number;
  behindBy?: number;
}
