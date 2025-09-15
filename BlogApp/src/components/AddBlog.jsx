import React, { useState } from 'react';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      title,
      content,
      imageUrl
    };

    console.log('New Blog:', newBlog);

    // Clear form
    setTitle('');
    setContent('');
    setImageUrl('');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            style={{ width: '100%', height: '100px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>

        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
