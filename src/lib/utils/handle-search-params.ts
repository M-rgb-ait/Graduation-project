export function searchParamsToString(params: SearchParams = {}) {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (!value) return;

    if (Array.isArray(value)) {
      value.forEach((val) => searchParams.append(key, val));
    } else {
      searchParams.append(key, value);
    }
  });

  return searchParams.toString();
}
