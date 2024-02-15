import { useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import Foovies from './components/Foovies'
import Droovies from './components/Droovies'
import Seriment from './components/Seriment'
import FooviesRecipes from './components/FooviesRecipes'
import Error from './components/Error'
import Footer from './components/Footer'




function App() {



  return (
    <>
      <NavBar />
      
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="foovies" element={<Foovies/>} />
            <Route path="fooviesrecipes/:" element={<FooviesRecipes/>} />
            <Route path="droovies" element={<Droovies/>} />
            <Route path="seriment" element={<Seriment/>} />
            
            <Route path="*" element={<Error/>} />
            
            
          
            
            
          </Routes>

          <Footer />
    </>
  )
}

export default App

// Mothership command console OR the virgin Maria console
