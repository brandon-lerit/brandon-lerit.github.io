import React from 'react';
import '../styles/navbar.css'

function Navbar() {
    return (
    <div id = "home" className = "navbar">
        <div className = "top-bar">
            <img className = "logo" src = "images/cat.svg" alt = "cat" />
            <div id = "hamburger" className = "hidden"><i className = "fa-solid fa-bars"></i></div>
        </div>
        <ul className = "links">
            <li>
                <a href = "#about">About</a>
            </li>
      
            <li>
                <a href = "#experience">Experience</a>
            </li>
      
            <li>
                <a href = "#projects">Projects</a>
            </li>
      
            <li>
                <a href = "#contact">Contact</a>
            </li>
            <li>
                <a href = "https://drive.google.com/file/d/1bgvXygLQ3vmE_P_KB0Vopqlwwxon-yRG/view?usp=drive_link" target="_blank">
                  Resume
                </a>
            </li>
          </ul>
      </div>
    );
  }
  
export default Navbar;