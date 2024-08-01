import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/about.css'
import Avatar from '../images/avatar.png'
import Book from '../images/acok.jpg'
import Album from '../images/okc.jpg'
import Game from '../images/pkmcq.jpg'
import Snivy from '../images/snivy.png'

function Home() {
    return (
      <>
        < Navbar />
        <div className = "about">
          <div className="about-intro">

            <div className="about-img">
              <img className="avatar" src={Avatar} alt="avatar"/>
            </div>

            <div className="about-text">
              <h2>Hi, I'm Brandon!</h2>
              <p>Hey mama</p>
            </div>

          </div>

          <div className="things">

            <div className="thing-row1">
              <div className="thing">
                <p className="thing-text">Current Read..</p>
                <img className="thing-img" src={Book} alt="A Clash Of Kings Book" width={"300px"}/>
              </div>

              <div className="thing">
                <p className="thing-text">Current Playthrough..</p>
                <img className="thing-img" src={Game} alt="Pokemon Conquest Game" width={"300px"}/>
              </div>

              <div className="thing">
                <p className="thing-text">Current Playlist..</p>
            
              </div>
            </div>

            <div className="thing-row2">
              <div className="thing">
                <p className="thing-text">Favorite Album</p>
                <img className="thing-img" src={Album} alt="OK Computer Album" width={"300px"}/>
              </div>

              <div className="thing">
                <p className="thing-text">Favorite Pokemon</p>
                <img className="thing-img" src={Snivy} alt="Snivy" width={"300px"}/>
              </div>
            </div>
              
          </div>

        </div>
        < Footer />
      </>
    );
  }
  
  export default Home;