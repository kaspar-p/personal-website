import React from "react";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Grid, Link } from "@material-ui/core";

import button from "../styles/buttons";
import { offBlack } from "../styles/constants";

const HomeAnimation = dynamic(() => import("../components/HomeAnimation"), {
  ssr: false,
});

const useStyles = makeStyles({
  homeContainer: {
    height: "100vh",
    position: "absolute",
    left: 0,
    top: 0,
    padding: "100px",
  },
  homeTitle: {
    letterSpacing: "1.5rem",
    fontSize: "5rem",
    fontFamily: "montserrat-medium",
    margin: "0.5rem",
    fontWeight: 500,
    color: offBlack,
  },
  titleRow: {
    padding: 0,
  },
  homeOption: {
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
        direction="column"
        justifyContent="flex-end"
        alignItems="flex-start"
      >
        <Grid
          item
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          className={styles.titleRow}
        >
          <h1 className={clsx(styles.homeTitle, "montserrat-light")}>
            kaspar poland
          </h1>
          <HomeAnimation />
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          className="home-options-wrapper"
        >
          <Link
            className={clsx(styles.button, styles.homeOption)}
            href="/projects"
          >
            my creations
          </Link>
          <Link
            className={clsx(styles.button, styles.homeOption)}
            href="/updates"
          >
            recent updates
          </Link>
          <Link
            className={clsx(styles.button, styles.homeOption)}
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
