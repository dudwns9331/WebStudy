# Javascript detail step1

- ## _**README**_

이 정리는 [youtube 드림코딩 엘리](https://www.youtube.com/watch?v=tJieVCgGzhs&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=2)님의 강의를 바탕으로 정리한 것입니다.

---

<br/>

- ### hello world 출력해보기

자바스크립트를 실행하기 위해서는 브라우저와 자바스크립트를 연결해주는 html 파일이 필요하다. 하지만 node.js를 통해서 node 명령어를 이용하여 바로 실행이 가능하다.

<br/>

```javascript
console.log("hello World");
```

<br/>

이와같이 입력을 하면 hello World가 웹브라우저(크롬) ctrl+shift+I를 통해서 뜨는 console창에 출력이 된다. 이는 브라우저가 제공하는 web API의 종류 중 하나인 console API를 이용했기 떄문이다.

---

<br/>

- ### 개발자 공식 사이트 이용하기

많은 사이트들이 있지만, mozila의 developer site가 가장 정리가 잘 되어 있고 많이 웹과 관련된 내용이 많기 때문에 사용된다.

[해당사이트로 바로가기](https://developer.mozilla.org/ko/)

---

<br/>

- ### asyn vs defer

자바스크립트 파일 즉, js파일을 html파일과 연동하는 방법은 많다. 대표적으로 아무런 속성 값 없이 \<head> 혹은 \<body>에 \<script> 태그를 이용해서 파일을 참조하는 방법이다.

1. asyn

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <script asyn src="main.js"></script>
</head>
```

<br/>

헤드에 asyn 속성을 이용해서 써주는 방법이다. 이는 parsing HTML과 fetching js가 병렬적으로 일어난다. js파일을 다운로드 받고 실행하는 동안 html parsing은 멈춘다. 그리고 js 파일을 실행하고 난 후 html parsing을 계속한다.

<br/>

![asyn](https://github.com/dudwns9331/WebStudy/blob/master/study-js_with_ellie/detail/images/asyn.PNG)

<br/>

2. defer

```html
<header>
  <title>Document</title>
  <script defer src="main.js"></script>
</header>
```

<br/>

헤드에 defer 옵션을 이용해서 써주는 방식이다. 이는 parsing을 하다가 script 태그를 만나면 js를 다운받으라는 명령만 내리고 계속 parsing을 계속하게 된다. parsing 이 다 끝나면 마지막에 js를 실행시킨다. head에 defer 옵션을 이용해서 사용하는 것이 가장 효율적이고 좋은 옵션이다.

<br/>

![asyn](https://github.com/dudwns9331/WebStudy/blob/master/study-js_with_ellie/detail/images/defer.PNG)

<br/>

---

<br/>

### Use strict

js파일을 작성하기 전에 가장 위에

```
'use strict';
```

이 코드를 추가하도록 한다. 이 코드를 통해서 vanila JavaScript를 작성할때 코드의 안정성을 더해준다.
