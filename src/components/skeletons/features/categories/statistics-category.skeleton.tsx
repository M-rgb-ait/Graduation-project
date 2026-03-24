import { Square } from "../..";

export default function StatisticsCategorySkeleton({ blocks = 5 }) {
  return (
    <ul className="space-y-3">
      {Array.from({ length: blocks }).map((_, i) => (
        <Square key={i} className="h-10" />
      ))}
    </ul>
  );
}
