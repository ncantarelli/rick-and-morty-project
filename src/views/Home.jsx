import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Characters from '../components/Characters';

function Home() {
  console.log("it works");
  return (
    <>
      <Navbar/>
      <h1 className='title'>Rick and Morty Page</h1>
      <Characters/>
      <Footer/>
    </>
  )
}

export default Home