import { useContext } from "react";
import { ArticleContext } from "../context/ArticleContext"; // Assuming ArticleContext is defined elsewhere

const useArticle = () => {
  const { article, updateArticle, category, updateCategory } =
    useContext(ArticleContext);
  const setArticle = (newUserData) => {
    updateArticle(newUserData);
  };
  const setCategory = (newCategory) => {
    updateCategory(newCategory);
  };

  return { article, setArticle, category, setCategory };
};

export default useArticle;
