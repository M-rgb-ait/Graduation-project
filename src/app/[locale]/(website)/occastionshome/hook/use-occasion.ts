import { useQuery } from "@tanstack/react-query";
import GetAllOccastions from "../_api/get-all-name";

export default function useOccasion() {
  const { isPending, data } = useQuery({
    queryKey: ["occasion"],
    queryFn: GetAllOccastions,
  });
  return { isPending, data };
}
