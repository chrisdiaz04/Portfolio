import React from "react";
import '../Portfolio.css'; // Import your CSS file
import Image from '../../assets/Chris.jpg'; // Adjust the relative path

function Hero() {
    return (

    <section className="hero-container">
        <div className="hero-section">
        <img className="chris-img" src={Image} alt="Profile image of Me" />
            <h1>Chris Diaz</h1>

            <div className="hero-intro">
                <h3>FrontEnd Developer</h3>
                <p>I'm a design-minded developer seeking opportunities to begin
 my journey in the tech world! While I specialize in frontend development, I'm eager to expand my skills in backend technologies with the goal of becoming a full-stack developer.</p>     
            </div>
                <div>
                    <button className="resume-btn">
                        Resume
                    </button>
                </div>
            </div>
    </section>    
    );
}

export default Hero;


//I'm a design minded developer who is seeking oppurtinities to start in the developer world! My primary expertiese is frontend but would love to work with Backend and aim to become a Fullstack Developer.