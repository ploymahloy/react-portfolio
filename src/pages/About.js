import React from "react";
import "./About.css";

function About(props) {
    return (
        <div>
            <img src="/img/profile.jpeg"/>
            <p className="bio">
                Patrick's first career was in direct sales starting with door to door and eventually leading to retail and tent events. After getting his fill in sales, Patrick realized he wanted to use his communication skills to work in a team environment. Soon after, he enrolled in the University of Richmond's Coding Bootcamp.
            </p>
            <p className="bio">
                Patrick not only hopes to have a good career, but is securing his career's longjevity by coding every day and picking up certifications such as PMI's CAPM (Certified Associate in Project Management) and ITIL's Foundation Certification. Patrick aspires to be the best IT professional he can be and looks forward to many years of new relationships and projects.
            </p>
        </div>
    );
};

export default About;