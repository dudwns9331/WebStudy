# Detail of more.html

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
    <!-- 상태바 -->
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

  추가적으로 이 파일 에서는 오른쪽 위의 톱니바퀴를 통해 [settings.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/settings.md) 로 이동이 가능하다.

<br/>

- ### main\_\_main-screen

#### user-component

```html
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
```

<br/>
<br/>

![screen](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/user-component-more.PNG)

<br/>
이와 같은 user-component 구성을 가지고 있다.

<br/>
<br/>

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

![screen](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/icon-row-more.PNG)

<br/>
이와 같은 icon-row 구성을 가지고 있다.

<br/>
<br/>

#### suggestions

```html
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
```

<br/>
<br/>

![screen](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/suggestions.PNG)

<br/>

이와 같은 `suggestions`을 가지고 있고, `suggestions`를 담는 가장 큰 `block`으로 `more-suggestions` 클래스를 가진 `div`와 그 안에 열 마다 `icon`을 두어 구분짓는다.

- ### nav

  `nav`는 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 `nav`를 그대로 사용하기 때문에 설명을 보려면 이동하라.

- ### no-mobile

  `no-mobile`은 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 `splash-screen`을 그대로 사용하기 때문에 설명을 보려면 이동하라.

- ### script

  `script`는 공통적으로 포함되어 있기 때문에 중복된 설명을 피하기 위해 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 세부사항에서 확인하도록 한다.
