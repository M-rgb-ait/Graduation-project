import SearchResults from "./SearchResults";

type Props = {
  searchParams: Promise<{ query?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { query = "" } = await searchParams;

  return <SearchResults search={query} />;
}
