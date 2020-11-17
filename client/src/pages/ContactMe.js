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

class ContactMe extends React.Component {
  constructor(props) {
    super(props);

    this.updateWidth = this.updateWidth.bind(this);

    this.state = {
      width: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  updateWidth() {
    this.setState({ width: window.innerWidth });
  }

  render() {
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
            <ContactMeSquare {...socialData.Github} width={this.state.width} />

            {/* INSTAGRAM */}
            <ContactMeSquare
              {...socialData.Instagram}
              width={this.state.width}
            />
          </Grid>

          <Grid container direction="row" justify="center">
            {/* TWITTER */}
            <ContactMeSquare {...socialData.Twitter} width={this.state.width} />

            {/* LINKEDIN */}
            <ContactMeSquare
              {...socialData.LinkedIn}
              width={this.state.width}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default ContactMe;
