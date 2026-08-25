export const getAllNotifications = async ({ pageParam = 1 }) => {
  const res = await fetch(`/api/notifications?page=${pageParam}`);

  if (!res.ok) {
    throw new Error("Failed to fetch notifications");
  }

  return res.json();
};
