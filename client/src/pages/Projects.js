import React from "react";
import _ from "lodash";
import TitleBar from "../components/TitleBar";
import doublePendulumImg from "../assets/images/double-pendulum/headliner.png";
import reedSolomonImg from "../assets/images/reed-solomon/headliner.png";
import Grid from "@material-ui/core/Grid";
import ProjectBar from "../components/ProjectBar";
import "../assets/css/projects.css";

function Projects(props) {
  const projects = {
    doublePendulum: {
      path: "/double-pendulum",
      title: "double pendulum learning simulation",
      blurb:
        "Built in April of 2018, watch carts attempt to balance poles on top of themselves, and when they fail, learn from their mistakes. Utilizing a genetic evolution algorithm called NEAT, the carts learn to balance!",
      image: doublePendulumImg
    },
    reedSolomon: {
      path: "/reed-solomon",
      title: "reed-solomon encoding/decoding",
      blurb:
        "Built in December of 2018, learn about how a message can be garbled and messed with to guarantee that if the data were to get corrupted in transmission, the original message would still be recoverable!",
      image: reedSolomonImg
    }
  };

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
