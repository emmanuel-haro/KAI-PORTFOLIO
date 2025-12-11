const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchPortfolio = async () => {
  const res = await fetch(`${API_BASE}/api/portfolio`, {
    headers: {
      "Content-Type": "application/json",
      ...(API_KEY ? { "x-api-key": API_KEY } : {}),
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to load portfolio: ${res.status}`);
  }

  return res.json();
};

