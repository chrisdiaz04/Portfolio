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
                            loop={2}
                            cursor
                            cursorStyle={<span className="slow-blinking-cursor">|</span>}
                            typeSpeed={150}
                            deleteSpeed={50}
                            delaySpeed={5000}
                        />
                    </h3>
                    <p>
                    I'm a design-minded developer excited to start my journey in the tech world! I love working on the frontend, creating things that look good and feel right for users. I’m also eager to dive into backend development to round out my skills and grow into a full-stack developer. I’m all about learning new things and taking on challenges, so I can build even better projects from start to finish.                    </p>
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
