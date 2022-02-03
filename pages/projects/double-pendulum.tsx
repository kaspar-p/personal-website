// import React from "react";
// import exact from "prop-types-exact";
// import { makeStyles } from "@material-ui/styles";
// import { Grid, Typography } from "@material-ui/core";
// import Image from "next/image";
// import dynamic from "next/dynamic";

// import p5 from "p5";

// import Header from "../../components/Header";
// import nnImage from "../../images/double-pendulum/nn.png";
// import Footer from "../../components/Footer";

// const P5Wrapper = dynamic(() => import("react-p5-wrapper"), { ssr: false });
// import { sketch } from "../../project-code/doublePendulum/sketch";

// const propTypes = {};

// const useStyles = makeStyles({
//   sketchContainer: {
//     padding: "2% 5%",
//   },
//   imageContainer: {
//     paddingLeft: "25%",
//     paddingRight: "25%",
//   },
//   image: {
//     width: "30%",
//   },
//   doublePendulumContainer: {
//     paddingTop: "2rem",
//   },
//   textContainer: {
//     fontSize: "1rem",
//   },
//   text: {
//     fontSize: "0.9rem",
//   },
// });

// function DoublePendulum() {
//   console.log("sketch: ", sketch);
//   const styles = useStyles();

//   const p5Sketch = (p: p5) => {
//     sketch(p);
//   };

//   return (
//     <Grid container direction="column">
//       <Header title="double pendulum learning simulation" />

//       <Grid
//         item
//         container
//         direction="column"
//         justifyContent="center"
//         alignItems="center"
//         xs={12}
//         className={styles.doublePendulumContainer}
//       >
//         <div>
//           <P5Wrapper sketch={p5Sketch} />
//           <div id="sketchHolder"></div>
//           <div id="sliderHolder"></div>
//         </div>

//         <Grid
//           item
//           container
//           direction="column"
//           xs={8}
//           lg={6}
//           className={styles.textContainer}
//         >
//           <h3 className="montserrat-light"> How do I use the program?</h3>

//           <Typography className={styles.text}>
//             You just watch! Sit back and watch learning happen!
//           </Typography>

//           <h3 className="montserrat-light">
//             What does this program actually do?
//           </h3>
//           <Typography className={styles.text}>
//             Well, it learns. Each cart (blue rectangle with poles atop) has a
//             brain. That brain is what&apos;s called a neural network. The point
//             of this program is for the carts to learn how to balance their poles
//             for as long as possible. This is done with a genetic algorithm in
//             combination with a neural network, to create something called
//             neuroevolution. It sounds fancy, but the effect is special to watch.
//           </Typography>

//           <h3 className="montserrat-light">
//             How does that work and what do those words mean?
//           </h3>
//           <Typography className={styles.text}>
//             Calculus, to put it simply. Neural networks are computational
//             imitations of a human brain, and when each cart is fed input about
//             its surroundings, it uses some complex math to make a decision.
//           </Typography>
//           <br />
//           <Typography className={styles.text}>
//             Neural networks are only one piece of the puzzle. There also needs
//             to be a system for them to change. A decision making machine (the
//             neural network) is nothing if it can&apos;t change and learn after
//             making the wrong decision. That&apos;s where genetic evolution comes
//             in. Evolution works by changing little things about a species every
//             generation, and hoping that those changes positively affected the
//             species to live longer or better. The same effect is simulated here.
//           </Typography>
//           <br />
//           <Typography className={styles.text}>
//             The algorithm begins with the first generation of 1000 carts. To
//             simulate a lifecycle (similar to what real animals experience),
//             there are bounds to how far their poles can go in each direction
//             before they are classified as dead and removed. Every frame, the
//             remaining carts gain +1 score. This keeps going, until they all die.
//             The cart that survived the longest did the best, and is selected to
//             pass their genes down onto the next generation. Those genes are
//             slightly mutated, and the new generation of 1000 carts is born. This
//             process continues for each generation, slowly improving the gene
//             pool until a cart is finally able to balance their poles forever.
//           </Typography>
//           <br />
//           <Typography className={styles.text}>
//             There is a little more that goes on behind the scenes, though.
//           </Typography>
//           <br />
//           <Typography className={styles.text}>
//             Another term: fitness functions. Essentially for AI to be able to
//             rank themselves, we need to quantify success. A fitness function is
//             a way to do that. For our purposes, our fitness function was simply
//             the amount of time the cart was alive. Fitness functions have
//             everything to do with the final goal. Because we want the carts to
//             balance forever, selecting carts that stood the longest edges us
//             slowly towards that goal.
//           </Typography>
//           <br />
//           <Typography className={styles.text}>
//             The fitness function could be anything, and are tailored to the goal
//             of the program. If we had made an AI trying to jump, then the
//             fitness function might be the maximum height the AI tried to jump,
//             and slowly the AI would get better at jumping. For this program, we
//             will stick to the cart&apos;s age.
//           </Typography>
//           <br />
//           <Typography className={styles.text}>
//             Now to the good stuff: how does the cart balance? Well, that
//             requires discussion of its brain. As mentioned before, its brain is
//             a neural network with 6 input neurons, 2 hidden layers with 10 nodes
//             each, and an output layer with 3 neurons.
//           </Typography>
//           <div className={styles.imageContainer}>
//             <Image
//               className={styles.image}
//               src={nnImage}
//               alt="Neural Network"
//             />
//           </div>

//           <Typography className={styles.text}>
//             From left to right, the picture above depicts a neural network with
//             6 inputs, 2 hidden layers with 10 nodes each, and 3 output nodes.
//             Without diving too far into how neural networks make decisions, we
//             can discuss what affects a decision for a neural network.
//           </Typography>
//           <br />
//           <Typography className={styles.text}>
//             If that made no sense to you, don&apos;t worry about it. The only
//             important part to non AI people is the 3 output neurons.
//             Essentially, a neural network takes input numbers, does calculations
//             (remember the calculus up there), and spits out numbers for each
//             output node. So every time a cart makes a decision, 3 numbers are
//             outputted. For this program, each cart makes a decision each frame.
//             To make that decision, it uses its six inputs: its position, its
//             velocity, the angle of first pole, the angular velocity of the first
//             pole, the angle of the second pole, and the angular velocity of the
//             second pole. Essentially, those 6 pieces of data that tell the cart
//             where each of its body parts are and how they are moving. The cart
//             then uses these inputs, does some number crunching, and spits out
//             three output numbers. Each number means something specific in how
//             the decision is affected.
//           </Typography>
//           <br />
//           <Typography className={styles.text}>
//             The first number represents the amount of force the cart wants to
//             put into its next movement on a scale of 0 to 1 (0 being no force, 1
//             being lots of force). The second and third numbers are simpler. They
//             compare against each other and whichever is highest is the direction
//             that force is applied. If the second neuron is a higher number than
//             the third, the cart applies the force from the first neuron to the
//             left, and if the third neuron has a higher value than the second,
//             that force is applied to the right. For example, if the numbers are
//             (1, 1, 0), then lots of force is applied to the left, but at (0.4,
//             0, 1), there is a medium amount of force applied to the right. At
//             every frame, the cart makes this decision. The direction and force
//             are applied at the next frame, and the cart makes another decision.
//             This cycles for each cart until that cart dies.
//           </Typography>
//           <br />
//           <Typography className={styles.text}>
//             In essence, that&apos;s all there is to it. The carts learn. They
//             end up learning how to balance at an average (not tested or
//             measured, only noticed) at generation 1000. Because it is based on
//             random initial conditions and genetic mutations (as all genetic
//             algorithms are), the lowest generation I&apos;ve seen them learn at
//             was 565, and the highest was ~14,000.
//           </Typography>

//           <h3 className="montserrat-light">Where is this project going?</h3>
//           <Typography className={styles.text}>
//             Right now, nowhere. When I finished this version of the program I
//             immediately had an idea to make it better. I wanted the pendulum to
//             learn to succeed with 1 joint on top, and once it hit some arbitrary
//             point of success, say, being able to stay alive for 10,000 frames,
//             it would get another joint added onto the end. This would be really
//             interesting to test if the skills needed to balance one pole carried
//             to balancing two, or three, or an infinite amount. I imagine they
//             would, and would simply refine to the point of perfection, but who
//             knows. This version of the program is in the works, but programming
//             a symbolic mathematical calculator to do differentials and integrals
//             is harder than I thought it would be.
//           </Typography>

//           <h3 className="montserrat-light">That&apos;s it...</h3>
//           <Typography className={styles.text}>
//             I hope there was something to be learned. Checkout my other
//             projects!
//           </Typography>
//         </Grid>

//         <Footer />
//       </Grid>
//     </Grid>
//   );
// }

// DoublePendulum.propTypes = exact(propTypes);

// export default DoublePendulum;
