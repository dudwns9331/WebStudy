# Javascript detail step5

- ## _**README**_

이 정리는 [youtube 드림코딩 엘리](https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2)님의 강의를 바탕으로 정리한 것입니다.

---

- ### Object-oriented programming
  - class : template
  - object : instance of a class
  - JavaScript classes
  - introduced in ES 6
  - syntactical sugar over prototype-based inheritance

<br/>

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/study-js_with_ellie/detail/images/class_ex1.png">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/study-js_with_ellie/detail/images/class_ex2.png">
</p>

<br/>
<br/>

- ### Classes declarations

```js
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
```

클래스는 `class` 키워드를 통해서 선언한다. `Person`이라는 클래스가 생성되었으며, `constructor`를 통해서 초기값을 지정할 수 있다. 객체가 생성될 때 초기의 값을 지정하기 위해서 constructor를 사용한다. constructor는 constructor 키워드를 통해서 선언하고 안에 파라미터는 어떤 값이든 주어질 수 있으며 초기 설정이 필요한 변수를 선언한다. 클래스 내부에는 클래스가 지닌 `메소드(행동)`를 지정할 수 있으며 객체를 생성할 때는 `const 참조변수 = new 클래스명(초기 필드값..)` 으로 지정한다. `.(dot)` 연산을 통해서 객체가 지닌 필드에 접근할 수 있다.

<br/>
<br/>

- ### Getter and Setters

```js
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
```

getter와 setter를 통해서 해당 클래스가 지닌 필드의 값을 조정할 수 있다.

<br/>
<br/>

- ### Fields (public, private)

```js
class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
// 아직 브라우저에서는 지원하지 않는다.
console.log(experiment.privateField);
```

\# 기호를 통해서 private을 선언할 수 있지만, 아직 브라우저에서는 지원하지 않는다.

<br/>
<br/>

- ### Static properties and methods

```js
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
```

static 변수는 클래스의 멤버처럼 접근이 가능하다. 오브젝트의 내용과 상관없이 공통적으로 사용되는 값을 static으로 지정하는 것이 좋다.

<br/>
<br/>

- ### Inheritance - a way for one class to extend another class.

```js
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
```

Shape 클래스를 Rectangle과 Triangle이 상속받는다. Shape의 모든 메소드를 사용 가능하고 생성자와 멤버필드까지 사용이 가능하다. 하지만 Triangle처럼 상속받은 클래스의 메소드를 `overriding`하여 덮어 사용이 가능하다. 이를 통해 `다형성`이 보장된다.

<br/>

[overriding 자세히 알아보기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

[객체지향 다형성 자세히 알아보기](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Object-oriented_JS)

<br/>
<br/>

- ### Class checking : instanceOf

```js
console.log("Instanceof!!");
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
```

```c
true
false
true
true
true
```

[reference에 대해서 자세히 알아보기](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference)
