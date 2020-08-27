import React from "react";
import _ from "lodash";

import "../assets/css/loading-page.css";

class LoadingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { width: window.outerWidth, height: window.outerHeight };
  }

  componentDidMount() {
    window.addEventListener("resize", () =>
      this.setState({ width: window.outerWidth, height: window.outerHeight })
    );
  }

  render() {
    const width = 40;

    const jumpHeight = 120;

    const numPoints = 15;

    return (
      <div className="loading-page-wrapper">
        {_.times(numPoints, (n) => {
          const x = (n - numPoints / 2) * (1.5 * width + 10);

          return (
            <div
              className="circle"
              style={{
                offsetPath: `path("M ${
                  x + width * 2
                },${100} l ${0},-${jumpHeight}")`,
                animationDelay: `-${n}s`,
              }}
            ></div>
          );
        })}
      </div>
    );
  }
}

export default LoadingPage;
