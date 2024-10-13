import React, { useState, createContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/footer";
import Contact from "./components/Contact/Contact";
import Gap from "./components/Gap/Gap";

export const ThemeContext = createContext(null);

function App() {
  // Start with dark mode by default
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Apply the theme to the root div */}
      <div data-theme={theme}>
        <Navbar />
        <Hero />
        <Gap />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
