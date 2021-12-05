import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import swal from "sweetalert";

import Home from "./pages/Home/Home";
import "./App.css";
import Layout from "./pages/Layout/Layout";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ChallengeALkemy from "./pages/ChallengeAlkemy/ChallengeALkemy";

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
        {/* <button onClick={handleClick}>Click me</button> */}
        {showAlert && handleClick()}
        {/* <div className="App"> */}
        {/* <Switch> */}
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/projects" render={() => <Projects />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route
          exact
          path="/alkemy_challenge"
          render={() => <ChallengeALkemy />}
        />

        {/* </Switch> */}
        {/* </div> */}
      </Layout>
    </div>
  );
}

export default App;
