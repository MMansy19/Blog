import { debounce } from "lodash";
import Header from "../components/Header";
import ArticlesList from "../components/ArticlesList";
import { useEffect, useRef, useState } from "react";
import {
  cacheFetchedData,
  extractDataFromResponse,
  filteredArticles,
  isCacheValid,
  retrieveCachedData,
  validateResponse,
} from "../../utils";
function BlogList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const CACHE_KEY = "cachedArticles";
  const PAGE_SIZE = useRef(6);
  const searchFocus = useRef(null);

  const category = "technology";
  const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const debouncedFetch = debounce(fetchNewsData, 500);

  function handleSearchChange(newQuery) {
    PAGE_SIZE.current = 6;
    debouncedFetch(newQuery);
  }
  async function fetchNewsData(newQuery) {
    const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}&pageSize=${
      PAGE_SIZE.current
    }&country=us&category=${category}&q=${newQuery ? newQuery : ""}`;
    try {
      setError("");
      setLoading(true);
      const response = await fetch(NEWS_API_URL);
      if (!validateResponse(response)) {
        setError(response.status);
        throw new Error(`HTTP error ${response?.status}`);
      }
      const parsedData = await extractDataFromResponse(response);
      const filteredData = filteredArticles(parsedData.articles);
      setArticles(filteredData);
      cacheFetchedData(filteredData, CACHE_KEY);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  async function fetchAndCacheData() {
    try {
      PAGE_SIZE.current = 6;
      setLoading(true);
      setError(null);
      const cachedData = retrieveCachedData(CACHE_KEY);
      if (
        isCacheValid(cachedData) &&
        cachedData.articles.length <= PAGE_SIZE.current
      ) {
        const filteredData = filteredArticles(cachedData.articles);
        setArticles(filteredData);
        setLoading(false);
        return;
      }
      fetchNewsData();
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  function loadMore() {
    if (PAGE_SIZE.current <= 91) {
      PAGE_SIZE.current += 3;
      fetchNewsData();
    } else {
      throw Error("Max Load Articles");
    }
  }
  const secondQuery = localStorage.getItem("secondQuery");

  useEffect(() => {
    if (secondQuery && secondQuery !== "") {
      searchFocus.current.focus();
      handleSearchChange(secondQuery);
      localStorage.removeItem("secondQuery");
    }
    fetchAndCacheData();
  }, []);

  return (
    <div className="px-4 sm:px-8 lg:px-40 w-full">
      <Header
        handleSearchChange={handleSearchChange}
        searchFocus={searchFocus}
      />
      <ArticlesList
        articles={articles}
        loading={loading}
        error={error}
        fetchAndCacheData={fetchAndCacheData}
        category={category}
        loadMore={loadMore}
      />
    </div>
  );
}

export default BlogList;
