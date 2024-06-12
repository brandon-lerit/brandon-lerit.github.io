import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import '../styles/about.css'

function Home() {
    return (
      <>
        < Navbar />
        <div className = "about">
          About
        </div>
        < Footer />
      </>
    );
  }
  
  export default Home;