import React from "react";
import Window from "../../components/Windows/Window";
import LandingVideo from "../../assets/Landing.mp4";
import { Link } from "react-router-dom";
import Styles from "./LandingComic.module.css";

const LandingComic = () => {
  return (
    <div>
      <h3>Landing Comic</h3>
      <Window>
        <video 
            className={Styles.video}
            src={LandingVideo}
            autoPlay
            loop
            muted
            playsInline
        />
        <div className={Styles.buttonContainer}>
         {/* <Link to="/"> */}
         <a className={Styles.linkVideo} href="https://landing-comic.vercel.app/">
          <span className={Styles.linkVideo}>see details</span>
        </a>
        {/* </Link> */}
          {/* <Link to="/"> */}
          <a className={Styles.linkVideo} href="https://landing-comic.vercel.app/">
          <span className={Styles.linkVideo}>visit the web</span>
        </a>
        {/* </Link> */}
        </div>
      </Window>
    </div>
  );
};

export default LandingComic;
