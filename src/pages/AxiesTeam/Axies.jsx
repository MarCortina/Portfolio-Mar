import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Axies.module.css";
import Window from "../../components/Windows/Window";
import AxiesVideo from "../../assets/AxieTeams.mp4";

const Axies = () => {
  return (
    <div>
      <h3>Axies Team</h3>
      <Window>
        <video
          className={Styles.video}
          src={AxiesVideo}
          autoPlay
          loop
          muted
        ></video>
        <div className={Styles.buttonContainer}>
          {/* <Link to="/"> */}
          <a className={Styles.linkVideo} href="">
            <span className={Styles.linkVideo}>see details</span>
          </a>
          {/* </Link> */}
        </div>
      </Window>
    </div>
  );
};

export default Axies;
