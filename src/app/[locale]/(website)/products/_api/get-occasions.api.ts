export const getOccasions = async ({ pageParam = 1 }) => {
  try {
    const res = await fetch(`/api/occasions?page=${pageParam}`);

    const payload: APIResponse<PaginatedResponse<OccasionsResponse>> =
      await res.json();

    if (!res.ok || (payload as ErrorResponse).error) {
      throw new Error(
        (payload as ErrorResponse).error ||
          "Something went wrong, try again later from",
      );
    }

    return payload as PaginatedResponse<SuccessfullResponse<OccasionsResponse>>;
  } catch (err) {
    throw err;
  }
};
