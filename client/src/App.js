import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import socketClientInitializer from "socket.io-client";
import LoadingPage from "./pages/LoadingPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/global.css";
import "./assets/css/global-font.css";

const Home = lazy(() => import("./pages/Home"));
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
        <Suspense fallback={renderLoadingPage()}>
          <Switch>
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/updates" component={Updates} />
            <Route exact path="/contact-me" component={ContactMe} />
            <Route exact path="/double-pendulum" component={DoublePendulum} />
            <Route exact path="/reed-solomon" component={ReedSolomon} />
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
