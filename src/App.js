import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import swal from "sweetalert";

import Home from "./pages/Home/Home";
import "./App.css";
import Layout from "./pages/Layout/Layout";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ChallengeALkemy from "./pages/ChallengeAlkemy/ChallengeALkemy";
import SpiritSwapLB from "./pages/SpiritSwapLB/Spirit";
import Axies from "./pages/AxiesTeam/Axies";
import LandingComic from "./pages/LandingComic/LandingComic";
import TechoLapse from "./pages/TechoLapse/TechoLapse";
import TechoAdmin from "./pages/TechoAdmin/TechoAdmin";
import TechoDonation from "./pages/Techo_Donation/TechoDonation";
import ElMayorista from "./pages/ElMayorista/ElMayorista";
import TailwindTuto from "./pages/TailwindTuto/TailwindTuto";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const handleClick = () => {
    swal("this site is in process");
  };

  useEffect(() => {
    setShowAlert(true);
  }, []);

  return (
    <div className="App">
      <Layout>
        {showAlert && handleClick()}

        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/projects" render={() => <Projects />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route
          exact
          path="/alkemy_challenge"
          render={() => <ChallengeALkemy />}
        />
        <Route exact path="/spirit_swap" render={() => <SpiritSwapLB />} />
        <Route exact path="/axies_team" render={() => <Axies />} />
        <Route exact path="/techo_lapse" render={() => <TechoLapse />} />
        <Route exact path="/techo_admin" render={() => <TechoAdmin />} />
        <Route exact path="/techo_donation" render={() => <TechoDonation />} />
        <Route exact path="/landing_comic" render={() => <LandingComic />} />
        <Route exact path="/el_mayorista" render={() => <ElMayorista/>} />
        <Route exact path="/tailwind_tuto" render={() => <TailwindTuto />} />

      </Layout>
    </div>
  );
}

export default App;
