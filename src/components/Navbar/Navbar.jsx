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
          <Link to="/" className={Styles.btn_one}><span>Home</span></Link>
        </div>
        <div className={Styles.itemList}>
          <Link to="/projects"className={Styles.btn_one}><span>Projects</span></Link>
        </div>
        <div className={Styles.itemList}>
          <Link to="/about"className={Styles.btn_one}><span>About</span></Link>
        </div>
        <div className={Styles.itemList}>
          <Link to="/contact"className={Styles.btn_one}><span>Contact</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
