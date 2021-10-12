import React from "react";
import { Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Layout from "./pages/Layout/Layout";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/projects" render={() => <Projects />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/contact" render={() => <Contact />} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
