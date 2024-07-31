import React, { useEffect, useRef } from 'react'
import Navbar from '../components/navbar'
import '../styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faComputer, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Avatar from '../images/avatars.png'
import Projects from '../components/projects'
import Footer from '../components/footer'
import { motion, useAnimation } from 'framer-motion';
import { animated } from 'react-spring';

function Home() {
    const avatarAnimation = useAnimation();

    const handleAvatarAnimation = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        await avatarAnimation.start({
            y: 0,
            opacity: 1,
            transition: { type: 'spring', duration: 2 },
        });
    };

    React.useEffect(() => {
        handleAvatarAnimation();
    }, []);

    return (
      <>
        < Navbar />
        <div className = "home">
          <div className="home-text fade-in">
            <p className = "intro">
              Hi, I'm Brandon! <FontAwesomeIcon icon={faComputer} className = "title-icon" />
            </p>

            <p className = "body">
              I'm an aspiring<span className="purpleword"> Software Engineer</span> and student at 
              <span className="redword"> Cornell University</span> with a passion for 
              <span className="italic"> designing</span>and <span className="italic"> developing</span> 
              intuitive and impactful applications.
            </p>

            <div className = "home-links">
              <a href="mailto:bsl77@cornell.edu" target="_blank"><FontAwesomeIcon icon={faEnvelope} className = "gmail"/></a>
              <a href="https://www.linkedin.com/in/brandonlerit/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className = "linkedin"/></a>
              <a href="https://github.com/brandon-lerit" target="_blank"><FontAwesomeIcon icon={faGithub} className = "github"/></a>
            </div>
          </div>
          <animated.div className="home-img">
            <motion.img className="avatar" src={Avatar} alt="image" animate={avatarAnimation} initial={{ y: 100, opacity: 0 }}/>
          </animated.div>
        </div>
        <a href = '#projects' className = "arrow-link fade-in">
          <FontAwesomeIcon icon={faArrowDown} className = "arrow"/>
          <p className = "arrow-text">See Projects</p>
          <FontAwesomeIcon icon={faArrowDown} className = "arrow"/>
        </a>
        < Projects />
        < Footer />
      </>
    );
  }
  
  export default Home;