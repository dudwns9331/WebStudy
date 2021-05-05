console.log("Class.js");

class Human {
  constructor(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }
}

const human1 = new Human("YeongJun", "Ahn");

console.log(human1.name);
console.log(human1.lastName);

class Baby extends Human {
  cry() {
    console.log("Waaaaa");
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

const human2 = new Baby("Baby", "hi");

human2.cry(), human2.sayName();
