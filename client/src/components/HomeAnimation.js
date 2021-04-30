import React, { useEffect, useState, useContext } from "react";
import * as Curve from "@visx/curve";
import * as Shape from "@visx/shape";
import SimplexNoise from "simplex-noise";
import _ from "lodash";

import { WidthContext } from "../App";

function HomeAnimation() {
  const pageWidth = useContext(WidthContext);

  // CONSTANTS FOR HOW THE ANIMATION SHOULD LOOK
  const animationSpeed = 10; // How often to update, in ms (min of 1)
  const noiseGranularity = 20; // How tight the waves should be
  const noiseStep = 0.02; // How fast to scroll through dimensions

  const simplexNoise = new SimplexNoise(1);

  // Page layout constants
  const width = 500;
  const height = 150;
  const maxWidth = 1540;

  const titleColor = "#212529";

  const [step, setStep] = useState(Math.random());

  // Update the step variable by [noiseStep] every [animationSpeed] ms
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((current) => current + noiseStep);
    }, animationSpeed);
    return () => clearInterval(interval);
  }, []);

  const calculateData = (value) => {
    const newData = [];

    _.times(width / noiseGranularity, (x) => {
      const noiseVal = 3 * x * simplexNoise.noise2D(step, x);

      newData.push([x * noiseGranularity, noiseVal + height / 2]);
    });

    return newData;
  };

  return pageWidth > maxWidth ? (
    <svg width={width} height={height}>
      <Shape.LinePath
        curve={Curve.curveCatmullRom}
        data={calculateData(step)}
        stroke={titleColor}
        strokeWidth={8}
      />
    </svg>
  ) : null;
}

export default HomeAnimation;
