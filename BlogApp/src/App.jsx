import { useState, useEffect } from "react";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";
import AddBlog from "./components/AddBlog";
import "./App.css";
// import {ReactRouter, Routes, Route} from "react-router-dom";

function App() {
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);

  const main = async () => {
  };

  useEffect(() => {
    main();
  }, []);


//   Pages: Home, Posts, Post Detail, Add Post.
// Use react-router-dom for routing.
// Controlled forms + validation.
  return (
    <>
      <h1 className="main-heading">News App</h1>
      <div className="news-container">
        <AddBlog></AddBlog>
      </div>
    </>
  );
}

export default App;
