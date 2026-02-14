import { usePathname, useRouter } from "@/src/i18n/navigation";
import { useSearchParams } from "next/navigation";

export const useQueryParams = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Creating mutable searhparams
  const mutableSearchParams = new URLSearchParams(searchParams);

  // Get search param value of given key
  const getSearchParam = (key: string) => searchParams.get(key);

  // Set the value
  const setSearchParam = (key: string, value: string) => {
    mutableSearchParams.set(key, value);
  };

  // Remove the value
  const deleteSearchParam = (key: string) => {
    mutableSearchParams.delete(key);
  };

  // Apply search param by navigate
  const navigate = () =>
    router.push(`${pathname}?${mutableSearchParams.toString()}`);

  return { navigate, getSearchParam, setSearchParam, deleteSearchParam };
};
