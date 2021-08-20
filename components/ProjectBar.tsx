import React from "react";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import { Hidden, Typography } from "@material-ui/core";

const propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
  isFirst: PropTypes.bool.isRequired,
};

type ProjectBarProps = PropTypes.InferProps<typeof propTypes>;

const borderLine = "3px solid black";

const useStyles = makeStyles({
  textSection: {
    width: "30%",
    paddingLeft: "6vh",
  },
  projectContainer: {
    cursor: "pointer",
    padding: "2rem 0",
    borderBottom: borderLine,
    width: "70%",
    "&:hover": {
      paddingBottom: "2.75rem",
      paddingTop: "1.25rem",
    },
  },
  image: {
    width: "30%",
  },
});

function ProjectBar({ isFirst, title, path, blurb, image }: ProjectBarProps) {
  const styles = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      onClick={() => (window.location = path)}
      className={styles.projectContainer}
      style={isFirst ? { borderTop: borderLine } : {}}
    >
      <Image src={image} alt={title} className={styles.image} />

      <Hidden lgDown>
        <Grid
          item
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          className={styles.textSection}
        >
          <div>
            <h2>{title}</h2>
          </div>

          <Typography>{blurb}</Typography>
        </Grid>
      </Hidden>

      <Hidden xlUp>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={styles.textSection}
          xs={12}
        >
          <div>
            <h2>{title}</h2>
          </div>
        </Grid>
      </Hidden>
    </Grid>
  );
}

ProjectBar.propTypes = exact(propTypes);

export default ProjectBar;
