import React from "react";
import { Grid } from "@material-ui/core";

import "../assets/css/notfound.css";

function NotFound(props) {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{
        height: "100vh",
        padding: "0",
        margin: 0,
        textAlign: "center"
      }}
    >
      <div item="true" className="text-center" style={{ margin: 0 }}>
        It seems that you have stumbled onto a page that doesn't exist.{"\n"}
      </div>

      <a href="/">
        <h3
          item="true"
          className="hover-underline montserrat-medium fs-2rem return-to-safety"
        >
          return to safety
        </h3>
      </a>
    </Grid>
  );
}

export default NotFound;
