import React, { useContext } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { WidthContext } from "../App";

import TwitterLogo from "../assets/images/contactme/twitterLogo.png";
import GithubLogo from "../assets/images/contactme/githubLogo.png";
import InstagramLogo from "../assets/images/contactme/instagramLogo.jpg";
import LinkedInLogo from "../assets/images/contactme/linkedinLogo.png";

import "../assets/css/contact-me.css";

function ContactMeSquare(props) {
  const width = useContext(WidthContext);

  const nameToImageSrcMap = new Map();
  nameToImageSrcMap.set("Github", GithubLogo);
  nameToImageSrcMap.set("Twitter", TwitterLogo);
  nameToImageSrcMap.set("Instagram", InstagramLogo);
  nameToImageSrcMap.set("LinkedIn", LinkedInLogo);

  const mapSizeToImgWidth = (size) => {
    switch (size) {
      case "small":
        return "20%";
      case "medium":
        return "50%";
      case "large":
        return "100%";
      default:
        console.log("invalid size passed into image!");
    }
  };
  const mapWidthToSize = (width) => {
    if (width > 1400) {
      return "large";
    } else if (width <= 1400 && width > 700) {
      return "medium";
    } else {
      return "small";
    }
  };

  // The largest size has a different layout, so we have to split the cases
  const smallOrMedium = (size) => (
    <Grid container xs={12} item direction="row" justify="center">
      <a item="true" className="social-box text-center" href={props.socialLink}>
        <Grid container direction="column" justify="center" alignItems="center">
          {size !== "small" && (
            <Grid item xs className="social-title">
              <h2 className="montserrat-medium social-name">
                {props.socialName}
              </h2>
            </Grid>
          )}
          {/* Centers the image on small screens */}
          <Grid container direction="row" justify="center" className="img-div">
            <img
              className="logo-img"
              width={mapSizeToImgWidth(size)}
              alt={`${props.socialName}Logo!`}
              src={nameToImageSrcMap.get(props.socialName)}
            />
          </Grid>
          <Grid item xs>
            <h2 className="montserrat-medium social-handle">{props.handle}</h2>
          </Grid>
        </Grid>
      </a>
    </Grid>
  );

  const bigSize = (
    <Grid container item xs={4} direction="row" justify="center">
      <a item="true" className="social-box text-center" href={props.socialLink}>
        <Grid container direction="row" justify="center" alignItems="center">
          {/* Centers the image on small screens */}
          <Grid
            container
            item
            xs={4}
            direction="row"
            alignItems="center"
            justify="center"
            className="img-div"
          >
            <img
              className="logo-img"
              width="100%"
              alt={`${props.socialName}Logo!`}
              src={nameToImageSrcMap.get(props.socialName)}
            />
          </Grid>
          <Grid
            container
            item
            direction="column"
            justify="center"
            xs
            className="social-title"
          >
            <h2 className="montserrat-medium social-name">
              {props.socialName}
            </h2>
            <h2 className="montserrat-medium social-handle">{props.handle}</h2>
          </Grid>
        </Grid>
      </a>
    </Grid>
  );

  let size = mapWidthToSize(width);

  if (width > 1400) {
    return bigSize;
  } else if (width <= 1400) {
    return smallOrMedium(size);
  }
}

ContactMeSquare.propTypes = PropTypes.exact({
  socialName: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  socialLink: PropTypes.string.isRequired,
}).isRequired;

export default ContactMeSquare;
