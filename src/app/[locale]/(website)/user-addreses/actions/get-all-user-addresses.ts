export default async function fetchAddresses() {
  try {
    const res = await fetch("/api/user-addresses");
    if (!res.ok) throw new Error("Failed to fetch addresses");
    const paylod: APIResponse<{ addresses: address[] }> = await res.json();
    return paylod;
  } catch (error) {
    throw error;
  }
}
