import React from "react"
import Hero from "./components/hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Education from "./components/Education/Education"
import Footer from "./components/Footer/footer"


function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills />
    <Projects/>
    <Education/>
    <Footer />
    </>
  )
}

export default App;
