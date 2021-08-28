const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export class Program {
  song() {
    var result = [];
    for (let i = 1; i <= 10; i++) {
      const numberOfChildren = new NumberOfChildren(i);
      result.push(
        "Over in the meadow,\n" +
        `${this.location(i, true)},\n` +
        `Lived ${this.mother(i)}\n` +
        `And her little ${this.children(i)} ${numberOfChildren.toWords()}.\n` +
        `\"${capitalize(this.action(i))}!\" said the mother;\n` +
        `\"${numberOfChildren.pronoun()} ${this.action(i)}!\" said the ${numberOfChildren.toWords()}.\n` +
        `So they ${this.actionDone(i)},\n` +
        `${this.location(i)}.`
      );
    }
    return result.join("\n\n");
  }
  location(number, isFirstAppearance) {
    if (number == 1) return "In the sand in the sun";
    if (number == 2) return "Where the stream runs blue";
    if (number == 3) return `In ${article(isFirstAppearance)} hole in a tree`;
    if (number == 4) return "By the reeds on the shore";
    if (number == 5) return `In ${article(isFirstAppearance)} snug beehive`;
    if (number == 6) return `In ${article(isFirstAppearance)} nest made of sticks`;
    if (number == 7) return "In the grass soft and even";
    if (number == 8) return "On the old mossy gate";
    if (number == 9) return "Where the cool pools shine";
    if (number == 10) return `In ${article(isFirstAppearance)} sly little den`;
  
    function article(isFirstAppearance) {
      if (isFirstAppearance) {
        return "a";
      } else {
        return "their";
      }
    }
  }
  mother(number) {
    if (number == 1) return "an old mother toadie";
    if (number == 2) return "an old mother fish";
    if (number == 3) return "an old mother bluebird";
    if (number == 4) return "an old mother muskrat";
    if (number == 5) return "a mother honey bee";
    if (number == 6) return "a black mother crow";
    if (number == 7) return "a mother cricket";
    if (number == 8) return "a brown mother lizard";
    if (number == 9) return "a green mother frog";
    if (number == 10) return "a gray mother spider";
  }
  children(number) {
    if (number == 1) return "toadie";
    if (number == 2) return "fishes";
    if (number == 3) return "birdies";
    if (number == 4) return "ratties";
    if (number == 5) return "honies";
    if (number == 6) return "crows";
    if (number == 7) return "crickets";
    if (number == 8) return "lizards";
    if (number == 9) return "froggies";
    if (number == 10) return "spiders";
  }
  action(number) {
    if (number == 1) return "jump";
    if (number == 2) return "swim";
    if (number == 3) return "sing";
    if (number == 4) return "dive";
    if (number == 5) return "buzz";
    if (number == 6) return "caw";
    if (number == 7) return "chirp";
    if (number == 8) return "bask";
    if (number == 9) return "croak";
    if (number == 10) return "spin";
  }
  actionDone(number) {
    if (number == 1) return "jumped and they jumped";
    if (number == 2) return "swam and they swam";
    if (number == 3) return "sang and they sang";
    if (number == 4) return "dived and they splashed";
    if (number == 5) return "buzzed and they buzzed";
    if (number == 6) return "cawed and they cawed";
    if (number == 7) return "chirped cheery notes";
    if (number == 8) return "basked, and they basked";
    if (number == 9) return "croaked and they croaked";
    if (number == 10) return "spun silken webs";
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
