export type NotificationType = "SYSTEM" | "ORDER" | "PROMOTION";

export interface NotificationId {
  isRead: boolean;
}
export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  link: string;
  createdAt: string;
  updatedAt: string;
}

export interface NotificationMetadata {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface NotificationsPayload {
  data: Notification[];
  metadata: NotificationMetadata;
}

export interface GetAllNotificationsResponse {
  status: boolean;
  code: number;
  payload: NotificationsPayload;
}
