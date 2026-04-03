export interface GiteaUser {
  id?: number;
  login?: string;
  fullName?: string;
  avatarUrl?: string;
  created?: string;
}

export interface GiteaOrg {
  id?: number;
  username?: string;
  fullName?: string;
  avatarUrl?: string;
  description?: string;
  website?: string;
  location?: string;
}

export interface GiteaRepository {
  id?: number;
  owner?: GiteaUser;
  name?: string;
  description?: string;
  starsCount?: number;
  forksCount?: number;
  updatedAt?: string;
  website?: string;
  size?: number;
  openIssuesCount?: number;
  openPrCounter?: number;
}

export interface GiteaTree {
  type: string;
  name: string;
  path?: string;
  size?: number;
  downloadUrl?: string;
}

export interface GiteaBlob extends GiteaTree {
  content?: string;
}

export interface GiteaCommitAuthor {
  name?: string;
  email?: string;
  date?: string;
}

export interface GiteaCommitDetail {
  message?: string;
  author?: GiteaCommitAuthor;
  committer?: GiteaCommitAuthor;
}

export interface GiteaCommit {
  number?: number;
  author?: GiteaUser;
  title?: string;
  body?: string;
  commit?: GiteaCommitDetail;
  sha?: string;
  htmlUrl?: string;
}

export interface GiteaLabel {
  color?: string;
  name?: string;
}

export interface GiteaIssue {
  title?: string;
  body?: string;
  number?: number;
  user?: GiteaUser;
  comments?: number;
  updatedAt?: string;
  state?: string;
  htmlUrl?: string;
  labels?: GiteaLabel[];
}

export interface GiteaHeatmapItem {
  timestamp?: number;
  contributions?: number;
}

export interface GiteaComment {
  body?: string;
  createdAt?: string;
  htmlUrl?: string;
  originalAuthor?: string;
  updatedAt?: string;
  id?: number;
  user?: GiteaUser;
}
