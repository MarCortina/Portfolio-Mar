import React from "react";
import { Link } from "react-router-dom";
import Axies from "../AxiesTeam/Axies";
import ChallengeALkemy from "../ChallengeAlkemy/ChallengeALkemy";
import ElMayorista from "../ElMayorista/ElMayorista";
import LandingComic from "../LandingComic/LandingComic";
import Spirit from "../SpiritSwapLB/Spirit";
import TailwindTuto from "../TailwindTuto/TailwindTuto";
import TechoAdmin from "../TechoAdmin/TechoAdmin";
import TechoLapse from "../TechoLapse/TechoLapse";
import TechoDonation from "../Techo_Donation/TechoDonation";
import Styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div>
      <span>
        <h2>Projects</h2>
      </span>
      <div className={Styles.ProjectsContainer}>
        <ChallengeALkemy />
        <Spirit />
        <Axies />
        <TechoLapse />
        <ElMayorista />
        <TechoAdmin />
        <TailwindTuto />
        <LandingComic />
        <TechoDonation />
      </div>
    </div>
  );
};

export default Projects;
