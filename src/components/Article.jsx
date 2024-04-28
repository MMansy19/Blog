import { useNavigate } from "react-router-dom";
import user from "../assets/user.svg";
import useArticle from "./../hooks/useArticle";
function Article({ article, category }) {
  const { setArticle, setCategory } = useArticle();
  const navigate = useNavigate();
  const handleSingleArticle = () => {
    setArticle(article);
    setCategory(category);
    navigate(`article/${article?.title}`);
  };
  return (
    <article
      className="flex flex-col justify-around max-w-xl p-4 border shadow-sm rounded-xl cursor-pointer hover:bg-gray-50 hover:shadow-md transition"
      onClick={handleSingleArticle}
    >
      <div className=" h-fit">
        <img
          src={article?.urlToImage}
          alt="article image"
          className="object-cover w-full h-48 rounded-md"
        />
      </div>
      <div className="mt-4 text-xs h-fit">
        <p
          className="relative z-10 rounded-md bg-gray-100 px-2.5 py-1 font-medium text-[#4B6BFB]
          hover:bg-gray-200 text-sm w-fit"
        >
          {category}
        </p>
      </div>
      <div className="relative h-fit ">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          {/* <span className="absolute inset-0" /> */}
          {article?.title}
        </h3>
      </div>
      <div className="relative flex items-center mt-4 gap-x-4 text-[#97989F] leading-6 font-medium">
        <div className="relative flex items-center gap-x-4">
          <img
            src={user}
            alt=""
            className="w-10 h-10 rounded-full bg-gray-50"
          />
          <p className="text-sm leading-6 ">
            <a href={article?.url} target="_blank">
              <span className="absolute inset-0" />
              {article?.author ? article?.author : article?.source?.name}
            </a>
          </p>
        </div>
        <div className="">
          {new Date(article?.publishedAt).toLocaleDateString()}
        </div>
      </div>
    </article>
  );
}

export default Article;
