# Detail of screen-header.css

## Basic of CSS

- [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md) 파일을 통해서 [styles.css](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_css/styles.md) 파일을 `@import` 하기 때문에 모든 CSS 파일은 `stylesheet`가 적용되려면 `@import` 되어야 한다.

- CSS 파일은 html의 class 혹은 id를 통해서 연결이 가능하고 해당 값을 수정한 후 `;` 세미콜론으로 마무리 해야한다.

---

```css
.screen-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--horizontal-space);
  margin-bottom: 15px;
}

.screen-header__title {
  font-size: 32px;
  /* 폰트의 굵기를 설정한다. */
  font-weight: 600;
}

.screen-header__icons span {
  margin-left: 25px;
}

@keyframes rotateCog {
  from {
    transform: none;
  }

  to {
    transform: rotateZ(360deg);
  }
}

.screen-header__icons .fa-cog:hover {
  animation: rotateCog 1s linear infinite;
}
```

1. font-weight는 폰트의 굵기를 설정한다.
2. [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)는 [Flexbox](https://developer.mozilla.org/en-US/docs/Glossary/Flexbox)에서 [Croxx Axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis) 항목의 정렬을 제어한다. 그리드 에이아웃에서는 그리드 영역 내 블록 축의 항목 정렬을 제어한다.
3. [@keyframes](https://developer.mozilla.org/ko/docs/Web/CSS/@keyframes)를 통해서 애니메이션 지정이 가능하다. from to 등 절차를 통해서 애니메이션을 나눌 수 있다는 특징이 있다.
4. [animation](https://developer.mozilla.org/ko/docs/Web/CSS/animation): rotateCog 1s linear infinite; @keyframes로 지정된 애니메이션을 수행한다. rotateCog를 1초 간격으로 직선적이게, 무한으로 실행한다.
