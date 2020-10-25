import React from "react";
import "./Project.css";

function Project(props) {
    return (
    <div>
        <h4 className="project-text">{props.name}</h4>
        <p className="project-text">{props.description}</p>
        <a>
            <img src={props.image} alt={props.name} className="img"></img>
        </a>
    </div>
    )
}

export default Project;