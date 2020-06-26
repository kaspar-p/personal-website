// AP project, made by Kaspar Poland
// This was done in April, 2018
// Eveything here, save the p5.js files and lib folder was programmed by me

import { normalizeFitness, generateNew } from "./genetic";
import { NeuralNetwork } from "./lib/nn";

export let controllers = [];
export let savedControllers = [];
const TOTAL = 1000;

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

// Variables to do with the canvas and its position in the greater website
let canvas;
export let size;
let newFontSize;

let outsideP;
export default outsideP;

export const sketch = p => {
  outsideP = p;

  p.windowResized = () => {
    size = 0.4 * p.windowWidth;
    newFontSize = p.map(size, 200, 600, 15, 50);
    canvas = p.resizeCanvas(size, size);
    cycleSlider.position((-0.35 * p.windowWidth) / 2, size - size / 12);
  };

  p.setup = () => {
    size = 0.4 * p.windowWidth;
    newFontSize = p.map(size, 200, 600, 15, 50);
    canvas = p.createCanvas(size, size);
    canvas.parent("sketchHolder");
    p.background(51);

    // Make entirely new controllers
    for (let i = 0; i < TOTAL; i++) {
      controllers.push(new Controller(null, p));
    }

    //for gene selection
    for (let c of controllers) {
      savedControllers.push(c);
    }

    // Where and how I want the slider
    p.push();

    cycleSlider = p.createSlider(1, 1000, 2);
    cycleSlider.style("width", "35vw");
    // Width / 2, and the height minus a little to keep it in the border
    cycleSlider.position((-0.35 * p.windowWidth) / 2, size - size / 12);
    cycleSlider.id("slider");
    cycleSlider.parent("sliderHolder");

    p.pop();
  };

  p.draw = () => {
    cycles = cycleSlider.value();

    for (let n = 0; n < cycles; n++) {
      p.background(51);
      //loop through backwards to prevent skipping
      for (let i = controllers.length - 1; i >= 0; i--) {
        let c = controllers[i];

        //this is the bounds... such as x_bound and theta_bound
        if (shouldDie(c) === false) {
          //keep the program going
          c.update(p);
        } else if (shouldDie(c) === true) {
          //kill the controller
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
    for (let i = 0; i < controllers.length; i += 1) {
      const c = controllers[i];
      p.strokeWeight(1);
      c.display(p);
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

  //pass in a controller, which has an x and a y
  function shouldDie(c) {
    let cx = c.state[0]; //QOL
    let ct1 = c.state[2]; //QOL
    let ct2 = c.state[4]; //QOL

    //if the states are in any way outside the bounds, this is a boolean
    let decision =
      cx < -x_bound ||
      cx > x_bound ||
      ct1 > theta_bound ||
      ct1 < -theta_bound ||
      ct2 > theta_bound ||
      ct2 < -theta_bound;

    return decision;
  }

  function makeNewGeneration() {
    // Set fitness values between 0 and 1
    normalizeFitness(savedControllers);

    // After the controller array is empty, since they all died, we need new ones
    controllers = generateNew(savedControllers);

    // Recopy for the next generation
    savedControllers = [...controllers];
  }

  function mutate(x) {
    //10% chance
    if (Math.random() < 0.1) {
      //this is a normal distribution, toned down a bit
      let mutatedX = x + p.randomGaussian() * 0.5;
      return mutatedX;
    } else {
      return x;
    }
  }

  class Controller {
    constructor(passedBrain) {
      // Initial values
      this.gravity = 9.8;
      this.cart_mass = 1;
      this.pole_mass1 = 0.1;
      this.pole_mass2 = 0.1;

      // Length from end of pole to center
      this.l1 = 0.5;
      this.l2 = 0.5;

      this.radius = size / 6;

      // Slow down time
      this.dt = 0.02;

      if (passedBrain instanceof NeuralNetwork) {
        // Mutate the brain given by parent
        this.brain = passedBrain.copy();
        this.brain.mutate(mutate);
      } else {
        // If this is an original controller, make a whole new brain
        // 6 inputs nodes for each of the elements in state
        // Two layers of 25 for complexity
        // 3 output nodes corresponding to left, right, and strength
        this.brain = new NeuralNetwork(6, 25, 25, 3);
      }

      //the score is literally the amount of frames they have been alive for
      this.score = 0;

      //a value from 0-1, the lowest of this is the best. This represents the best of the bunch
      this.fitness = 0;

      //set the state initially with a little bit of variation in the x and theta
      //set the derivatives of this variation to the same, this makes it a little bit
      //more exciting and robust, as they now learn to deal with bad situations and
      //cannot simply be "born rich"
      this.state = [
        p.random(-2, 2),
        p.random(-1, 1),
        p.random(-1.9, 1.9),
        p.random(-1, 1),
        p.random(-1.9, 1.9),
        p.random(-1, 1)
      ];
    }

    copy() {
      return new Controller(this.brain);
    }

    //a function that actually makes the prediction from the NN
    chooseAction() {
      //make an empty array
      let inputs = [];

      //fill it with everything in this.state
      for (let x of this.state) {
        inputs.push(x);
      }

      //each of the numbers outputted by the brain
      //the length is equal to the output nodes of the brain, which is 4
      let actionArray = this.brain.predict(inputs);

      //direction is for the first 2 nodes. this is left or right
      let directionArray = [actionArray[0], actionArray[1]];

      //the amount they want to give to these nodes is how much force they want to used
      //this ends up creating more sophistication which is good
      let chosenMagnitude = p.map(actionArray[2], 0, 1, 0, 10);

      //returns a the value of the spot. For example, if the controller wants
      //to go left, they choose index 0, and a number there. This is that number
      //this ends up being a 1 or a -1
      let chosenDirection = 2 * highscore(directionArray) - 1;

      //the final vector for the force
      let finalAction = chosenDirection * chosenMagnitude;
      return finalAction;
    }

    //the big called function, connects everything
    update() {
      //a number that ranges from -10 to 10 representing force
      let action = this.chooseAction();
      this.runDoublePhysics(action);
      this.score++;
    }

    display() {
      let state = this.state;

      let cart_x = size / 2 + state[0] * 5;
      let cart_y = size / 2;

      let theta1 = state[2];
      let theta2 = state[4];

      let offset = (3 * p.PI) / 2;

      //polar to cartesian conversion
      let pole1_x = cart_x + this.radius * this.l1 * p.cos(theta1 + offset);
      let pole1_y = cart_y + this.radius * this.l1 * p.sin(theta1 + offset);

      let pole2_x = pole1_x + this.radius * this.l2 * p.cos(theta2 + offset);
      let pole2_y = pole1_y + this.radius * this.l2 * p.sin(theta2 + offset);

      //cart
      p.rectMode(p.CENTER);
      p.fill(47, 73, 114);
      p.rect(cart_x, size / 2, size / 10, size / 40);

      //first pole, cart to joint
      p.line(cart_x, cart_y, pole1_x, pole1_y);

      //joint
      p.fill(0);
      p.fill(209, 132, 16);
      p.ellipse(pole1_x, pole1_y, size / 60);

      //second pole, joint to bob
      p.line(pole1_x, pole1_y, pole2_x, pole2_y);

      // Bob
      p.fill(209, 132, 16);
      p.ellipse(pole2_x, pole2_y, size / 60);
    }

    runDoublePhysics(action) {
      // These are used in the big equations, so they start as 0
      let x_double_dot = 0;
      let theta1_double_dot = 0;
      let theta2_double_dot = 0;

      // Number ranging from -10 to 10
      let force = action;

      // QOL variable
      let s = this.state;

      // Variables to be used in the EOM
      let x = s[0];
      let x_dot = s[1];

      let theta1 = s[2];
      let theta1_dot = s[3];

      let theta2 = s[4];
      let theta2_dot = s[5];

      // The actual length of the rod, l1 and l2 are just the length to the center of masses
      // L1 and L2 are equal
      let L1 = 2 * this.l1;

      // Moments of inertia
      let j1 = (1 / 3) * this.pole_mass1 * this.l1 * this.l1;
      let j2 = (1 / 3) * this.pole_mass2 * this.l2 * this.l2;

      // QOL variables, to make things more readable
      let h1 = this.cart_mass + this.pole_mass1 + this.pole_mass2;
      let h2 = this.pole_mass1 * this.l1 + this.pole_mass2 * L1;
      let h3 = this.pole_mass2 * this.l2;
      let h4 =
        this.pole_mass1 * this.l1 * this.l1 + this.pole_mass2 * L1 * L1 + j1;
      let h5 = this.pole_mass2 * this.l2 * L1;
      let h6 = this.pole_mass2 * this.l2 * this.l2 + j2;
      let h7 =
        this.pole_mass1 * this.l1 * this.gravity +
        this.pole_mass2 * L1 * this.gravity;
      let h8 = this.pole_mass2 * this.l2 * this.gravity;

      // The three equations of motion, each solved for their respective parts
      x_double_dot =
        (h2 * theta1_dot * theta1_dot * p.sin(theta1) +
          h3 * theta2_dot * theta2_dot * p.sin(theta2) +
          force -
          h2 * theta1_double_dot * p.cos(theta1) -
          h3 * theta2_double_dot * p.cos(theta2)) /
        h1;

      theta1_double_dot =
        (h7 * p.sin(theta1) -
          h5 * theta2_dot * theta2_dot * p.sin(theta1 - theta2) -
          h2 * p.cos(theta1) * x_double_dot -
          h5 * p.cos(theta1 - theta2) * theta2_double_dot) /
        h4;

      theta2_double_dot =
        (h5 * theta1_dot * theta1_dot * p.sin(theta1 - theta2) +
          h8 * p.sin(theta2) -
          h3 * p.cos(theta2) * x_double_dot -
          h5 * p.cos(theta1 - theta2) * theta1_double_dot) /
        h6;

      // Reupdate the states so that the effects can compound
      x = x + x_dot * this.dt;
      x_dot += this.dt * x_double_dot;

      theta1 += theta1_dot * this.dt;
      theta1_dot += theta1_double_dot * this.dt;

      theta2 += theta2_dot * this.dt;
      theta2_dot += theta2_double_dot * this.dt;

      // This is a failsafe
      // If for some reason the accelerations added onto eachother, that would result in jerk
      // Which means everything goes out of control
      x_double_dot = 0;
      theta1_double_dot = 0;
      theta2_double_dot = 0;

      // Reupdate state
      this.state = [x, x_dot, theta1, theta1_dot, theta2, theta2_dot];
    }
  }
};

// Returns array of object with the highest score
export function highscore(list) {
  //set the current highscore. This could be -Infinity
  //but for this application, 0 is low enough
  //has to be easily beatable
  let highscore = 0;

  //this will be the final value chosen
  let decided;

  //go through the list passed in
  for (let i = 0; i < list.length; i++) {
    let c = list[i]; //QOL

    if (c > highscore) {
      highscore = c;
      decided = i;
    }
  }

  return decided;
}
