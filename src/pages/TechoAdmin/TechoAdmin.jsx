import React from "react";
import { Link } from "react-router-dom";
import Styles from "./TechoAdmin.module.css";
import Window from "../../components/Windows/Window";
import TechoAdminVideo from "../../assets/TechoAdmin.mp4";

const TechoAdmin = () => {
  return (
    <div>
      <h3>TechoAdmin</h3>
      <Window>
        <video
          className={Styles.video}
          src={TechoAdminVideo}
          autoPlay
          loop
          muted
        ></video>
        <Link className={Styles.linkVideo} to="/">
          <span className={Styles.linkVideo}>see details</span>
        </Link>
      </Window>
    </div>
  );
};

export default TechoAdmin;
