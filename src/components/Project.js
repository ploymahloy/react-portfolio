import React from "react";
import "./Project.css";

function Project(props) {
    return (
    <div>
        <h2>Project Name: </h2> <h4>{props.name}</h4>
        <a>
            <img src={props.image} alt={props.name} className="img"></img>
        </a>
        <p>{props.description}</p>
    </div>
    )
}

export default Project;