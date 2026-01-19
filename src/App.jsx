import React from 'react'
import './styles/main.css'
import Profile from './sections/Profile'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Contact from './sections/Contact'

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
        <Experience />
      </div>
      <div>
        <Education  />
      </div>
      <div>
        <Contact />
      </div>
    </>  
  )
}

export default App
