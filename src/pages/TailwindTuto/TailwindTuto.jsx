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
        ></video>
        {/* <Link to="/"> */}
        <a
          className={Styles.linkVideo}
          href="https://mar-next-tail.vercel.app/"
        >
          <span className={Styles.linkVideo}>visit the web</span>
        </a>
        {/* </Link> */}
      </Window>
    </div>
  );
};

export default TailwindTuto;
