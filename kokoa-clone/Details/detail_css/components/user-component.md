# Detail of user-component.css

## Basic of CSS

- [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md) 파일을 통해서 [styles.css](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_css/styles.md) 파일을 `@import` 하기 때문에 모든 CSS 파일은 `stylesheet`가 적용되려면 `@import` 되어야 한다.

- CSS 파일은 html의 class 혹은 id를 통해서 연결이 가능하고 해당 값을 수정한 후 `;` 세미콜론으로 마무리 해야한다.

---

```css
.user-component {
  justify-content: space-between;
}

.user-component,
.user-component__column:first-child {
  display: flex;
  align-items: center;
}

.user-component__avatar {
  width: 70px;
  height: 70px;
  border-radius: 30px;
  margin-right: 20px;
}

.user-component__title {
  font-weight: 600;
  font-size: 20px;
}

.user-component__subtitle {
  margin-top: 8px;
  color: rgba(0, 0, 0, 0.7);
}

.user-component__avatar--xl {
  width: 80px;
  height: 80px;
}

.user-component__avatar--sm {
  width: 60px;
  height: 60px;
  border-radius: 25px;
}

.user-component__title--not-bold {
  font-weight: 400;
}

.user-component__column:last-child {
  color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.user-component__time {
  margin-bottom: 10px;
  display: block;
}
```

[flex-direction](https://developer.mozilla.org/ko/docs/Web/CSS/flex-direction)은 플렉스 컨테이너의 아이템을 배치할 때 사용할 주축 및 방향을 지정한다. 클래스 이름을 통해서 공통적으로 해당되는 속성은 전체적으로 정의하고 같은 클래스 이름을 사용하면서 특정한 속성을 주고 싶으면 [first-child or last-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child)와 같이 같은 함수를 이용한다.
