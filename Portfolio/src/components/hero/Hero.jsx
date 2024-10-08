import React from "react";
import{Typewriter} from 'react-simple-typewriter'
import '../Portfolio.css'; // Import your CSS file
import Image from '../../assets/Chris.jpg'; // Adjust the relative path

function Hero() {
    return (

    <section className="hero-container">
        <div className="hero-section">
        <img className="chris-img" src={Image} alt="Profile image of Me" />
            <h1>Chris Diaz</h1>

            <div className="hero-intro">
          <h3 className="typewriter">
              <Typewriter
                words={['Frontend Developer']}
                loop={1} 
                cursor
                cursorStyle={<span className="slow-blinking-cursor">|</span>} // Apply custom cursor style
                typeSpeed={150}
                deleteSpeed={50}
                delaySpeed={2000}
              />
                </h3>
                <p>I'm a design-minded developer seeking opportunities to begin
 my journey in the tech world! While I specialize in frontend development, I'm eager to expand my skills in backend technologies with the goal of becoming a full-stack developer.</p>     
            </div>
                <div>
                    <button className="resume-btn">
                        Resume
                    </button>
                </div>
            </div>

            <div class="down-arrow"></div>


            
    </section>    
    );
}

export default Hero;

