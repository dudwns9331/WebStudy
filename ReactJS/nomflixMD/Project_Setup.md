# 🙋‍♂️ **Project_Setup** #2.0 Setting Up the Project

## 리액트를 시작하는 방법

1. create-react-app 으로 빠르게 시작하기

2. Webpack, babel을 통해서 리액트 개발 설정하기

---

## 1. create-react-app

### a. 사전준비

- [x] [node.js](https://nodejs.org/ko/) 설치
- [x] [npm](#npm) 혹은 yarn설치
- [x] [npx](#npx) 설치

### npm

npm은 node.js를 설치하면 자동으로 설치된다.

```
 > npm -v
 6.14.10
```

위의 명령어를 통해서 npm의 버전을 확인한다.
npm은 `Node Packaged Manager`의 줄임말로 Node로 만들어진 Package들을 관리해주는 툴이다.

node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임이다. 확장성 있는 네트워크 애플리케이션(백엔드) 개발에 사용되는 소프트웨어 플랫폼이다. 작성 언어로 자바스크립트를 활용하며 Non-blocking I/O와 단일 스레드 이벤트 루프를 통한 높은 처리 성능을 가진다. [참고문서](https://ko.wikipedia.org/wiki/Node.js)

### npx

npx는 npm과 yarn과 같은 패키지 관리 모듈이 아니다. npm에서 좀 더 편리하게 사용하려고 제공하는 CLI 도구이다. npm 5.2.0 이상 버전에서 기본 제공하는 기능이라 따로 설치가 필요없다.

```
 > npx -v
 6.14.10
```

터미널에 해당 해당 명령어를 쳐서 확인한다. 만약에 npx의 버전이 뜨지 않는다면

```
 > npm install -g npx
```

해당 명령어를 터미널에 입력해서 npx를 설치하도록 한다.

### b. create-react-app 실행

> a. 사전준비를 마치지 않았다면 다시 돌아가세요.

```
 > npx create-react-app ${appName}
```

프로젝트를 생성하고자 하는 디렉토리 위치에서 터미널을 이용해 위의 명령어를 친다.

프로젝트가 생성되었다면 터미널에 cd ${appName} 을 이용하여 이동하고 vscode를 사용중이라면 code . 를 이용하여 프로젝트를 vscode로 연다.

```
.
├── node_modules
├── public
├── src
├── package.json
├── package-lock.json
└── README.md
```

위와 같은 파일 구조를 가지게 된다.

1.  node_modules : `npm install` 명령어를 통해서 다운받은 모듈들이 저장되는 곳, 여러가지 모듈들이 저장되어 있는 곳

2.  public : 정적 파일들 저장, `index.html`(번들된 JS를 로드하고 리액트 컴포넌트를 렌더링할 루트 div를 제공함)

3.  src : 소스폴더, 자바스크립트 모듈을 포함

4.  package.json : 터미널에서 `npm init` 명령을 입력하면 해당 파일이 생성된다. 의존성 관리에 사용된다. (리액트, JSX 변환을 위한 Babel 컴파일러, webpack을 포함시킨다.)

5.  package-lock.json : `npm`을 사용해서 `node_modules` 트리나 `package.json` 파일을 수정하게 되면 자동으로 생성되는 파일이다. 이 파일은 파일이 생성되는 시점의 의존성 트리에 대한 정확한 정보를 가지고 있다.

### c. 프로젝트 실행

```
 > npm start
```

위의 명령어를 통해서 생성된 프로젝트를 수행해볼 수 있다.

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/ReactJS/images/start_page.PNG" height="465px" width="800px">
</p>

<br/>

## 2. npx를 사용하는 이유

```
 > npm install -g create-react-app
```

위와 같이 npm 명령어를 사용해서 react app을 생성하게 되면 -g에 의해서 전역적으로 create-react-app이 설치된다. 이는 많은 문제점을 일으킨다.

- CRA의 의존성 라이브러리들이 남는다.
- CRA 버전 업데이트 시, 전역적으로 설치된 CRA를 다시 설치해야한다.

npx는 CPA패키지가 다운로드 되면서 설정들을 세팅한 후에 CRA 패키지를 제거한다. 의존성 라이브러리들도 남기지 않고 함께 제거된다. 이는 일회성인 npx를 통해서 해결 가능하다.

## 3. 프로젝트 내부 기본 설정

1.  src의 불필요한 파일들을 제거한다. App.js와 index.js 파일을 제외한 나머지 테스트 파일들을 삭제한다.

2.  .env 파일을 만들어 절대경로를 설정한다.

```
NODE_PATH=src
```

.env 파일을 생성한 후에 위와 같은 내용을 입력하여 기본 경로를 src로 지정하도록 한다.

<br/>

3.  위와 같이 설정 했을때, 파일이 제대로 routing이 되지 않으면 package.json과 같은 선상에 있는 파일 위치에 jsonconfig.json을 생성하도록 한다.

```json
{
  "rootDir": "scr",
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "*": ["*"]
    }
  }
}
```

<br/>

# #2.1 React Router part One

## React-Router를 이용한 page routing

react-router를 이용해 클라이언트 사이드에서 이루어지는 라우팅을 간단하게 한다.

DOM에서도 사용이 가능하고 react-native에서도 사용이 가능하다.

---

## 1. npm install react-router-dom

- [HashRouter](#HashRouter)
- [BrowserRouter](#BrowserRouter)
- [Link](#Link)

### HashRouter

```jsx
<HashRouter
  basename={optionalString}
  getUserConfirmation={optionalFunc}
  hashType={optionalString}
>
  <App />
</HashRouter>
```

```jsx
<HashRouter basename="/calendar"/>
<Link to="/today"/> // renders <a href="#/calendar/today">
```

```jsx
<HashRouter
  getUserConfirmation={(message, callback) => {
    // this is the default behavior
    const allowTransition = window.confirm(message);
    callback(allowTransition);
  }}
/>
```

<br/>

### BrowserRouter

```jsx
<BrowserRouter
  basename={optionalString}
  forceRefresh={optionalBool}
  getUserConfirmation={optionalFunc}
  keyLength={optionalNumber}
>
  <App />
</BrowserRouter>
```

```jsx
<BrowserRouter basename="/calendar">
    <Link to="/today"/> // renders <a href="/calendar/today">
    <Link to="/tomorrow"/> // renders <a href="/calendar/tomorrow">
    ...
</BrowserRouter>
```

```jsx
<BrowserRouter
  getUserConfirmation={(message, callback) => {
    // this is the default behavior
    const allowTransition = window.confirm(message);
    callback(allowTransition);
  }}
/>
```

### Link

```jsx
<Link to="/about">About</Link>
to: string

<Link to="/courses?sort=name" />

<Link
  to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
/>


<Link to={location => ({ ...location, pathname: "/courses" })} />

<Link to={location => `${location.pathname}?sort=name`} />
```

### Route

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/news">
        <NewsFeed />
      </Route>
    </div>
  </Router>,
  node
);

<div>
  <Home />
  <!-- react-empty: 2 -->
</div>

<div>
  <!-- react-empty: 1 -->
  <NewsFeed />
</div>

```

### Redirect

```jsx
<Route exact path="/">
  {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
</Route>

<Redirect to="/somewhere/else" />

<Redirect
  to={{
    pathname: "/login",
    search: "?utm=your+face",
    state: { referrer: currentLocation }
  }}
/>
```

위의 코드들은 [React-Router 공식 페이지](https://reactrouter.com/web/guides/quick-start)의 사용 예시이다.

<br/>

## 2. 프로젝트 예시

```jsx
import Recat from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Header from "Components/Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/tv" component={TV}></Route>
        {/* <Route path="/tv/popular" render={() => <h1>Popular</h1>}></Route> */}
        <Route path="/search" component={Search}></Route>
        <Redirect from="*" to="/"></Redirect>
      </Switch>
    </>
  </Router>
);
```

```js
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
```

해당 js파일에서 react-router-dom을 사용하려면 import 해야한다.

여기서는 BrowserRouter를 사용했으며 Router의 이름으로 태그가 생성된다. Route와 Switch 또한 import 되었다.

```jsx
<Route path="/" exact component={Home}></Route>
```

여기서 Route는 BrowserRouter를 의미하며 path="/" 를 통해서 최초의 경로를 지정해 줄 수 있고 거기에 exact를 통해서 해당 경로가 정확히 맞는것만 route 되도록 설정이 가능하다. component는 위치가 일치 할 때의 렌더링 할 React component를 의미한다.

```jsx
<Redirect from="*" to="/"></Redirect>
```

위의 명령을 통해서 위의 경우가 아닌 다른 경로 주소의 경우 모든 파일들이 "/" 으로 이동하는 동작을 설정한다.

```jsx
<>
  <Header />
  <Switch>
    <Route path="/" exact component={Home}></Route>
    <Route path="/tv" component={TV}></Route>
    {/* <Route path="/tv/popular" render={() => <h1>Popular</h1>}></Route> */}
    <Route path="/search" component={Search}></Route>
    <Redirect from="*" to="/"></Redirect>
  </Switch>
</>
```

Switch는 경로와 일치하는 첫번째 자식 `<Route>` 혹은 `<Redirect>`를 렌더링한다. 주석의 예시처럼 경로가 겹치는 경우 둘 다 렌더링 되기 때문에 필요하다. Switch의 특징은 경로를 독점적으로 렌더링한다는 것이다.
