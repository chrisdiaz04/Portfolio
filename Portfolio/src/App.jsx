import React from "react"
import Hero from "./components/hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Education from "./components/Education/Education"
import Footer from "./components/Footer/footer"
import Contact from "./components/Contact/Contact"


function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills />
    <Projects/>
    <Education/>
    <Contact />
    <Footer />
    </>
  )
}

export default App;
