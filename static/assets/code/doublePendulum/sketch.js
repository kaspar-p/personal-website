// AP project, made by Kaspar Poland
// This was done in April, 2018
// Eveything here, save the p5.js files and lib folder was programmed by me

let controllers = [];
let savedControllers = [];
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

//for viewing the best at any time, not yet implemented
let bestController;
let thisGenBest;

// Variables to do with the canvas and its position in the greater website
let canvas;
let size;
let newFontSize;

function windowResized() {
  size = 0.4 * windowWidth;
  newFontSize = map(size, 200, 600, 15, 50);
  canvas = resizeCanvas(size, size);
  cycleSlider.position(-0.35 * windowWidth / 2, size - size / 12);
}

function setup() {
  size = 0.4 * windowWidth;
  newFontSize = map(size, 200, 600, 15, 50);
  canvas = createCanvas(size, size);
  canvas.parent("sketchHolder");
  background(51);

  //make entirely new controllers
  for (i = 0; i < TOTAL; i++) {
    controllers.push(new Controller());
  }

  //to start the bestController train, chose a random one
  bestController = controllers[0];
  bestController.score = 0;

  //for gene selection
  for (c of controllers) {
    savedControllers.push(c);
  }

  //where and how I want the slider
  push();

  cycleSlider = createSlider(1, 1000, 2);
  cycleSlider.style("width", "35vw");
  // Width / 2, and the height minus a little to keep it in the border
  cycleSlider.position(-0.35 * windowWidth / 2, size - size / 12);
  cycleSlider.id("slider");
  cycleSlider.parent("sliderHolder");

  pop();
}

function draw() {
  //what the slider is at
  cycles = cycleSlider.value();

  //I can do multiple runs of this program per tick, and if this was a difficult problem, I might
  for (let n = 0; n < cycles; n++) {
    background(51);
    //loop through backwards to prevent skipping
    for (let i = controllers.length - 1; i >= 0; i--) {
      let c = controllers[i];

      //this is the bounds... such as x_bound and theta_bound
      if (shouldDie(c) == false) {
        //keep the program going
        c.update();
      } else if (shouldDie(c) == true) {
        //kill the controller
        controllers.splice(i, 1);
      }
    }

    if (controllers.length == 1 && controllers[0].score > bestController.score) {
      bestController = controllers[0];
    }

    if (controllers.length == 1) {
      thisGenBest = controllers[0];
    }

    //if there are no controllers left
    //this signals the end of a generation
    if (controllers.length == 0) {
      //make a new generation
      makeNewGeneration();
      timeStep = 0;
      //up the generation counter
      genCount++;
    }

    timeStep++;
  }

  // The entire GUI function, deals with all of the drawing
  // Not in the for loop because the display doesn't need to be sped up
  // Just the computation
  displayAll();
}

function displayAll() {
  // The display functions
  stroke(255);
  strokeWeight(map(size, 200, 600, 0.5, 3));
  line(0, size / 2, width, size / 2);

  // Display the controllers
  for (let i = 0; i < controllers.length; i += 1) {
    const c = controllers[i];
    strokeWeight(1);
    c.display();
  }

  // The generation counter above the controllers
  fill(255);
  noStroke();
  textAlign(LEFT, BOTTOM);
  textSize(newFontSize);

  text("Current Score: ", size / 30, size - size / 6);
  text(timeStep, size - size / 6, size - size / 6);

  text("Generation: ", size / 30, 3 * size / 4);
  text(genCount, size - size / 6, 3 * size / 4);
}

//returns array of object with the highest score
function highscore(list) {
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

//pass in a controller, which has an x and a y
function shouldDie(c) {
  let cx = c.state[0]; //QOL
  let ct1 = c.state[2]; //QOL
  let ct2 = c.state[4]; //QOL

  //if the states are in any way outside the bounds, this is a boolean
  let decision = cx < -x_bound || cx > x_bound || ct1 > theta_bound || ct1 < -theta_bound || ct2 > theta_bound || ct2 < -theta_bound;

  return decision;
}
