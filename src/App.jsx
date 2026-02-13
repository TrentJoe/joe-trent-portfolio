import React from 'react'
import './styles/main.css'
import Profile from './sections/Profile'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Contact from './sections/Contact'
import Achievements from './sections/Achievements'

function App() {

  return (
    <>
      <div>
        <Profile />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Education  />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Achievements />
      </div>
      <div>
        <Contact />
      </div>
    </>  
  )
}

export default App
