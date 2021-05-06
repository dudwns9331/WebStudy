# 🙇‍♂️ **Styles_Detail** #3.0 CSS in React part

## 리액트에서 CSS를 사용하는 방법

**1. styles.css를 만들어서 필요한 태그를 지정하는 방법**

- css가 적용되는 각 파일에 대해서 import 해줘야한다.
- 컴포넌트와 CSS가 분리되어 있다.

**2. 각각의 컴포넌트 파일과 index.js 파일을 묶어서 쓴다. 호출하기 위해서 하나의 폴더에 놓고 export한다.**

- index.js에서 import 컴포넌트 from "컴포넌트.js" => export default 컴포넌트
- 컴포넌트 파일에서 import "css 파일"
- CSS 파일은 index와 컴포넌트와 함께 같은 폴더에 있다.
- className을 기억해야 한다. 사용할 때마다 import 해야함.
- global한 CSS로 적용된다.

**3. CSS 모듈을 이용한다. CSS의 이름을 컴포넌트이름.module.css 형식으로 함.**

- className을 자바스크립트 오브젝트처럼 쓴다.
- 컴포넌트 파일에서 import styles from "css 파일"
- 적용하고 싶은 태그에 styles.className 입력
- js와 CSS는 여전히 떨어져 있따.
- className을 기억해야하고 이름을 짓는데에 한계가 있다.

**4. Styled Component 사용**

- [Styled Component](https://github.com/styled-components/styled-components) 바로가기
- 터미널에 `npm install styled-components` 를 입력하여 추가 가능하다.
- ***

## 프로젝트 예시

```jsx
import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid ${(props) =>
      props.current ? "#3498db" : "transparent"};
  transition: border-bottom 0.3s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
```

const 키워드를 통해서 CSS 스타일링이 가능한 변수를 만들 수 있다. styled-component를 사용하여 html의 태그를 지정할 수 있고 백틱 ` 기호를 사용해서 CSS 코드를 작성한다. 작성된 변수는 스타일링 된 태그로 사용이 가능하다.

react-router-dom을 이용해서 Link 오브젝트를 통해서 `<a>`를 바꿔 사용 가능하다.

```js
const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

<SLink to="/search">Search</SLink>;
```

위와 같은 형식으로 사용이 가능하다. to 키워드는 이동하고자 하는 링크의 경로를 나타낸다.

```jsx
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration: none;
    }
    *{
        box-sizing:border-box;
    }
    body {
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:12px;
        background-color:rgba(20,20,20,1);
        color:white;
        padding-top:50px;
    }
`;

export default globalStyles;
```

styled-reset은 styled-component를 이용해서 css를 초기화해서 0의 상태에서 시작하게 하는 것과 같다. createGlobalStyle를 통해서 전체 컴포넌트에 적용되는 globalstyle을 지정한다.

> ${reset}을 통해서 초기화 시킨다.

<br/>

```jsx
export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
```

withRouter를 통해서 다른 컴포넌트를 감쌀 수 있도록 한다. withRouter를 통해서 props를 전달 받을 수 있고 사용이 가능해진다. styled-compoent에는 props를 줄 수 있다. current = {props} 를 통해서 props를 이용한다.

withRouter는 렌더링 할 때마다 업데이트 된 매치와 위치, 과거 props 들을 감싸 컴포넌트로 전달한다.

current는 JSX문법으로 Ref를 가져올 때 사용하는 최근의 주소를 지정하는 키워드이다.

```js
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    const { match, location, history } = this.props;

    return <div>You are now at {location.pathname}</div>;
  }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const ShowTheLocationWithRouter = withRouter(ShowTheLocation);
```

위의 예시는 [React-Router 공식 페이지](https://reactrouter.com/web/api/withRouter)에서 가져온 것이다.
