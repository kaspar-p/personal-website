import React from "react";
import { Grid } from "@material-ui/core";

import "../assets/css/not-found.css";

function NotFound(props) {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className="not-found"
    >
      It seems that you have stumbled onto a page that doesn't exist.{"\n"}
      <a href="/">
        <h3 className="hover-underline montserrat-medium return-to-safety">
          return to safety
        </h3>
      </a>
    </Grid>
  );
}

export default NotFound;
