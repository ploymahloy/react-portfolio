import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
    return (
    <div className="header">
      <Link to="/about" className="link">
          About
      </Link> 
     <Link to="/portfolio" className="link">
          Portfolio
      </Link>
      <Link to="/contact" className="link">
          Contact
      </Link>
    </div>
    )
}

export default Header;