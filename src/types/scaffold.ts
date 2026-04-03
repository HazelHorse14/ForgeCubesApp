export interface ListPayload<T, K = string | number | null> {
  items: T[];
  cursor: K;
  hasMore: boolean;
}

export type PlatformType = 'github' | 'gitlab' | 'gitea' | 'gogs';
