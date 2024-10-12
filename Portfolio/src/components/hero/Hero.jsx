import React, { useState, useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter';
import '../Portfolio.css'; // Import your CSS file
import Image from '../../assets/Chris.jpg'; // Adjust the relative path

function Hero() {
    const [arrowVisible, setArrowVisible] = useState(true);

    useEffect(() => {
        const skillsSection = document.querySelector('.skills-section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setArrowVisible(false);
                    } else {
                        setArrowVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (skillsSection) {
            observer.observe(skillsSection);
        }

        return () => {
            if (skillsSection) {
                observer.unobserve(skillsSection);
            }
        };
    }, []);

    return (
        <section className="hero-container">
            {/* Social Icons */}
            <div className="social-icons">
                <a href="https://github.com/chrisdiaz04?tab=repositories" target="_blank" rel="noopener noreferrer">
                <svg className="contacts" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                <title>github [#ffffff]</title>

                <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> 
                <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#ffffff"> 
                <g id="icons" transform="translate(56.000000, 160.000000)"> 
                <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#ffffff]"> 
                </path> 
                </g> 
                </g> 
                </g> 
                </g>
            </svg>
                </a>
                <a href="https://www.linkedin.com/in/chris-diaz-137862292/" target="_blank" rel="noopener noreferrer">
                        <svg className="contacts" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#ffffff"></path>
                            <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#ffffff"></path>
                            <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#ffffff"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#ffffff"></path>
                        </svg>
                    </a>
                    <a href="mailto:diazchris27586@gmail.com">
                        <svg className="contacts" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
                            <path stroke="#ffffff" stroke-linejoin="round" stroke-width="12" d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"></path>
                        </svg>
                    </a>
                    <a href="tel:8179335811">
                        <svg className="contacts" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#ffffff"></path>
                        </svg>
                    </a>


            </div>

            <div className="hero-section">
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
                            delaySpeed={3000}
                        />
                    </h3>
                    <p>I'm a design-minded developer seeking opportunities to begin
                        my journey in the tech world! While I specialize in frontend development, 
                        I'm eager to expand my skills in backend technologies with the goal of 
                        becoming a full-stack developer.
                    </p>     
                </div>
                <div>
                    <button onClick="location.href='assets/ChrisDiaz.pdf'" className="resume-btn">
                        Resume
                    </button>
                </div>
            </div>

            {/* Dynamically hide or show the arrow */}
        </section>
    );
}

export default Hero;
