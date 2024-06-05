import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavBar.css"


function NavBar(){
  return (
    <nav className="navbar">
      <Link to="/">Book Search</Link>
      <Link to="/bookshelf">My Bookshelf</Link>
    </nav>
  );
};

export default NavBar;
