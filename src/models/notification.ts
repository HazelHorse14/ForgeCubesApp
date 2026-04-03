import { GithubNotificationItem } from './github';

export interface NotificationGroup {
  fullName?: string;
  items: GithubNotificationItem[];
}

export interface NotificationState {
  count: number;
  setCount: (count: number) => void;
}
