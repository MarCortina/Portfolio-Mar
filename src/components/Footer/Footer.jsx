import React from "react";
import Contact from "../../pages/Contact/Contact";

import Styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={Styles.footerContainer}>
      <Contact />
    </div>
  );
};

export default Footer;
