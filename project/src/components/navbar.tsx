import React from 'react';
import { Link } from "react-router-dom";
import '../styles/navbar.css'
import CatImg from '../images/cat.png'

function Navbar() {
    return (
        <div className = "navbar">
            <div className = "top-bar">
                <Link to="/" className = "home-link">Home</Link>
            </div>
            <div className = "links">
                <a href = "/#projects" className = "link-text">Projects</a>
                <Link to="/about" className = "link-text">About</Link>
                <a href = "https://drive.google.com/file/d/1cdpdckcgDuCb_fZTUGZWvrdLr0lWWUk7/view?usp=sharing" target="_blank" className = "link-text">
                    Resume
                </a>
            </div>
        </div>
    );
  }
  
export default Navbar;