import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogDetails.css";


const BlogDetails = () => {
  const { id } = useParams(); // get ":id" from URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const selectedBlog = storedBlogs[id]; // since you're using index as ID
    setBlog(selectedBlog);
  }, [id]);

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
    <div className="blog-details">
      <h1 className="blog-title">{blog.title}</h1>
      <p className="blog-content">{blog.content}</p>
      {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} className="blog-img" />}
      <br />
      <Link to="/posts" className="back-blogs">⬅ Back to Blogs</Link>
    </div>
  );
};

export default BlogDetails;
