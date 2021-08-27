import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import { makeStyles } from "@material-ui/styles";
import { Grid, Hidden } from "@material-ui/core";
import Image from "next/image";
import clsx from "clsx";

import { offBlack } from "../styles/constants";

const propTypes = {
  socialLink: PropTypes.string.isRequired,
  socialName: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
};

type ContactMeSquarePropTypes = PropTypes.InferProps<typeof propTypes>;

const useStyles = makeStyles({
  socialBox: {
    width: "100%",
    borderBottom: `4px solid ${offBlack}`,
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    marginLeft: "1.5rem",
    marginRight: "1.5rem",
    cursor: "pointer",
    height: "30vh",
    textAlign: "center",
    flexWrap: "nowrap",
    "&:hover": {
      marginTop: 0,
      marginBottom: "1rem",
    },
  },
  email: {
    fontSize: "3rem",
  },
  socialTitle: {
    paddingTop: "4rem",
  },
  logoImage: {
    width: "100%",
  },
  socialHandle: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    fontSize: "1.5rem",
  },
  socialHandleSmall: {
    paddingBottom: "0.5rem",
    fontSize: "1.5rem",
  },
});

function ContactMeSquare(props: ContactMeSquarePropTypes) {
  const styles = useStyles();

  return (
    <>
      {/* Small screen */}
      <Hidden mdUp>
        <Grid
          item
          container
          onClick={() => (window.location.href = props.socialLink)}
          xs={6}
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={styles.socialBox}
          >
            <Grid
              container
              item
              alignItems="center"
              justifyContent="center"
              xs={5}
            >
              <Image alt={`${props.socialName}Logo!`} src={props.image} />
            </Grid>
            <h2 className={clsx(styles.socialHandleSmall, "montserrat-medium")}>
              {props.handle}
            </h2>
          </Grid>
        </Grid>
      </Hidden>

      {/* Large screen */}
      <Hidden smDown>
        <Grid
          item
          container
          onClick={() => (window.location.href = props.socialLink)}
          xs={4}
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={styles.socialBox}
          >
            <Grid
              container
              item
              xs={5}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Image alt={`${props.socialName}Logo!`} src={props.image} />
            </Grid>
            <Grid container item direction="column" justifyContent="center" xs>
              <Hidden mdDown>
                <h2 className={clsx(styles.socialTitle, "montserrat-medium")}>
                  {props.socialName}
                </h2>
              </Hidden>
              <h2 className={clsx(styles.socialHandle, "montserrat-medium")}>
                {props.handle}
              </h2>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
}

ContactMeSquare.propTypes = exact(propTypes);

export default ContactMeSquare;
