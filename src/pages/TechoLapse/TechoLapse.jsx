import React from "react";
import { Link } from "react-router-dom";
import Styles from "./TechoLapse.module.css";
import Window from "../../components/Windows/Window";
import TechoLapseVideo from "../../assets/TechoLapse.mp4";

const TechoLapse = () => {
  return (
    <div>
      <h3>Techo Lapse</h3>
      <Window>
        <video
          className={Styles.video}
          src={TechoLapseVideo}
          autoPlay
          loop
          muted
        ></video>
        {/* <Link to="/"> */}
        <a
          className={Styles.linkVideo}
          href="https://techo.org.ar/voluntariado/"
        >
          <span className={Styles.linkVideo}>visit the web</span>
        </a>
        {/* </Link> */}
      </Window>
    </div>
  );
};

export default TechoLapse;
