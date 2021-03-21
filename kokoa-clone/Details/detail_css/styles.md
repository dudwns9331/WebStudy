# Detail of styles.css

## styles

```html
<link rel="stylesheet" href="CSS/styles.css" />
```

styles.css 파일은 모든 html 파일의 head에서 link 되어진다. <br/>
styles.css를 통해서 html의 모든 요소들이 영향을 받으며 배치, 크기, 색 등의 디자인적 요소를 설정할 수 있다.

---

### styles.css

```css
/* google Fonts 사이트를 통해서 폰트를 정하고 다운한 뒤, @import 쿼리를 이용해서 직접 CSS에 불러온다. */
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");

/* 브라우저의 설정을 초기화 시켜주는 CSS를 import 해준다. */
@import "reset.css";
@import "variables.css";

/* Components */
@import "components/status-bar.css";
@import "components/nav-bar.css";
@import "components/screen-header.css";
@import "components/user-component.css";
@import "components/badge.css";
@import "components/icon-row.css";
@import "components/alt-screen-header.css";
@import "components/no-mobile.css";

/* Srcreens */
@import "screens/login.css";
@import "screens/friends.css";
@import "screens/find.css";
@import "screens/more.css";
@import "screens/settings.css";
@import "screens/chat.css";

/* font-family 이용 기본 글꼴 사용 모두 적용될 수 있는 것만 남긴다.*/
body {
  color: #2e363e;
  padding-top: 20px;
  font-family: "Open Sans", sans-serif;
  height: 1000vh;
}

.main-screen {
  padding: 0px var(--horizontal-space);
}
```

`@import`를 통해서 css파일을 추가할 수 있고 url을 추가하여 폰트를 적용할 수도 있다.

<br/>

1. [reset.css](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_css/reset.md)는 브라우저에서 설정하는 기본값을 초기화 시키기 위해서 사용한다.
2. variable.css는 반복되어 사용되는 값을 변수로 저장하고 있다.
3. Components는 반복되어 사용되는 컴포넌트 들을 정의한다.
4. Screens는 각각 html 파일의 화면으로 사용자에게 보여지는 화면을 정의한다.

<br/>

body를 통해서 `styles.css`가 `link`되어 있는 `html`파일들의 `body`에 공통적으로 적용한다. `font-family`를 통해서 글꼴을 적용시키고 `height:1000vh;` 를 통해서 위 아래 스크롤이 가능하도록 높이의 범위를 지정한다.

<br/>

[vh 단위 설명 바로가기](https://developer.mozilla.org/ko/docs/Web/CSS/length)

[font-family 설명 바로가기](https://developer.mozilla.org/ko/docs/Web/CSS/font-family)

<br/>

.main-screen 을 통해서 main-screen 이라는 클래스 이름을 가진 모든 태그에 `padding: 0px var(--horizontal-space);` 를 적용시킨다. 이는 위 아래 0px, 좌우 --horizontal-space(변수) 만큼의 padding을 주는 것이다.

<br/>

## variables.css

```css
:root {
  --yellow: #fae100;
  --horizontal-space: 25px;
  --main-border: 1px solid rgba(0, 0, 0, 0.2);
}
```

`:root` 는 의사 클래스에 선언해서 HTML 문서 어디에서나 사용자 지정 속성에 접근할 수 있도록 구성하는 것이다. 즉, 어떤 파일에서도 접근이 가능하도록 하는 것.

[사용자 지정 CSS 속성 이용하기](https://developer.mozilla.org/ko/docs/Web/CSS/Using_CSS_custom_properties)
