import React from "react";
import ReactDOM from "react-dom/client";

export default function Content() {
    return(
        <div className = "contents">
            <h1>Mohamed ALi Mydeen</h1>
        <h4>Frontend Developer</h4>
        <a href= "##">mydeen.website</a>
        <div className = "buttons">
            <button className = "email-btn"><img  src="././public/email Icon.png" className="email-img" alt="Email logo"/> Email</button>
            <button className = "linkedin-btn"><img  src="././public/linkedin Icon.png" className="linked-img" alt="linkedin logo"/> LinkedIn</button>
        </div>
        </div>
    )
}