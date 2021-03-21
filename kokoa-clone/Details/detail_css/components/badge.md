# Detail of badge.css

## Basic of CSS

- [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md) 파일을 통해서 [styles.css](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_css/styles.md) 파일을 `@import` 하기 때문에 모든 CSS 파일은 `stylesheet`가 적용되려면 `@import` 되어야 한다.

- CSS 파일은 html의 class 혹은 id를 통해서 연결이 가능하고 해당 값을 수정한 후 `;` 세미콜론으로 마무리 해야한다.

---

- ## badge

```css
.badge {
  background-color: tomato;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
}
```

네비게이션 바에 들어가는 notification의 알림 원을 정의하는 파일이다.
