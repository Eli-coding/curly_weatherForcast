export function getHairPersona(answers) {
  // Step 1 — get curl type from Q1
  const curlType = answers[0].curlType;

  // Step 2 — add up porosity points from all answers
  const totalPoints = answers.reduce((sum, answer) => sum + answer.porosityPoints, 0);

  // Step 3 — convert points to porosity level
  let porosity;
  if (totalPoints <= 2) porosity = 'low';
  else if (totalPoints <= 4) porosity = 'medium';
  else porosity = 'high';

  // Step 4 — find and return the matching persona
  // what goes here?
}