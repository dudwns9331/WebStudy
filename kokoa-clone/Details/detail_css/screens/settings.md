# Detail of friends.css

## Basic of CSS

- [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md) 파일을 통해서 [styles.css](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_css/styles.md) 파일을 `@import` 하기 때문에 모든 CSS 파일은 `stylesheet`가 적용되려면 `@import` 되어야 한다.

- CSS 파일은 html의 class 혹은 id를 통해서 연결이 가능하고 해당 값을 수정한 후 `;` 세미콜론으로 마무리 해야한다.

---

```css
.settings__setting {
  padding: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 21px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.settings__setting i {
  opacity: 0.8;
  margin-right: 20px;
  font-size: 22px;
}

.settings__setting-column:last-child {
  opacity: 0.5;
}
```

<br/>

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/images/screen_settings.PNG" height="300px" width="500px">
</p>
