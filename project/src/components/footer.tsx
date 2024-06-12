import React from 'react';
import '../styles/footer.css'
import Avatar from '../images/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div id = "footer">
            <div className="footer-box">
                <div className="left-footer">
                    <img src = { Avatar } alt = "avatar"></img>
                    <p>Thanks For Visiting!</p>
                </div>
                <div className="right-footer">
                    <div className="footer-links">
                        <a href="mailto:bsl77@cornell.edu" target="_blank"><FontAwesomeIcon icon={faEnvelope} className = "gmail-f"/></a>
                        <a href="https://www.linkedin.com/in/brandonlerit/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className = "linkedin-f"/></a>
                        <a href="https://github.com/brandon-lerit" target="_blank"><FontAwesomeIcon icon={faGithub} className = "github-f"/></a>
                    </div>
                    <div className="copyright">
                        <p>© 2024 Brandon Lerit</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
export default Footer;