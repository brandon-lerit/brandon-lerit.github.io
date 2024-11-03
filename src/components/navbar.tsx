import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar">
            <div className="top-bar">
                <Link to="/" className="home-link">Home</Link>
                <div className="menu-icon" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
            <div className = "links">
                <a href = "/#projects" className = "link-text">Projects</a>
                <Link to="/about" className = "link-text">About</Link>
                <a href = "https://drive.google.com/file/d/1pJM_w0ibJRqy2bRzOB1a8GDF2HpTLidg/view?usp=sharing" target="_blank" className = "link-text">
                    Resume
                </a>
            </div>
            <div className={`links-modal ${menuOpen ? 'active' : ''}`}>
                <div className="close-icon" onClick={toggleMenu}>
                    <FaTimes />
                </div>
                <a href="/#projects" className="link-text" onClick={toggleMenu}>Projects</a>
                <Link to="/about" className="link-text" onClick={toggleMenu}>About</Link>
                <a href="https://drive.google.com/file/d/19Aqu4ygBqqP4ye_8QRAIdiIPxb4OiznV/view?usp=drive_link" target="_blank" className="link-text" onClick={toggleMenu}>Resume</a>
            </div>
        </div>
    );
}

export default Navbar;