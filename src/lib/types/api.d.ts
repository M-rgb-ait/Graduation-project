// declare type ErrorResponse = {
//   error: string;
// };
// declare type APIResponse<T> = SuccessfullResponse<T> | ErrorResponse;
// declare type SuccessfullResponse<T> = {
//   message: string;
// } & T;
declare type ErrorResponse = {
  error: string;
};

declare type SuccessfullResponse<T> = {
  message: string;
} & T;
declare type PaginatedResponse<T> = {
  metadata: ApiMetadata;
} & T;
declare type Metadata = {
  totalPages: number;
  totalItems: number;
  currentPage: number;
  limit: number;
};
declare type APIResponse<T> = SuccessfullResponse<T> | ErrorResponse;
