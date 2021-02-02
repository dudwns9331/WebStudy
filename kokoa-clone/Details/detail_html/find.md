# Detail of find.html

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
  2. [**`header`** (`class="screen-header"`)](#header__screen-header)
  3. [**`main`** (`class="main-screen"`)](#main__main-screen)
  4. [**`nav`** (`class="nav"`)](#nav)
  5. [**`div`** (`id="no-mobile`)](#no-mobile)
  6. [**`script`** (`fontawesome`)](#script)

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

  <!-- 스크린 헤더 Freinds, icons -->
  <header class="screen-header">
    <h1 class="screen-header__title">Find</h1>
    <div class="screen-header__icons">
      <span><i class="fas fa-search fa-lg"></i></span>
      <span><i class="fas fa-cog fa-lg"></i></span>
    </div>
  </header>

  <!-- friends-screen main class-->
  <main class="main-screen">
    <div class="icon-row">
      <div class="icon-row__icon">
        <i class="fas fa-qrcode"></i>
        <span>QR Code</span>
      </div>
      <div class="icon-row__icon">
        <i class="far fa-address-book"></i>
        <span>Add by Contacts</span>
      </div>
      <div class="icon-row__icon">
        <i class="fas fa-fingerprint"></i>
        <span>Add by ID</span>
      </div>
      <div class="icon-row__icon">
        <i class="far fa-envelope"></i>
        <span>Invite</span>
      </div>
    </div>

    <div class="recommended-friends">
      <h6 class="recommended-friends__title">Recommended Friends</h6>
      <span>You have no recommended friends.</span>
    </div>
    <div class="open-chat">
      <div class="open-chat__header">
        <h4>Open Chat</h4>
        <span
          >Go to OpenChat Home <i class="fas fa-chevron-right fa-xs"></i
        ></span>
      </div>
      <div class="open-post">
        <div class="open-post__column">
          <h5 class="open-post__title">#CAT</h5>
          <h6 class="open-post__hashtags">#cat#cute#catmaster</h6>
          <div class="open-post__members">
            <img
              src="https://avatars1.githubusercontent.com/u/53427147?s=400&u=73f38bc896b7ce68fcb8557ce2927fcfb689a2e1&v=4"
            />
            <span class="open-post__member-count">1004 members</span>
            <div class="divider"></div>
            <span class="open-post__member-status">Active</span>
          </div>
        </div>
        <div class="open-post__column">
          <div class="open-post__photo">
            <img
              src="https://avatars1.githubusercontent.com/u/53427147?s=400&u=73f38bc896b7ce68fcb8557ce2927fcfb689a2e1&v=4"
            />
            <div class="open-post__heart-count">
              <i class="fas fa-heart fa-xs"></i>
              <span>999+</span>
            </div>
          </div>
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
```

---

## _**구성 요소 설명**_

## head

- `head`는 공통적으로 포함되어 있기 때문에 중복된 설명을 피하기 위해 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 세부사항에서 확인하도록 한다.

---

## body

- ### div\_\_status-bar

  `status-bar`는 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 `status-bar`를 그대로 사용하기 때문에 설명을 보려면 이동하라.

<br/>

- ### header\_\_screen-header

  `screen-header`는 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 `screen-header`를 그대로 사용하기 때문에 설명을 보려면 이동하라.

<br/>

- ### main\_\_main-screen

#### icon-row

```html
<div class="icon-row">
  <div class="icon-row__icon">
    <i class="fas fa-qrcode"></i>
    <span>QR Code</span>
  </div>
  <div class="icon-row__icon">
    <i class="far fa-address-book"></i>
    <span>Add by Contacts</span>
  </div>
  <div class="icon-row__icon">
    <i class="fas fa-fingerprint"></i>
    <span>Add by ID</span>
  </div>
  <div class="icon-row__icon">
    <i class="far fa-envelope"></i>
    <span>Invite</span>
  </div>
</div>
```

<br/>
<br/>

![screen](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/images/icon-row.PNG)

<br/>

위와 같이 `icon-row`는 4개의 열로 나누어 아이콘들을 정렬한다.

#### recommended-friends

```html
<div class="recommended-friends">
  <h6 class="recommended-friends__title">Recommended Friends</h6>
  <span>You have no recommended friends.</span>
</div>
```

<br/>
<br/>

![screen](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/images/recommended-friends.PNG)

<br/>

위와같은 형식을 갖는 부분이다.

#### open-chat

```html
<div class="open-chat">
  <div class="open-chat__header">
    <h4>Open Chat</h4>
    <span>Go to OpenChat Home <i class="fas fa-chevron-right fa-xs"></i></span>
  </div>

  <div class="open-post">
    <div class="open-post__column">
      <h5 class="open-post__title">#CAT</h5>
      <h6 class="open-post__hashtags">#cat#cute#catmaster</h6>
      <div class="open-post__members">
        <img
          src="https://avatars1.githubusercontent.com/u/53427147?s=400&u=73f38bc896b7ce68fcb8557ce2927fcfb689a2e1&v=4"
        />
        <span class="open-post__member-count">1004 members</span>
        <div class="divider"></div>
        <span class="open-post__member-status">Active</span>
      </div>
    </div>

    <div class="open-post__column">
      <div class="open-post__photo">
        <img
          src="https://avatars1.githubusercontent.com/u/53427147?s=400&u=73f38bc896b7ce68fcb8557ce2927fcfb689a2e1&v=4"
        />
        <div class="open-post__heart-count">
          <i class="fas fa-heart fa-xs"></i>
          <span>999+</span>
        </div>
      </div>
    </div>

    open-post end
  </div>
  open-caht end
</div>
```

<br/>
<br/>

![screen](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/images/open-chat.PNG)

<br/>

이와 같은 구성으로 `open-chat` 클래스를 가진 `div`는 open chat부분을 담는 block이고 그 안에 `header, post`로 위 아래 나누어 공간을 가진다. `post`는 또한, 2개의 열을 가지고 있으며 왼쪽은 `title, hashtag, members, img`를 가지고 있다. 오른쪽은 `img와 아이콘`을 가진다.

- ### nav

  `nav`는 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 `nav`를 그대로 사용하기 때문에 설명을 보려면 이동하라.

- ### no-mobile

  `no-mobile`은 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 `splash-screen`을 그대로 사용하기 때문에 설명을 보려면 이동하라.

- ### script

  `script`는 공통적으로 포함되어 있기 때문에 중복된 설명을 피하기 위해 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 세부사항에서 확인하도록 한다.
