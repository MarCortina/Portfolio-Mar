import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={Styles.navbarContainer}>
      <div>
        <h1>Mar Cortina</h1>
      </div>
      <div className={Styles.dataList}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/projects">Projects</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
