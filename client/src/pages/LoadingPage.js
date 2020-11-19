import React, { useState, useEffect } from "react";
import _ from "lodash";
import SimplexNoise from "simplex-noise";
import * as Shape from "@visx/shape";
import * as Curve from "@visx/curve";
import Grid from "@material-ui/core/Grid";

import "../assets/css/loading-page.css";

function LoadingPage() {
  // CONSTANTS FOR HOW THE ANIMATION SHOULD LOOK
  const animationSpeed = 1; // How often to update, in ms (min of 1)
  const noiseGranularity = 10; // How tight the waves should be
  const noiseStep = 0.002; // How fast to scroll through dimensions

  const simplexNoise = new SimplexNoise(1);

  // Page layout constants
  const width = 1000;
  const height = 50;

  const [step, setStep] = useState(0);

  const updateState = () => {
    setStep((currentStep) => currentStep + noiseStep);
  };

  // Update the step variable by [noiseStep] every [animationSpeed] ms
  useEffect(() => {
    setInterval(updateState, animationSpeed);
    return () => clearInterval(updateState);
  });

  const calculateData = (value) => {
    const newData = [];

    _.times(width / noiseGranularity, (x) => {
      const step = x + value;

      const noiseVal = 10 * simplexNoise.noise2D(step, step);

      newData.push([x * noiseGranularity, noiseVal + height / 2]);
    });

    return newData;
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className="loading-page-wrapper"
    >
      <svg item="true" width={width} height={height}>
        <Shape.LinePath
          curve={Curve.curveCatmullRom}
          data={calculateData(step)}
          stroke="black"
          strokeWidth={8}
        />
      </svg>
    </Grid>
  );
}

export default LoadingPage;
