# Detail of index.html

## Basic of HTML

- \<!DOCTYPE html>은 현재 파일이 html형식을 따를것을 명시해준다.
- \<html> 태그를 통해서 해당 태그 안에 있는 것들은 html 형식으로 쓰여졌다는 것을 명시한다. `lang="kr"`의 속성값을 통해서 한글 바탕으로 작성됨을 명시해준다.
- vscode에서는 ! 하나만 치면 html 기본형식을 자동완성 시켜준다.
  ***

## **\<head>**

- _**헤드의 구성요소**_

  1. [`meta`](#meta)
  2. [`title`](#title)
  3. [`link`](#link)

- _**헤드에 해당하는 코드**_

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Kokoa Talk!</title>
  <link rel="stylesheet" href="CSS/styles.css" />
</head>
```

---

## **\<body>**

- **_바디의 구성요소_**

  1. [**`div`** (`class="status-bar"`)](#div__status-bar)
  2. [**`header`** (`class="welcome-header"`)](#header__welcome-header)
  3. [**`form`** (`action="friends.html"`)](#form__friends.html)
  4. [**`div`** (`id="no-mobile"`)](#div__id)
  5. [**`script`** (`fontadwesome`)](#script)

- _**바디에 해당하는 코드**_

```html
<body>
  <div class="status-bar">
    <div class="status-bar__column">
      <span>No service</span>
      <i class="fas fa-wifi"></i>
    </div>
    <div class="status-bar__column">
      <span>18:43</span>
    </div>
    <div class="status-bar__column">
      <span>110%</span>
      <i class="fas fa-battery-full fa-lg"></i>
      <i class="fas fa-bolt"></i>
    </div>
  </div>

  <header class="welcome-header">
    <h1 class="welcome-header__title">Welcome to Kokoa Clone</h1>
    <p class="welcome-header__text">
      If you have a Kakao Account, log in with youer eamil or phone number.
    </p>
  </header>

  <form action="friends.html" method="GET" id="login-form">
    <input name="username" type="text" placeholder="Email or phone number" />
    <input name="password" type="password" placeholder="Password" />
    <input type="submit" value="Log In" />
    <a href="#">Find Kokoa Account or Password</a>
  </form>

  <div id="no-mobile">
    <span>Your screen is too big ㅠㅠ</span>
  </div>

  <script
    src="https://kit.fontawesome.com/17a0ba892b.js"
    crossorigin="anonymous"
  ></script>
</body>
```

---

## _**구성 요소 설명**_

## head

- ### meta

  1.  name(속성)

      meta의 name 속성은 몇 개의 meta 정보의 이름을 정할 수 있고, 지정하지 않으면 http-equiv와 같은 기능을 한다. http-equiv는 웹브라우저가 서버에 명령을 내리는 속성으로 HTML 문서가 응답 헤더와 함께 웹서버로부터 웹 브라우저에 전송되었을 때에만 의미를 갖는다.

  2.  contnet

      meta의 content는 meta 정보의 내용을 지정한다.

- ### title

  title은 웹 브라우저에서 띄워지는 탭에 적혀지는 내용이다. 말 그대로 title의 역할을 한다.

- ### link

  1. rel

     link의 rel 속성은 relation의 줄임말로 어떤 관계로 링크를 맺는가를 결정함. 여기서는 `stylesheet` 라는 관계를 통해서 css 파일을 연결한다.

  2. link의 href는 hypertext reference로 href는 link 뿐만 아니라 연결하려고 하는 파일의 하이퍼링크 주소를 설정하게 된다.

## body

<!--
1. [**`div`** (`class="status-bar"`)](#div__status-bar)
  2. [**`head`** (`class="welcome-header"`)](#head__welcome-header)
  3. [**`form`** (`action="friends.html"`)](#form__friends.html)
  4. [**`div`** (`id="no-mobile"`)](#div__id)
  5. [**`script`** (`fontadwesome`)](#script) -->

- ### div\_\_status-bar

  - 화면 제일 상단의 상태바로 3개의 column으로 나누어져 있다. NO service와 와이파이 아이콘, 가운데 시간, 우측에 배터리와 전기표시 아이콘

  - 각각의 div에 status-bar\_\_column이라는 클래스 아이디를 준다. CSS파일에서 수정이 가능하도록 다 같은 클래스 아이디를 부여한다. 클래스의 이름은 부모-자식의 명시하게 된다. 이는 BEM(Block-Element-Modifier) 방식을 따른다.

  - 아이콘은 [font-awsome](https://fontawesome.com/) 을 활용하여 만들었음. font-awsome을 위해서는 아래의 스크립트 태그가 필요하다.

  홈페이지에서 생성가능한 js 형식

  ```html
  <script
    src="https://kit.fontawesome.com/17a0ba892b.js"
    crossorigin="anonymous"
  ></script>
  ```

- ### header\_\_welcome-header

  - \<header> 태그는 div와 다르지 않지만 body내의 의미없는 div와 구분 짓기 위해서 사용한다. 이 코드에서 header는 상태바 아래의 title 을 만들기 위해서 사용되었다.
  - \<h1> 태그는 글자의 크기와 함께 텍스트를 제공한다.
  - \<p> 태그는 본문의 내용 paragraph로 display의 형태는 block을 띄게된다. 본문이 오는 자리에는 어떤 요소도 같은 라인에 위치할 수 없다. (display를 바꾼다면 가능함.)

- ### form\_\_friends.html

  - \<form>은 다양한 속성을 가지고 있고 다양한 기능을 제공한다. 대표적으로 입력창과 제출을 묶어서 작송하게 할 수 있다. action은 데이터를 어디로 보낼건지 명시하고, method는 GET, POST와 같이 전송 방식에 대해서 명시한다.

  - \<input>은 다양한 속성에 따라서 기능을 제공한다. type을 통해서 입력하는 것의 유형을 지정해 줄 수 있고 placeholder의 설정을 통해서 입력창 위에 있는 hint를 조절할 수 있다. submit 타입은 버튼으로 입력값을 제출할 수 있는 능력을 가진다. value를 통해서 버튼에 text를 수정할 수 있다.

- ### div\_\_id
  - 이 값은 span 하나의 값만 지니고 전체 화면을 차지하면서 반응형 media 쿼리를 통해서 모바일화면이 아닐 때 모든 요소를 가려 화면을 보호하는 기능을 한다. `현재 해당 px 은 600으로 설정되어 있음.`
