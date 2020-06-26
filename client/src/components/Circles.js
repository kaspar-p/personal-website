import React from "react";
import circleImg from "../assets/images/blackCircle.png";
import "../assets/css/circles.css";

function Squares(props) {
  const rate = 0.6;
  const offset = -12;
  const fromLeftOffset = 920;
  const pixelsBetween = 20;

  const squares = [];
  for (let i = 0; i < 20; i++) {
    squares.push(
      <div
        className="square"
        key={i}
        style={{
          left: fromLeftOffset + i * pixelsBetween,
          animationDelay: `${offset + rate * i}s`
        }}
      >
        <img
          className="customImg"
          src={circleImg}
          alt="Black Circle"
          height="40"
          width="40"
        />
      </div>
    );
  }

  return <div className="squareWrapper">{squares}</div>;
}

export default Squares;
