import React from 'react'
import './app.css' 
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Popular from './Components/Popular/Popular'
import Blog from './Components/Blog/Blog'
import Offers from './Components/Offers/Offers'
import About from './Components/About/About'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Popular/>
    {/* <Offers/>
    <About/>
    <Blog/>  */}
    
    
    
    </>
  )
}

export default App