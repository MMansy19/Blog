import ArticlesGrid from "./ArticlesGrid";

function ArticlesList(props) {
  const { fetchAndCacheData, articles, loading, error, category, loadMore } =
    props;
  return (
    <ArticlesGrid
      articles={articles}
      loading={loading}
      error={error}
      fetchAndCacheData={fetchAndCacheData}
      category={category}
      loadMore={loadMore}
    />
  );
}

export default ArticlesList;
