import React from 'react';
import './Blog.css'

const Blog = ({title,image,content}) => {
  return (
    <div className="news-card">
        <h2 className="title">{title}</h2>
        {image && (
          <img src={image} alt={title} className="image"/>
        )}
        <p className="content">{content ? content.slice(0, 150) + "..." : "No content available"}</p>
    </div>
  )
}

export default Blog;
