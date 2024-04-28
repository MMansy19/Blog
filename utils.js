const CACHE_EXPIRATION_TIME = hoursToMilliseconds(1);
export function filteredArticles(data) {
  return data?.filter((article) => {
    if (article?.urlToImage !== null) {
      return article?.urlToImage?.trim() !== ""; // Combine remaining checks
    } else {
      return false; // Exclude articles with null urlToImage
    }
  });
}
export function hoursToMilliseconds(hours) {
  const MILLISECONDS_PER_HOUR = 3600000;
  return hours * MILLISECONDS_PER_HOUR;
}
export function validateResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP error ${response?.status}`);
  }
  return response.ok;
}
export function isCacheValid(cachedData) {
  if (!cachedData) {
    return false;
  }

  try {
    return !isCacheExpired(cachedData);
  } catch (error) {
    console.error("Error parsing cached data:", error);
    return false;
  }
}
export function isCacheExpired(parsedData) {
  return Date.now() - parsedData.timestamp > CACHE_EXPIRATION_TIME;
}
export function handleApiErrors(result) {
  if (result.error) {
    console.error("API error:", result.error);
    throw new Error("Failed to fetch posts");
  }
}
export async function extractDataFromResponse(response) {
  const result = await response.json();
  handleApiErrors(result);
  return result;
}
export function cacheFetchedData(parsedData, CACHE_KEY) {
  localStorage.setItem(
    CACHE_KEY,
    JSON.stringify({ articles: parsedData, timestamp: Date.now() })
  );
}
export function retrieveCachedData(CACHE_KEY) {
  const cachedData = JSON.parse(localStorage.getItem(CACHE_KEY));
  return cachedData;
}
