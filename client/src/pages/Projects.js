import React from "react";
import _ from "lodash";
import TitleBar from "../components/TitleBar";
import Grid from "@material-ui/core/Grid";
import ProjectBar from "../components/ProjectBar";
import { projects } from "../lib";

import "../assets/css/projects.css";

function Projects(props) {
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
        {_.map(projects, project => (
          <ProjectBar
            image={project.image}
            title={project.title}
            path={project.path}
            blurb={project.blurb}
          />
        ))}
      </Grid>
    </div>
  );
}

export default Projects;
