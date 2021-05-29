# TypeScript Fundamentals

## TypeScript에 대한 기본적인 지식을 학습한다.

1. Introduction to TypeScript
2. Introduction to TypeScript part Two
3. TypeScript and React Introduction
4. React State and TypeScript
5. React Props and TypeScript
6. React Events and TypeScript
7. Styled Components and TypeScript
8. Styled Components and TypeScript part Two
9. Conclusion

---

### 1. Introduction to TypeScript

TypeScript는 javaScript의 superset이다. (다른 언어 위에서 작동하는 또다른 언어?)

### 2. Introduction to TypeScript part Two

TypeScript는 개발자들이 저지르는 실수를 줄여준다.

```js
const plus = (a, b) => a + b;
console.log(plus("lalala", 2));
```

이와 같은 경우 a+b의 값이 숫자만 들어가게 해야되나, lalala와 같은 입력이 섞여 원래의 의도와는 다르지만 오류가 검출되지 않는 경우가 있다.

```ts
const plus = (a: number, b: number) => a + b;
```

위와 같이 인자들의 type을 정해주는 것을 통해서 오류와 버그를 더 줄일 수 있다. 실제로 TypeScript는 production 하기 전에 오류를 잡아준다.

### 3. TypeScript and React Introduction

React와 TypeScript를 어떻게 사용하는가에 대해서 설명한다.

프로젝트를 생성할 때,

> npx create-react-app typescript-react-demo --template typescript

뒤에 `--template typescript`라는 옵션을 추가해주면 된다.

<br/>

### create-react-app [name] --template typescript를 실행한 후에 생성되는 react app의 모습

<br/>

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/ReactJS/images/typescript01.PNG" height="465px" width="800px">
</p>

<br/>

여기서 ts 확장자는 javaScript(typescript) 를 의미하며, tsx파일은 [`Typescript X`](https://www.typescriptlang.org/docs/handbook/advanced-types.html)를 의미한다.

TypeScript의 Strict 정도를 조절할 수 있는데 이는 tsconfig.json에 정의된 규칙들에 따라서 조절 가능하다.

<br/>

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/ReactJS/images/typescript02.PNG" height="465px" width="800px">
</p>

<br/>

위와 같이 type을 제대로 지정해주지 않으면 에러가 발생하는데, 이는 `"noImplicitAny" : false` 를 통해서 any type에 대한 룰을 비활성화 할 수 있으며 `tsconfig.json`에 명시되어야 한다.

또한, typeScript로 CRA를 실행한다면 `package.json`에

```json
"@types/jest": "^26.0.23",
"@types/node": "^12.20.13",
"@types/react": "^17.0.8",
"@types/react-dom": "^17.0.5",
```

다음과 같은 `@types` 들이 설치되는것을 볼 수 있다.

- 추가적으로 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)라는 Github 페이지가 존재하는데 이는 타입스크립트에 대한 여러가지 타입을 정의하고 인터페이스들을 저장해 놓은 방대한양의 디렉토리이다. 따라서 styled-component와 같은 패키지를 받아서 사용하는데 있어서 타입스크립트가 패키지 내부의 모든 함수 인자들의 타입을 모르지만 해당 깃허브 페이지를 통해서 정의해 놓았기 떄문에 @types를 이용해 웬만한 패키지를 typescript 용으로 적용 가능하다.

- 하지만 @types 라이브러리에 존재하지 않는 패지키도 있기 때문에 `"noImplicitAny":false` 를 통해서 원래의 패키지를 사용 가능하다.

### 4. React State and TypeScript

```tsx
class App extends Component {
  state = {
    counter: 0,
  };

  render() {
    const { counter } = this.state;
    return <div>{counter}</div>;
  }

  add = () => {
    this.setState((prev) => {
      return {
        counter: prev.counter + 1,
      };
    });
  };
}

export default App;
```

`Property 'counter' does not exist on type 'Readonly<{}>'.ts(2339)` 위와 같이 코드를 작성하면 js에서는 동작하지만 ts에서는 위와 같은 오류 메세지가 counter에서 출력되는 것을 알 수 있다. 이는 Componet에 props와 state가 비어있는 오브젝트이기 때문이다.

```tsx
interface IState {
  counter: number;
}
```

따라서 다음과 같이 state에 대한 type을 지정할 수 있도록 interface를 선언해서 counter의 type이 number라는 것을 정의하고, 이에 대해서 counter의 type은 number로 고정되게 된다.

<br/>

## `App.tsx` 코드

```tsx
import React, { Component } from "react";
import styled from "styled-components";

interface IState {
  counter: number;
}

class App extends Component<{}, IState> {
  state = {
    counter: 0,
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        {counter}
        <button onClick={this.add}>ADD</button>
      </div>
    );
  }

  add = (): void => {
    this.setState((prev) => {
      return {
        counter: prev.counter + 1,
      };
    });
  };
}

export default App;
```

### 5. React Props and TypeScript

### 6. React Events and TypeScript

### 7. Styled Components and TypeScript

### 8. Styled Components and TypeScript part Two

### 9. Conclusion
