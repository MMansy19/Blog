import BlogList from "./app/BlogList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import SingleArticle from "./app/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<BlogList />} />
        <Route path="article/:id" element={<SingleArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
