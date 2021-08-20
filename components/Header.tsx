import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { Link } from "@material-ui/core";

import button from "../styles/buttons";

const propTypes = { title: PropTypes.string.isRequired };

type HeaderProps = PropTypes.InferProps<typeof propTypes>;

const useStyles = makeStyles({
  headerContainer: {
    paddingBottom: "0vw",
  },
  buttonContainer: {
    padding: "0 2vw",
  },
  homeButton: {
    letterSpacing: "1rem",
    textAlign: "start",
  },
  backButton: {
    letterSpacing: "1rem",
    textAlign: "end",
  },
  titleContainer: { fontSize: "1.2rem" },
  headerTitle: {
    margin: 0,
    textAlign: "center",
  },
  button,
});

function Header({ title }: HeaderProps) {
  const styles = useStyles();

  return (
    <Grid
      direction="column"
      justifyContent="space-evenly"
      className={styles.headerContainer}
    >
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={styles.buttonContainer}
      >
        <Link className={clsx(styles.button, styles.homeButton)} href="/">
          home
        </Link>

        <Link
          className={clsx(styles.button, styles.backButton)}
          onClick={() => window.history.back()}
        >
          back
        </Link>
      </Grid>
      {title && (
        <Grid
          justifyContent="center"
          alignItems="center"
          className={styles.titleContainer}
        >
          <h1 className={clsx(styles.headerTitle, "montserrat-medium")}>
            {title}
          </h1>
        </Grid>
      )}
    </Grid>
  );
}

Header.propTypes = exact(propTypes);

export default Header;
