import React from 'react'
import Navbar from '../components/navbar'
import '../styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faAngleDown, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Avatar from '../images/avatars.png'
import Projects from '../components/projects'
import Footer from '../components/footer'

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
              Currently Developer for <span className="blueword">Hack4Impact</span> & Software Engineer Intern for the <span className="strong">Cornell SC Johnson School of Business.</span>
            </p>

            <div className = "home-links">
              <a href="mailto:bsl77@cornell.edu" target="_blank"><FontAwesomeIcon icon={faEnvelope} className = "gmail"/></a>
              <a href="https://www.linkedin.com/in/brandonlerit/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className = "linkedin"/></a>
              <a href="https://github.com/brandon-lerit" target="_blank"><FontAwesomeIcon icon={faGithub} className = "github"/></a>
            </div>
          </div>
          <div className = "home-img">
            <img className = "avatar" src = { Avatar } alt = "image"></img>
          </div>
        </div>
        <a href = '#projects' className = "arrow-link">
          <FontAwesomeIcon icon={faArrowDown} className = "arrow"/>
          <p className = "arrow-text">Selected Work</p>
          <FontAwesomeIcon icon={faArrowDown} className = "arrow"/>
        </a>
        < Projects />
        < Footer />
      </>
    );
  }
  
  export default Home;