declare type AuthLayoutProps = {
  children: React.ReactNode;
} & Pick<RouteProps, "params">;

declare type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};
declare type SearchParams = { [key: string]: string | string[] | undefined };
