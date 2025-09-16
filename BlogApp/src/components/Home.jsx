import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-card">
        <h1 className="home-heading">📚 Blog Home</h1>

        {/* Buttons */}
        <div className="button-group">
          <Link to="/add-post" className="btn create-post-btn">
            ➕ Create Post
          </Link>
          <Link to="/posts" className="btn view-posts-btn">
            📑 All Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
