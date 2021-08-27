export class Program {
  song() {
    return "Over in the meadow,\n" +
      `${location(0)},\n` +
      `Lived ${mother(0)}\n` +
      `And her little ${children(0)} ${numberToWord(0)}.\n` +
      `\"${action(0)}!\" said the mother;\n` +
      "\"I jump!\" said the one.\n" +
      "So they jumped and they jumped,\n" +
      "In the sand in the sun.\n" +
      "\n" +
      "Over in the meadow,\n" +
      `${location(1)},\n` +
      `Lived ${mother(1)}\n` +
      `And her little ${children(1)} ${numberToWord(1)}.\n` +
      `\"${action(1)}!\" said the mother;\n` +
      "\"We swim!\" said the two.\n" +
      "So they swam and they swam,\n" +
      "Where the stream runs blue.\n" +
      "\n" +
      "Over in the meadow,\n" +
      `${location(2)},\n` +
      `Lived ${mother(2)}\n` +
      `And her little ${children(2)} ${numberToWord(2)}.\n` +
      `\"${action(2)}!\" said the mother;\n` +
      "\"We sing!\" said the three.\n" +
      "So they sang and they sang,\n" +
      "In their home in a tree.\n" +
      "\n" +
      "Over in the meadow,\n" +
      `${location(3)},\n` +
      `Lived ${mother(3)}\n` +
      `And her little ${children(3)} ${numberToWord(3)}.\n` +
      `\"${action(3)}!\" said the mother;\n` +
      "\"We dive!\" said the four.\n" +
      "So they dived and they splashed,\n" +
      "By the reeds on the shore.\n" +
      "\n" +
      "Over in the meadow,\n" +
      `${location(4)},\n` +
      `Lived ${mother(4)}\n` +
      `And her little ${children(4)} ${numberToWord(4)}.\n` +
      `\"${action(4)}!\" said the mother;\n` +
      "\"We buzz!\" said the five.\n" +
      "So they buzzed and they buzzed,\n" +
      "In their snug beehive.\n" +
      "\n" +
      "Over in the meadow,\n" +
      `${location(5)},\n` +
      `Lived ${mother(5)}\n` +
      `And her little ${children(5)} ${numberToWord(5)}.\n` +
      `\"${action(5)}!\" said the mother;\n` +
      "\"We caw!\" said the six.\n" +
      "So they cawed and they cawed,\n" +
      "In their nest made of sticks.\n" +
      "\n" +
      "Over in the meadow,\n" +
      `${location(6)},\n` +
      `Lived ${mother(6)}\n` +
      `And her little ${children(6)} ${numberToWord(6)}.\n` +
      `\"${action(6)}!\" said the mother;\n` +
      "\"We chirp!\" said the seven.\n" +
      "So they chirped cheery notes,\n" +
      "In the grass soft and even.\n" +
      "\n" +
      "Over in the meadow,\n" +
      `${location(7)},\n` +
      `Lived ${mother(7)}\n` +
      `And her little ${children(7)} ${numberToWord(7)}.\n` +
      `\"${action(7)}!\" said the mother;\n` +
      "\"We bask!\" said the eight.\n" +
      "So they basked, and they basked,\n" +
      "On the old mossy gate.\n" +
      "\n" +
      "Over in the meadow,\n" +
      `${location(8)},\n` +
      `Lived ${mother(8)}\n` +
      `And her little ${children(8)} ${numberToWord(8)}.\n` +
      `\"${action(8)}!\" said the mother;\n` +
      "\"We croak!\" said the nine.\n" +
      "So they croaked and they croaked,\n" +
      "Where the cool pools shine.\n" +
      "\n" +
      "Over in the meadow,\n" +
      `${location(9)},\n` +
      `Lived ${mother(9)}\n` +
      `And her little ${children(9)} ${numberToWord(9)}.\n` +
      `\"${action(9)}!\" said the mother;\n` +
      "\"We spin!\" said the ten.\n" +
      "So they spun silken webs,\n" +
      "In their sly little den."
  }
}

function location(number) {
  if (number == 0) return "In the sand, in the sun";
  if (number == 1) return "Where the stream runs blue";
  if (number == 2) return "In a hole in a tree";
  if (number == 3) return "By the reeds on the shore";
  if (number == 4) return "In a snug beehive";
  if (number == 5) return "In a nest made of sticks";
  if (number == 6) return "In the grass soft and even";
  if (number == 7) return "On an old mossy gate";
  if (number == 8) return "Where the cool pools shine";
  if (number == 9) return "In a sly little den";
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

function numberToWord(number) {
  if (number == 0) return "one";
  if (number == 1) return "two";
  if (number == 2) return "three";
  if (number == 3) return "four";
  if (number == 4) return "five";
  if (number == 5) return "six";
  if (number == 6) return "seven";
  if (number == 7) return "eight";
  if (number == 8) return "nine";
  if (number == 9) return "ten";
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