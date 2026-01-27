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

declare type APIResponse<T> = SuccessfullResponse<T> | ErrorResponse;
