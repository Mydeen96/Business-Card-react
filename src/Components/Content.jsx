import React from "react";
// import ReactDOM from "react-dom/client";

export default function Content() {
    return(
    <div className = "contents">
        <h1>Mohamed ALi Mydeen</h1>
        <h4>Frontend Developer</h4>
        <a href= "##">mydeen.website</a>
        <div className="buttons">
        <button id = "email-btn" className="btn">
            <img  src="./email Icon.png" className="email-img" alt="Email logo"/>
                Email
            </button>
        <button id = "linkedin-btn" className="btn">
            <img  src="./linkedin Icon.png" className="linkedin-img" alt="linkedin logo"/> 
            LinkedIn
        </button>
        </div>
        <div className="content2">
            <h3>About</h3>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h3>Interest</h3>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    </div>
    )
}