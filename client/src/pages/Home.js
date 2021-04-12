import React from "react";
import HomeAnimation from "../components/HomeAnimation";
import Grid from "@material-ui/core/Grid";

import "../assets/css/home-page.css";

function Home() {
  return (
    <Grid
      container
      className="home-body montserrat-medium"
      direction="column"
      justify="flex-end"
      alignItems="flex-start"
    >
      <Grid
        item
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        className="title-row"
      >
        <h1 item="true" className="home-title">
          kaspar poland
        </h1>
        <HomeAnimation width={window.innerWidth} />
      </Grid>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        className="home-options-wrapper"
        xs={6}
      >
        <a item="true" className="home-option" href="../projects">
          my creations
        </a>
        <a item="true" className="home-option" href="../updates">
          recent updates
        </a>
        <a item="true" className="home-option" href="../contact-me">
          contact me
        </a>
      </Grid>
    </Grid>
  );
}

export default Home;
