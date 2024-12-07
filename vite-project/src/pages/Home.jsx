import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Indian Constitution Awareness</h1>
    <nav>
      <Link to="/articles">Articles</Link> | <Link to="/quizzes">Quizzes</Link>
    </nav>
  </div>
);

export default Home;
