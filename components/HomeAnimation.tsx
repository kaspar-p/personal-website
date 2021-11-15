import React, { useEffect, useState } from "react";
import * as Curve from "@visx/curve";
import * as Shape from "@visx/shape";
import SimplexNoise from "simplex-noise";
import exact from "prop-types-exact";
import _ from "lodash";

const propTypes = {};

function HomeAnimation() {
  // CONSTANTS FOR HOW THE ANIMATION SHOULD LOOK
  const animationSpeed = 10; // How often to update, in ms (min of 1)
  const noiseGranularity = 20; // How tight the waves should be
  const noiseStep = 0.02; // How fast to scroll through dimensions

  const simplexNoise = new SimplexNoise(1);

  // Page layout constants
  const width = 500;
  const height = 150;

  const titleColor = "#212529";

  const [step, setStep] = useState<number>(Math.random());

  // Update the step variable by [noiseStep] every [animationSpeed] ms
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((current) => current + noiseStep);
    }, animationSpeed);
    return () => clearInterval(interval);
  }, []);

  const calculateData = (step: number): [number, number][] => {
    const newData: [number, number][] = [];

    _.times(width / noiseGranularity, (x) => {
      const noiseVal = 3 * x * simplexNoise.noise2D(step, x);

      newData.push([x * noiseGranularity, noiseVal + height / 2]);
    });

    return newData;
  };

  return (
    <svg width={width} height={height}>
      <Shape.LinePath
        curve={Curve.curveCatmullRom}
        data={calculateData(step)}
        stroke={titleColor}
        strokeWidth={8}
      />
    </svg>
  );
}

HomeAnimation.propTypes = exact(propTypes);

export default HomeAnimation;
