# Detail of ArrowFunctions #5

## Class Example

```js
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
```

[class](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)는 객체를 생성하기 위한 템플릿이다. 클래스는 데이터와 이를 조작하는 코드를 하나로 추상화한다. 자바스크립트에서 클래스는 프로토타입을 이용해서 만들어졌지만 ES5의 클래스 의미와는 다른 문법과 의미를 가진다.
