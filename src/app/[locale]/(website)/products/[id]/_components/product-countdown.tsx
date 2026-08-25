"use client";

import { useEffect, useState } from "react";

type ProductCountdownProps = {
  productId: string;
  duration?: number; // بالدقائق
};

export default function ProductCountdown({
  productId,
  duration = 10,
}: ProductCountdownProps) {
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    if (!productId) return;

    const key = `countdown-${productId}`;

    const endTime = localStorage.getItem(key);

    let targetTime: number;

    if (!endTime) {
      targetTime = Date.now() + duration * 60 * 1000;
      localStorage.setItem(key, String(targetTime));
    } else {
      targetTime = Number(endTime);
    }

    const update = () => {
      const timeLeft = targetTime - Date.now();

      if (timeLeft <= 0) {
        setRemaining(0);
        localStorage.removeItem(key);
        return false;
      }

      setRemaining(timeLeft);
      return true;
    };

    update(); // أول تحديث

    const interval = setInterval(() => {
      if (!update()) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [productId, duration]);

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  return (
    <div className="rounded-md bg-red-50 p-4 text-red-600">
      <p className="font-semibold">Offer ends in</p>

      <div className="mt-2 flex gap-2">
        <span>{String(days).padStart(2, "0")}d</span>
        <span>{String(hours).padStart(2, "0")}h</span>
        <span>{String(minutes).padStart(2, "0")}m</span>
        <span>{String(seconds).padStart(2, "0")}s</span>
      </div>
    </div>
  );
}
// "use client";

// import { useEffect, useState } from "react";

// type ProductCountdownProps = {
//   productId: string;
//   duration?: number; // بالدقائق
// };

// export default function ProductCountdown({
//   productId,
//   duration = 10,
// }: ProductCountdownProps) {
//   const [remaining, setRemaining] = useState(0);
//   const [endDate, setEndDate] = useState<Date | null>(null);

//   useEffect(() => {
//     if (!productId) return;

//     const key = `countdown-${productId}`;

//     let endTime = Number(localStorage.getItem(key));

//     if (!endTime) {
//       endTime = Date.now() + duration * 60 * 1000;
//       localStorage.setItem(key, String(endTime));
//     }

//     setEndDate(new Date(endTime));

//     const update = () => {
//       const timeLeft = endTime - Date.now();

//       if (timeLeft <= 0) {
//         setRemaining(0);
//         localStorage.removeItem(key);
//         return false;
//       }

//       setRemaining(timeLeft);
//       return true;
//     };

//     update();

//     const interval = setInterval(() => {
//       if (!update()) clearInterval(interval);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [productId, duration]);

//   const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
//   const minutes = Math.floor((remaining / (1000 * 60)) % 60);
//   const seconds = Math.floor((remaining / 1000) % 60);

//   return (
//     <div className="rounded-md bg-red-50 p-4 text-red-600">
//       <p className="font-semibold">Offer ends in</p>

//       <div className="mt-2 flex gap-2">
//         <span>{String(days).padStart(2, "0")}d</span>
//         <span>{String(hours).padStart(2, "0")}h</span>
//         <span>{String(minutes).padStart(2, "0")}m</span>
//         <span>{String(seconds).padStart(2, "0")}s</span>
//       </div>

//       {endDate && (
//         <p className="mt-3 text-sm text-gray-600">
//           Ends on{" "}
//           {endDate.toLocaleDateString("en-US", {
//             weekday: "long",
//             day: "numeric",
//             month: "long",
//             year: "numeric",
//           })}{" "}
//           at{" "}
//           {endDate.toLocaleTimeString("en-US", {
//             hour: "2-digit",
//             minute: "2-digit",
//           })}
//         </p>
//       )}
//     </div>
//   );
// }
