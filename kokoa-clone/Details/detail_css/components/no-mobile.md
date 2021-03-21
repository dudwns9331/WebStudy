# Detail of no-mobile.css

## Basic of CSS

- [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md) 파일을 통해서 [styles.css](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_css/styles.md) 파일을 `@import` 하기 때문에 모든 CSS 파일은 `stylesheet`가 적용되려면 `@import` 되어야 한다.

- CSS 파일은 html의 class 혹은 id를 통해서 연결이 가능하고 해당 값을 수정한 후 `;` 세미콜론으로 마무리 해야한다.

---

## no-mobile

모든 화면에 적용되는 것으로, no-mobile id를 가진 태그를 통해서 정해진 픽셀의 크기보다 더 크다면 메인 화면을 보여주지 않고 가린다.

```css
#no-mobile {
  position: absolute;
  z-index: 99;
  height: 100%;
  width: 100%;
  background-color: var(--yellow);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 33px;
  top: 0;
}

@media screen and (max-width: 600px) {
  #no-mobile {
    display: none;
  }
}
```

`@media screen and (max-width: 600px)` 를 통해서 screen을 덮는다. `z-index`는 위치 지정 요소와 하위 플렉스 아이템의 z축 순서를 지정한다. 더큰 `z-index` 값을 가진 요소가 작은 값의 요소 위를 덮는다.

[z-index 설명 바로가기](https://developer.mozilla.org/ko/docs/Web/CSS/z-index)
