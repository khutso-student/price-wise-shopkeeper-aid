const API_BASE = "http://localhost:4000"; // Make sure backend is running

export async function getRecentPrices() {
  const res = await fetch(`${API_BASE}/prices`);
  if (!res.ok) throw new Error("Failed to fetch prices");
  return res.json();
}
