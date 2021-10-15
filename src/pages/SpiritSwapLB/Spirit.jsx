import React from "react";
import Styles from "./Spirit.module.css";
import Spiritvideo from "../../assets/SpiritSwap.mp4";
import Window from "../../components/Windows/Window";

const Spirit = () => {
  return (
    <div>
      <h3>Spirit Leader Board</h3>
      <Window>
        <video className={Styles.video} autoPlay loop muted>
          <source src={Spiritvideo} type="video/mp4" />
        </video>
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

export default Spirit;
