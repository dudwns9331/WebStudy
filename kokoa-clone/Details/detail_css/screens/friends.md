# Detail of friends.css

## Basic of CSS

- [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md) 파일을 통해서 [styles.css](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_css/styles.md) 파일을 `@import` 하기 때문에 모든 CSS 파일은 `stylesheet`가 적용되려면 `@import` 되어야 한다.

- CSS 파일은 html의 class 혹은 id를 통해서 연결이 가능하고 해당 값을 수정한 후 `;` 세미콜론으로 마무리 해야한다.

---

```css
#friends-display-link {
  text-align: center;
  display: block;
  background-color: #fafafa;
  padding: 15px 0px;
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: -15px;
}

#friends-display-link i {
  color: rgba(0, 0, 0, 0.3);
}

.friends-screen {
  padding: 0px var(--horizontal-space);
}

.friends-screen__channel {
  margin-top: 25px;
  border-top: var(--main-border);
  padding-top: 15px;
}

.freinds-screen__channel-header {
  justify-content: space-between;
  display: flex;
  margin-bottom: 30px;
  color: rgba(0, 0, 0, 0.5);
}

@keyframes HideSplashScreen {
  from {
    opacity: 1;
  }
  to {
    /* 애니메이션의 마지막 값 */
    opacity: 0;
    /* 이걸로 html에서 무시하도록 한다. */
    visibility: hidden;
  }
}

#splash-screen {
  position: absolute;
  background-color: var(--yellow);
  height: 100%;
  width: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 122px;
  /* 애니메이션을 보여주고 forwards 키워드로 마지막 값을 기억한다. */
  animation: HideSplashScreen 0.3s ease-in-out forwards;
  /* 사라지는게 더 빠르다. */
  /* 애니메이션 딜레이 */
  animation-delay: 0.7s;
}
```

<br/>

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/images/screen_friends.PNG" height="300px" width="500px">
</p>
