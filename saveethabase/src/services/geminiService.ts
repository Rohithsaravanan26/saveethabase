export async function getAcademicInsight(query: string) {
  if (!import.meta.env.VITE_GEMINI_API_KEY) return null;

  // Placeholder (move to server later)
  return {
    summary: `AI insight for ${query}`
  };
}
