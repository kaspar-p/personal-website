// AP project, made by Kaspar Poland
// This was done in April, 2018
// Everything here, save the p5.js files and lib folder was programmed by me

import Controller from "./controller";
import { normalizeFitness, generateNew } from "./genetic";

export const sketch = (p) => {
  let controllers = [];
  let savedControllers = [];
  const TOTAL = 100;

  //running counter of the generations... a GUI thing
  let genCount = 0;
  let timeStep = 0;

  //this is for the speed, and speeding it up
  //as well as the slider
  let cycles = 0;
  let cycleSlider;

  //this is the threshold for the angle and position, so the thing doesn't go out of control
  const theta_bound = 3.14 / 4;
  const x_bound = 25;

  // eslint-disable-next-line no-unused-vars
  let canvas;

  // Variables to do with the canvas and its position in the greater website
  let size;
  const sizeFactor = 0.25;
  let newFontSize;

  // eslint-disable-next-line no-param-reassign
  p.windowResized = () => {
    size = sizeFactor * p.windowWidth;
    controllers.forEach((controller) => controller.changeSize(size));
    newFontSize = p.map(size, 200, 600, 15, 50);
    canvas = p.resizeCanvas(size, size);

    const sliderHolder = document.getElementById("sliderHolder");

    if (sliderHolder) {
      const { left } = sliderHolder;
      cycleSlider.position(left - size / 20, -size / 8);
    }
  };

  // eslint-disable-next-line no-param-reassign
  p.setup = () => {
    size = sizeFactor * p.windowWidth;
    newFontSize = p.map(size, 200, 600, 15, 50);
    canvas = p.createCanvas(size, size);
    // canvas.parent("sketchHolder");
    p.background(51);

    // Make new list of Controllers
    for (let i = 0; i < TOTAL; i++) {
      controllers.push(new Controller(null, p, size));
    }

    //for gene selection
    for (const c of controllers) {
      savedControllers.push(c);
    }

    // Where and how I want the slider
    p.push();

    cycleSlider = p.createSlider(1, 1000, 2);
    cycleSlider.style("width", "35vw");
    // Width / 2, and the height minus a little to keep it in the border
    // cycleSlider.position((-0.35 * p.windowWidth) / 2, size - size / 12);
    const sliderHolder = document.getElementById("sliderHolder");

    if (sliderHolder) {
      const { left } = sliderHolder;
      cycleSlider.position(left - size / 20, -size / 8);
      cycleSlider.id("slider");
      cycleSlider.parent("sliderHolder");
    }

    p.pop();
  };

  // eslint-disable-next-line no-param-reassign
  p.draw = () => {
    cycles = cycleSlider.value();

    p.background(51);
    for (let n = 0; n < cycles; n++) {
      // Loop through backwards to prevent skipping
      for (let i = controllers.length - 1; i >= 0; i--) {
        const controller = controllers[i];

        if (!shouldDie(controller)) {
          controller.update(p);
        } else {
          controllers.splice(i, 1);
        }
      }

      // There are no controllers left - end a generation
      if (controllers.length === 0) {
        // Make a new generation
        makeNewGeneration(p);
        timeStep = 0;
        genCount++;
      }

      timeStep++;
    }

    // The entire GUI function, deals with all of the drawing
    // Not in the for loop because the display doesn't need to be sped up
    // Just the computation
    displayAll();
  };

  function displayAll() {
    // The display functions
    p.stroke(255);
    p.strokeWeight(p.map(size, 200, 600, 0.5, 3));
    p.line(0, size / 2, p.width, size / 2);

    // Display the controllers
    for (const controller of controllers) {
      p.strokeWeight(1);
      controller.display();
    }

    // The generation counter above the controllers
    p.fill(255);
    p.noStroke();
    p.textAlign(p.LEFT, p.BOTTOM);
    p.textSize(newFontSize);

    p.text("Current Score: ", size / 30, size - size / 6);
    p.text(timeStep, size - size / 6, size - size / 6);

    p.text("Generation: ", size / 30, (3 * size) / 4);
    p.text(genCount, size - size / 6, (3 * size) / 4);
  }

  const outOfBounds = (variable, bound) =>
    variable > bound || variable < -bound;

  // Pass in a controller, which has an x and a y
  function shouldDie(c) {
    const [x, , theta1, , theta2] = c.state;

    // If the states are in any way outside the bounds
    const decision =
      outOfBounds(x, x_bound) ||
      outOfBounds(theta1, theta_bound) ||
      outOfBounds(theta2, theta_bound);

    return decision;
  }

  function makeNewGeneration() {
    // Set fitness values between 0 and 1
    savedControllers = normalizeFitness(savedControllers);

    // After the controller array is empty, since they all died, we need new ones
    controllers = generateNew(savedControllers);

    // Recopy for the next generation
    savedControllers = [...controllers];
  }
};
