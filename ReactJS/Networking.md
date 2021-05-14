# 🙋‍♂️ **Networking** #4.0 How to Use Mobie DB API, Axios

## 영화에 대한 Data를 어디서 가져오는가?

강의의 절차에 따라 진행했으며, [TheMoiveDB](https://www.themoviedb.org/?language=ko) 해당 사이트를 통해서 API KEY를 받아 json 객체로 처리하였음.

---

## 사이트에서 json 받아오기

1. 사이트에 접속한 후에 회원가입 절차를 통해서 자신의 API KEY를 확인할 수 있다.

**[API_KEY 확인 바로가기](https://www.themoviedb.org/settings/api)**

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/ReactJS/images/api_key.PNG" height="465px" width="800px">
</p>

<br/>

2. API 키 (v3 auth)를 선택해서 복사한다.

3. 목록에서 필요한 데이터의 정보를 선택한다.

4. 선택한 데이터 정보의 사용법을 본다.

**[데이터 선택 및 사용법 보기](https://developers.themoviedb.org/3/movies/get-movie-details)**

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/ReactJS/images/select_data.PNG" height="465px" width="800px">
</p>

5. API_KEY를 입력해서 json 데이터 요청을 위한 쿼리를 생성한다.

<br/>

## fetch (Use Axios)

### 해당 내용은 NomadCoder의 강의와 [블로그](https://velog.io/@shin6403/React-axios%EB%9E%80-feat.-Fetch-API) 를 참조하여 작성 했습니다.

- 라우터에서 호출하고, 데이터 단위로 fetch하는 것은 비효율적이다.

- 하나의 networking 하는 js 파일을 생성해서 데이터를 받아오는 부분을 global하게 만든다.

- 해당 프로젝트에서는 fetch 방법으로 `Axios`를 이용한다.

**[Axios github page 바로가기](https://github.com/axios/axios)**

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/ReactJS/images/axios.PNG" height="465px" width="800px">
</p>

### 1. Axios란?

Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리이다.

해당 프로젝트는 API를 가져오기 위해 JavaScript의 Fetch API 라이브러리를 사용하지 않고 Axios를 선택하였다.

### 2. Axios를 사용하는 이유

HTTP Client를 내장하고 있는 Angular와는 다르게, 리액트는 따로 내장 클래스가 존재하지 않는다.

따라서 리액트에서 AJAX를 구현하려면 JavaScript 내장객체인 XMLRequest를 사용하거나, HTTP Client를 사용해야 한다.

자바스크립트에서 API 연동을 위해서는 Fetch API를 사용한다. 하지만 자바스크립트의 built-in 라이브러리의 특성 때문에 Axios의 사용을 선호한다.

Axios는 HTTP 통신의 요구사항을 compact한 패키지로써 사용하기 쉽게 설계되었다.

Axios의 인스턴스를 직접 설정해줄 수 있다. 다른 header나 timeout이나 baseURL을 반복해서 사용하지 않아도 instance를 통해서 처리가 가능하다.

```jsx
const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
```

위의 코드의 예시처럼 baseURL을 설정하고 axios.create()라는 함수를 이용한다.

### 3. 프로젝트 예시

- Axios 추가하기
  > \> npm install Axios

<br/>

```jsx
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "api_key",
    language: "en-US",
  },
});

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  moiveDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get("search/moive", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: () => api.get("tv/top_Rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  shiwDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),

  search: (term) =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
```

api 상수에 axios.create() 함수를 통해서 기본적인 URL과 parameter들을 설정하였다. 그리고 가져오고자 하는 데이터들의 속성들을 선정하고 객체로 만들어 api.get("해당 속성 URL")을 통해서 함수 형태로 동작이 다르도록 설정하였다.

```jsx
axios.get(url[, config])            // GET
axios.post(url[, data[, config]])   // POST
axios.put(url[, data[, config]])    // PUT
axios.patch(url[, data[, config]])  // PATCH
axios.delete(url[, config])         // DELETE
```

axios는 위와같은 HTTP 메서드 별칭을 같는다.

```jsx
    // `params` are the URL parameters to be sent with the request
    // Must be a plain object or a URLSearchParams object
  params: {
    ID: 12345
  },
```

params는 요청과 함께 보내지는 URL 파라미터들이다. 즉, 기본 URL + 추가적인 파라미터 중에서 추가적인 파라미터 부분에 해당하는 것이다. 일반 객체 또는 URLSearchParams 객체 여야한다.
