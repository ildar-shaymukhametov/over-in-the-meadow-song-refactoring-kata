const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export class Program {
  song() {
    var result = [];
    for (let i = 1; i <= 10; i++) {
      const numberOfChildren = new NumberOfChildren(i);
      const verseNumber = new VerseNumber(i);
      result.push(
        "Over in the meadow,\n" +
        `${verseNumber.location(true)},\n` +
        `Lived ${verseNumber.mother()}\n` +
        `And her little ${verseNumber.children()} ${numberOfChildren.toWords()}.\n` +
        `\"${capitalize(verseNumber.action())}!\" said the mother;\n` +
        `\"${numberOfChildren.pronoun()} ${verseNumber.action()}!\" said the ${numberOfChildren.toWords()}.\n` +
        `So they ${verseNumber.actionDone()},\n` +
        `${verseNumber.location()}.`
      );
    }
    return result.join("\n\n");
  }
  location(number, isFirstAppearance) {
    return new VerseNumber(number).location(isFirstAppearance);
  }
  mother(number) {
    return new VerseNumber(number).mother();
  }
  children(number) {
    return new VerseNumber(number).children();
  }
  action(number) {
    return new VerseNumber(number).action();
  }
  actionDone(number) {
    return new VerseNumber(number).actionDone();
  }
}

class VerseNumber {
  constructor(number) {
    this.number = number;
  }
  actionDone() {
    if (this.number == 1) return "jumped and they jumped";
    if (this.number == 2) return "swam and they swam";
    if (this.number == 3) return "sang and they sang";
    if (this.number == 4) return "dived and they splashed";
    if (this.number == 5) return "buzzed and they buzzed";
    if (this.number == 6) return "cawed and they cawed";
    if (this.number == 7) return "chirped cheery notes";
    if (this.number == 8) return "basked, and they basked";
    if (this.number == 9) return "croaked and they croaked";
    if (this.number == 10) return "spun silken webs";
  }
  action() {
    if (this.number == 1) return "jump";
    if (this.number == 2) return "swim";
    if (this.number == 3) return "sing";
    if (this.number == 4) return "dive";
    if (this.number == 5) return "buzz";
    if (this.number == 6) return "caw";
    if (this.number == 7) return "chirp";
    if (this.number == 8) return "bask";
    if (this.number == 9) return "croak";
    if (this.number == 10) return "spin";
  }
  location(isFirstAppearance) {
    if (this.number == 1) return "In the sand in the sun";
    if (this.number == 2) return "Where the stream runs blue";
    if (this.number == 3) return `In ${article(isFirstAppearance)} hole in a tree`;
    if (this.number == 4) return "By the reeds on the shore";
    if (this.number == 5) return `In ${article(isFirstAppearance)} snug beehive`;
    if (this.number == 6) return `In ${article(isFirstAppearance)} nest made of sticks`;
    if (this.number == 7) return "In the grass soft and even";
    if (this.number == 8) return "On the old mossy gate";
    if (this.number == 9) return "Where the cool pools shine";
    if (this.number == 10) return `In ${article(isFirstAppearance)} sly little den`;

    function article(isFirstAppearance) {
      if (isFirstAppearance) {
        return "a";
      } else {
        return "their";
      }
    }
  }
  mother() {
    if (this.number == 1) return "an old mother toadie";
    if (this.number == 2) return "an old mother fish";
    if (this.number == 3) return "an old mother bluebird";
    if (this.number == 4) return "an old mother muskrat";
    if (this.number == 5) return "a mother honey bee";
    if (this.number == 6) return "a black mother crow";
    if (this.number == 7) return "a mother cricket";
    if (this.number == 8) return "a brown mother lizard";
    if (this.number == 9) return "a green mother frog";
    if (this.number == 10) return "a gray mother spider";
  }
  children() {
    if (this.number == 1) return "toadie";
    if (this.number == 2) return "fishes";
    if (this.number == 3) return "birdies";
    if (this.number == 4) return "ratties";
    if (this.number == 5) return "honies";
    if (this.number == 6) return "crows";
    if (this.number == 7) return "crickets";
    if (this.number == 8) return "lizards";
    if (this.number == 9) return "froggies";
    if (this.number == 10) return "spiders";
  }
}

class NumberOfChildren {
  constructor(number) {
    this.number = number;
  }
  toWords() {
    if (this.number == 1) return "one";
    if (this.number == 2) return "two";
    if (this.number == 3) return "three";
    if (this.number == 4) return "four";
    if (this.number == 5) return "five";
    if (this.number == 6) return "six";
    if (this.number == 7) return "seven";
    if (this.number == 8) return "eight";
    if (this.number == 9) return "nine";
    if (this.number == 10) return "ten";
  }
  pronoun() {
    if (this.number == 1) {
      return "I";
    } else {
      return "We";
    }
  }
}
