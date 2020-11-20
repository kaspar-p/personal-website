import React, { useContext } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { WidthContext } from "../App";

import "../assets/css/title-bar.css";

function TitleBar(props) {
  const width = useContext(WidthContext);

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      id="headerWrapper" // I know this says vw. It works how it is, even thought vw makes no sense for a margin-top
      style={{ marginTop: "1vw", padding: "0 20px 0 20px" }}
    >
      <Grid
        item
        container
        direction="row"
        justify={width < 700 ? "center" : "space-between"}
        alignItems="center"
      >
        <div item="true" className="buttonItemWrapper homeWrapper">
          <button
            className="buttonsButton like-link homeButton hover-underline"
            onClick={() => (window.location.href = "/")}
            href="#"
          >
            <h1 className="montserrat-medium buttonFS center-title">home</h1>
          </button>
        </div>
        <div item="true" className="buttonItemWrapper backWrapper">
          <button
            className="buttonsButton like-link backButton hover-underline"
            onClick={() => window.history.back(-1)}
            href="#"
          >
            <h1 className="montserrat-medium buttonFS center-title">back</h1>
          </button>
        </div>
      </Grid>
      {props.title ? (
        <h1 item="true" id="title" className="montserrat-medium center-title">
          {props.title}
        </h1>
      ) : null}
    </Grid>
  );
}

TitleBar.propTypes = PropTypes.exact({
  title: PropTypes.string.isRequired,
}).isRequired;

export default TitleBar;
