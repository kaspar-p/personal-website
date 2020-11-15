import React from "react";
import HomeAnimation from "../components/HomeAnimation";
import Grid from "@material-ui/core/Grid";

import "../assets/css/homePage.css";

function Home(props) {
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
        className="title-row"
      >
        <h1 item className="home-title">
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
      >
        <a item className="home-option" href="../projects">
          my creations
        </a>
        <a item className="home-option" href="../updates">
          recent updates
        </a>
        <a item className="home-option" href="../contact-me">
          contact me
        </a>
      </Grid>
    </Grid>
    // <div>
    //   <div className="three-margin verticalCenter">
    //     <header className="header container-fluid no-padding no-margin row">
    //       <h1 className="montserrat-medium homePageTitle">kaspar poland</h1>
    //     </header>
    //     <br />
    //     <ul className="navMenu montserrat-medium">
    //       <hr className="showForSmallScreen pageDivider" />
    // <a href="../projects">
    //   <li className="max-width hover-underline text-left pageLink">
    //     my creations
    //   </li>
    // </a>
    //       <hr className="showForSmallScreen pageDivider" />
    //       <a href="../updates">
    //         <li className="max-width hover-underline text-left pageLink">
    //           recent updates
    //         </li>
    //       </a>
    //       <hr className="showForSmallScreen pageDivider" />
    //       <a href="../contact-me">
    //         <li className="max-width hover-underline text-left pageLink">
    //           contact me
    //         </li>
    //       </a>
    //     </ul>
    //   </div>
    //   <Circles />
    // </div>
  );
}

export default Home;
