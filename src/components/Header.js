import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
    return (
    <div>
      <Link to="/about">
          About
      </Link> 
     <Link to="/portfolio">
          Portfolio
      </Link>
      <Link to="/contact">
          Contact
      </Link>
    </div>
    )
}

export default Nav;