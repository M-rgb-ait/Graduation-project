export const getcategories = async ({ pageParam = 1 }) => {
  try {
    const res = await fetch(`/api/categories?page=${pageParam}`);
    const payload: APIResponse<PaginatedResponse<CategorysResponse>> =
      await res.json();
    if (!res.ok || (payload as ErrorResponse).error) {
      throw new Error(
        (payload as ErrorResponse).error ||
          "Something went wrong, try again later from",
      );
    }
    return payload as PaginatedResponse<SuccessfullResponse<CategorysResponse>>;
  } catch (err) {
    throw err;
  }
};
