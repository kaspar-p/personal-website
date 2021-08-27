import React from "react";
import exact from "prop-types-exact";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactMeSquare from "../components/ContactMeSquare";

import GithubLogo from "../images/contact-me/githubLogo.png";
import InstagramLogo from "../images/contact-me/instagramLogo.jpg";
import LinkedInLogo from "../images/contact-me/linkedInLogo.png";
import TwitterLogo from "../images/contact-me/twitterLogo.png";
import clsx from "clsx";

const propTypes = {};

const socialData = {
  Instagram: {
    socialName: "Instagram",
    handle: "@kaspar.p",
    socialLink: "https://instagram.com/kaspar.p",
    image: InstagramLogo,
  },
  Github: {
    socialName: "Github",
    handle: "@kaspar-p",
    socialLink: "https://github.com/kaspar-p",
    image: GithubLogo,
  },
  Twitter: {
    socialName: "Twitter",
    handle: "@kasparFpoland",
    socialLink: "https://twitter.com/kasparFpoland",
    image: TwitterLogo,
  },
  LinkedIn: {
    socialName: "LinkedIn",
    handle: "@Kaspar Poland",
    socialLink: "https://www.linkedin.com/in/kaspar-p-48b115110",
    image: LinkedInLogo,
  },
};

const useStyles = makeStyles({
  email: {
    fontSize: "2rem",
  },
});

function ContactMe() {
  const styles = useStyles();

  const spacing = 0;

  return (
    <Grid container direction="column">
      <Header title="contact me" />

      <Grid item container justify="center">
        <h4 className={clsx("montserrat-medium", styles.email)}>
          kaspar78@mouco.com
        </h4>
      </Grid>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={spacing}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={spacing}
        >
          <ContactMeSquare {...socialData.Github} />
          <ContactMeSquare {...socialData.Instagram} />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={spacing}
        >
          <ContactMeSquare {...socialData.Twitter} />
          <ContactMeSquare {...socialData.LinkedIn} />
        </Grid>
      </Grid>

      <Footer />
    </Grid>
  );
}

ContactMe.propTypes = exact(propTypes);

export default ContactMe;
