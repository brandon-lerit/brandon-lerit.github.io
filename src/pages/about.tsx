import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/about.css'

function Home() {
    return (
      <>
        < Navbar />
          <div className = "about">
            <h2 className = "project-head fade-in">About Me</h2>
          </div>
        < Footer />
      </>
    );
  }
  
  export default Home;