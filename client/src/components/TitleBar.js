import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import "../assets/css/titleBar.css";

class TitleBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.outerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", (event) =>
      this.setState({ width: window.outerWidth })
    );
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        id="headerWrapper"
        style={{ marginTop: "1vw", padding: "0 20px 0 20px" }}
      >
        <Grid
          item
          container
          direction="row"
          justify={this.state.width < 700 ? "center" : "space-between"}
          alignItems="center"
        >
          <div item="true" className="buttonItemWrapper homeWrapper">
            <button
              className="buttonsButton like-link homeButton hover-underline"
              onClick={() => (window.location.href = "/")}
              href="#"
            >
              <h1 className="montserrat-medium buttonFS center-title">home</h1>
            </button>
          </div>
          <div item="true" className="buttonItemWrapper backWrapper">
            <button
              className="buttonsButton like-link backButton hover-underline"
              onClick={() => window.history.back(-1)}
              href="#"
            >
              <h1 className="montserrat-medium buttonFS center-title">back</h1>
            </button>
          </div>
        </Grid>
        {this.props.title ? (
          <h1 item="true" id="title" className="montserrat-medium center-title">
            {this.props.title}
          </h1>
        ) : null}
      </Grid>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleBar;
