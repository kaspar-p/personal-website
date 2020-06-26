import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./pages/Home";
import Updates from "./pages/Updates";
import Projects from "./pages/Projects";
import ContactMe from ".//pages/ContactMe";
import NotFound from "./pages/NotFound";
import ReedSolomon from "./pages/ReedSolomon";
import DoublePendulum from "./pages/DoublePendulum";
import socketClientInitializer from "socket.io-client";

import "./assets/css/global.css";
import "./assets/css/global-font.css";

class App extends React.Component {
  componentDidMount() {
    this.socket = socketClientInitializer();
  }

  componentWillUnmount() {
    this.socket.emit("disconnect");
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/updates">
            <Updates />
          </Route>
          <Route exact path="/contactme">
            <ContactMe />
          </Route>
          <Route exact path="/double-pendulum">
            <DoublePendulum />
          </Route>
          <Route exact path="/reed-solomon">
            <ReedSolomon />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          {/* This route has to be last, as last resort to all others */}
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
