import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Title from './components/Title'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Title />
      <Hero />
      <Main />
      <Footer />
    </>
  )
}

export default App

// Mothership command console OR the virgin Maria console
