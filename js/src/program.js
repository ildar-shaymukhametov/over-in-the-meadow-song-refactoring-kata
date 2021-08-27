export class Program {
  song() {
    return "Over in the meadow,\n" +
      `${location(0, true)},\n` +
      `Lived ${mother(0)}\n` +
      `And her little ${children(0)} ${numberOfChildren(1)}.\n` +
      `\"${action(0)}!\" said the mother;\n` +
      `\"${pronoun(1)} ${action(0).toLowerCase()}!\" said the ${numberOfChildren(1)}.\n` +
      `So they ${actionDone(0)},\n` +
      `${location(0)}.\n` +
      "\n" +
      "Over in the meadow,\n" +
      `${location(1, true)},\n` +
      `Lived ${mother(1)}\n` +
      `And her little ${children(1)} ${numberOfChildren(2)}.\n` +
      `\"${action(1)}!\" said the mother;\n` +
      `\"${pronoun(2)} ${action(1).toLowerCase()}!\" said the ${numberOfChildren(2)}.\n` +
      `So they ${actionDone(1)},\n` +
      `${location(1)}.\n` +
      "\n" +
      "Over in the meadow,\n" +
      `${location(2, true)},\n` +
      `Lived ${mother(2)}\n` +
      `And her little ${children(2)} ${numberOfChildren(3)}.\n` +
      `\"${action(2)}!\" said the mother;\n` +
      `\"${pronoun(3)} ${action(2).toLowerCase()}!\" said the ${numberOfChildren(3)}.\n` +
      `So they ${actionDone(2)},\n` +
      `${location(2)}.\n` +
      "\n" +
      "Over in the meadow,\n" +
      `${location(3, true)},\n` +
      `Lived ${mother(3)}\n` +
      `And her little ${children(3)} ${numberOfChildren(4)}.\n` +
      `\"${action(3)}!\" said the mother;\n` +
      `\"${pronoun(4)} ${action(3).toLowerCase()}!\" said the ${numberOfChildren(4)}.\n` +
      `So they ${actionDone(3)},\n` +
      `${location(3)}.\n` +
      "\n" +
      "Over in the meadow,\n" +
      `${location(4, true)},\n` +
      `Lived ${mother(4)}\n` +
      `And her little ${children(4)} ${numberOfChildren(5)}.\n` +
      `\"${action(4)}!\" said the mother;\n` +
      `\"${pronoun(5)} ${action(4).toLowerCase()}!\" said the ${numberOfChildren(5)}.\n` +
      `So they ${actionDone(4)},\n` +
      `${location(4)}.\n` +
      "\n" +
      "Over in the meadow,\n" +
      `${location(5, true)},\n` +
      `Lived ${mother(5)}\n` +
      `And her little ${children(5)} ${numberOfChildren(6)}.\n` +
      `\"${action(5)}!\" said the mother;\n` +
      `\"${pronoun(6)} ${action(5).toLowerCase()}!\" said the ${numberOfChildren(6)}.\n` +
      `So they ${actionDone(5)},\n` +
      `${location(5)}.\n` +
      "\n" +
      "Over in the meadow,\n" +
      `${location(6, true)},\n` +
      `Lived ${mother(6)}\n` +
      `And her little ${children(6)} ${numberOfChildren(7)}.\n` +
      `\"${action(6)}!\" said the mother;\n` +
      `\"${pronoun(7)} ${action(6).toLowerCase()}!\" said the ${numberOfChildren(7)}.\n` +
      `So they ${actionDone(6)},\n` +
      `${location(6)}.\n` +
      "\n" +
      "Over in the meadow,\n" +
      `${location(7, true)},\n` +
      `Lived ${mother(7)}\n` +
      `And her little ${children(7)} ${numberOfChildren(8)}.\n` +
      `\"${action(7)}!\" said the mother;\n` +
      `\"${pronoun(8)} ${action(7).toLowerCase()}!\" said the ${numberOfChildren(8)}.\n` +
      `So they ${actionDone(7)},\n` +
      `${location(7)}.\n` +
      "\n" +
      "Over in the meadow,\n" +
      `${location(8, true)},\n` +
      `Lived ${mother(8)}\n` +
      `And her little ${children(8)} ${numberOfChildren(9)}.\n` +
      `\"${action(8)}!\" said the mother;\n` +
      `\"${pronoun(9)} ${action(8).toLowerCase()}!\" said the ${numberOfChildren(9)}.\n` +
      `So they ${actionDone(8)},\n` +
      `${location(8)}.\n` +
      "\n" +
      "Over in the meadow,\n" +
      `${location(9, true)},\n` +
      `Lived ${mother(9)}\n` +
      `And her little ${children(9)} ${numberOfChildren(10)}.\n` +
      `\"${action(9)}!\" said the mother;\n` +
      `\"${pronoun(10)} ${action(9).toLowerCase()}!\" said the ${numberOfChildren(10)}.\n` +
      `So they ${actionDone(9)},\n` +
      `${location(9)}.`
  }
}

function location(number, isFirstAppearance) {
  if (number == 0) return "In the sand in the sun";
  if (number == 1) return "Where the stream runs blue";
  if (number == 2) return `In ${article(isFirstAppearance)} hole in a tree`;
  if (number == 3) return "By the reeds on the shore";
  if (number == 4) return `In ${article(isFirstAppearance)} snug beehive`;
  if (number == 5) return `In ${article(isFirstAppearance)} nest made of sticks`;
  if (number == 6) return "In the grass soft and even";
  if (number == 7) return "On the old mossy gate";
  if (number == 8) return "Where the cool pools shine";
  if (number == 9) return `In ${article(isFirstAppearance)} sly little den`;

  function article(isFirstAppearance) {
    if (isFirstAppearance) {
      return "a";
    } else {
      return "their";
    }
  }
}

function mother(number) {
  if (number == 0) return "an old mother toadie";
  if (number == 1) return "an old mother fish";
  if (number == 2) return "an old mother bluebird";
  if (number == 3) return "an old mother muskrat";
  if (number == 4) return "a mother honey bee";
  if (number == 5) return "a black mother crow";
  if (number == 6) return "a mother cricket";
  if (number == 7) return "a brown mother lizard";
  if (number == 8) return "a green mother frog";
  if (number == 9) return "a gray mother spider";
}

function children(number) {
  if (number == 0) return "toadie";
  if (number == 1) return "fishes";
  if (number == 2) return "birdies";
  if (number == 3) return "ratties";
  if (number == 4) return "honies";
  if (number == 5) return "crows";
  if (number == 6) return "crickets";
  if (number == 7) return "lizards";
  if (number == 8) return "froggies";
  if (number == 9) return "spiders";
}

function numberOfChildren(number) {
  if (number == 1) return "one";
  if (number == 2) return "two";
  if (number == 3) return "three";
  if (number == 4) return "four";
  if (number == 5) return "five";
  if (number == 6) return "six";
  if (number == 7) return "seven";
  if (number == 8) return "eight";
  if (number == 9) return "nine";
  if (number == 10) return "ten";
}

function action(number) {
  if (number == 0) return "Jump";
  if (number == 1) return "Swim";
  if (number == 2) return "Sing";
  if (number == 3) return "Dive";
  if (number == 4) return "Buzz";
  if (number == 5) return "Caw";
  if (number == 6) return "Chirp";
  if (number == 7) return "Bask";
  if (number == 8) return "Croak";
  if (number == 9) return "Spin";
}

function actionDone(number) {
  if (number == 0) return "jumped and they jumped";
  if (number == 1) return "swam and they swam";
  if (number == 2) return "sang and they sang";
  if (number == 3) return "dived and they splashed";
  if (number == 4) return "buzzed and they buzzed";
  if (number == 5) return "cawed and they cawed";
  if (number == 6) return "chirped cheery notes";
  if (number == 7) return "basked, and they basked";
  if (number == 8) return "croaked and they croaked";
  if (number == 9) return "spun silken webs";
}

function pronoun(number) {
  if (number == 1) {
    return "I";
  } else {
    return "We";
  }
}
