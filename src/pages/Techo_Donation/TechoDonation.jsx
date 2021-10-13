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
        <Link className={Styles.linkVideo} to="https://donar.techo.org.ar/?gclid=CjwKCAjwmK6IBhBqEiwAocMc8jBIiIX8Lu83Sz8v3qCTihRt0omgSgPCdNw6HLmKWamVhb-Ti68a5hoCvrkQAvD_BwE">
        <span className={Styles.linkVideo}>visit the web</span>
        </Link>
      </Window>
    </div>
  );
};

export default TechoDonation;
