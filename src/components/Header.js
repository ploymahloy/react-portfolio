import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
    return (
    <div className="header">
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

export default Header;