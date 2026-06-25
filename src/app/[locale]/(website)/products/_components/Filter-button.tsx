import { Button } from "@/src/components/ui/button";
import { useSearchParams } from "next/navigation";
import { usePathname, useRouter } from "@/src/i18n/navigation";
type FilterButtonProps = {
  selected: string;
};

export default function FilterButton({ selected }: FilterButtonProps) {
  // Navigation
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("categoryId");
  // Functions
  const handleClick = (id: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (id === selectedCategory) {
      newParams.delete("category");
    } else {
      newParams.set("category", id);
    }
    router.push(`${pathname}?${newParams.toString()}`);
  };
  return (
    <Button onClick={() => handleClick(selected)} className="w-full">
      Fillter
    </Button>
  );
}
