# Detail of friends.html

## Basic of HTML

- \<!DOCTYPE html>은 현재 파일이 html형식을 따를것을 명시해준다.
- \<html> 태그를 통해서 해당 태그 안에 있는 것들은 html 형식으로 쓰여졌다는 것을 명시한다. `lang="kr"`의 속성값을 통해서 한글 바탕으로 작성됨을 명시해준다.
- vscode에서는 ! 하나만 치면 html 기본형식을 자동완성 시켜준다.

---

## **\<head>**

- `head`는 공통적으로 포함되어 있기 때문에 중복된 설명을 피하기 위해 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 세부사항에서 확인하도록 한다.

## **\<body>**

- **_바디의 구성요소_**

  1. [**`div`** (`class="status-bar"`)](#div__status-bar)
  2. [**`header`** (`class="screen-header"`)](#header__screen-header)
  3. [**`a`** (`id="friends-display-link"`)](#friends-display-link)
  4. [**`main`** (`class="friends-screen"`)](#friends-screen)
  5. [**`nav`** (`class="nav"`)](#nav)
  6. [**`div`** (`id="splash-screen`)](#splash-screen)
  7. [**`script`** (`fontawesome`)](#script)

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

  <header class="screen-header">
    <h1 class="screen-header__title">Freinds</h1>
    <div class="screen-header__icons">
      <span><i class="fas fa-search fa-lg"></i></span>
      <span><i class="fas fa-music fa-lg"></i></span>
      <span><i class="fas fa-cog fa-lg"></i></span>
    </div>
  </header>

  <a id="friends-display-link">
    <i class="fas fa-info-circle"></i> Freinds' Names Display
    <i class="fas fa-chevron-right fa-xs"></i>
  </a>

  <main class="friends-screen">
    <div class="user-component">
      <div class="user-component__column">
        <img
          src="https://avatars1.githubusercontent.com/u/53427147?s=400&u=73f38bc896b7ce68fcb8557ce2927fcfb689a2e1&v=4"
          class="user-component__avatar user-component__avatar--xl"
        />
        <div class="user-component__text">
          <h4 class="user-component__title">YeongJun</h4>
          <!-- <h6 class="user-component__subtitle">this text whatever</h6> -->
        </div>
      </div>
      <div class="user-component__column"></div>
    </div>
    <div class="friends-screen__channel">
      <div class="freinds-screen__channel-header">
        <span>Channel</span>
        <i class="fas fa-chevron-up fa-xs"></i>
      </div>
      <div class="user-component">
        <div class="user-component__column">
          <img
            src="https://avatars1.githubusercontent.com/u/53427147?s=400&u=73f38bc896b7ce68fcb8557ce2927fcfb689a2e1&v=4"
            class="user-component__avatar user-component__avatar--sm"
          />
          <div class="user-component__text">
            <h4
              class="user-component__title user-component__title--not-bold"
            ></h4>
          </div>
        </div>
        <div class="user-component__column">
          <div><span>2</span> <i class="fas fa-chevron-right fa-xs"></i></div>
        </div>
      </div>
    </div>
  </main>

  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__btn">
        <a class="nav__link" href="friends.html"
          ><i class="fas fa-user fa-2x"></i
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

  <div id="splash-screen">
    <i class="fas fa-comment"></i>
  </div>

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

- `head`는 공통적으로 포함되어 있기 때문에 중복된 설명을 피하기 위해 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 세부사항에서 확인하도록 한다.

---

## body

- ### div\_\_status-bar

  status-bar는 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 `status-bar`를 그대로 사용하기 때문에 설명을 보려면 이동하라.

<br/>

- ### header\_\_screen-header

```html
<header class="screen-header">
  <h1 class="screen-header__title">Freinds</h1>
  <div class="screen-header__icons">
    <span><i class="fas fa-search fa-lg"></i></span>
    <span><i class="fas fa-music fa-lg"></i></span>
    <span><i class="fas fa-cog fa-lg"></i></span>
  </div>
</header>
```

<br/>

![screen](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/images/friends-screen-header.PNG)

<br/>
screen의 상단에 해당하는 내용으로 이와 같이 구성되어 있다.

<br/>

`<h1>` 태그를 통해서 글씨를 만들고 `div`로 3개의 아이콘을 `span`을 이용하여 하나의 block에 넣었다.

<br/>

- ### friends-display-link

```html
<a id="friends-display-link">
  <i class="fas fa-info-circle"></i> Freinds' Names Display
  <i class="fas fa-chevron-right fa-xs"></i>
</a>
```

<br/>

![freinds-display-link](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/images/friends-display-link.PNG)

<br/>
screen의 상단에 해당하는 내용으로 이와 같이 구성되어 있다.
<br/>

`<a>` 태그를 이용해서 링크를 걸어주는 방식으로 설정되어 있지만 해당 프로젝트에서는 아직 링크를 연결하여 친구를 찾는 페이지를 구성하지 않았다.

<br/>

- ### friends-screen

```html
<!-- friends-screen -->
<main class="friends-screen">
  <!-- user component -->
  <div class="user-component">
    <div class="user-component__column">
      <img
        src="https://avatars1.githubusercontent.com/u/53427147?s=400&u=73f38bc896b7ce68fcb8557ce2927fcfb689a2e1&v=4"
        class="user-component__avatar user-component__avatar--xl"
      />
      <div class="user-component__text">
        <h4 class="user-component__title">YeongJun</h4>
        <!-- <h6 class="user-component__subtitle">this text whatever</h6> -->
      </div>
    </div>
    <div class="user-component__column"></div>
  </div>
</main>
```

`user-component` 라는 클래스를 갖는 div를 가지고 있다. `user-component-column`을 통해서 두 개의 열을 가지도록 공간을 나누어 줬다. `<img>` 태그를 통해서 유저의 대표 이미지를 가져오고 `h4` 태그를 통해서 이름을 표시한다. 따라서 유저의 이미지와 유저의 이름을 나타내는것이 하나의 `div`로 묶여있다.

<br/>

```html
<!-- friends-screen channel -->
<div class="friends-screen__channel">
  <!-- friends-screen__channel header -->
  <div class="freinds-screen__channel-header">
    <span>Channel</span>
    <i class="fas fa-chevron-up fa-xs"></i>
  </div>
  <div class="user-component">
    <!-- 유저 이미지와 이름 -->
    <div class="user-component__column">
      <img
        src="https://avatars1.githubusercontent.com/u/53427147?s=400&u=73f38bc896b7ce68fcb8557ce2927fcfb689a2e1&v=4"
        class="user-component__avatar user-component__avatar--sm"
      />
      <div class="user-component__text">
        <h4 class="user-component__title user-component__title--not-bold">
          Channel
        </h4>
      </div>
    </div>
    <!-- 숫자와 화살표 -->
    <div class="user-component__column">
      <div><span>2</span> <i class="fas fa-chevron-right fa-xs"></i></div>
    </div>
  </div>
</div>
```

`main`의 다른 부분으로 `freinds-screen__channel`이라는 `div`로 묶여있고, `friends-screen__channel-header`를 통해서 라인 밑의 channel 과 위쪽을 향한 화살표를 표시해준다. 그리고 `user-component`를 통해서 유저의 이미지와 이름, 그리고 오른쪽 끝에 숫자와 오른쪽 화살표를 표시해준다.

<br/>

- ### nav

```html
<!-- 네비게이션 바 -->
<nav class="nav">
  <ul class="nav__list">
    <li class="nav__btn">
      <a class="nav__link" href="friends.html"
        ><i class="fas fa-user fa-2x"></i
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
```

<br/>

![nav](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/images/nav.PNG)

</br>
스크린의 하단에 해당하는 내용으로 이와 같이 구성되어 있다.

<br/>

`nav`라는 태그를 통해 클래스를 지정하고 `ul`과 `li`를 통해 리스트를 구성한다. 표시되는 요소들은 `<a>` 태그를 통해서 해당 리스트를 눌렀을 때 이동되는 페이지의 주소를 담는다. `<i>` 태그를 통해서 표시되는 내용을 아이콘으로 표시한다.

<br/>

1. `nav`는 문서중 현재 페이지 내, 혹은 다른 페이지로의 링크를 보여주는 구획을 나타낸다.
2. `ul`은 정렬되지 않은 목록을 나타낸다. 보통 불릿으로 표현된다.
3. `li`는 목록의 항목을 나타낸다. `ol(정렬)` 혹은 `ul(비정렬)` 리스트 태그로 묶여야 한다.

<br/>

- ### splash-screen

```html
<div id="splash-screen">
  <i class="fas fa-comment"></i>
</div>
```

해당 코드는 프로젝트에 있어서 애니메이션 효과를 통해 `splash` 효과를 주는 태그이다.

- ### script

`script`는 공통적으로 포함되어 있기 때문에 중복된 설명을 피하기 위해 [index.html](https://github.com/dudwns9331/WebStudy/blob/master/kokoa-clone/Details/detail_html/index.md#구성-요소-설명)의 세부사항에서 확인하도록 한다.
