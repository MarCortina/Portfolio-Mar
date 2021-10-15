import React from "react";
import { Link } from "react-router-dom";
import DonarVideo from "../../assets/Techo_Donation.mp4";
import Styles from "./TechoDonation.module.css";
import Window from "../../components/Windows/Window";

const TechoDonation = () => {
  return (
    <div>
      <h3>Techo Donation</h3>
      <Window>
        <video
          className={Styles.video}
          src={DonarVideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className={Styles.buttonContainer}>
          {/* <Link to="/"> */}
          <a className={Styles.linkVideo} href="https://donar.techo.org.ar/">
            <span className={Styles.linkVideo}>see details</span>
          </a>
          {/* </Link> */}
          {/* <Link to="/"> */}
          <a className={Styles.linkVideo} href="https://donar.techo.org.ar/">
            <span className={Styles.linkVideo}>visit the web</span>
          </a>
          {/* </Link> */}
        </div>
      </Window>
    </div>
  );
};

export default TechoDonation;
