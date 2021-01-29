# Detail of status-bar.css

## Basic of CSS

- [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md) 파일을 통해서 [styles.css](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_css/styles.md) 파일을 `@import` 하기 때문에 모든 CSS 파일은 `stylesheet`가 적용되려면 `@import` 되어야 한다.

- CSS 파일은 html의 class 혹은 id를 통해서 연결이 가능하고 해당 값을 수정한 후 ; 세미콜론으로 마무리 해야한다.

---

## **status-bar 의 구성요소**

1. [justify-content](#justify-content)
2. [login의 요소](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_css/screens/login.md)

---

<br/>

- _**부모 status-bar**_

```css
.status-bar {
  /* 상태바 전체 적용 display:flex, center */
  /* between-content 안쓰는 이유는 양 옆에 길이가 다르기 때문에 가운데 값을 정렬할 수 없음 */
  display: flex;
  justify-content: center;
  padding: 5px 3px;
  top: 0;
  width: 100%;
  position: fixed;
  background-color: white;
}
```

<br/>

- _**자식 status-bar\_\_column**_

```css
.status-bar__column {
  /* cetner을 사용했으므로 33%으로 나눠준다. */
  width: 33%;
}
```

<br/>

- _**자식 status-bar\_\_column:frstchild span**_

```css
.status-bar__column:first-child span {
  /* first-child span은 해당 클래스의 span 요소중 첫번째 자식을 의미함*/
  margin-right: 5px;
}
```

<br/>

- _**자식 status-bar\_\_column:nth-child(2)**_

```css
.status-bar__column:nth-child(2) {
  /* nth-child(2)는 해당 클래스의 요소 중 2번째 자식을 의미함 */
  /* 가운데 있는 span값을 가운데로 옮겨줌 */
  display: flex;
  justify-content: center;
}
```

<br/>

- _**자식 status-bar\_\_column:last-child**_

```css
.status-bar__column:last-child {
  /* last-child는 해당 클래스를 가진 요소 중 가장 마지막 자식을 의미함 */
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
```

<br/>

- _**자식 status-bar\_\_column .fa-battery-full**_

```css
.status-bar__column .fa-battery-full {
  /* status-bar__column 안에 배터리 이미지를 좌우에 margin값을 5px 씩 준다. */
  margin: 0px 5px;
}
```

---

<br/>

# CSS

1. ## justify-content

justify-content 속성은 flex 요소의 수평 방향 정렬 방식을 설정한다. -> 주축
start, end, flex-start, flex-end, center, space-between 등의 속성을 가지고 있다. 정렬 컨테이너 내에서 적용되는 것은 start, end를 사용할 수 있고 flex 컨테이너에서는 flex-start, flex-end등을 사용할 수 있다. 축을 기준으로는 center를 많이 사용하는데, flex-direction으로 축의 변경이 가능하고 ceter는 주축을 따라 정렬 컨테이너의 중심을 향해 서로 같은 높이로 된다.

[justify-content의 자세한 설명 바로가기](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

---
