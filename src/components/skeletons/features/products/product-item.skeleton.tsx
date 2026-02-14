import { Skeleton } from "@/components/ui/skeleton";

export default function ProductSkeleton() {
  return (
    <div className="w-[302px] rounded-2xl bg-white p-3 shadow-sm dark:bg-zinc-900">
      {/* Image Skeleton with badge */}
      <div className="relative">
        <Skeleton className="h-52 w-full rounded-xl" />
        <div className="absolute right-2 top-2 h-4 w-8 rounded-full bg-gray-200 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-zinc-700 dark:text-gray-300"></div>
      </div>

      {/* Content */}
      <div className="space-y-2 pt-3">
        {/* Title */}
        <Skeleton className="h-4 w-2/3" />

        {/* Stars */}
        <div className="flex space-x-1">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-4 w-4 rounded-full" />
        </div>

        {/* Prices */}
        <div className="flex items-center space-x-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-14" />
        </div>
      </div>

      {/* Cart button */}
      <div className="mt-4 flex justify-end">
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
    </div>
  );
}
