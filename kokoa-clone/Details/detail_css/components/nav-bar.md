# Detail of nav-bar.css

## Basic of CSS

- [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md) 파일을 통해서 [styles.css](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_css/styles.md) 파일을 `@import` 하기 때문에 모든 CSS 파일은 `stylesheet`가 적용되려면 `@import` 되어야 한다.

- CSS 파일은 html의 class 혹은 id를 통해서 연결이 가능하고 해당 값을 수정한 후 `;` 세미콜론으로 마무리 해야한다.

---

- ## nav-bar

- ### nav, nav\_\_list, nav\_\_link

```css
.nav {
  /* 스크롤 하더라도 붙어있도록 position 설정 bottom : 0이면 아래 */
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f9f9fa;
  padding: 20px 50px;
  /* 구성 요소를 위한 픽셀을 살리기 위해서 padding 만큼 요소를 늘리기 때문에 밀리는 현상*/
  /* box-sizing으로 조절이 가능하다. */
  box-sizing: border-box;
  border-top: 1px solid rgba(121, 121, 121, 0.3);
}

.nav__list {
  display: flex;
  justify-content: space-between;
}

.nav__link {
  /* 포지션을 쓰려면 부모에 상대적으로 연관이 되어 있어야 한다 */
  position: relative;
  color: #2e363e;
}
```

1. `position : fixed`를 통해서 브라우저에서의 위치를 고정시킨다.
2. `box-siziing` 을 통해서 구성요소의 픽셀을 살리기 위해 `padding` 만큼 요소를 늘려 밀리는 현상을 방지한다.
3. `border-top`을 통해서 윗선을 긋는다.
4. `nav\_\_list`는 하단의 네비게이션에서 각각에 해당하는 요소들을 통제한다.
5. `nav\_\_link`는 네비게이션의 요소를 클릭했을 때의 링크를 연결하기 위해서 사용한다.

[box-sizing 설명 바로가기](https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing)

<br/>
<br/>

- ## notificationAnimation

```css
@keyframes notificationAnimation {
  0% {
    transform: none;
  }
  50% {
    transform: translateY(-3px) rotateY(360deg);
  }
  100% {
    transform: none;
  }
}

.nav__notification {
  /* 아이콘 위에 숫자를 올리는 작업 */
  /* position은 겹치게 올리는 방법으로 가장 가까운 position relative를 기준으로 배치 */
  position: absolute;
  left: 20px;
  bottom: 20px;
  animation: notificationAnimation 2s ease-in-out infinite;
}
```

1. `notificationAnimation`은 채팅 위에 돌아가는 알람을 만들기 위해서 사용한다.
2. `transfrom`을 통해서 해당 요소의 애니메이션을 지정할 수 있다.
3. `animation: notificationAnimation 2s ease-in-out infinite;` 이 라인을 통해서 `notificationAnimation`이 2초마다 `ease-in-out` 방식으로 무한으로 작동하도록 설정한다.

[transform 설명 바로가기](https://developer.mozilla.org/ko/docs/Web/CSS/transform)

<br/>
<br/>

- ### nav\_\_ellipsis\_\_noti

```css
.nav__ellipsis__noti {
  background-color: tomato;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 35px;
  bottom: 30px;
}
```

<br/>
<br/>

- ### appearBtnAnimation

```css
@keyframes appearBtnAnimation {
  from {
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
}

.nav__btn {
  transform: translateY(50px);
  opacity: 0;
  animation: appearBtnAnimation 0.2s ease-in-out forwards;
}

.nav__btn:nth-child(2) {
  animation-delay: 0.1s;
}

.nav__btn:nth-child(3) {
  animation-delay: 0.2s;
}

.nav__btn:last-child {
  animation-delay: 0.3s;
}
```

`nth-child(n)` 옵션을 통해서 nav\_\_btn과 같은 클래스 이름을 가지는 자식 요소중에서 특정 요소에 성질을 지정해 줄 수 있다.

<br/>
<br/>

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/images/nav.PNG" height="300px" width="500px">
</p>

<br/>

이와같은 구성을 가지고 css를 설정한다.
