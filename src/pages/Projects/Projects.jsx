import React from "react";
import { Link } from "react-router-dom";
import Styles from "./Projects.module.css";
import Window from "../../components/Windows/Window";
import AlkemyChallenge from "../../assets/Challenge_Alkemy.mp4";
import Spirit from "../../assets/SpiritSwap.mp4";
import Axies from "../../assets/AxieTeams.mp4";
import TechoLapse from "../../assets/TechoLapse.mp4";
import ElMayorista from "../../assets/ElMayorista.mp4";
import TechoAdmin from "../../assets/TechoAdmin.mp4";
import TailwindTuto from "../../assets/Tailwind.mp4";
import LandingComic from "../../assets/Landing.mp4";
import TechoDonation from "../../assets/Techo_Donation.mp4";

const Projects = () => {
  return (
    <div>
      <span>
        <h2>Projects</h2>
      </span>
      <div className={Styles.ProjectsContainer}>
        <Window>
          <span>Alkemy</span>
          <video src={AlkemyChallenge} className={Styles.video} autoPlay loop muted />
          <div className={Styles.buttonContainer}>
            <Link to={"/alkemy_challenge"} className={Styles.linkVideo}>
              <span className={Styles.linkVideo}>see details</span>
            </Link>
          </div>
        </Window>
        <Window>
          <span>Spirit</span>
          <video src={Spirit} className={Styles.video} autoPlay loop muted />
          <div className={Styles.buttonContainer}>
            <Link to={"/spirit_swap"} className={Styles.linkVideo}>
              <span className={Styles.linkVideo}>see details</span>
            </Link>
          </div>
        </Window>
        <Window>
          <span>Axies</span>
          <video src={Axies} className={Styles.video} autoPlay loop muted />
          <div className={Styles.buttonContainer}>
            <Link to={"/axies_team"} className={Styles.linkVideo}>
              <span className={Styles.linkVideo}>see details</span>
            </Link>
          </div>
        </Window>
        <Window>
          <span>Techo Lapse</span>
          <video src={TechoLapse} className={Styles.video} autoPlay loop muted />
          <div className={Styles.buttonContainer}>
            <Link to={"/techo_lapse"} className={Styles.linkVideo}>
              <span className={Styles.linkVideo}>see details</span>
            </Link>
          </div>
        </Window>
        <Window>
          <span>El Mayorista</span>
          <video src={ElMayorista} className={Styles.video} autoPlay loop muted />
          <div className={Styles.buttonContainer}>
            <Link to={"/el_mayorista"} className={Styles.linkVideo}>
              <span className={Styles.linkVideo}>see details</span>
            </Link>
          </div>
        </Window>
        <Window>
          <span>Techo Admin</span>
          <video src={TechoAdmin} className={Styles.video} autoPlay loop muted />
          <div className={Styles.buttonContainer}>
            <Link to={"/techo_admin"} className={Styles.linkVideo}>
              <span className={Styles.linkVideo}>see details</span>
            </Link>
          </div>
        </Window>
        <Window>
          <span>Tailwind Tuto</span>
          <video src={TailwindTuto} className={Styles.video} autoPlay loop muted />
          <div className={Styles.buttonContainer}>
            <Link to={"/tailwind_tuto"} className={Styles.linkVideo}>
              <span className={Styles.linkVideo}>see details</span>
            </Link>
          </div>
        </Window>
        <Window>
          <span>Landing Comic</span>
          <video src={LandingComic} className={Styles.video} autoPlay loop muted />
          <div className={Styles.buttonContainer}>
            <Link to={"/landing_comic"} className={Styles.linkVideo}>
              <span className={Styles.linkVideo}>see details</span>
            </Link>
          </div>
        </Window>
        <Window>
          <span>Techo Donation</span>
          <video src={TechoDonation} className={Styles.video} autoPlay loop muted />
          <div className={Styles.buttonContainer}>
            <Link to={"/techo_donation"} className={Styles.linkVideo}>
              <span className={Styles.linkVideo}>see details</span>
            </Link>
          </div>
        </Window>
      </div>
    </div>
  );
};

export default Projects;
