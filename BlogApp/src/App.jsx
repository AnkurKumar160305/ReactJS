import { useState, useEffect } from "react";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";
import AddBlog from "./components/AddBlog";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);

  const main = async () => {
    // fetch or init logic if needed
  };

  useEffect(() => {
    main();
  }, []);

  //   Pages: Home, Posts, Post Detail, Add Post.
  //   Use react-router-dom for routing.
  //   Controlled forms + validation.
  return (
    <BrowserRouter>
        <Navbar />
      <h1 className="main-heading">News App</h1>
      <div className="news-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Blogs />} />
          <Route path="/posts/:id" element={<BlogDetails />} />
          <Route path="/add-post" element={<AddBlog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
