const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);
const toWord = number => {
  switch (number) {
    case 1: return "one";
    case 2: return "two";
    case 3: return "three";
    case 4: return "four";
    case 5: return "five";
    case 6: return "six";
    case 7: return "seven";
    case 8: return "eight";
    case 9: return "nine";
    case 10: return "ten";
    default: return "";
  }
};

export class Program {
  constructor({ verseOrder = new AscendingOrder(), animalOrder = new AscendingOrder() } = {}) {
    this.verseOrder = verseOrder;
    this.animalOrder = animalOrder;
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
    this.verses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }
  song() {
    var result = [];
    var next;
    var orderNumber = 1;
    while ((next = this.verseOrder.next(this.verses)) !== null) {
      result.push(
        verse(
          new (dataClassFor(next))(
            new AnimalFamily(orderNumber++, this.animalOrder.next(this.animals))
          )
        )
      )
    }
    return result.join("\n\n");

    function verse(data) {
      return "Over in the meadow,\n" +
        `${data.firstLocation()},\n` +
        `Lived ${data.mother()}\n` +
        `And her little ${data.children()} ${data.childrenCount()}.\n` +
        `\"${capitalize(data.action())}!\" said the mother;\n` +
        `\"${data.pronoun()} ${data.action()}!\" said the ${data.childrenCount()}.\n` +
        `So they ${data.actionDone()},\n` +
        `${data.secondLocation()}.`;
    }

    function dataClassFor(number) {
      var result;
      try {
        result = eval(`VerseData${number}`);
      } catch (error) {
        result = VerseData;
      }

      return result;
    }
  }
}

class VerseData {
  constructor(animalFamily) {
    this.animalFamily = animalFamily;
  }
  firstLocation() {
    return this.location("a");
  }
  secondLocation() {
    return this.location("their");
  }
  children() {
    return this.animalFamily.children();
  }
  childrenCount() {
    return this.animalFamily.count();
  }
  pronoun() {
    return this.animalFamily.pronoun();
  }
}

class VerseData10 extends VerseData {
  actionDone() {
    return "spun silken webs";
  }
  action() {
    return "spin";
  }
  location(article) {
    return `In ${article} sly little den`;
  }
  mother() {
    return `a gray mother ${this.animalFamily.mother()}`;
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
    return `an old mother ${this.animalFamily.mother()}`;
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
    return `an old mother ${this.animalFamily.mother()}`;
  }
}

class VerseData3 extends VerseData {
  actionDone() {
    return "sang and they sang";
  }
  action() {
    return "sing";
  }
  location(article) {
    return `In ${article} hole in a tree`;
  }
  mother() {
    return `an old mother ${this.animalFamily.mother()}`;
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
    return `an old mother ${this.animalFamily.mother()}`;
  }
}
class VerseData5 extends VerseData {
  actionDone() {
    return "buzzed and they buzzed";
  }
  action() {
    return "buzz";
  }
  location(article) {
    return `In ${article} snug beehive`;
  }
  mother() {
    return `a mother honey ${this.animalFamily.mother()}`;
  }
}
class VerseData6 extends VerseData {
  actionDone() {
    return "cawed and they cawed";
  }
  action() {
    return "caw";
  }
  location(article) {
    return `In ${article} nest made of sticks`;
  }
  mother() {
    return `a black mother ${this.animalFamily.mother()}`;
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
    return `a mother ${this.animalFamily.mother()}`;
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
    return `a brown mother ${this.animalFamily.mother()}`;
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
    return `a green mother ${this.animalFamily.mother()}`;
  }
}

class AnimalFamily {
  constructor(childrenCount, animals) {
    this.childrenCount = childrenCount;
    this.animals = animals;
  }
  pronoun() {
    return this.childrenCount == 1 ? "I" : "We";
  }
  children() {
    return `${this.animals.child}${this.childrenCount == 1 ? "" : ending(this.animals.child)}`;
      
      function ending(word) {
        return word.endsWith("sh") ? "es" : "s";
      }
  }
  count() {
    return toWord(this.childrenCount);
  }
  mother() {
    return this.animals.mother;
  }
}

class Animals {
  constructor(mother, child) {
    this.mother = mother;
    this.child = child;
  }
}

class AscendingOrder {
  constructor() {
    this.i = 0;
  }
  next(array) {
    return this.i < array.length ? array[this.i++] : null;
  }
}
