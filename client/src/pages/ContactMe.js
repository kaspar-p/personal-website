import React from "react";
import { Grid } from "@material-ui/core";

import TitleBar from "../components/TitleBar";
import ContactMeSquare from "../components/ContactMeSquare";

import "../assets/css/contact-me.css";

const socialData = {
  Instagram: {
    socialName: "Instagram",
    handle: "@kaspar.p",
    socialLink: "https://instagram.com/kaspar.p",
  },
  Github: {
    socialName: "Github",
    handle: "@kaspar78",
    socialLink: "https://github.com/kaspar78",
  },
  Twitter: {
    socialName: "Twitter",
    handle: "@kasparFpoland",
    socialLink: "https://twitter.com/kasparFpoland",
  },
  LinkedIn: {
    socialName: "LinkedIn",
    handle: "@Kaspar Poland",
    socialLink: "https://www.linkedin.com/in/kaspar-p-48b115110",
  },
};

function ContactMe() {
  return (
    <React.Fragment>
      <TitleBar title="contact me" />
      <Grid container direction="column">
        <Grid item container justify="center">
          <h4 className="col-auto montserrat-medium email">
            kaspar78@mouco.com
          </h4>
        </Grid>

        <Grid container direction="row" justify="center">
          {/* GITHUB */}
          <ContactMeSquare {...socialData.Github} />

          {/* INSTAGRAM */}
          <ContactMeSquare {...socialData.Instagram} />
        </Grid>

        <Grid container direction="row" justify="center">
          {/* TWITTER */}
          <ContactMeSquare {...socialData.Twitter} />

          {/* LINKEDIN */}
          <ContactMeSquare {...socialData.LinkedIn} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default ContactMe;
