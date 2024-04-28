// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ArticleContextProvider from "./context/ArticleContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ArticleContextProvider>
    <App />
  </ArticleContextProvider>
);
