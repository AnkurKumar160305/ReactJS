import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">BlogApp</div>
        <div className="buttons">
          <Link to="/" className="btn home-btn">Home</Link>
          <Link to="/add-post" className="btn create-post-btn">
            ➕ Create Post
          </Link>
          <Link to="/posts" className="btn view-posts-btn">
            📑 All Posts
          </Link>
        </div>
    </div>
  )
}

export default Navbar
