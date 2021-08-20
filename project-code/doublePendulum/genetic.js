// Returns an array of newly created controllers
export function generateNew(list, p) {
  let newC = [];
  for (let i = 0; i < list.length; i++) {
    // Select a controller based on fitness
    let bestC = selectFrom(list, p);
    newC[i] = bestC;
  }
  return newC;
}

// An algorithm for picking one controller from an array
// based on fitness
function selectFrom(list, p) {
  // Start at 0
  let index = 0;

  // Pick a random number between 0 and 1
  let r = Math.random(1);

  // Keep subtracting probabilities until you get less than zero
  // Higher probabilities will be more likely to be fixed since they will
  // subtract a larger number towards zero
  while (r > 0) {
    r -= list[index].fitness;
    // And move on to the next
    index += 1;
  }

  // Go back one
  index -= 1;

  // Make sure it's a copy!
  // (this includes mutation)
  return list[index].copy();
}

export function normalizeFitness(list) {
  // Make score exponentially better?
  for (let i = 0; i < list.length; i++) {
    list[i].score = Math.pow(list[i].score, 2);
  }

  // Add up all the scores
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i].score;
  }
  // Divide by the sum
  for (let i = 0; i < list.length; i++) {
    list[i].fitness = list[i].score / sum;
  }
}
