import { Skeleton } from "@/components/ui/skeleton";

export default function ProductOverviewSkeletons() {
  return (
    <div className="">
      {[...Array(8)].map((_, i) => (
        <Skeleton key={i} className="h-8 w-[488px] mb-2.5 rounded-xl" />
      ))}
    </div>
  );
}
