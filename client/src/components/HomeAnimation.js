import React, { useEffect, useState } from "react";
import * as Curve from "@visx/curve";
import * as Shape from "@visx/shape";
import SimplexNoise from "simplex-noise";
import _ from "lodash";

import "../assets/css/circles.css";

function HomeAnimation(props) {
  // How often, in ms, to update state
  let animationSpeed = 1;

  let noiseGranularity = 20;

  let noiseStep = 0.02;

  let simplexNoise = new SimplexNoise(1);

  let width = 500;
  let height = 100;

  let maxWidth = 1540;

  const [step, setStep] = useState(0);

  useEffect(
    () =>
      setInterval(
        () => setStep((currentStep) => currentStep + noiseStep),
        animationSpeed
      ),
    []
  );

  let calculateData = (value) => {
    let newData = [];

    _.times(width / noiseGranularity, (x) => {
      let step = x + value;

      let noiseVal = 3 * x * simplexNoise.noise2D(step, step);

      newData.push([x * noiseGranularity, noiseVal + height / 2]);
    });

    return newData;
  };

  return props.width > maxWidth ? (
    <svg width={width} height={height}>
      <Shape.LinePath
        curve={Curve.curveCatmullRom}
        data={calculateData(step)}
        stroke="black"
        strokeWidth={5}
      />
    </svg>
  ) : null;
}

export default HomeAnimation;
