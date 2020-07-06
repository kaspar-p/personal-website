import React from "react";
import Grid from "@material-ui/core/Grid";
import { isMobile, downloadFile } from "../lib";

class RSPaper extends React.Component {
  async componentDidMount() {
    if (!isMobile()) downloadFile();
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: "95vh", lineHeight: "50px" }}
      >
        <button onClick={downloadFile} className="like-link">
          <h2
            className="montserrat-medium text-center hover-underline reed-solomon-paper-link"
            style={{ lineHeight: "1" }}
          >
            {isMobile()
              ? "Downloading files is unsupported on mobile devices!"
              : "If the download does not begin after 5 seconds, click this text"}
          </h2>
        </button>
      </Grid>
    );
  }
}

export default RSPaper;
