## Turing Machine Fibonacci Sequence Calculator

- How do I use it: proof of concept, simulation
- What is a Turing Machine
  - What can a Turing Machine do: move left/right, write, read/store, execute rules
- The current implementation
  - The TuringMachine class
  - The TuringMachineWrapper class
    - Use moveTo to show a need for abstraction
  - How I've organized the data / the registers
    - wordLength and its implications
  - How the Turing Machine adds two bits
  - How adding two bits changes the world
    - Adding all numbers
- How all of this builds up to be able to compute the Fibonacci sequence

- TODO:
  - Write an array called `rules` where each rule takes in parameters `(machine, tapeState, next)` and outlines the rules which the Turing Machine has to follow. This more closely imitates the real finite state machines that a TM is based upon. `next()` will continue through the list and look for rules that apply. Every rule is executed, and the one that doesn't call next is the last one in that case for that particular `machine.state` and `tapeState`. These rules are all called, then action is taken, then the rules are followed again. This is a very long-term goal, not sure if it should ever happen.
  - Figure out if there is a way for me to import this code without physically importing the code.
