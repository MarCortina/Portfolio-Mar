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
            autoPlay
            loop
            muted
            playsInline
            src={LandingVideo}
        />
         {/* <Link to="/"> */}
         <a className={Styles.linkVideo} href="https://landing-comic.vercel.app/">
          <span className={Styles.linkVideo}>visit the web</span>
        </a>
        {/* </Link> */}
      </Window>
    </div>
  );
};

export default LandingComic;
