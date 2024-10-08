import React from "react";

function Contact() {
    return(
        <section className="contact-section"> 
            <h1>Contact</h1>
            <div className="form">
            <p>Have any questions or want to work together?</p>

            <div className="form-container">
            <form action="https://formsubmit.co/diazchris27586@gmail.com" method="POST">
                <input type="hidden" name="_captcha" value="false" />
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="name" placeholder="Write your message" required />
                <button className="form-button" type="submit">Send</button>
            </form>
            </div>
            </div>

        </section>
    )
}

export default Contact;