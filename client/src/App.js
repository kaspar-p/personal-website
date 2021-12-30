import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import socketClientInitializer from "socket.io-client";
import LoadingPage from "./pages/LoadingPage";
import { projects } from "./lib";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/global.css";
import "./assets/css/global-font.css";

const Home = lazy(() => import("./pages/Home"));
const Updates = lazy(() => import("./pages/Updates"));
const Projects = lazy(() => import("./pages/Projects"));
const ContactMe = lazy(() => import("./pages/ContactMe"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ReedSolomon = lazy(() => import("./pages/ReedSolomon"));
const DoublePendulum = lazy(() => import("./pages/DoublePendulum"));
const RSPaper = lazy(() => import("./pages/RSPaper"));
const Resume = lazy(() => import("./pages/Resume"));

export const WidthContext = React.createContext(0);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
    };
  }

  updateWidth = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount = () => {
    this.socket = socketClientInitializer();
    window.addEventListener("resize", this.updateWidth);
  };

  componentWillUnmount() {
    this.socket.emit("disconnect");
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    console.log("here: ", WidthContext);
    const renderLoadingPage = () => <LoadingPage />;

    return (
      <WidthContext.Provider value={this.state.width}>
        <Router>
          <Suspense fallback={renderLoadingPage()}>
            <Switch>
              <Route exact path="/projects" component={Projects} />
              {/* <Route exact path="/updates" component={Updates} /> */}
              <Route exact path="/contact-me" component={ContactMe} />
              <Route
                exact
                path={projects.doublePendulum.path}
                component={DoublePendulum}
              />
              <Route
                exact
                path={projects.reedSolomon.path}
                component={ReedSolomon}
              />

              {/* Download file routes */}
              <Route
                path="/projects/OnTheConstructionOfReedSolomonCodes"
                component={RSPaper}
              />
              <Route path="/resume" component={Resume} />

              {/* This route has to be second last */}
              <Route exact path="/" component={Home} />

              {/* This route has to be last, as last resort to all others */}
              <Route exact path="*" component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      </WidthContext.Provider>
    );
  }
}

export default App;
