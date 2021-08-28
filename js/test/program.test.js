import { Program } from "../src/program";

test("song", () => {
  expect(new Program().song()).toEqual(
    "Over in the meadow,\n" +
    "In the sand in the sun,\n" +
    "Lived an old mother toadie\n" +
    "And her little toadie one.\n" +
    "\"Jump!\" said the mother;\n" +
    "\"I jump!\" said the one.\n" +
    "So they jumped and they jumped,\n" +
    "In the sand in the sun.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "Where the stream runs blue,\n" +
    "Lived an old mother fish\n" +
    "And her little fishes two.\n" +
    "\"Swim!\" said the mother;\n" +
    "\"We swim!\" said the two.\n" +
    "So they swam and they swam,\n" +
    "Where the stream runs blue.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In a hole in a tree,\n" +
    "Lived an old mother bluebird\n" +
    "And her little birdies three.\n" +
    "\"Sing!\" said the mother;\n" +
    "\"We sing!\" said the three.\n" +
    "So they sang and they sang,\n" +
    "In their hole in a tree.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "By the reeds on the shore,\n" +
    "Lived an old mother muskrat\n" +
    "And her little ratties four.\n" +
    "\"Dive!\" said the mother;\n" +
    "\"We dive!\" said the four.\n" +
    "So they dived and they splashed,\n" +
    "By the reeds on the shore.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In a snug beehive,\n" +
    "Lived a mother honey bee\n" +
    "And her little honies five.\n" +
    "\"Buzz!\" said the mother;\n" +
    "\"We buzz!\" said the five.\n" +
    "So they buzzed and they buzzed,\n" +
    "In their snug beehive.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In a nest made of sticks,\n" +
    "Lived a black mother crow\n" +
    "And her little crows six.\n" +
    "\"Caw!\" said the mother;\n" +
    "\"We caw!\" said the six.\n" +
    "So they cawed and they cawed,\n" +
    "In their nest made of sticks.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In the grass soft and even,\n" +
    "Lived a mother cricket\n" +
    "And her little crickets seven.\n" +
    "\"Chirp!\" said the mother;\n" +
    "\"We chirp!\" said the seven.\n" +
    "So they chirped cheery notes,\n" +
    "In the grass soft and even.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "On the old mossy gate,\n" +
    "Lived a brown mother lizard\n" +
    "And her little lizards eight.\n" +
    "\"Bask!\" said the mother;\n" +
    "\"We bask!\" said the eight.\n" +
    "So they basked, and they basked,\n" +
    "On the old mossy gate.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "Where the cool pools shine,\n" +
    "Lived a green mother frog\n" +
    "And her little froggies nine.\n" +
    "\"Croak!\" said the mother;\n" +
    "\"We croak!\" said the nine.\n" +
    "So they croaked and they croaked,\n" +
    "Where the cool pools shine.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In a sly little den,\n" +
    "Lived a gray mother spider\n" +
    "And her little spiders ten.\n" +
    "\"Spin!\" said the mother;\n" +
    "\"We spin!\" said the ten.\n" +
    "So they spun silken webs,\n" +
    "In their sly little den."
  );
})

test("random verses", () => {
  expect(new Program({ verseRandomizer: new StubVerseRandomizer() }).song()).toEqual(
    "Over in the meadow,\n" +
    "Where the stream runs blue,\n" +
    "Lived an old mother fish\n" +
    "And her little fish one.\n" +
    "\"Swim!\" said the mother;\n" +
    "\"I swim!\" said the one.\n" +
    "So they swam and they swam,\n" +
    "Where the stream runs blue.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In the sand in the sun,\n" +
    "Lived an old mother toadie\n" +
    "And her little toadies two.\n" +
    "\"Jump!\" said the mother;\n" +
    "\"We jump!\" said the two.\n" +
    "So they jumped and they jumped,\n" +
    "In the sand in the sun.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In a hole in a tree,\n" +
    "Lived an old mother bluebird\n" +
    "And her little birdies three.\n" +
    "\"Sing!\" said the mother;\n" +
    "\"We sing!\" said the three.\n" +
    "So they sang and they sang,\n" +
    "In their hole in a tree.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "By the reeds on the shore,\n" +
    "Lived an old mother muskrat\n" +
    "And her little ratties four.\n" +
    "\"Dive!\" said the mother;\n" +
    "\"We dive!\" said the four.\n" +
    "So they dived and they splashed,\n" +
    "By the reeds on the shore.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In a snug beehive,\n" +
    "Lived a mother honey bee\n" +
    "And her little honies five.\n" +
    "\"Buzz!\" said the mother;\n" +
    "\"We buzz!\" said the five.\n" +
    "So they buzzed and they buzzed,\n" +
    "In their snug beehive.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In a nest made of sticks,\n" +
    "Lived a black mother crow\n" +
    "And her little crows six.\n" +
    "\"Caw!\" said the mother;\n" +
    "\"We caw!\" said the six.\n" +
    "So they cawed and they cawed,\n" +
    "In their nest made of sticks.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In the grass soft and even,\n" +
    "Lived a mother cricket\n" +
    "And her little crickets seven.\n" +
    "\"Chirp!\" said the mother;\n" +
    "\"We chirp!\" said the seven.\n" +
    "So they chirped cheery notes,\n" +
    "In the grass soft and even.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "On the old mossy gate,\n" +
    "Lived a brown mother lizard\n" +
    "And her little lizards eight.\n" +
    "\"Bask!\" said the mother;\n" +
    "\"We bask!\" said the eight.\n" +
    "So they basked, and they basked,\n" +
    "On the old mossy gate.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "Where the cool pools shine,\n" +
    "Lived a green mother frog\n" +
    "And her little froggies nine.\n" +
    "\"Croak!\" said the mother;\n" +
    "\"We croak!\" said the nine.\n" +
    "So they croaked and they croaked,\n" +
    "Where the cool pools shine.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In a sly little den,\n" +
    "Lived a gray mother spider\n" +
    "And her little spiders ten.\n" +
    "\"Spin!\" said the mother;\n" +
    "\"We spin!\" said the ten.\n" +
    "So they spun silken webs,\n" +
    "In their sly little den."
  );
})

test("random animals", () => {
  expect(new Program({ animalsRandomizer: new StubAnimalRandomizer() }).song()).toEqual(
    "Over in the meadow,\n" +
    "In the sand in the sun,\n" +
    "Lived an old mother fish\n" +
    "And her little fish one.\n" +
    "\"Jump!\" said the mother;\n" +
    "\"I jump!\" said the one.\n" +
    "So they jumped and they jumped,\n" +
    "In the sand in the sun.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "Where the stream runs blue,\n" +
    "Lived an old mother toadie\n" +
    "And her little toadies two.\n" +
    "\"Swim!\" said the mother;\n" +
    "\"We swim!\" said the two.\n" +
    "So they swam and they swam,\n" +
    "Where the stream runs blue.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In a hole in a tree,\n" +
    "Lived an old mother bluebird\n" +
    "And her little birdies three.\n" +
    "\"Sing!\" said the mother;\n" +
    "\"We sing!\" said the three.\n" +
    "So they sang and they sang,\n" +
    "In their hole in a tree.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "By the reeds on the shore,\n" +
    "Lived an old mother muskrat\n" +
    "And her little ratties four.\n" +
    "\"Dive!\" said the mother;\n" +
    "\"We dive!\" said the four.\n" +
    "So they dived and they splashed,\n" +
    "By the reeds on the shore.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In a snug beehive,\n" +
    "Lived a mother honey bee\n" +
    "And her little honies five.\n" +
    "\"Buzz!\" said the mother;\n" +
    "\"We buzz!\" said the five.\n" +
    "So they buzzed and they buzzed,\n" +
    "In their snug beehive.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In a nest made of sticks,\n" +
    "Lived a black mother crow\n" +
    "And her little crows six.\n" +
    "\"Caw!\" said the mother;\n" +
    "\"We caw!\" said the six.\n" +
    "So they cawed and they cawed,\n" +
    "In their nest made of sticks.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In the grass soft and even,\n" +
    "Lived a mother cricket\n" +
    "And her little crickets seven.\n" +
    "\"Chirp!\" said the mother;\n" +
    "\"We chirp!\" said the seven.\n" +
    "So they chirped cheery notes,\n" +
    "In the grass soft and even.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "On the old mossy gate,\n" +
    "Lived a brown mother lizard\n" +
    "And her little lizards eight.\n" +
    "\"Bask!\" said the mother;\n" +
    "\"We bask!\" said the eight.\n" +
    "So they basked, and they basked,\n" +
    "On the old mossy gate.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "Where the cool pools shine,\n" +
    "Lived a green mother frog\n" +
    "And her little froggies nine.\n" +
    "\"Croak!\" said the mother;\n" +
    "\"We croak!\" said the nine.\n" +
    "So they croaked and they croaked,\n" +
    "Where the cool pools shine.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In a sly little den,\n" +
    "Lived a gray mother spider\n" +
    "And her little spiders ten.\n" +
    "\"Spin!\" said the mother;\n" +
    "\"We spin!\" said the ten.\n" +
    "So they spun silken webs,\n" +
    "In their sly little den."
  );
})

test("random animals and verses", () => {
  expect(new Program({ verseRandomizer: new StubVerseRandomizer(), animalsRandomizer: new StubAnimalRandomizer() }).song()).toEqual(
    "Over in the meadow,\n" +
    "Where the stream runs blue,\n" +
    "Lived an old mother fish\n" +
    "And her little fish one.\n" +
    "\"Swim!\" said the mother;\n" +
    "\"I swim!\" said the one.\n" +
    "So they swam and they swam,\n" +
    "Where the stream runs blue.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In the sand in the sun,\n" +
    "Lived an old mother toadie\n" +
    "And her little toadies two.\n" +
    "\"Jump!\" said the mother;\n" +
    "\"We jump!\" said the two.\n" +
    "So they jumped and they jumped,\n" +
    "In the sand in the sun.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In a hole in a tree,\n" +
    "Lived an old mother bluebird\n" +
    "And her little birdies three.\n" +
    "\"Sing!\" said the mother;\n" +
    "\"We sing!\" said the three.\n" +
    "So they sang and they sang,\n" +
    "In their hole in a tree.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "By the reeds on the shore,\n" +
    "Lived an old mother muskrat\n" +
    "And her little ratties four.\n" +
    "\"Dive!\" said the mother;\n" +
    "\"We dive!\" said the four.\n" +
    "So they dived and they splashed,\n" +
    "By the reeds on the shore.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In a snug beehive,\n" +
    "Lived a mother honey bee\n" +
    "And her little honies five.\n" +
    "\"Buzz!\" said the mother;\n" +
    "\"We buzz!\" said the five.\n" +
    "So they buzzed and they buzzed,\n" +
    "In their snug beehive.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In a nest made of sticks,\n" +
    "Lived a black mother crow\n" +
    "And her little crows six.\n" +
    "\"Caw!\" said the mother;\n" +
    "\"We caw!\" said the six.\n" +
    "So they cawed and they cawed,\n" +
    "In their nest made of sticks.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In the grass soft and even,\n" +
    "Lived a mother cricket\n" +
    "And her little crickets seven.\n" +
    "\"Chirp!\" said the mother;\n" +
    "\"We chirp!\" said the seven.\n" +
    "So they chirped cheery notes,\n" +
    "In the grass soft and even.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "On the old mossy gate,\n" +
    "Lived a brown mother lizard\n" +
    "And her little lizards eight.\n" +
    "\"Bask!\" said the mother;\n" +
    "\"We bask!\" said the eight.\n" +
    "So they basked, and they basked,\n" +
    "On the old mossy gate.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "Where the cool pools shine,\n" +
    "Lived a green mother frog\n" +
    "And her little froggies nine.\n" +
    "\"Croak!\" said the mother;\n" +
    "\"We croak!\" said the nine.\n" +
    "So they croaked and they croaked,\n" +
    "Where the cool pools shine.\n" +
    "\n" +
    "Over in the meadow,\n" +
    "In a sly little den,\n" +
    "Lived a gray mother spider\n" +
    "And her little spiders ten.\n" +
    "\"Spin!\" said the mother;\n" +
    "\"We spin!\" said the ten.\n" +
    "So they spun silken webs,\n" +
    "In their sly little den."
  );
})

class StubAnimalRandomizer {
  constructor() {
    this.numbers = [1, 0, 2, 3, 4, 5, 6, 7, 8, 9];
    this.i = 0;
  }
  next() {
    if (this.i <= 9) {
      return this.numbers[this.i++];
    } else {
      return null;
    }
  }
}

class StubVerseRandomizer {
  constructor() {
    this.numbers = [2, 1, 3, 4, 5, 6, 7, 8, 9, 10];
    this.i = 0;
  }
  next() {
    if (this.i <= 9) {
      return this.numbers[this.i++];
    } else {
      return null;
    }
  }
}