import React from "react";
import TitleBar from "../components/TitleBar";
import nnImage from "../assets/images/double-pendulum/nn.png";
import { sketch } from "../assets/code/doublePendulum/sketch";
import p5 from "p5";

import { projects } from "../lib";

import "../assets/css/doublePendulum.css";

class DoublePendulum extends React.Component {
  componentDidMount() {
    this.mySketch = new p5(sketch);
  }

  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <TitleBar title={projects.doublePendulum.title} />
        <div className="row justify-content-center">
          <div id="sliderHolder"></div>
        </div>
        <div className="row justify-content-center">
          <div id="sketchHolder"></div>
        </div>

        <div className="row justify-content-center textWrapper">
          <div className="col-10 col-lg-7">
            <h3 className="montserrat-light"> How do I use the program?</h3>

            <p>
              You just watch! The slider at the bottom controls how fast the
              simulation runs, but beyond that, there is no interaction. Sit
              back and watch learning happen!
            </p>

            <h3 className="montserrat-light">
              What does this program actually do?
            </h3>
            <p>
              Well, it learns. Each cart (blue rectangle with poles atop) has a
              brain. That brain is what's called a neural network. The point of
              this program is for the carts to learn how to balance their poles
              for as long as possible. This is done with a genetic algorithm in
              combination with a neural network, to create something called
              neuro-evolution. It sounds fancy, but the effect is special to
              watch.
            </p>

            <h3 className="montserrat-light">
              How does that work and what do those words mean?
            </h3>
            <p>
              Calculus, to put it simply. Neural networks are computational
              imitations of a human brain, and when each cart is fed input about
              its surroundings, it uses some complex math to make a decision.
            </p>
            <p>
              Neural networks are only one piece of the puzzle. There also needs
              to be a system for them to change. A decision making machine (the
              neural network) is nothing if it can't change and learn after
              making the wrong decision. That's where genetic evolution comes
              in. Evolution works by changing little things about a species
              every generation, and hoping that those changes positively
              affected the species to live longer or better. The same effect is
              simulated here.
            </p>
            <p>
              The algorithm begins with the first generation of 1000 carts. To
              simulate a lifecycle (similar to what real animals experience),
              there are bounds to how far their poles can go in each direction
              before they are classified as dead and removed. Every frame, the
              remaining carts gain +1 score. This keeps going, until they all
              die. The cart that survived the longest did the best, and is
              selected to pass their genes down onto the next generation. Those
              genes are slightly mutated, and the new generation of 1000 carts
              is born. This process continues for each generation, slowly
              improving the gene pool until a cart is finally able to balance
              their poles forever.
            </p>
            <p>
              There is a little more that goes on behind the scenes, though.
            </p>
            <p>
              Another term: fitness functions. Essentially for AI to be able to
              rank themselves, we need to quantify success. A fitness function
              is a way to do that. For our purposes, our fitness function was
              simply the amount of time the cart was alive. Fitness functions
              have everything to do with the final goal. Because we want the
              carts to balance forever, selecting carts that stood the longest
              edges us slowly towards that goal.
            </p>
            <p>
              The fitness function could be anything, and are tailored to the
              goal of the program. If we had made an AI trying to jump, then the
              fitness function might be the maximum height the AI tried to jump,
              and slowly the AI would get better at jumping. For this program,
              we will stick to the cart's age.
            </p>
            <p>
              Now to the good stuff: how does the cart balance? Well, that
              requires discussion of its brain. As mentioned before, its brain
              is a neural network with 6 input neurons, 2 hidden layers with 10
              nodes each, and an output layer with 3 neurons.
            </p>

            <div className="row justify-content-center">
              <div className="col-10 text-center">
                <img className="w-75" src={nnImage} alt="Neural Network" />
              </div>
            </div>

            <p>
              From left to right, the picture above depicts a neural network
              with 6 inputs, 2 hidden layers with 10 nodes each, and 3 output
              nodes. Without diving too far into how neural networks make
              decisions, we can discuss what affects a decision for a neural
              network.
            </p>
            <p>
              If that made no sense to you, don't worry about it. The only
              important part to non AI people is the 3 output neurons.
              Essentially, a neural network takes input numbers, does
              calculations (remember the calculus up there), and spits out
              numbers for each output node. So every time a cart makes a
              decision, 3 numbers are outputted. For this program, each cart
              makes a decision each frame. To make that decision, it uses its
              six inputs: its position, its velocity, the angle of first pole,
              the angular velocity of the first pole, the angle of the second
              pole, and the angular velocity of the second pole. Essentially,
              those 6 pieces of data that tell the cart where each of its body
              parts are and how they are moving. The cart then uses these
              inputs, does some number crunching, and spits out three output
              numbers. Each number means something specific in how the decision
              is affected.
            </p>
            <p>
              The first number represents the amount of force the cart wants to
              put into its next movement on a scale of 0 to 1 (0 being no force,
              1 being lots of force). The second and third numbers are simpler.
              They compare against each other and whichever is highest is the
              direction that force is applied. If the second neuron is a higher
              number than the third, the cart applies the force from the first
              neuron to the left, and if the third neuron has a higher value
              than the second, that force is applied to the right. For example,
              if the numbers are (1, 1, 0), then lots of force is applied to the
              left, but at (0.4, 0, 1), there is a medium amount of force
              applied to the right. At every frame, the cart makes this
              decision. The direction and force are applied at the next frame,
              and the cart makes another decision. This cycles for each cart
              until that cart dies.
            </p>
            <p>
              In essence, that's all there is to it. The carts learn. They end
              up learning how to balance at an average (not tested or measured,
              only noticed) at generation 1000. Because it is based on random
              initial conditions and genetic mutations (as all genetic
              algorithms are), the lowest generation I've seen them learn at was
              565, and the highest was ~14,000.
            </p>

            <h3 className="montserrat-light">Where is this project going?</h3>
            <p>
              Right now, nowhere. When I finished this version of the program I
              immediately had an idea to make it better. I wanted the pendulum
              to learn to succeed with 1 joint on top, and once it hit some
              arbitrary point of success, say, being able to stay alive for
              10,000 frames, it would get another joint added onto the end. This
              would be really interesting to test if the skills needed to
              balance one pole carried to balancing two, or three, or an
              infinite amount. I imagine they would, and would simply refine to
              the point of perfection, but who knows. This version of the
              program is in the works, but programming a symbolic mathematical
              calculator to do differentials and integrals is harder than I
              thought it would be.
            </p>

            <h3 className="montserrat-light">That's it...</h3>
            <p>
              I hope there was something to be learned. Checkout my other
              projects!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default DoublePendulum;
