import React from "react";
import TitleBar from "../components/TitleBar";
import { projects } from "../lib";

// Documentation for the writeup found in ./pages/TuringMachineWriteupDraft.md
import "../assets/css/turing-machine.css";

class TuringMachine extends React.Component {
  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <TitleBar title={projects.turingMachine.title} />

        <div className="row justify-content-center textWrapper">
          <div className="col-10 col-lg-7">
            <h3 className="montserrat-light">How do I use the program?</h3>
            <p>
              Well, there isn't much to do! This project is an interesting
              proof-of-concept, from a computer science perspective. I'm sort of
              noticing a trend, that the projects I make are not very involving,
              in terms of users.
            </p>
            <p>
              The project is a Turing Machine that's been designed to
              programmatically compute and return the Fibonacci sequence. The
              Fibonacci sequence might sound familiar, and it is very simple to
              construct. Beginning with a 0 and a 1, the next term in the
              sequence is computed by adding the two terms before it. So, for
              term 1 being 0, term 2 being 1, term 3 is then 0 + 1 = 1. Then 1 +
              1 = 2. Then 1 + 2 = 3. Then 2 + 3 = 5. And so on. The goal of this
              project was to get a Turing Machine to compute this sequence by
              itself.
            </p>

            <h3 className="montserrat-light">But what is a Turing Machine?</h3>
            <p>
              Invented by and named after Alan Turing in 1936, Turing Machines
              are thought-experiments that represent the minimum computable
              setup needed to still be able to do useful work. Here's the way it
              works. A Turing Machine is a box that holds a piece of state, 4
              actions, and a tape. The tape is thought to be infinitely long,
              and divided into little cells. Each cell can hold a piece of
              information, called a symbol. The state of the Turing Machine can
              also hold a symbol. The 4 actions of the Turing Machine are
              outlined as such:
            </p>
            <ol>
              <li>The Turing Machine can move left or right by 1 cell.</li>
              <li>
                The Turing Machine can read the state of the cell at its current
                position on the tape.
              </li>
              <li>
                The Turing Machine can write a symbol onto the tape at its
                current position. This symbol could be whatever is in the Turing
                Machine's state, or it could be any available symbol.
              </li>
              <li>
                The Turing Machine can execute a set of rules based upon the
                previous three properties. For example, there could exist that
                says if the Turing machine "reads" a character that isn't a 0,
                write a 0, and if it does encounter a 0, move on to the next
                cell. This is a simple Turing Machine algorithm to convert every
                cell on the tape to 0's.
              </li>
            </ol>

            <h3 className="montserrat-light">How is it implemented?</h3>
            <p>
              There are two classes I've built, demonstrated above. There is a
              class called TuringMachine, and a class called
              TuringMachineWrapper. This introduces the idea of an abstraction.
              The TuringMachine is really the code version of the 4 rules that
              are implemented. Everything done by this program could be done
              working directly with that TuringMachine class, but it'd be a
              hassle. This is why we abstract.
            </p>
            <p>
              For example, take the idea of the Turing Machine's movement. Along
              the tape, in any one action, the Turing Machine can move either 1
              cell to the left or 1 cell to the right. While this is sufficient
              to move anywhere along that infinite tape, it becomes frustrating
              to implement an algorithm that goes from end to end of a sequence
              of hundreds of symbols, one cell at a time. That's why abstraction
              is so useful. The TuringMachineWrapper uses extra functionality to
              move very quickly. It does this by looping over the
              TuringMachine's single movement, as often as it needs until it
              reaches the desired spot on the tape.
            </p>
            <p>
              The action of bundling many movement actions into one action is a
              common goal of abstraction: to exploit a feature of the simple
              action to make it repeatable and easy to conceptualize. If the
              Turing Machine is at position 0, and it needs to go to position
              100, conceptualizing "move to position 100" is much easier than
              repeating the "move to the right" action 100 times.
            </p>

            <h3 className="montserrat-light">
              How can abstraction be used to add numbers?
            </h3>
            <p>
              We can use these principles of abstraction to perform repeatable
              actions that are applicable in many situations. Here, it begins to
              link back to computing the Fibonacci sequence.
            </p>
            <p>
              For example, take adding two multi-digit numbers. When doing
              addition like this, the simple, grade-school way of doing it, is
              to start at the right of the number, and add the two digits. Then,
              if there is a carry, carry it, and add the next column. Continue
              this until there are no columns left, and the number left over is
              the sum of the two inputs. None of these actions are things that
              Turing Machine's can do on its own. But there are steps it can
              take in that direction. Adding two numbers is very essential to
              computation, and a Turing Machine can be made to perform this
              action. It takes many layers of the more "simple" actions that it
              can do, to finally perform an action that is important to humans.
            </p>
            <p>
              To convert adding two numbers into language a Turing Machine
              recognizes, we need to translate the numbers onto the tape that
              the Turing Machine sees. The easiest way to do this is to write
              down the first number, each digit to its own cell, and to the
              right of it, put the second number, a digit at the time. The sum
              of the digits will replace the digits taken up by the second
              number.
            </p>
            <p>
              The Turing Machine does what we would do in our mind. It moves to
              the end of the first number (using repeated, single-cell
              movements) and stores that number in its state. Then, it moves to
              the end of the second number. It writes the sum of the digits in
              that cell, and if there is a carry, it stores that carry. It moves
              to the left by one cell, and adds the carry. If this produces
              another carry, it repeats that process until there is no digit to
              carry. Congrats! The first digit of our numbers are added
              together! This process is the repeated for every single digit in
              the numbers, until there are no digits left.
            </p>
            <p>
              As you can see, everything the Turing Machine was one of its 4
              rules. The end result, however, is much greater than the sum of
              its parts, and represents something useful. Now, rather than
              thinking about the addition algorithm every time I'd like to add
              two numbers, I can just make a rule called 'add' in the Turing
              Machine, and trust that it will do it correctly every time. This
              addition is something useful that I can then further abstract
              upon, to create more and more useful products
            </p>

            <h3 className="montserrat-light">Where's Fibonacci?</h3>
            <p>
              We finally have all of the pieces. As discussed before, each
              element of the Fibonacci sequence is the addition of the two
              previous elements. Using our new 'add' rule, this is something our
              Turing Machine can now do.
            </p>
            <p>
              The tape is completely blank at the beginning. The first two
              actions we tell our Turing Machine to do are to write a 0 and a 1
              onto the blank tape. Then, we enter a loop. To repeat over and
              over again, the Turing Machine will perform its new 'add' rule on
              the two numbers in the tape, and write a new number to the right
              of them. Then, it moves to the right. Then the loop repeats. It
              sees two numbers, now a 1 and a 1 (since it moved to the right),
              adds them together, writes it onto the tape, and moves to the
              right. This is then performed on itself over and over again until
              any arbitrary{" "}
              <i>
                n<sup>th</sup>
              </i>{" "}
              Fibonacci number. And we're done! Out of simple actions, we built
              up multiple layers of complexity until the Turing Machine could
              perform the task we needed it to do.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TuringMachine;
