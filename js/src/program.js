const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

export class Program {
  constructor({ verseRandomizer, animalsRandomizer } = {}) {
    this.verseRandomizer = verseRandomizer;
    this.animalsRandomizer = animalsRandomizer;
    this.animals = [
      new Animals("toadie", "toadie"),
      new Animals("fish", "fish"),
      new Animals("bluebird", "birdie"),
      new Animals("muskrat", "rattie"),
      new Animals("bee", "honie"),
      new Animals("crow", "crow"),
      new Animals("cricket", "cricket"),
      new Animals("lizard", "lizard"),
      new Animals("frog", "froggie"),
      new Animals("spider", "spider"),
    ];
  }
  song() {
    var result = [];
    for (let i = 1; i <= 10; i++) {
      result.push(this.verse(verseNumber.call(this, i), i));
    }
    return result.join("\n\n");

    function verseNumber(i) {
      return this.verseRandomizer ? this.verseRandomizer.next() : i;
    }
  }

  verse(verseNumber, orderNumber) {
    const childrenCount = this.childrenCountFor(orderNumber);
    const data = this.verseDataFor(verseNumber);

    return "Over in the meadow,\n" +
      `${data.firstLocation()},\n` +
      `Lived ${data.mother()}\n` +
      `And her little ${childrenCount.pluralize(data.child())} ${childrenCount}.\n` +
      `\"${capitalize(data.action())}!\" said the mother;\n` +
      `\"${childrenCount.pronoun()} ${data.action()}!\" said the ${childrenCount}.\n` +
      `So they ${data.actionDone()},\n` +
      `${data.secondLocation()}.`;
  }
  childrenCountFor(number) {
    var result;
    try {
      result = eval(`ChildrenCount${number}`);
    } catch (error) {
      result = ChildrenCount;
    }

    return new result(number);
  }
  verseDataFor(number) {
    var result;
    try {
      result = eval(`VerseData${number}`);
    } catch (error) {
      result = VerseData;
    }

    return new result(animal.call(this, number));

    function animal(number) {
      return this.animals[this.animalsRandomizer ? this.animalsRandomizer.next() : number - 1];
    }
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

class VerseData {
  constructor(animals) {
    this.animals = animals;
  }
  firstLocation() {
    return this.location(true);
  }
  secondLocation() {
    return this.location();
  }
  child() {
    return this.animals.child;
  }
}

class VerseData10 extends VerseData {
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
    return `a gray mother ${this.animals.mother}`;
  }
}

class VerseData1 extends VerseData {
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
    return `an old mother ${this.animals.mother}`;
  }
}

class VerseData2 extends VerseData {
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
    return `an old mother ${this.animals.mother}`;
  }
}

class VerseData3 extends VerseData {
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
    return `an old mother ${this.animals.mother}`;
  }
}
class VerseData4 extends VerseData {
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
    return `an old mother ${this.animals.mother}`;
  }
}
class VerseData5 extends VerseData {
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
    return `a mother honey ${this.animals.mother}`;
  }
}
class VerseData6 extends VerseData {
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
    return `a black mother ${this.animals.mother}`;
  }
}
class VerseData7 extends VerseData {
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
    return `a mother ${this.animals.mother}`;
  }
}
class VerseData8 extends VerseData {
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
    return `a brown mother ${this.animals.mother}`;
  }
}
class VerseData9 extends VerseData {
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
    return `a green mother ${this.animals.mother}`;
  }
}
class ChildrenCount {
  pronoun() {
    return "We";
  }
  pluralize(child) {
    return `${child}${child.endsWith("sh") ? "es" : "s"}`;
  }
}

class ChildrenCount2 extends ChildrenCount {
  toString() {
    return "two";
  }
}
class ChildrenCount3 extends ChildrenCount {
  toString() {
    return "three";
  }
}
class ChildrenCount4 extends ChildrenCount {
  toString() {
    return "four";
  }
}
class ChildrenCount5 extends ChildrenCount {
  toString() {
    return "five";
  }
}
class ChildrenCount6 extends ChildrenCount {
  toString() {
    return "six";
  }
}
class ChildrenCount7 extends ChildrenCount {
  toString() {
    return "seven";
  }
}
class ChildrenCount8 extends ChildrenCount {
  toString() {
    return "eight";
  }
}
class ChildrenCount9 extends ChildrenCount {
  toString() {
    return "nine";
  }
}
class ChildrenCount10 extends ChildrenCount {
  toString() {
    return "ten";
  }
}
class ChildrenCount1 extends ChildrenCount {
  toString() {
    return "one";
  }
  pronoun() {
    return "I";
  }
  pluralize(child) {
    return child;
  }
}

class Animals {
  constructor(mother, child) {
    this.mother = mother;
    this.child = child;
  }
}
