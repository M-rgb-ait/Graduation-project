export default async function GetAllOccastions() {
  try {
    const response = await fetch("/api/occasions");
    const payload = await response.json();
    if (!response.ok || (payload as ErrorResponse).error) {
      throw new Error(
        (payload as ErrorResponse).error ||
          "Something went wrong, try again later from",
      );
    }

    return payload as SuccessfullResponse<OccasionsResponse>;
  } catch (err) {
    throw err;
  }
}
