import React from "react";
import _ from "lodash";
import TitleBar from "../components/TitleBar";
import Grid from "@material-ui/core/Grid";

import ProjectBar from "../components/ProjectBar";
import { projects } from "../lib";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = { width: window.outerWidth };

    this.updateWidth = this.updateWidth.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  updateWidth() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
      <div>
        <TitleBar title="projects" />
        <Grid container direction="column" justify="center" alignItems="center">
          {_.map(projects, (project) => (
            <ProjectBar
              key={project.path}
              width={this.state.width}
              {...project}
              isFirst={_.find(projects, () => true) === project}
            />
          ))}
        </Grid>
      </div>
    );
  }
}

export default Projects;
