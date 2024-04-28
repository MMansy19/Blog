import Article from "./Article";
import LoadingCard from "./LoadingCard";

const ArticlesGrid = ({
  articles,
  loading,
  error,
  getData,
  category,
  loadMore,
}) => {
  const gridClasses = `grid max-w-2xl grid-cols-1 mx-auto mt-10  gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none`;
  const renderLoading = () => (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </div>
  );

  const renderError = () => (
    <div className="flex flex-col items-center justify-center h-48 grid-cols-1 gap-4 text-red-500">
      <p>{error}</p>
      <button
        onClick={getData}
        className="px-6 py-2 text-white rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        Retry
      </button>
    </div>
  );

  const renderArticles = () => (
    <div className="flex flex-col items-center justify-center mb-8 max-w-7xl">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {articles.map((article) => (
          <Article article={article} key={article?.title} category={category} />
        ))}
      </div>
      <button
        onClick={loadMore}
        type="button"
        className="rounded-md px-5 py-3 mt-8 shadow hover:shadow-md active:shadow-inner transition
        hover:bg-gray-50 border text-[#696A75] "
      >
        Load more
      </button>
    </div>
  );

  return (
    <div className={gridClasses}>
      {loading
        ? renderLoading()
        : error
        ? renderError(error)
        : renderArticles()}
    </div>
  );
};
export default ArticlesGrid;
