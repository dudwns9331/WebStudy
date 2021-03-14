# Detail of settings.html

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
  2. [**`header`** (`class="alt-header"`)](#alt-header)
  3. [**`main`** (`class="main-screen"`)](#main__main-screen)
  4. [**`nav`** (`class="nav"`)](#nav)
  5. [**`script`** (`fontawesome`)](#script)

- _**바디에 해당하는 코드**_

```html
<body>
  5
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

  <!-- alt 스크린 헤더 icons, Settings -->
  <header class="alt-header">
    <div class="alt-header__column">
      <a href="more.html">
        <i class="fas fa-angle-left fa-3x"></i>
      </a>
    </div>
    <div class="alt-header__column">
      <h1 class="alt-header__title">Settings</h1>
    </div>
    <div class="alt-header__column">
      <i class="fas fa-search fa-2x"></i>
    </div>
  </header>

  <!-- 화면의 메인 내용 리스트 -->
  <main class="main-screen">
    <ul class="settings-list">
      <li class="settings__setting">
        <div class="settings__setting-column">
          <!-- 첫번째 row -->
          <i class="fas fa-bullhorn"></i>
          <span>Notices</span>
        </div>
        <div class="settings__setting-column"></div>
      </li>
      <li class="settings__setting">
        <div class="settings__setting-column">
          <!-- 두번째 row -->
          <i class="fas fa-flask"></i>
          <span>Kokoa Lab</span>
        </div>
        <div class="settings__setting-column"></div>
      </li>
      <li class="settings__setting">
        <div class="settings__setting-column">
          <!-- 세번째 row -->
          <i class="fas fa-info-circle"></i>
          <span>Version</span>
        </div>
        <div class="settings__setting-column">Latest Version</div>
      </li>
    </ul>
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

## _**구성 요소 설명**_

## head

- `head`는 공통적으로 포함되어 있기 때문에 중복된 설명을 피하기 위해 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 세부사항에서 확인하도록 한다.

---

## body

- ### div\_\_status-bar

  `status-bar`는 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 `status-bar`를 그대로 사용하기 때문에 설명을 보려면 이동하라.

<br/>

- ### header\_\_screen-header

  `alt-header`는 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 `screen-header`를 그대로 사용하기 때문에 설명을 보려면 이동하라.

<br/>

- ### main-screen

```html
<main class="main-screen">
  <ul class="settings-list">
    <li class="settings__setting">
      <div class="settings__setting-column">
        <!-- 첫번째 row -->
        <i class="fas fa-bullhorn"></i>
        <span>Notices</span>
      </div>
      <div class="settings__setting-column"></div>
    </li>
    <li class="settings__setting">
      <div class="settings__setting-column">
        <!-- 두번째 row -->
        <i class="fas fa-flask"></i>
        <span>Kokoa Lab</span>
      </div>
      <div class="settings__setting-column"></div>
    </li>
    <li class="settings__setting">
      <div class="settings__setting-column">
        <!-- 세번째 row -->
        <i class="fas fa-info-circle"></i>
        <span>Version</span>
      </div>
      <div class="settings__setting-column">Latest Version</div>
    </li>
  </ul>
</main>
```

<br/>
<br/>

![screen](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/images/main-screen-settings.PNG)
<br/>
이와 같은 user-component 구성을 가지고 있다.

<br/>
<br/>

- ### nav

  `nav`는 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 `nav`를 그대로 사용하기 때문에 설명을 보려면 이동하라.

- ### script

  `script`는 공통적으로 포함되어 있기 때문에 중복된 설명을 피하기 위해 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 세부사항에서 확인하도록 한다.
