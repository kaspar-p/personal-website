import React from "react";
import _ from "lodash";
import TitleBar from "../components/TitleBar";
import Grid from "@material-ui/core/Grid";

import ProjectBar from "../components/ProjectBar";
import { projects } from "../lib";

function Projects() {
  return (
    <div>
      <TitleBar title="projects" />
      <Grid container direction="column" justify="center" alignItems="center">
        {_.map(projects, (project) => (
          <ProjectBar
            key={project.path}
            {...project}
            isFirst={_.find(projects, () => true) === project}
          />
        ))}
      </Grid>
    </div>
  );
}

export default Projects;
