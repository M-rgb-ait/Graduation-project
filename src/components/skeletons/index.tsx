import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/src/lib/utils/cn";

export function Circle({
  className,
  ...props
}: React.ComponentProps<typeof Skeleton>) {
  return <Skeleton {...props} className={cn("rounded-full", className)} />;
}

export function Square({
  className,
  ...props
}: React.ComponentProps<typeof Skeleton>) {
  return <Skeleton {...props} className={cn("rounded-lg", className)} />;
}

export function Bar({
  className,
  ...props
}: React.ComponentProps<typeof Skeleton>) {
  return (
    <Skeleton {...props} className={cn("h-8 min-w-12 rounded-lg", className)} />
  );
}
