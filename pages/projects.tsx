import React from "react";
import type { NextPage } from "next";
import _ from "lodash";
import Grid from "@material-ui/core/Grid";
import Header from "../components/Header";
import ProjectBar from "../components/ProjectBar";

import doublePendulumImg from "../images/double-pendulum/headliner.png";
import reedSolomonImg from "../images/reed-solomon/headliner.png";
import { makeStyles } from "@material-ui/core";
import Footer from "../components/Footer";

interface StaticImageData {}

interface IProject {
  path: string;
  title: string;
  blurb: string;
  image: StaticImageData;
}

type ProjectsType = { [key: string]: IProject };

const projects: ProjectsType = {
  doublePendulum: {
    path: "/projects/double-pendulum",
    title: "double pendulum learning simulation",
    blurb:
      "Built in April of 2018, watch carts attempt to balance poles on top of themselves, and when they fail, learn from their mistakes. Utilizing a genetic evolution algorithm called NEAT, the carts learn to balance!",
    image: doublePendulumImg,
  },
  reedSolomon: {
    path: "/projects/reed-solomon",
    title: "reed-solomon encoding/decoding",
    blurb:
      "Built in December of 2018, learn about how a message can be garbled and messed with to guarantee that if the data were to get corrupted in transmission, the original message would still be recoverable!",
    image: reedSolomonImg,
  },
};

const useStyles = makeStyles({
  projectContainer: {
    marginTop: "3rem",
  },
});

const Projects: NextPage = () => {
  const styles = useStyles();

  return (
    <Grid container direction="column">
      <Header title="projects" />

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={styles.projectContainer}
      >
        {_.map(
          projects,
          ({ path, title, blurb, image }: IProject, key: string) => (
            <ProjectBar
              title={title}
              path={path}
              blurb={blurb}
              key={title}
              image={image}
              isFirst={key === "doublePendulum"}
            />
          )
        )}
      </Grid>

      <Footer />
    </Grid>
  );
};

export default Projects;
