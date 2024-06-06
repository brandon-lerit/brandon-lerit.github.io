import React from 'react';
import { Link } from "react-router-dom";
import '../styles/navbar.css'
import CatImg from '../images/cat.png'

function Navbar() {
    return (
    <div className = "navbar">
        <div className = "top-bar">
            <Link to="/">
                <img className = "logo" src = { CatImg } alt = "picture of cat" />
            </Link>
            <div id = "hamburger" className = "hidden"><i className = "fa-solid fa-bars"></i></div>
        </div>
        <ul className = "links">
            <li>
                <a href = "#projects" className = "link-text">Projects</a>
            </li>

            <li>
                <Link to="/about" className = "link-text">About</Link>
            </li>

            <li>
                <a href = "https://drive.google.com/file/d/1cdpdckcgDuCb_fZTUGZWvrdLr0lWWUk7/view?usp=sharing" target="_blank" className = "link-text">
                  Resume
                </a>
            </li>
          </ul>
      </div>
    );
  }
  
export default Navbar;