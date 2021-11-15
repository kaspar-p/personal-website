import React, { useContext } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { WidthContext } from "../App";

import "../assets/css/project-bar.css";

function ProjectBar(props) {
  const width = useContext(WidthContext);

  const stopShowingBlurbWidth = 1375;

  let projectBar = (
    <Grid
      item
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
      className="project-bar"
      lg={11}
      xs={10}
      onClick={() => (window.location = props.path)}
      style={{
        borderTop: props.isFirst ? "black solid 2px" : "none",
      }}
    >
      <img
        item="true"
        className="project-img"
        height={width > stopShowingBlurbWidth ? "90%" : "75%"}
        width={width > stopShowingBlurbWidth ? "auto" : "75%"}
        alt={props.title}
        src={props.image}
      />
      <Grid
        item
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        xs={3}
        className="project-text-section"
      >
        <div className="project-title">
          <h2>{props.title}</h2>
        </div>
        {width > stopShowingBlurbWidth ? (
          <div className="project-blurb">
            <p>{props.blurb}</p>
          </div>
        ) : null}
      </Grid>
    </Grid>
  );

  return projectBar;
}

ProjectBar.propTypes = PropTypes.exact({
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isFirst: PropTypes.bool.isRequired,
}).isRequired;

export default ProjectBar;
