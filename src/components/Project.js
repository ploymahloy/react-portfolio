import React from "react";

function Project(props) {
    return (
    <div>
        <h2>Project Name: </h2> <h4>{props.name}</h4>
        <a>
            <img src={props.image} alt={props.name}></img>
        </a>
        <p>{props.description}</p>
    </div>
    )
}

export default Project;