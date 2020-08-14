import React from "react";
import Grid from "@material-ui/core/Grid";

import "../assets/css/project-bar.css";

class ProjectBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.outerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () =>
      this.setState({ width: window.outerWidth })
    );
  }

  render() {
    return (
      <Grid
        item
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className="project-bar"
        style={{ marginBottom: "2rem" }}
        lg={8}
        xs={11}
        onClick={() => (window.location = this.props.path)}
      >
        <img
          item="true"
          className="project-img"
          height="90%"
          width={this.state.width > 960 ? "auto" : "100%"}
          alt={this.props.title}
          src={this.props.image}
          style={{ marginBottom: "2rem" }}
        />
        <Grid
          item
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          xs={6}
          className="project-text-section"
        >
          <div className="project-title">
            <h2>{this.props.title}</h2>
          </div>
          {this.state.width > 960 ? (
            <div className="project-blurb">
              <p>{this.props.blurb}</p>
            </div>
          ) : null}
        </Grid>
      </Grid>
    );
  }
}

export default ProjectBar;
