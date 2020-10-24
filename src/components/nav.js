
import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
    return (
        <nav>
            <span>Patrick Mahloy</span>
            <nav>
            <Link to={"/"}>About Me</Link>
            <Link to={"/portfolio/"}>Portfolio</Link>
            </nav>
        </nav>
    );
};

export default NavBar;