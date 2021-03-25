# Detail of more.css

## Basic of CSS

- [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md) 파일을 통해서 [styles.css](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_css/styles.md) 파일을 `@import` 하기 때문에 모든 CSS 파일은 `stylesheet`가 적용되려면 `@import` 되어야 한다.

- CSS 파일은 html의 class 혹은 id를 통해서 연결이 가능하고 해당 값을 수정한 후 `;` 세미콜론으로 마무리 해야한다.

---

```css
.more-screen .icon-row {
  margin-top: 35px;
}

.more-suggestions {
  margin-top: 50px;
  border-top: var(--main-border);
  padding-top: 40px;
}

.more-suggestions__title {
  margin-bottom: 30px;
}

.more-suggestions__icons {
  display: flex;
}

.more-suggestions__icon {
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.more-suggestions__icon-image {
  width: 60px;
  height: 60px;
  background-color: var(--yellow);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.more-suggestions__icon-image i {
  font-size: 32px;
  color: white;
}
```

<br/>

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/images/screen_more.PNG" height="300px" width="500px">

</p>
