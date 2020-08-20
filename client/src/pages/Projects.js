import React from "react";
import _ from "lodash";
import TitleBar from "../components/TitleBar";
import Grid from "@material-ui/core/Grid";

import ProjectBar from "../components/ProjectBar";
import { projects } from "../lib";

import "../assets/css/projects.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = { width: window.outerWidth };
  }

  componentDidMount() {
    window.addEventListener("resize", () =>
      this.setState({ width: window.outerWidth })
    );
  }

  render() {
    return (
      <div>
        <TitleBar title="projects" />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className="project-bars-wrapper"
        >
          {_.map(projects, (project, projectName) => (
            <ProjectBar
              image={project.image}
              title={project.title}
              path={project.path}
              blurb={project.blurb}
              width={this.state.width}
              isFirst={Object.keys(projects).indexOf(projectName) === 0}
            />
          ))}
        </Grid>
      </div>
    );
  }
}

export default Projects;
