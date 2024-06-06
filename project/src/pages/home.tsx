import React from 'react'
import Navbar from '../components/navbar'
import '../styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Avatar from '../images/avatartion.png'

function Home() {
    return (
      <>
        < Navbar />
        <div className = "home">
          <div className = "home-text">
            <p className = "intro">
              Hi, I'm Brandon!
            </p>

            <p className = "body">
              A Software Developer and student at <span className="redword">Cornell University</span> with a passion for developing 
              and designing intuitive & impactful technologies.
            </p>

            <p className = "body">
              Currently a Developer for <span className="blueword">Hack4Impact</span> & a Software Engineer Intern for the <span className="strong">Cornell SC Johnson School of Business.</span>
            </p>

            <div className = "home-links">
              <a href="mailto:bsl77@cornell.edu" target="_blank"><FontAwesomeIcon icon={faEnvelope} className = "home-icon"/></a>
              <a href="https://www.linkedin.com/in/brandonlerit/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className = "home-icon"/></a>
              <a href="https://github.com/brandon-lerit" target="_blank"><FontAwesomeIcon icon={faGithub} className = "home-icon"/></a>
            </div>
          </div>
          <div className = "home-img">
            <img className = "avatar" src = { Avatar } alt = "image"></img>
          </div>
        </div>
      </>
    );
  }
  
  export default Home;