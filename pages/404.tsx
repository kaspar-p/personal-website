import React from "react";
import exact from "prop-types-exact";
import { Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { offBlack } from "../styles/constants";
import clsx from "clsx";

const propTypes = {};

const useStyles = makeStyles({
  notFound: {
    height: "100vh",
    padding: 0,
    margin: 0,
    textAlign: "center",
    color: offBlack,
    fontSize: "2rem",
  },
  returnToSafetyLink: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
  returnToSafety: {
    fontSize: "2rem",
    padding: "0.5rem 3rem",
    textDecoration: "none",
    color: offBlack,
    borderBottom: `3px solid white`,
    "&:hover": {
      paddingBottom: "1rem",
      paddingTop: 0,
      textDecoration: "none",
      borderBottom: `3px solid ${offBlack}`,
    },
  },
});

function Custom404() {
  const styles = useStyles();

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={styles.notFound}
    >
      It seems that you have stumbled onto a page that does not exist.{"\n"}
      <Link href="/" className={styles.returnToSafetyLink}>
        <h3 className={clsx(styles.returnToSafety, "montserrat-medium")}>
          return to safety
        </h3>
      </Link>
    </Grid>
  );
}

Custom404.propTypes = exact(propTypes);

export default Custom404;
