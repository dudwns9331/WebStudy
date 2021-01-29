# Detail of login.css

## Basic of CSS

- [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md) 파일을 통해서 [styles.css](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_css/styles.md) 파일을 `@import` 하기 때문에 모든 CSS 파일은 `stylesheet`가 적용되려면 `@import` 되어야 한다.

- CSS 파일은 html의 class 혹은 id를 통해서 연결이 가능하고 해당 값을 수정한 후 ; 세미콜론으로 마무리 해야한다.

---

## **welcome-header 의 구성요소**

### welcome-header의 요소

1. [margin](#margin)
2. [text-align](#text-align)
3. [display](#display)
4. [felx-direction](#flex-direction)
5. [align-items](#align-items)
6. [font-size](#font-size)
7. [font-weight](#font-weight)
8. [opacity](#opacity)
9. [border](#border)
10. [padding](#padding)
11. [text-decoration](#text-decoration)

---

- _**부모 welcome-header**_

```css
.welcome-header {
  /* 위 아래 동일하게 90px 적용 */
  margin: 90px 0px;
  text-align: center; /* 모든 텍스트들이 중앙으로 오게 배치 */
  display: flex; /* 박스 형태의 것들을 inline의 속성으로 */
  flex-direction: column; /* 수평말고 수직으로 배열 */
  align-items: center; /* 안에 있는 요소들 전부 중앙으로 배치 */
}
```

- _**자식 welcome-header\_\_title**_

```css
.welcome-header__title {
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 600;
}
```

- _**부모 welcome-header\_\_text**_

```css
.welcome-header__text {
  width: 60%;
  opacity: 0.7;
}
```

---

## **login-form 의 구성요소**

<br/>

#### _**login form은 클래스가 아닌 id 지정 방식을 사용하였다.**_

<br/>

- _**부모 login-form**_

```css
/* login-form으로 지정된 form id에 있는 요소 전부 적용 */
#login-form {
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
}
```

<br/>

- _**login-form input**_

```css
/* login-form에 있는 input태그들만 적용 */
#login-form input {
  padding: 15px 0px;
  border: none;
  font-size: 18px;
  margin-bottom: 25px;
  /* 0.3초동안 focus되면 색이 변한다 */
}
```

<br/>

- _**login-form input:not([type="subbit])**_

```css
/* not을 이용해서 특정 속성만 attribute selector [type = "value"] */
#login-form input:not([type="submit"]) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  transition: border-color 0.3s ease-in-out;
}
```

<br/>

- _**login-form input[type="submit"]**_

```css
/* input의 attribute selector가 submit이면 cursor:pointer */
#login-form input[type="submit"] {
  background-color: var(--yellow);
  /* not allowed or pointer or progress로 마우스 포인터 지정 가능 */
  cursor: pointer;
  padding: 20px 0px;
  border-radius: 5px;
}
```

<br/>

- _**login-form input::placeholder**_

```css
/* input 안에 있는 hint의 색 지정 Email or phtone number, Password*/
#login-form input::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
```

<br/>

- _**login-form input:focus**_

```css
/* status가 적용됐기 때문에 transisiton으로 애니메니이션 적용 가능 */
#login-form input:focus {
  border-color: var(--yellow);
}
```

<br/>

- _**부모 login-form a**_

```css
/* find Kokoa Account or Password 링크*/
#login-form a {
  /* 텍스트 센터로 */
  text-align: center;
  /* 링크로 변하는 색 없애기 */
  text-decoration: none;
  /* 상속받은 색으로 */
  color: inherit;
  font-size: 13px;
}
```

<br/>

---

<br/>

# CSS

1. ## margin

![layout](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/images/layout.PNG)

`margin`은 content를 이루는 요소중에 border 바깥에 해당하는 부분이다. content는 보통 box 형식으로 block의 형태를 띈다. 따라서 content 들의 사이 공간을 조절하고 싶으면 `margin`을 통해서 조절한다. `margin`은 4개의 부분 top, bottom, right, left로 나누어 px(픽셀)을 단위로 하여 속성값을 줄 수 있다.

<br/>
아래와 같이 두 개의 속성의 개수를 통해서 상하, 좌우 혹은 모든 방향에 px을 줄 수 있다.
<br/>
<br/>

    margin: 1px 2px 3px 4px
    margin: 90px 0px
    margin: 90px

<br/>

2. ## text-align

`text-align`은 블록 요소나 표의 칸 상자의 가로 정렬을 설정한다. `vertial-align`과 동일하게 작동한다. `text-align`은 left, right, center, justify, match-parent 등의 속성을 갖는다. inline content들을 방향에 따라서 정렬하게 된다.

해당 코드는 center 속성을 통해서 inline 요소인 text들을 중앙으로 정렬하였다.
<br/>

    text-align: center;

<br/>

3. ## display

`dispaly`는 요소를 블록과 인라인 요소 중 어느 쪽으로 처리할지와 함께, flow, grid, flex 처럼 자식 요소를 배치할 때 사용할 레이아웃을 설정한다.

해당 프로젝트에서는 display의 속성 중 block, inline, flex를 사용한다.
<br/>

    display: flex;    // flexbox 속성
    display: inline;  // block 속성을 inline의 속성으로
    display: block;   // inline 속성 block의 속성으로

<br/>

4. ## flex-direction

`flex-direction`은 flex container 내의 아이템을 배치할 때 사용할 주축 및 방향(정방향, 역방향)을 지정한다. 해당 프로젝트에서는 `flex-direction: column`을 사용하여 수평말고 수직으로 배치하도록 하였다.
<br/>

    flex-direction: column;

<br/>

5. ## align-items

`align-item`는 `flex`와 사용이 많이된다. flex-end, flex-start, center, start, end 와 같은 속성들이 있고, FlexBox에서는 Cross Axis(교차축) 항목을 정렬한다. 해당 프로젝트에서는 center 속성을 통해서 중앙 정렬을 하였다.
<br/>

    align-items: center;

<br/>

6. ## font-size

`font-size`는 요소 안에 있는 font의 크기를 조절한다. text 값이라면 `font-size`를 통해서 조절이 가능하다. 단위는 px이다.

<br/>

7. ## font-weight

`font-weight`는 font의 굵기를 조절한다. text 값이라면 `font-weight`를 통해서 굵기 조절이 가능하다. 단위는 십진수이고 보통 100단위로 끊어서 사용한다.

<br/>

8. ## opacity

`opacity`는 해당 contet의 투명도를 결정한다. 1은 완전불투명 그대로의 상태이고 0과 가까워질수록 투명해진다.

<br/>

9. ## border

[margin의 설명](#margin)에 있는 이미지를 통해서 볼 수 있듯이 `border`는 실제로 보이는 content box의 가장 바깥에 있는 라인이다. 밑에 속성들을 통해서 다양하게 조절이 가능하다.
<br/>

    border-color = var(--yellow);     // 경계선의 색 지정
    border: none;                     // 경계선 없애기
    border-radius = 5px;              // 경계선 둥글게

10. ## padding

[margin의 설명](#margin)에 있는 이미지를 통해서 볼 수 있듯이 `padding`은 `border`와 실제 content 사이의 공간을 의미한다. 단위는 px이고 `margin`과 같이 속성을 주어 조절이 가능하다.

<br/>

11. ## text-decoration

`text-decoration`은 html의 a 태그와같이 링크를 표시하고 색이 변하는 text 부분을 변경할 수 있는 속성이다.

---
