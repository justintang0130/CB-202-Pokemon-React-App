import { useState, useEffect } from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PokemonPage from './pages/PokemonPage'

function App() {
  return (
    <Routes>
        {/* Home page route */}
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/about" element = {<AboutPage />} />
        <Route path = "/pokemon/:name" element = {<PokemonPage />} />
    </Routes>
  )  
}

export default App
