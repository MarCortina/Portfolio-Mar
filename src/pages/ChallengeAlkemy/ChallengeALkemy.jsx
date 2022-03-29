import React from "react";
import { Link } from "react-router-dom";

import Styles from "./ChallengeAlkemy.module.css";
import AlkemyVideo from "../../assets/Challenge_Alkemy.mp4";

const ChallengeALkemy = () => {

  return (
    <div className={Styles.container}>
      <div className="title">
        <h3>Alkemy React Challenge</h3>
      </div>
      <video src={AlkemyVideo} className={Styles.video} autoPlay loop muted />
      <div className={Styles.buttonContainer}>
        <Link to={"/alkemy_challenge"} className={Styles.linkVideo}>
        </Link>
      </div>
      <div>
        <p>
          This is a React challenge that I made to practice my React skills.
        </p>
      </div>
    </div>
  );
};

export default ChallengeALkemy;
