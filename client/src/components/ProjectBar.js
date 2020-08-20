import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import "../assets/css/project-bar.css";

function ProjectBar(props) {
  return (
    <Grid
      item
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
      className="project-bar"
      style={{ marginBottom: "2rem" }}
      lg={8}
      xs={11}
      onClick={() => (window.location = props.path)}
      style={{ borderTop: props.isFirst ? "black solid 2px" : "none" }}
    >
      <img
        item="true"
        className="project-img"
        height="90%"
        width={props.width > 960 ? "auto" : "100%"}
        alt={props.title}
        src={props.image}
        style={{ marginBottom: "2rem" }}
      />
      <Grid
        item
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        xs={6}
        className="project-text-section"
      >
        <div className="project-title">
          <h2>{props.title}</h2>
        </div>
        {props.width > 960 ? (
          <div className="project-blurb">
            <p>{props.blurb}</p>
          </div>
        ) : null}
      </Grid>
    </Grid>
  );
}

ProjectBar.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default ProjectBar;
