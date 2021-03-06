import React from "react";
import { Link } from "react-router-dom";
import Styles from "./TailwindTuto.module.css";
import Window from "../../components/Windows/Window";

import TailwindVideo from "../../assets/Tailwind.mp4";

const TailwindTuto = () => {
  return (
    <div>
      <h3>Tailwind Tuto</h3>
      <Window>
        <video
          className={Styles.video}
          src={TailwindVideo}
          autoPlay
          loop
          muted
        ></video>
        <div className={Styles.buttonContainer}>
          {/* <Link to="/"> */}
          <a
            className={Styles.linkVideo}
            href="https://mar-next-tail.vercel.app/"
          >
            <span className={Styles.linkVideo}>see details</span>
          </a>
          {/* </Link> */}
          {/* <Link to="/"> */}
          <a
            className={Styles.linkVideo}
            href="https://mar-next-tail.vercel.app/"
          >
            <span className={Styles.linkVideo}>visit the web</span>
          </a>
          {/* </Link> */}
        </div>
      </Window>
    </div>
  );
};

export default TailwindTuto;
