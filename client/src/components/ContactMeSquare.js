import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import TwitterLogo from "../assets/images/contactme/twitterLogo.png";
import GithubLogo from "../assets/images/contactme/githubLogo.png";
import InstagramLogo from "../assets/images/contactme/instagramLogo.jpg";
import LinkedInLogo from "../assets/images/contactme/linkedinLogo.png";

import "../assets/css/contactme.css";

function ContactMeSquare(props) {
  const nameToImageSrcMap = new Map();
  nameToImageSrcMap.set("Github", GithubLogo);
  nameToImageSrcMap.set("Twitter", TwitterLogo);
  nameToImageSrcMap.set("Instagram", InstagramLogo);
  nameToImageSrcMap.set("LinkedIn", LinkedInLogo);

  const smallSize = (
    <Grid container direction="row" justify="center">
      <a className="col-12 socialBox text-center" href={props.socialLink}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className="no-margin no-padding"
        >
          {/* Centers the image on small screens */}
          <Grid
            container
            direction="row"
            justify="center"
            className="no-margin no-padding imgDiv"
          >
            <img
              className="logoImg"
              width="20%"
              alt={`${props.socialName}Logo`}
              src={nameToImageSrcMap.get(props.socialName)}
            />
          </Grid>
          <div item="true" className="col no-margin no-padding">
            <h2 className="montserrat-medium socialHandle">{props.handle}</h2>
          </div>
        </Grid>
      </a>
    </Grid>
  );

  const mediumSize = (
    <Grid container direction="row" justify="center">
      <a className="col-7 socialBox text-center" href={props.socialLink}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className="no-margin no-padding"
        >
          <div item="true" className="col no-margin no-padding socialTitle">
            <h2 className="montserrat-medium socialName">{props.socialName}</h2>
          </div>
          {/* Centers the image on small screens */}
          <Grid
            container
            direction="row"
            justify="center"
            className="no-margin no-padding imgDiv"
          >
            <img
              className="logoImg"
              width="50%"
              alt={`${props.socialName}Logo`}
              src={nameToImageSrcMap.get(props.socialName)}
            />
          </Grid>
          <div item="true" className="col no-margin no-padding">
            <h2 className="montserrat-medium socialHandle">{props.handle}</h2>
          </div>
        </Grid>
      </a>
    </Grid>
  );

  const bigSize = (
    <div className="socialBox col-4">
      <a className="text-center" href={props.socialLink}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className="row no-margin no-padding"
        >
          {/* Centers the image on small screens */}
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            className="col-4 no-margin no-padding imgDiv"
          >
            <img
              className="logoImg"
              width="100%"
              alt={`${props.socialName}Logo!`}
              src={nameToImageSrcMap.get(props.socialName)}
            />
          </Grid>
          <Grid
            container
            direction="column"
            justify="center"
            className="col no-margin no-padding socialTitle"
          >
            <h2 className="montserrat-medium socialName">{props.socialName}</h2>
            <h2 className="montserrat-medium socialHandle">{props.handle}</h2>
          </Grid>
        </Grid>
      </a>
    </div>
  );

  if (props.width > 1400) {
    return bigSize;
  } else if (props.width <= 1400 && props.width > 700) {
    return mediumSize;
  } else {
    return smallSize;
  }
}

ContactMeSquare.propTypes = {
  width: PropTypes.number.isRequired,
  socialName: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  socialLink: PropTypes.string.isRequired,
};

export default ContactMeSquare;
