import React, { useState, useEffect } from 'react';
import "./AddBlog.css";

const AddBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = { title, content, imageUrl };

    setBlogs([...blogs, newBlog]);
    console.log('Blog added:', newBlog);

    // Clear form
    setTitle('');
    setContent('');
    setImageUrl('');
  };

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  return (
    <div className="add-blog-container">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit} className="blog-form">
        
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-btn">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
