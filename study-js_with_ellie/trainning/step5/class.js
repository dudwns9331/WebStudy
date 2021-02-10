"use strict";

// Object-oriented programming
// class : template
// object : instance of a class
// JavaScript classes
//  - introduced in ES 6
//  - syntactical sugar over prototype-based inheritance

// 1. Classes declarations

class Person {
  // constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // method
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const YJ = new Person("YJ", 23);
console.log(YJ.name);
console.log(YJ.age);

// 2. Getter and Setters

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Jobs", -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!

class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
// 아직 브라우저에서는 지원하지 않는다.
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!

class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);

// static으로 클래스 자체에 연결되어 있기 때문에 클래스 이름을 이용해서 호출한다.
console.log(article1.publisher);
console.log(article2.printPublisher);

// 오브젝트의 내용과 상관없이 공통적으로 사용되는 것을 static으로 지정한다.
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log("😀");
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking : instanceOf

console.log("Instanceof!!");

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

// MDN 사이트 자바스크립트 레퍼런스 사이트를 참고하자.
