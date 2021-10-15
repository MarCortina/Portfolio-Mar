import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={Styles.homeContainer}>
      <h1>Hello World...</h1>
      <span>here my projects</span>
      <Projects />
      {/* <About /> */}
      <Contact />
    </div>
  );
};

export default Home;
