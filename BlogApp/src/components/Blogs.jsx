import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Blogs.css"; // optional, if you want styling

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
    setLoading(false);
  }, []);

  return (
    <div className="blogs-container">
      {loading ? (
        <p>Loading...</p>
      ) : blogs.length === 0 ? (
        <p>No blogs available. Add one!</p>
      ) : (
        blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            {blog.imageUrl && (
              <img src={blog.imageUrl} alt={blog.title} className="blog-image" />
            )}
            <Link to={`/posts/${index}`}>Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
