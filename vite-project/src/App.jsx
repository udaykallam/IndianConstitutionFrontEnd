import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetails from "./components/ArticleDetails";
import QuizzesPage from "./pages/QuizzesPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/articles/:id" element={<ArticleDetails />} />
      <Route path="/quizzes" element={<QuizzesPage />} />
    </Routes>
  </Router>
);

export default App;
