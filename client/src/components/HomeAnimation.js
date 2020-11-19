import React, { useEffect, useState } from "react";
import * as Curve from "@visx/curve";
import * as Shape from "@visx/shape";
import SimplexNoise from "simplex-noise";
import _ from "lodash";

function HomeAnimation(props) {
  // CONSTANTS FOR HOW THE ANIMATION SHOULD LOOK
  const animationSpeed = 1; // How often to update, in ms (min of 1)
  const noiseGranularity = 20; // How tight the waves should be
  const noiseStep = 0.002; // How fast to scroll through dimensions

  const simplexNoise = new SimplexNoise(1);

  // Page layout constants
  const width = 500;
  const height = 150;
  const maxWidth = 1540;

  const [step, setStep] = useState(0);

  // Update the step variable by [noiseStep] every [animationSpeed] ms
  useEffect(() => {
    setInterval(() => {
      setStep((currentStep) => currentStep + noiseStep);
      //setTransformedStep(currentS);
    }, animationSpeed);
  });

  const calculateData = (value) => {
    const newData = [];

    _.times(width / noiseGranularity, (x) => {
      const step = x + value;
      const noiseVal = 3 * x * simplexNoise.noise2D(step, step);

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
        strokeWidth={8}
      />
    </svg>
  ) : null;
}

export default HomeAnimation;
