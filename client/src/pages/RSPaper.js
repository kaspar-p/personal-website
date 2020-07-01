import React from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

class RSPaper extends React.Component {
  async componentDidMount() {
    this.downloadFile();
  }

  async downloadFile() {
    const response = await axios({
      method: "get",
      url: "/api/rs-paper",
      responseType: "blob"
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "OnTheConstructionOfReedSolomonCodes.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{ height: "95vh" }}
      >
        <button onClick={this.downloadFile} className="like-link">
          <h2 className="montserrat-medium text-center hover-underline reed-solomon-paper-link">
            If the download does not begin after 5 seconds, click this text
          </h2>
        </button>
      </Grid>
    );
  }
}

export default RSPaper;
