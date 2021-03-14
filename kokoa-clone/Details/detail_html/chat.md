# Detail of chat.html

## Basic of HTML

- \<!DOCTYPE html>은 현재 파일이 html형식을 따를것을 명시해준다.
- \<html> 태그를 통해서 해당 태그 안에 있는 것들은 html 형식으로 쓰여졌다는 것을 명시한다. `lang="kr"`의 속성값을 통해서 한글 바탕으로 작성됨을 명시해준다.
- vscode에서는 ! 하나만 치면 html 기본형식을 자동완성 시켜준다.

---

## **\<head>**

- `head`는 공통적으로 포함되어 있기 때문에 중복된 설명을 피하기 위해 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 세부사항에서 확인하도록 한다.

---

## **\<body>**

- **_바디의 구성요소_**

  1. [**`div`** (`class="status-bar"`)](#div__status-bar)
  2. [**`header`** (`class="alt-header"`)](#header__alt-header)
  3. [**`main`** (`class="main-screen main-chat"`)](#main__main-screen)
  4. [**`form`** (`class="reply"`)](#form)
  5. [**`script`** (`fontawesome`)](#script)

- _**바디에 해당하는 코드**_

```html
 <body>
    <!-- 상태바 -->
    <div class="status-bar">
      <!-- 클래스 이름을 지어줄 때 부모 자식의 명시 BEM(Block-Element-Modifier)방식-->
      <div class="status-bar__column">
        <span>No service</span>
        <!-- awesome font site 에서 가져온 아이콘 -->
        <i class="fas fa-wifi"></i>
      </div>
      <div class="status-bar__column">
        <span>18:43</span>
      </div>
      <div class="status-bar__column">
        <span>110%</span>
        <!-- 배터리 만땅 아이콘 -->
        <i class="fas fa-battery-full fa-lg"></i>
        <!-- 전기 아이콘 -->
        <i class="fas fa-bolt"></i>
      </div>
    </div>

    <!-- 스크린 헤더 Freinds, icons -->
    <header class="screen-header">
      <h1 class="screen-header__title">More</h1>
      <div class="screen-header__icons">
        <span><i class="fas fa-search fa-lg"></i></span>
        <span><i class="fas fa-music fa-lg"></i></span>
        <span
          ><a href="settings.html"><i class="fas fa-cog fa-lg"></a></i
        ></span>
      </div>
    </header>

    <main class="main-screen more-screen">
      <!-- user component -->
      <div class="user-component">
        <div class="user-component__column">
          <img
            src="https://avatars1.githubusercontent.com/u/53427147?s=400&u=73f38bc896b7ce68fcb8557ce2927fcfb689a2e1&v=4"
            class="user-component__avatar user-component__avatar--xl"
          />
          <div class="user-component__text">
            <h4 class="user-component__title">YeongJun</h4>
            <h6 class="user-component__subtitle">+82 10-5582-3208</h6>
          </div>
        </div>
        <div class="user-component__column">
          <i class="far fa-comment-alt fa-2x"></i>
        </div>
      </div>
      <div class="icon-row">
        <div class="icon-row__icon">
          <i class="far fa-calendar"></i>
          <span>Calendar</span>
        </div>
        <div class="icon-row__icon">
          <i class="far fa-smile-beam"></i>
          <span>Emoticons</span>
        </div>
        <div class="icon-row__icon">
          <i class="fas fa-paint-roller"></i>
          <span>Themes</span>
        </div>
        <div class="icon-row__icon">
          <i class="fas fa-file-invoice-dollar"></i>
          <span>Account</span>
        </div>
      </div>
      <div class="more-suggestions">
        <h4 class="more-suggestions__title">Suggestions</h4>
        <div class="more-suggestions__icons">
          <div class="more-suggestions__icon">
            <div class="more-suggestions__icon-image">
              <i class="fas fa-quote-right fa"></i>
            </div>
            <span class="more-suggestions__icon-text">Kokoa-Story</span>
          </div>
          <div class="more-suggestions__icon">
            <div class="more-suggestions__icon-image">
              <i class="fas fa-quote-right fa"></i>
            </div>
            <span class="more-suggestions__icon-text">Kokoa-Story</span>
          </div>
        </div>
      </div>
    </main>

    <!-- 네비게이션 바 -->
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__btn">
          <a class="nav__link" href="friends.html"
            ><i class="far fa-user fa-2x"></i
          ></a>
        </li>
        <li class="nav__btn">
          <a class="nav__link" href="chats.html">
            <span class="nav__notification badge">1</span>
            <i class="far fa-comment fa-2x"></i
          ></a>
        </li>
        <li class="nav__btn">
          <a class="nav__link" href="find.html"
            ><i class="fas fa-search fa-2x"></i
          ></a>
        </li>
        <li class="nav__btn">
          <a class="nav__link" href="more.html">
            <span class="nav__ellipsis__noti"></span>
            <i class="fas fa-ellipsis-h fa-2x"></i
          ></a>
        </li>
      </ul>
    </nav>

    <div id="no-mobile">
      <span>Your screen is too big ㅠㅠ</span>
    </div>

    <!-- 코드킷 자바스크립트, From awesome font site -->
    <script
      src="https://kit.fontawesome.com/17a0ba892b.js"
      crossorigin="anonymous"
    ></script>
  </body>
  <!-- 바디 끝 -->
```

## head

- `head`는 공통적으로 포함되어 있기 때문에 중복된 설명을 피하기 위해 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 세부사항에서 확인하도록 한다.

<br/>

## body

- ### div\_\_status-bar

  `status-bar`는 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 `status-bar`를 그대로 사용하기 때문에 설명을 보려면 이동하라.

<br/>

- ### header\_\_alt-header

  `alt-header`는 [friends.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/friends.md#header__screen-header)의 `screen-header`를 그대로 사용하기 때문에 설명을 보려면 이동하라.

<br/>

- ### main\_\_main-screen

```html
<!-- 메인 채팅 -->
<main class="main-screen main-chat">
  <div class="chat__timestamp">Saturday, January 30, 2021</div>

  <!-- 메세지1 -->
  <div class="message-row">
    <img
      src="https://avatars1.githubusercontent.com/u/53427147?s=400&u=73f38bc896b7ce68fcb8557ce2927fcfb689a2e1&v=4"
    />
    <div class="message-row__content">
      <span class="message__author">YeongJun</span>
      <div class="message__info">
        <span class="message__bubble">Hi!</span>
        <span class="message__time">21:27</span>
      </div>
    </div>
  </div>
  <!-- 메세지2 -->
  <div class="message-row message-row--own">
    <div class="message-row__content">
      <div class="message__info">
        <span class="message__bubble">Hi! Nice to meet you!</span>
        <span class="message__time">21:27</span>
      </div>
    </div>
  </div>
</main>
```

<br/>

![screen](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/images/chat-user-comment.PNG)

<br/>
<br/>

이와 같은 화면 구성을 가진다. 제일 위에 시간 stamp를 나타내고 행을 기준으로 div를 나눠서 사용자의 이미지와 이름, 메시지, 시간을 순서대로 나타낸다.

<br/>

- ### form

```html
<form class="reply">
  <div class="reply__column">
    <i class="far fa-plus-square fa-lg"></i>
  </div>
  <div class="reply__column">
    <input type="text" placeholder="Write a message..." />
    <i class="far fa-smile-wink fa-lg"></i>
    <button>
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</form>
```

<br/>

![screen](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/images/chat-form.PNG)

<br/>
<br/>

이와 같은 구조를 가진다. + 버튼과 메시지를 쓰는 곳으로 열을 나누고 input이 들어가는 곳에 이모티콘 이미지와 전송 버튼을 같이 넣는다.

<br/>

- ### script

`script`는 공통적으로 포함되어 있기 때문에 중복된 설명을 피하기 위해 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 세부사항에서 확인하도록 한다.
