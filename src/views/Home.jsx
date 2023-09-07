import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Characters from '../components/Characters';

function Home() {
  console.log("it works");
  return (
    <div>
      <Navbar/>
      <h1>Rick and Morty Page</h1>
      <Characters/>
      <Footer/>
    </div>
  )
}

export default Home