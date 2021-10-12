import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={Styles.navbarContainer}>
      <div className={Styles.nameTitle}>
        <h1>Mar Cortina</h1>
      </div>
      <div className={Styles.dataList}>
        <div className={Styles.itemList}>
          <Link to="/">Home</Link>
        </div>
        <div className={Styles.itemList}>
          <Link to="/projects">Projects</Link>
        </div>
        <div className={Styles.itemList}>
          <Link to="/about">About</Link>
        </div>
        <div className={Styles.itemList}>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
