import React, { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../Portfolio.css'; // Import your CSS file
import Image from '../../assets/Chris.jpg'; // Adjust the relative path

function Hero() {
    const [showArrow, setShowArrow] = useState(true); // State to control arrow visibility
    const targetRef = useRef(null); // Reference to the target component

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // If the target component is in view, hide the arrow
                        setShowArrow(true);
                    } else {
                        // If the target component is not in view, show the arrow
                        setShowArrow(false);
                    }
                });
            },
            { threshold: 1 } // Trigger when 10% of the target is in view
        );

        // Observe the target component
        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        // Clean up the observer on component unmount
        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, []);

    return (
        <section className="hero-container">
            <div className="hero-section" ref={targetRef}>
                <img className="chris-img" src={Image} alt="Profile image of Me" />
                <h1>Chris Diaz</h1>

                <div className="hero-intro">
                    <h3 className="typewriter">
                        <Typewriter
                            words={['Frontend Developer']}
                            loop={1}
                            cursor
                            cursorStyle={<span className="slow-blinking-cursor">|</span>}
                            typeSpeed={150}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </h3>
                    <p>
                        I'm a design-minded developer seeking opportunities to begin my journey in the tech world! While I specialize in frontend development, I'm eager to expand my skills in backend technologies with the goal of becoming a full-stack developer.
                    </p>
                </div>

                <div>
                    <button className="resume-btn">Resume</button>
                </div>
            </div>

            {/* Conditional rendering for the down arrow */}
            {showArrow && <div className="down-arrow"></div>}
        </section>
    );
}

export default Hero;
