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
    switch (number) {
      case 1:
        result = VerseNumber1;
        break;
      case 2:
        result = VerseNumber2;
        break;
      case 3:
        result = VerseNumber3;
        break;
      case 4:
        result = VerseNumber4;
        break;
      case 5:
        result = VerseNumber5;
        break;
      case 6:
        result = VerseNumber6;
        break;
      case 7:
        result = VerseNumber7;
        break;
      case 8:
        result = VerseNumber8;
        break;
      case 9:
        result = VerseNumber9;
        break;
      default:
        result = VerseNumber10;
        break;
    }

    return new result(number);
  }
}

class VerseNumber10 {
  constructor(number) {
    this.number = number;
  }
  actionDone() {
    return "spun silken webs";
  }
  action() {
    return "spin";
  }
  location(isFirstAppearance) {
    return `In ${article(isFirstAppearance)} sly little den`;

    function article(isFirstAppearance) {
      if (isFirstAppearance) {
        return "a";
      } else {
        return "their";
      }
    }
  }
  mother() {
    return "a gray mother spider";
  }
  children() {
    return "spiders";
  }
}

class VerseNumber1 {
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

class VerseNumber2 {
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

class VerseNumber3 {
  actionDone() {
    return "sang and they sang";
  }
  action() {
    return "sing";
  }
  location(isFirstAppearance) {
    return `In ${article(isFirstAppearance)} hole in a tree`;

    function article(isFirstAppearance) {
      if (isFirstAppearance) {
        return "a";
      } else {
        return "their";
      }
    }
  }
  mother() {
    return "an old mother bluebird";
  }
  children() {
    return "birdies";
  }
}
class VerseNumber4 {
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
class VerseNumber5 {
  actionDone() {
    return "buzzed and they buzzed";
  }
  action() {
    return "buzz";
  }
  location(isFirstAppearance) {
    return `In ${article(isFirstAppearance)} snug beehive`;

    function article(isFirstAppearance) {
      if (isFirstAppearance) {
        return "a";
      } else {
        return "their";
      }
    }
  }
  mother() {
    return "a mother honey bee";
  }
  children() {
    return "honies";
  }
}
class VerseNumber6 {
  actionDone() {
    return "cawed and they cawed";
  }
  action() {
    return "caw";
  }
  location(isFirstAppearance) {
    return `In ${article(isFirstAppearance)} nest made of sticks`;

    function article(isFirstAppearance) {
      if (isFirstAppearance) {
        return "a";
      } else {
        return "their";
      }
    }
  }
  mother() {
    return "a black mother crow";
  }
  children() {
    return "crows";
  }
}
class VerseNumber7 {
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
class VerseNumber8 {
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
class VerseNumber9 {
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
