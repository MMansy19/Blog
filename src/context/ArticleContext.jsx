import { useState, createContext } from "react";
export const ArticleContext = createContext();
const ArticleContextProvider = (props) => {
  const [article, setArticle] = useState({});
  const [category, setCategory] = useState("");

  const updateArticle = (newArticle) => {
    setArticle(newArticle);
  };
  const updateCategory = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <ArticleContext.Provider
      value={{ article, updateArticle, category, updateCategory }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
};
export default ArticleContextProvider;
