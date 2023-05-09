// import "./App.css";
import "./sass/styles.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import PostSpecificPage from "./components/post-specific/PostSpecificPage";
import PostsPage from "./components/posts/PostsPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/posts" element={<PostsPage />} />
      <Route exact path="/posts/:id" element={<PostSpecificPage />} />
    </Routes>
  );
}

export default App;
