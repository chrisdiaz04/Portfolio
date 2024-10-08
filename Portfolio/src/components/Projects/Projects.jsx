import React from "react";
import Image from '../../assets/Algo-visual.png'; // Adjust the relative path
import withScrollAnimation from "../withScrollAnimation";

function Projects() {
    return (
        <section className="Projects-section">
            <h1>Projects</h1>

            <div className="project-card">
                <article className="project">
                    <img className="Algo" src={Image} alt="Photo of website" />
                </article>
                <h2 className="project-card-heading">Algorithm Visualizer</h2>
                <p>
                    The Algorithm Visualizer is an interactive tool that demonstrates how various algorithms work step-by-step. It uses real-time visualizations to simplify complex concepts,
                    helping users understand sorting, searching, and more through dynamic animations.
                </p>
                <div className="icon-container">
                    <svg
                        className="icons"
                        width="256px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => window.open('https://66da5e2e19010d77c2662ca7--clinquant-tapioca-3a351a.netlify.app/', '_blank')}
                        style={{ cursor: 'pointer' }}
                    >
                        <path
                            d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                            stroke="#ffffff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>

            <div className="project-card">
                <article className="project">
                    <img className="Algo" src={Image} alt="Photo of website" />
                </article>
                <h2 className="project-card-heading">Portfolio</h2>
                <p>
                    My portfolio highlights a variety of projects, including websites, applications, and tools like my Algorithm Visualizer, designed to help developers understand algorithms through visual learning. Whether I'm coding the next web app or contributing to a collaborative project, my goal is to deliver polished, efficient, and user-centric solutions.
                    <br />
                    <br />
                    Let’s build something amazing together!
                </p>
                <div className="icon-container">
                    <svg
                        className="icons"
                        width="256px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => window.open('https://66da5e2e19010d77c2662ca7--clinquant-tapioca-3a351a.netlify.app/', '_blank')}
                        style={{ cursor: 'pointer' }}
                    >
                        <path
                            d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                            stroke="#ffffff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}

export default withScrollAnimation(Projects);
