# Detail of badge.css

## Basic of CSS

- [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md) 파일을 통해서 [styles.css](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_css/styles.md) 파일을 `@import` 하기 때문에 모든 CSS 파일은 `stylesheet`가 적용되려면 `@import` 되어야 한다.

- CSS 파일은 html의 class 혹은 id를 통해서 연결이 가능하고 해당 값을 수정한 후 `;` 세미콜론으로 마무리 해야한다.

---

- ## alt-header

```css
.alt-header {
  padding: var(--horizontal-space);
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.alt-header__column {
  width: 33%;
}

.alt-header__title {
  font-size: 28px;
  font-weight: 600;
  margin: 0 auto;
}

.alt-header__column:first-child {
  margin-right: auto;
}

.alt-header__column:last-child {
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
}

.alt-header__column:nth-child(2) {
  text-align: center;
}

.alt-header__column span:last-child {
  margin-left: 20px;
}
```

[chat.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/chat.md)에 있는 상단 헤더를 정의한다. padding: var(--horizontal-space); 를 통해서 var로 정의된 --horizontal-space 변수를 사용 가능하다.

<br/>
<br/>

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/images/alt-screen-header.PNG" height="300px" width="500px">
</p>
