const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export class Program {
  song() {
    var result = [];
    for (let i = 0; i < 10; i++) {
      result.push(
        "Over in the meadow,\n" +
        `${location(i, true)},\n` +
        `Lived ${mother(i)}\n` +
        `And her little ${children(i)} ${toWords(i + 1)}.\n` +
        `\"${capitalize(action(i))}!\" said the mother;\n` +
        `\"${pronoun(i + 1)} ${action(i)}!\" said the ${toWords(i + 1)}.\n` +
        `So they ${actionDone(i)},\n` +
        `${location(i)}.`
      );
    }
    return result.join("\n\n");
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

function action(number) {
  if (number == 0) return "jump";
  if (number == 1) return "swim";
  if (number == 2) return "sing";
  if (number == 3) return "dive";
  if (number == 4) return "buzz";
  if (number == 5) return "caw";
  if (number == 6) return "chirp";
  if (number == 7) return "bask";
  if (number == 8) return "croak";
  if (number == 9) return "spin";
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

function toWords(number) {
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
function pronoun(number) {
  if (number == 1) {
    return "I";
  } else {
    return "We";
  }
}

class NumberOfChildren {
  constructor(number) {
    this.number = number;
  }
  toWords(number) {
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
  pronoun(number) {
    if (number == 1) {
      return "I";
    } else {
      return "We";
    }
  }
}
