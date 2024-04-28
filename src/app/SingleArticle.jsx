import Header from "../components/Header";
import useArticle from "../hooks/useArticle";
import { useNavigate } from "react-router-dom";

import ArticleContent from "../components/ArticleContent";
function SingleArticle() {
  const { article, category } = useArticle();
  const navigate = useNavigate();
  const handleSearchChange = (secondQuery) => {
    localStorage.setItem("secondQuery", secondQuery);
    navigate("/");
  };
  return (
    <div className="px-4 sm:px-8 lg:px-40 w-full">
      <Header handleSearchChange={handleSearchChange} />
      <article className=" my-0 mx-auto max-w-3xl px-4 mb-6">
        <div className="mb-4 text-xs  ">
          <p
            className="relative z-10 rounded-md text-white px-2.5 py-1 font-medium bg-[#4B6BFB]
          hover:bg-[#3855d3] text-sm w-fit cursor-pointer"
          >
            {category}
          </p>
        </div>
        <div className="relative h-full mb-5">
          <h1 className="mt-3 text-4xl font-semibold  text-gray-900 group-hover:text-gray-600">
            <p to={`article/${article.title}`}>{article.title}</p>
          </h1>
        </div>
        <ArticleContent article={article} />
      </article>
    </div>
  );
}

export default SingleArticle;
