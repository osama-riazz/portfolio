import React from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

const App = () => {
  return (
    <div id='home'>

      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App