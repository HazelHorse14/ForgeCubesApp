export type PlatformType = 'github' | 'gitlab' | 'gitea' | 'gogs';

export interface Account {
  platform: PlatformType;
  domain: string;
  token: string;
  login: string;
  avatarUrl: string;
  gitlabId?: number; // Specific for GitLab
}
