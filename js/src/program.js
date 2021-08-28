const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export class Program {
  song() {
    var result = [];
    for (let i = 1; i <= 10; i++) {
      const numberOfChildren = new NumberOfChildren(i);
      const verseNumber = this.verseNumberFor(i);
      result.push(
        "Over in the meadow,\n" +
        `${verseNumber.location(true)},\n` +
        `Lived ${verseNumber.mother()}\n` +
        `And her little ${verseNumber.children()} ${numberOfChildren}.\n` +
        `\"${capitalize(verseNumber.action())}!\" said the mother;\n` +
        `\"${numberOfChildren.pronoun()} ${verseNumber.action()}!\" said the ${numberOfChildren}.\n` +
        `So they ${verseNumber.actionDone()},\n` +
        `${verseNumber.location()}.`
      );
    }
    return result.join("\n\n");
  }
  verseNumberFor(number) {
    var result;
    if (number == 1) result = VerseNumber1;
    else result = VerseNumber;

    return new result(number);
  }
}

class VerseNumber {
  constructor(number) {
    this.number = number;
  }
  actionDone() {
    if (this.number == 2) return "swam and they swam";
    else if (this.number == 3) return "sang and they sang";
    else if (this.number == 4) return "dived and they splashed";
    else if (this.number == 5) return "buzzed and they buzzed";
    else if (this.number == 6) return "cawed and they cawed";
    else if (this.number == 7) return "chirped cheery notes";
    else if (this.number == 8) return "basked, and they basked";
    else if (this.number == 9) return "croaked and they croaked";
    else if (this.number == 10) return "spun silken webs";
  }
  action() {
    if (this.number == 2) return "swim";
    else if (this.number == 3) return "sing";
    else if (this.number == 4) return "dive";
    else if (this.number == 5) return "buzz";
    else if (this.number == 6) return "caw";
    else if (this.number == 7) return "chirp";
    else if (this.number == 8) return "bask";
    else if (this.number == 9) return "croak";
    else if (this.number == 10) return "spin";
  }
  location(isFirstAppearance) {
    if (this.number == 2) return "Where the stream runs blue";
    else if (this.number == 3) return `In ${article(isFirstAppearance)} hole in a tree`;
    else if (this.number == 4) return "By the reeds on the shore";
    else if (this.number == 5) return `In ${article(isFirstAppearance)} snug beehive`;
    else if (this.number == 6) return `In ${article(isFirstAppearance)} nest made of sticks`;
    else if (this.number == 7) return "In the grass soft and even";
    else if (this.number == 8) return "On the old mossy gate";
    else if (this.number == 9) return "Where the cool pools shine";
    else if (this.number == 10) return `In ${article(isFirstAppearance)} sly little den`;

    function article(isFirstAppearance) {
      if (isFirstAppearance) {
        return "a";
      } else {
        return "their";
      }
    }
  }
  mother() {
    if (this.number == 2) return "an old mother fish";
    else if (this.number == 3) return "an old mother bluebird";
    else if (this.number == 4) return "an old mother muskrat";
    else if (this.number == 5) return "a mother honey bee";
    else if (this.number == 6) return "a black mother crow";
    else if (this.number == 7) return "a mother cricket";
    else if (this.number == 8) return "a brown mother lizard";
    else if (this.number == 9) return "a green mother frog";
    else if (this.number == 10) return "a gray mother spider";
  }
  children() {
    if (this.number == 2) return "fishes";
    else if (this.number == 3) return "birdies";
    else if (this.number == 4) return "ratties";
    else if (this.number == 5) return "honies";
    else if (this.number == 6) return "crows";
    else if (this.number == 7) return "crickets";
    else if (this.number == 8) return "lizards";
    else if (this.number == 9) return "froggies";
    else if (this.number == 10) return "spiders";
  }
}

class VerseNumber1 extends VerseNumber {
  actionDone() {
    return "jumped and they jumped";
  }
  action() {
    return "jump";
  }
  location() {
    return "In the sand in the sun";
  }
  mother() {
    return "an old mother toadie";
  }
  children() {
    return "toadie";
  }
}

class NumberOfChildren {
  constructor(number) {
    this.number = number;
  }
  toString() {
    if (this.number == 1) return "one";
    else if (this.number == 2) return "two";
    else if (this.number == 3) return "three";
    else if (this.number == 4) return "four";
    else if (this.number == 5) return "five";
    else if (this.number == 6) return "six";
    else if (this.number == 7) return "seven";
    else if (this.number == 8) return "eight";
    else if (this.number == 9) return "nine";
    else if (this.number == 10) return "ten";
  }
  pronoun() {
    if (this.number == 1) {
      return "I";
    } else {
      return "We";
    }
  }
}
