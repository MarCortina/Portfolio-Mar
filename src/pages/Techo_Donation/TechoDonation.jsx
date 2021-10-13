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
        {/* <Link to="/"> */}
        <button className={Styles.button}>Back</button>
        <a className={Styles.linkVideo} href="https://donar.techo.org.ar/">
          <span className={Styles.linkVideo}>visit the web</span>
        </a>
        {/* </Link> */}
      </Window>
    </div>
  );
};

export default TechoDonation;
