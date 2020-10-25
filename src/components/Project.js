import React from "react";
import "./Project.css";

function Project(props) {
    return (
    <div>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a>
            <img src={props.image} alt={props.name} className="img"></img>
        </a>
    </div>
    )
}

export default Project;