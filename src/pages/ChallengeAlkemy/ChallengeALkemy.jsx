import React from "react";
import { Link } from "react-router-dom";
import Styles from "./ChallengeAlkemy.module.css";
import Window from "../../components/Windows/Window";
import AlkemyVideo from "../../assets/Challenge_Alkemy.mp4";

const ChallengeALkemy = () => {
  return (
    <div>
      <div className="title">
        <h3>Alkemy React Challenge</h3>
      </div>
      <Window>
        <video src={AlkemyVideo} className={Styles.video} autoPlay loop muted />
        <div className={Styles.buttonContainer}>
          <Link to={"/alkemy_challenge"} className={Styles.linkVideo}>
            <span className={Styles.linkVideo}>see details</span>
          </Link>
        </div>
      </Window>
    </div>
  );
};

export default ChallengeALkemy;
