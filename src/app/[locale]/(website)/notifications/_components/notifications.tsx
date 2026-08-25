"use client";

import { Bell } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import useAllNotifications from "../hooks/use-get-notification";
import useReadNotification from "../hooks/use-read-notification";
import { useRemoveNotification } from "../hooks/use-remove-notification";
import { Button } from "@/src/components/ui/button";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function NotificationDialog() {
  const { isLoading, notifications } = useAllNotifications();
  const { readNotification } = useReadNotification();
  const { RemoveNotification, isRemove, variables } = useRemoveNotification();

  const [deletedIds, setDeletedIds] = useState<string[]>([]);

  const timeoutRefs = useRef<Map<string, NodeJS.Timeout>>(new Map());

  const handleClearRead = (id: string) => {
    readNotification({
      id,
      value: {
        isRead: true,
      },
    });
  };

  const handleRemove = (id: string) => {
    // hedin notification durect in interface
    setDeletedIds((prev) => [...prev, id]);

    const timeout = setTimeout(() => {
      RemoveNotification(id);

      timeoutRefs.current.delete(id);
    }, 9000);

    timeoutRefs.current.set(id, timeout);

    toast.success("Notification deleted", {
      action: {
        label: "Undo",
        onClick: () => {
          const timeout = timeoutRefs.current.get(id);

          if (timeout) {
            clearTimeout(timeout);
            timeoutRefs.current.delete(id);
          }

          // return notification in interface
          setDeletedIds((prev) => prev.filter((item) => item !== id));

          toast.success("Notification restored");
        },
      },
      duration: 5000,
    });
  };

  const visibleNotifications = notifications?.filter(
    (notification) => !deletedIds.includes(notification.id),
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="relative mt-2 cursor-pointer">
          <Bell className="size-7" />
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Notifications</DialogTitle>
        </DialogHeader>

        <div
          style={{
            maxHeight: "400px",
            overflowY: "auto",
          }}
        >
          {isLoading ? (
            <p>Loading...</p>
          ) : visibleNotifications?.length ? (
            visibleNotifications.map((notification) => (
              <div
                key={notification.id}
                onClick={() => handleClearRead(notification.id)}
                className={`mb-2.5 rounded-lg border p-3 transition-colors ${
                  notification.isRead
                    ? "bg-zinc-50 dark:bg-zinc-800"
                    : "bg-maroon-50 border-maroon-500 dark:bg-maroon-950"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{notification.title}</h3>

                  {!notification.isRead && (
                    <span className="h-2 w-2 rounded-full bg-red-500" />
                  )}
                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                  {notification.message}
                </p>

                <p className="mt-2 text-xs text-muted-foreground">
                  {new Date(notification.createdAt).toLocaleString()}
                </p>

                <Button
                  spinner={isRemove && variables === notification.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemove(notification.id);
                  }}
                  className="mt-3 text-red-600"
                >
                  Delete
                </Button>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground">
              No notifications yet.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
// import { Bell } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import useAllNotifications from "../hooks/use-get-notification";
// import useReadNotification from "../hooks/use-read-notification";
// import { useRemoveNotification } from "../hooks/use-remove-notification";
// import { Button } from "@/src/components/ui/button";

// export default function NotificationDialog() {
//   const { isLoading, notifications } = useAllNotifications();
//   const { readNotification } = useReadNotification();
//   const { RemoveNotification, isRemove, variables } = useRemoveNotification();

//   const handleClearRead = (id: string) => {
//     readNotification({
//       id,
//       value: {
//         isRead: true,
//       },
//     });
//   };
// const handleRemove = (id: string) => {
//   setTimeout(() => {
//     RemoveNotification(id);
//   }, 5000);
// };
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <button className="relative mt-2 cursor-pointer">
//           <Bell className="size-7" />
//         </button>
//       </DialogTrigger>

//       <DialogContent className="max-w-md">
//         <DialogHeader>
//           <DialogTitle>Notifications</DialogTitle>
//         </DialogHeader>
//         <div
//           style={{
//             maxHeight: "400px",
//             overflowY: "auto",
//           }}
//         >
//           {isLoading ? (
//             <p>Loading...</p>
//           ) : notifications?.length ? (
//             notifications.map((notification) => (
//               <div
//                 key={notification.id}
//                 onClick={() => handleClearRead(notification.id)}
//                 className={`rounded-lg border p-3 transition-colors mb-2.5 ${
//                   notification.isRead
//                     ? "bg-zinc-50 dark:bg-zinc-800"
//                     : "bg-maroon-50 border-maroon-500 dark:bg-maroon-950"
//                 }`}
//               >
//                 <div className="flex items-center justify-between">
//                   <h3 className="font-medium">{notification.title}</h3>

//                   {!notification.isRead && (
//                     <span className="h-2 w-2 rounded-full bg-red-500" />
//                   )}
//                 </div>

//                 <p className="mt-1 text-sm text-muted-foreground">
//                   {notification.message}
//                 </p>

//                 <p className="mt-2 text-xs text-muted-foreground">
//                   {new Date(notification.createdAt).toLocaleString()}
//                 </p>
//                 <Button
//                   spinner={isRemove && variables === notification.id}
//                   onClick={() => handleRemove(notification.id)}
//                   className="mt-3 text-red-600"
//                 >
//                   Delete
//                 </Button>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-muted-foreground">
//               No notifications yet.
//             </p>
//           )}
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }
