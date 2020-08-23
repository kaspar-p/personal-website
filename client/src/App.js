import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import socketClientInitializer from "socket.io-client";
import LoadingPage from "./pages/LoadingPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/global.css";
import "./assets/css/global-font.css";

const HomePage = lazy(() => import("./pages/Home"));
const Updates = lazy(() => import("./pages/Updates"));
const Projects = lazy(() => import("./pages/Projects"));
const ContactMe = lazy(() => import(".//pages/ContactMe"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ReedSolomon = lazy(() => import("./pages/ReedSolomon"));
const DoublePendulum = lazy(() => import("./pages/DoublePendulum"));
const Paper = lazy(() => import("./pages/RSPaper"));

class App extends React.Component {
  componentDidMount() {
    this.socket = socketClientInitializer();
  }

  componentWillUnmount() {
    this.socket.emit("disconnect");
  }

  render() {
    const renderLoadingPage = () => <LoadingPage />;

    return (
      <Router>
        <Switch>
          <Route exact path="/projects">
            <Suspense fallback={renderLoadingPage()}>
              <Projects />
            </Suspense>
          </Route>
          <Route exact path="/updates">
            <Suspense fallback={renderLoadingPage()}>
              <Updates />
            </Suspense>
          </Route>
          <Route exact path="/contact-me">
            <Suspense fallback={renderLoadingPage()}>
              <ContactMe />
            </Suspense>
          </Route>
          <Route exact path="/double-pendulum">
            <Suspense fallback={renderLoadingPage()}>
              <DoublePendulum />
            </Suspense>
          </Route>
          <Route exact path="/reed-solomon">
            <Suspense fallback={renderLoadingPage()}>
              <ReedSolomon />
            </Suspense>
          </Route>
          <Route path="/OnTheConstructionOfReedSolomonCodes">
            <Suspense fallback={renderLoadingPage()}>
              <Paper />
            </Suspense>
          </Route>
          <Route exact path="/">
            <Suspense fallback={renderLoadingPage()}>
              <HomePage />
            </Suspense>
          </Route>
          {/* This route has to be last, as last resort to all others */}
          <Route exact path="*">
            <Suspense fallback={renderLoadingPage()}>
              <NotFound />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
