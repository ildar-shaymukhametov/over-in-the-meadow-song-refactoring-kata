const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export class Program {
  song() {
    var result = [];
    for (let i = 1; i <= 10; i++) {
      result.push(this.verse(i));
    }
    return result.join("\n\n");
  }
  verse(number) {
    const numberOfChildren = this.numberOfChildrenFor(number);
    const verse = this.verseFor(number);

    return "Over in the meadow,\n" +
      `${verse.firstLocation()},\n` +
      `Lived ${verse.mother()}\n` +
      `And her little ${verse.children()} ${numberOfChildren}.\n` +
      `\"${capitalize(verse.action())}!\" said the mother;\n` +
      `\"${numberOfChildren.pronoun()} ${verse.action()}!\" said the ${numberOfChildren}.\n` +
      `So they ${verse.actionDone()},\n` +
      `${verse.secondLocation()}.`;
  }
  numberOfChildrenFor(number) {
    var result;
    switch (number) {
      case 1:
        result = NumberOfChildren1;
        break;
      default:
        result = NumberOfChildren;
        break;
    }
    return new result(number);
  }
  verseFor(number) {
    var result;
    switch (number) {
      case 1:
        result = Verse1;
        break;
      case 2:
        result = Verse2;
        break;
      case 3:
        result = Verse3;
        break;
      case 4:
        result = Verse4;
        break;
      case 5:
        result = Verse5;
        break;
      case 6:
        result = Verse6;
        break;
      case 7:
        result = Verse7;
        break;
      case 8:
        result = Verse8;
        break;
      case 9:
        result = Verse9;
        break;
      default:
        result = Verse10;
        break;
    }

    return new result(number);
  }
}

export class RandomSong extends Program {
  constructor(randomizer) {
    super();
    this.randomizer = randomizer;
  }
  song() {
    var result = [];
    var nextNumber;
    while (nextNumber = this.randomizer.next()) {
      result.push(this.verse(nextNumber));
    }
    return result.join("\n\n");
  }
}

class Article {
  constructor(isFirstAppearance) {
    this.isFirstAppearance = isFirstAppearance;
  }
  toString() {
    if (this.isFirstAppearance) {
      return "a";
    } else {
      return "their";
    }
  }
}

class Verse {
  firstLocation() {
    return this.location(true);
  }
  secondLocation() {
    return this.location();
  }
}

class Verse10 extends Verse {
  actionDone() {
    return "spun silken webs";
  }
  action() {
    return "spin";
  }
  location(isFirstAppearance) {
    return `In ${new Article(isFirstAppearance)} sly little den`;
  }
  mother() {
    return "a gray mother spider";
  }
  children() {
    return "spiders";
  }
}

class Verse1 extends Verse {
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

class Verse2 extends Verse {
  actionDone() {
    return "swam and they swam";
  }
  action() {
    return "swim";
  }
  location() {
    return "Where the stream runs blue";
  }
  mother() {
    return "an old mother fish";
  }
  children() {
    return "fishes";
  }
}

class Verse3 extends Verse {
  actionDone() {
    return "sang and they sang";
  }
  action() {
    return "sing";
  }
  location(isFirstAppearance) {
    return `In ${new Article(isFirstAppearance)} hole in a tree`;
  }
  mother() {
    return "an old mother bluebird";
  }
  children() {
    return "birdies";
  }
}
class Verse4 extends Verse {
  actionDone() {
    return "dived and they splashed";
  }
  action() {
    return "dive";
  }
  location() {
    return "By the reeds on the shore";
  }
  mother() {
    return "an old mother muskrat";
  }
  children() {
    return "ratties";
  }
}
class Verse5 extends Verse {
  actionDone() {
    return "buzzed and they buzzed";
  }
  action() {
    return "buzz";
  }
  location(isFirstAppearance) {
    return `In ${new Article(isFirstAppearance)} snug beehive`;
  }
  mother() {
    return "a mother honey bee";
  }
  children() {
    return "honies";
  }
}
class Verse6 extends Verse {
  actionDone() {
    return "cawed and they cawed";
  }
  action() {
    return "caw";
  }
  location(isFirstAppearance) {
    return `In ${new Article(isFirstAppearance)} nest made of sticks`;
  }
  mother() {
    return "a black mother crow";
  }
  children() {
    return "crows";
  }
}
class Verse7 extends Verse {
  actionDone() {
    return "chirped cheery notes";
  }
  action() {
    return "chirp";
  }
  location() {
    return "In the grass soft and even";
  }
  mother() {
    return "a mother cricket";
  }
  children() {
    return "crickets";
  }
}
class Verse8 extends Verse {
  actionDone() {
    return "basked, and they basked";
  }
  action() {
    return "bask";
  }
  location() {
    return "On the old mossy gate";
  }
  mother() {
    return "a brown mother lizard";
  }
  children() {
    return "lizards";
  }
}
class Verse9 extends Verse {
  actionDone() {
    return "croaked and they croaked";
  }
  action() {
    return "croak";
  }
  location() {
    return "Where the cool pools shine";
  }
  mother() {
    return "a green mother frog";
  }
  children() {
    return "froggies";
  }
}
class NumberOfChildren {
  constructor(number) {
    this.number = number;
  }
  toString() {
    if (this.number == 2) return "two";
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
    return "We";
  }
}

class NumberOfChildren1 extends NumberOfChildren {
  toString() {
    return "one";
  }
  pronoun() {
    return "I";
  }
}
