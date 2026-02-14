import { Square } from "lucide-react";

export default function OccasionSkeleton({ blocks = 6 }) {
  return (
    <ul className="grid grid-cols-2 gap-2.5">
      {Array.from({ length: blocks }).map((_, i) => (
        <Square key={i} className="h-20" />
      ))}
    </ul>
  );
}
