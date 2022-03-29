import React from "react";
import Styles from "./Home.module.css";

import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div className={Styles.homeContainer}>
   

      <h1>Hello World...</h1>
      <Projects />
     
    </div>
  );
};

export default Home;
