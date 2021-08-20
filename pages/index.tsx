import React from "react";
import type { NextPage } from "next";
// import HomeAnimation from "../components/HomeAnimation";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import "../styles/Home.module.css";
import { Link } from "@material-ui/core";

import button from "../styles/buttons";

const useStyles = makeStyles({
  homeContainer: {
    height: "100vh",
    position: "absolute",
    left: 0,
    top: 0,
    padding: "100px",
  },
  "home-title": {
    letterSpacing: "1.5rem",
    fontSize: "5rem",
    fontFamily: "montserrat-medium",
    margin: "0.5rem",
    fontWeight: 500,
  },
  "title-row": {
    padding: 0,
  },
  "home-option": {
    width: "50%",
    paddingLeft: "100px",
  },
  button,
});

const Home: NextPage = () => {
  const styles = useStyles();

  return (
    <Grid container className={styles.homeContainer} justifyContent="flex-end">
      <Grid
        container
        className={clsx(styles["home-title"], "montserrat-medium")}
        direction="column"
        justifyContent="flex-end"
        alignItems="flex-start"
      >
        <Grid
          item
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          className={styles["title-row"]}
        >
          <h1 className={clsx(styles["home-title"], "montserrat-light")}>
            kaspar poland
          </h1>
          {/* <HomeAnimation width={window.innerWidth} /> */}
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          className="home-options-wrapper"
        >
          <Link
            className={clsx(styles.button, styles["home-option"])}
            href="/projects"
          >
            my creations
          </Link>
          <Link
            className={clsx(styles.button, styles["home-option"])}
            href="/updates"
          >
            recent updates
          </Link>
          <Link
            className={clsx(styles.button, styles["home-option"])}
            href="/contact-me"
          >
            contact me
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
