import React from "react";
import { Link } from "react-router-dom";
import Styles from "./ElMayorista.module.css";
import Window from "../../components/Windows/Window";
import ElMayoristaVideo from "../../assets/ElMayorista.mp4";
const ElMayorista = () => {
  return (
    <div>
      <h3>El Mayorista</h3>
      <Window>
        <video
          src={ElMayoristaVideo}
          className={Styles.video}
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

export default ElMayorista;
