# Detail of find.css

## Basic of CSS

- [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md) 파일을 통해서 [styles.css](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_css/styles.md) 파일을 `@import` 하기 때문에 모든 CSS 파일은 `stylesheet`가 적용되려면 `@import` 되어야 한다.

- CSS 파일은 html의 class 혹은 id를 통해서 연결이 가능하고 해당 값을 수정한 후 `;` 세미콜론으로 마무리 해야한다.

---

- ## find.css

```css
.recommended-friends {
  margin: 25px 0px;
  padding: 25px 0px;
  border-top: var(--main-border);
  border-bottom: var(--main-border);
}
.recommended-friends__title {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.4);
}

.recommended-friends span {
  display: block;
  margin: 100px 0;
  font-size: 18px;
  text-align: center;
}

.open-chat__header {
  display: flex;
  justify-content: space-between;
  opacity: 0.8;
  margin-bottom: 25px;
}

.open-chat__header span {
  opacity: 0.6;
}

.open-post {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.open-post__title {
  font-weight: 600;
  margin-bottom: 7px;
}

.open-post__hashtags {
  text-transform: uppercase;
  opacity: 0.6;
}

.open-post__members {
  margin-top: 7px;
  display: flex;
  align-items: center;
}

.open-post__members img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
}

.open-post__member-count {
  opacity: 0.5;
  font-size: 14px;
}

.open-post__members .divider {
  width: 2px;
  height: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  margin: 0px 5px;
}

.open-post__member-status {
  color: #ffb0e0;
}

.open-post__photo {
  position: relative;
}

.open-post__photo img {
  width: 120px;
  height: 120px;
  border-radius: 10px;
}

.open-post__heart-count {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 5px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px;
}

.open-post__heart-count span {
  margin-left: 3px;
}

@keyframes haertBeat {
  0% {
    color: wheat;
  }

  50% {
    color: tomato;
    transform: scale(2);
  }

  100% {
    color: wheat;
  }
}

.open-post__heart-count:hover i {
  /* 브라우저에게 변하는것을 미리 설명해준다. 그래픽카드의 가속을 위함 */
  will-change: transform;
  animation: haertBeat 0.5s linear infinite;
}
```

<br/>

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/images/screen_find.PNG" height="300px" width="500px">
</p>
