import React from "react";
import withScrollAnimation from "../withScrollAnimation";

function Education() {
    return (
        <section className="education-section">
            <h1>Education</h1>
        <div id="Education" className="education-content">
            <h2>Hill College</h2>
            <h4>2022-2024</h4>
            <p>
            Gained a foundational understanding of web development by learning essential skills in HTML, CSS, JavaScript, and C++. Along with these technical languages, I studied basic algorithms, which helped me develop problem-solving abilities crucial for programming. This education provided me with a solid groundwork to advance further in web development. </p>
            {/* <h2>Learning outcomes</h2>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul> */}
        </div>
        <div className="education-content">
            <h2>Fullstack Academy</h2>
            <h4>Feb 2024 - Sep 2024</h4>
            <p>
            
At Full Stack Academy, I gained comprehensive web development training, focusing on building full-stack applications. The program covered both frontend and backend technologies, including JavaScript, frameworks, databases, and RESTful APIs. This hands-on experience allowed me to develop dynamic, responsive web applications, preparing me for real-world challenges and enhancing my ability to create efficient, scalable solutions. </p>
            {/* <h2>Learning outcomes</h2>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul> */}
        </div>

        </section>
    )
}


export default withScrollAnimation(Education);