import React from "react";
import Image from '../../assets/Algo-visual.png'; // Adjust the relative path


function Projects() {
    return (
        <section className="Projects-section" >
            <h1>Projects</h1>
            <div className="project-card">
                
                <article className="project">
                    <img className="Algo" src={Image} alt="Photo of website" />
                </article>
            </div>

            <div className="project-card">
                <article className="project">

                </article>
            </div>


        </section>
    )
}


export default Projects;