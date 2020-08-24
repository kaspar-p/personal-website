import React from "react";
import _ from "lodash";

import "../assets/css/circles.css";

function Circles(props) {
  const rate = 0.6;
  const offset = -12;
  const fromLeftOffset = 930;
  const pixelsBetween = 20;

  return (
    <div className="squareWrapper">
      {_.times(20, i => (
        <div
          className="circle-wrapper"
          key={i}
          style={{
            left: fromLeftOffset + i * pixelsBetween,
            animationDelay: `${offset + rate * i}s`
          }}
        >
          <div className="circle"></div>
        </div>
      ))}
    </div>
  );
}

export default Circles;
