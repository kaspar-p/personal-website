import { NeuralNetwork } from "./lib/nn";

import { mutate } from "./genetic";

class Controller {
  constructor(passedBrain, p5Instance, size) {
    this.size = size;
    this.p5Instance = p5Instance;

    // Initial values
    this.gravity = 9.8;
    this.cart_mass = 1;
    this.pole_mass1 = 0.1;
    this.pole_mass2 = 0.1;

    // Length from end of pole to center
    this.l1 = 0.5;
    this.l2 = 0.5;

    this.radius = this.size / 6;

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
      this.randomInRange(-2, 2),
      this.randomInRange(-2, 2),
      this.randomInRange(-0.1, 0.1),
      this.randomInRange(-1.9, 1.9),
      this.randomInRange(-0.1, 0.1),
      this.randomInRange(-1.9, 1.9),
    ];
  }

  changeSize(newSize) {
    this.size = newSize;
  }

  randomInRange(lowerBound, upperBound) {
    return lowerBound + Math.random() * (upperBound - lowerBound);
  }

  copy() {
    return new Controller(this.brain, this.p5Instance, this.size);
  }

  // A function that actually makes the prediction from the NN
  chooseAction() {
    // Run the NN
    const [leftConfidence, rightConfidence, force] = this.brain.predict(
      this.state
    );

    // Scale the direction left or right depending on confidence
    const chosenDirection = leftConfidence > rightConfidence ? -1 : 1;

    // The final vector for the force
    return chosenDirection * force * 10;
  }

  //the big called function, connects everything
  update() {
    //a number that ranges from -10 to 10 representing force
    const action = this.chooseAction();
    this.runDoublePhysics(action);
    this.score++;
  }

  polarToCartesian(x, y, length, angle) {
    return {
      x: x + length * Math.cos(angle),
      y: y + length * Math.sin(angle),
    };
  }

  display() {
    const [x, , theta1, , theta2] = this.state;

    const cart = {
      x: this.size / 2 + x * 5,
      y: this.size / 2,
    };

    const offset = (3 * Math.PI) / 2;

    // Polar to cartesian conversion
    const pole1 = this.polarToCartesian(
      cart.x,
      cart.y,
      this.radius * this.l1,
      theta1 + offset
    );

    const pole2 = this.polarToCartesian(
      pole1.x,
      pole1.y,
      this.radius * this.l2,
      theta2 + offset
    );

    // Draw the cart
    this.p5Instance.rectMode(this.p5Instance.CENTER);
    this.p5Instance.fill(47, 73, 114);
    this.p5Instance.rect(cart.x, this.size / 2, this.size / 10, this.size / 40);

    // Draw the first pole, cart to joint
    this.p5Instance.line(cart.x, cart.y, pole1.x, pole1.y);

    // Draw the joint
    this.p5Instance.fill(0);
    this.p5Instance.fill(209, 132, 16);
    this.p5Instance.ellipse(pole1.x, pole1.y, this.size / 60);

    // Draw the second pole, joint to bob
    this.p5Instance.line(pole1.x, pole1.y, pole2.x, pole2.y);

    // Draw the bob
    this.p5Instance.fill(209, 132, 16);
    this.p5Instance.ellipse(pole2.x, pole2.y, this.size / 60);
  }

  runDoublePhysics(action) {
    // These are used in the big equations, so they start as 0
    let x_double_dot = 0;
    let theta1_double_dot = 0;
    let theta2_double_dot = 0;

    // Number ranging from -10 to 10
    const force = action;
    let [x, x_dot, theta1, theta1_dot, theta2, theta2_dot] = this.state;

    // The actual length of the rod, l1 and l2 are just the length to the center of masses
    // L1 and L2 are equal
    const L1 = 2 * this.l1;

    // Moments of inertia
    const j1 = (1 / 3) * this.pole_mass1 * this.l1 * this.l1;
    const j2 = (1 / 3) * this.pole_mass2 * this.l2 * this.l2;

    // Quality-of-life variables, to make things more readable
    const h1 = this.cart_mass + this.pole_mass1 + this.pole_mass2;
    const h2 = this.pole_mass1 * this.l1 + this.pole_mass2 * L1;
    const h3 = this.pole_mass2 * this.l2;
    const h4 =
      this.pole_mass1 * this.l1 * this.l1 + this.pole_mass2 * L1 * L1 + j1;
    const h5 = this.pole_mass2 * this.l2 * L1;
    const h6 = this.pole_mass2 * this.l2 * this.l2 + j2;
    const h7 =
      this.pole_mass1 * this.l1 * this.gravity +
      this.pole_mass2 * L1 * this.gravity;
    const h8 = this.pole_mass2 * this.l2 * this.gravity;

    // The three equations of motion, each solved for their respective parts
    x_double_dot =
      (h2 * theta1_dot * theta1_dot * Math.sin(theta1) +
        h3 * theta2_dot * theta2_dot * Math.sin(theta2) +
        force -
        h2 * theta1_double_dot * Math.cos(theta1) -
        h3 * theta2_double_dot * Math.cos(theta2)) /
      h1;

    theta1_double_dot =
      (h7 * Math.sin(theta1) -
        h5 * theta2_dot * theta2_dot * Math.sin(theta1 - theta2) -
        h2 * Math.cos(theta1) * x_double_dot -
        h5 * Math.cos(theta1 - theta2) * theta2_double_dot) /
      h4;

    theta2_double_dot =
      (h5 * theta1_dot * theta1_dot * Math.sin(theta1 - theta2) +
        h8 * Math.sin(theta2) -
        h3 * Math.cos(theta2) * x_double_dot -
        h5 * Math.cos(theta1 - theta2) * theta1_double_dot) /
      h6;

    // Re-update the states so that the effects can compound
    x = x + x_dot * this.dt;
    x_dot += this.dt * x_double_dot;

    theta1 += theta1_dot * this.dt;
    theta1_dot += theta1_double_dot * this.dt;

    theta2 += theta2_dot * this.dt;
    theta2_dot += theta2_double_dot * this.dt;

    // This is a failsafe
    // If for some reason the accelerations added onto each other, that would result in jerk
    // Which means everything goes out of control
    x_double_dot = 0;
    theta1_double_dot = 0;
    theta2_double_dot = 0;

    // Re-update state
    this.state = [x, x_dot, theta1, theta1_dot, theta2, theta2_dot];
  }
}

export default Controller;
