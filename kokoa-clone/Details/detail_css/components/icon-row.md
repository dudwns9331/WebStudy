# Detail of icon-row.css

## Basic of CSS

- [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md) 파일을 통해서 [styles.css](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_css/styles.md) 파일을 `@import` 하기 때문에 모든 CSS 파일은 `stylesheet`가 적용되려면 `@import` 되어야 한다.

- CSS 파일은 html의 class 혹은 id를 통해서 연결이 가능하고 해당 값을 수정한 후 `;` 세미콜론으로 마무리 해야한다.

---

- ## icon-row

1. icon-row는 [more.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/more.md), [find.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/find.md)에서 사용하는 아이콘의 행을 정의한다.

```css
.icon-row {
  display: flex;
  justify-content: space-between;
}

.icon-row__icon {
  display: flex;
  /* row는 옆에 오는 것이고 column은 아래 오는 것이다. */
  flex-direction: column;
  /* Cross Axis와 Main Axis가 바뀌었다. flex-direction: column; 이기 때문에 */
  /* 여기서 Main Axis가 세로로 바뀌었기 때문에  Cross Axis를 바꾸기 위해 사용*/
  align-items: center;
}

.icon-row__icon i {
  font-size: 35px;
}

.icon-row__icon span {
  margin-top: 18px;
}
```

[`flex-direction`](https://developer.mozilla.org/ko/docs/Web/CSS/flex-direction)을 통해서 flex 박스의 기준선을 조정한다. `Cross Axis`와 `Main Axis`를 `flex-direction: column;` 를 통해서 반전시켜준다.

<br/>
<br/>

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/images/icon-row-more.PNG" height="300px" width="500px">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/images/icon-row.PNG" height="300px" width="500px">
</p>
