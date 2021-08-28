const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export class Program {
  song() {
    var result = [];
    for (let i = 1; i <= 10; i++) {
      result.push(this.verse(i, i));
    }
    return result.join("\n\n");
  }
  verse(verseNumber, orderNumber) {
    const children = this.childrenFor(orderNumber);
    const verse = this.verseFor(verseNumber);

    return "Over in the meadow,\n" +
      `${verse.firstLocation()},\n` +
      `Lived ${verse.mother()}\n` +
      `And her little ${verse.child()}${children.ending(verse.child())} ${children.count()}.\n` +
      `\"${capitalize(verse.action())}!\" said the mother;\n` +
      `\"${children.pronoun()} ${verse.action()}!\" said the ${children.count()}.\n` +
      `So they ${verse.actionDone()},\n` +
      `${verse.secondLocation()}.`;
  }
  childrenFor(number) {
    var result;
    try {
      result = eval(`Children${number}`);
    } catch (error) {
      result = Children;
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
    var orderNumber = 1;
    while (nextNumber = this.randomizer.next()) {
      result.push(this.verse(nextNumber, orderNumber++));
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
  child() {
    return "spider";
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
  child() {
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
  child() {
    return "fish";
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
  child() {
    return "birdie";
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
  child() {
    return "rattie";
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
  child() {
    return "honie";
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
  child() {
    return "crow";
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
  child() {
    return "cricket";
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
  child() {
    return "lizard";
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
  child() {
    return "froggie";
  }
}
class Children {
  pronoun() {
    return "We";
  }
  ending(word) {
    var result;
    if (word.endsWith("sh")) {
      result = "es";
    } else {
      result = "s";
    }
    return result;
  }
}

class Children2 extends Children {
  count() {
    return "two";
  }
}
class Children3 extends Children {
  count() {
    return "three";
  }
}
class Children4 extends Children {
  count() {
    return "four";
  }
}
class Children5 extends Children {
  count() {
    return "five";
  }
}
class Children6 extends Children {
  count() {
    return "six";
  }
}
class Children7 extends Children {
  count() {
    return "seven";
  }
}
class Children8 extends Children {
  count() {
    return "eight";
  }
}
class Children9 extends Children {
  count() {
    return "nine";
  }
}
class Children10 extends Children {
  count() {
    return "ten";
  }
}
class Children1 extends Children {
  count() {
    return "one";
  }
  pronoun() {
    return "I";
  }
  ending() {
    return "";
  }
}
