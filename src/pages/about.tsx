import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/about.css'
import Avatar from '../images/avatar.png'
import Book from '../images/acok.jpg'
import Album from '../images/okc.jpg'
import Game from '../images/pkmcq.jpg'
import Snivy from '../images/snivy.png'
import { motion } from 'framer-motion';

function Home() {
    return (
      <>
        < Navbar />
        <div className = "about">
          <motion.div 
            className = "about-intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >

            <div className="about-img">
              <img className="avatar" src={Avatar} alt="avatar"/>
            </div>

            <div className="about-text">
              <h2>Hi, I'm Brandon!</h2>
              <p>
                I am a junior at Cornell University studying Information Science pursuing a double concentration 
                in Data Science & User Experience (UX), and a minor in Computer Science.
              </p>
              <p>
                Currently, I am working as a Software Engineer Intern at the Cornell SC Johnson College of Business, and
                developing for the Cornell Chapter of Hack4Impact, where we collaborate with nonprofit organizations to 
                create genuine social impact through the use of technology.
              </p>
              <p>
                My passion is to leverage software to create a positive impact both locally and globally. I aim to find 
                the intersection of social impact and software engineering, and combine them to develop solutions that 
                benefit everyone.
              </p>
              <p>
                When I am not coding, you can find me reading fantasy books, collecting trinkets, and expanding my CD 
                collection.
              </p>
            </div>

          </motion.div>

          {/* <motion.div 
            className = "things"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >

            <div className="thing-row1">
              <div className="thing">
                <img className="thing-img" src={Book} alt="A Clash Of Kings Book" width={"300px"}/>
                <p className="thing-text">Currently Reading</p>
              </div>

              <div className="thing">
                <img className="thing-img" src={Game} alt="Pokemon Conquest Game" width={"300px"}/>
                <p className="thing-text">Currently Playing</p>
              </div>

              <div className="thing">

                <p className="thing-text">Currently Watching</p>
              </div>
            </div>

            <div className="thing-row2">
              <div className="thing">
                <p className="thing-text">Current Playlist..</p>
              </div>
            </div>
              
          </motion.div> */}

        </div>
        < Footer />
      </>
    );
  }
  
  export default Home;