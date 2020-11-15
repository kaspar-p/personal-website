import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import socketClientInitializer from "socket.io-client";
import LoadingPage from "./pages/LoadingPage";
import { projects } from "./lib.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/global.css";
import "./assets/css/global-font.css";

const Home = lazy(() => import("./pages/Home"));
const Updates = lazy(() => import("./pages/Updates"));
const Projects = lazy(() => import("./pages/Projects"));
const ContactMe = lazy(() => import(".//pages/ContactMe"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ReedSolomon = lazy(() => import("./pages/ReedSolomon"));
const Paper = lazy(() => import("./pages/RSPaper"));
const TuringMachine = lazy(() => import("./pages/TuringMachine"));
const DoublePendulum = lazy(() => import("./pages/DoublePendulum"));

class App extends React.Component {
  componentDidMount() {
    this.socket = socketClientInitializer();
  }

  componentWillUnmount() {
    this.socket.emit("disconnect");
  }

  render() {
    const renderLoadingPage = () => <LoadingPage />;

    const { doublePendulum, reedSolomon, turingMachine } = projects;

    return (
      <Router>
        <Suspense fallback={renderLoadingPage()}>
          <Switch>
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/updates" component={Updates} />
            <Route exact path="/contact-me" component={ContactMe} />
            <Route
              exact
              path={doublePendulum.path}
              component={DoublePendulum}
            />
            <Route exact path={reedSolomon.path} component={ReedSolomon} />
            <Route exact path={turingMachine.path} component={TuringMachine} />
            <Route
              path="/OnTheConstructionOfReedSolomonCodes"
              component={Paper}
            />
            <Route exact path="/" component={Home} />
            {/* This route has to be last, as last resort to all others */}
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
