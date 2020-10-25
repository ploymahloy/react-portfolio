import React from "react";
import Project from "../components/Project";
import projects from "../projects.json";

function Portfolio(props) {
    return (
        <div>
            <Project
                name={projects[0].name}
                image={projects[0].image}
                description={projects[0].description}
            />
            <Project
                name={projects[1].name}
                image={projects[1].image}
                description={projects[1].description}
            />
            <Project
                name={projects[2].name}
                image={projects[2].image}
                description={projects[2].description}
            />
            <Project
                name={projects[3].name}
                image={projects[3].image}
                description={projects[3].description}
            />
            <Project
                name={projects[4].name}
                image={projects[4].image}
                description={projects[4].description}
            />
            <Project
                name={projects[5].name}
                image={projects[5].image}
                description={projects[5].description}
            />
        </div>
    );
};

export default Portfolio;