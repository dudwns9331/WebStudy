# 💁‍♂️ **Networking** #5.0 Container Setting

## 접근 방식 : 리액트 컴포넌트 코딩 패턴(= Container Presenter Pattern)

해당 어플리케이션에서 사용하는 코딩 패턴에 대해서 알아본다.

- Container는 data, state를 가지고 api를 불러온다.
- Presenter는 data들을 보여준다.
- Presenter는 state를 가지지 않는다.
- Presenter는 API도 모르고 Class도 없는 함수형 컴포넌트이다.
- Presenter는 `export default () => "return value"` 의 형식을 갖는다.
- Presenter = Style, Container = Data

---

### 파일 생성하기

- Detail
- Home
- Search
- TV

위 이름의 자바스크립트 파일들을 지우고 각각의 폴더를 생성해서 Presenter와 Container, 그리고 폴더를 인식하기 위한 index.js를 생성하도록한다. Container는 export 하기 위해서는 index.js는 반드시 생성되어야 한다.

```js
// ../Home/index.js
import HomeContainer from "./HomeContainer";

export default HomeContainer;

// HomePresenter.js
export default () => "Home";

```

각각의 index.js 파일과 Presenter 파일은 임시적으로 다음과 같이 Container를 export 하기 위해서 작성된다.

```
├─Components
└─Routes
    ├─Detail
    ├─Home
    ├─Search
    └─TV
```

파일을 생성하고 나면 각각 Route 되어야 할 화면들의 폴더가 생기고 그안에는 `index.js, ${Value}Container.js, ${Value}Presenter.js` 파일들이 생성되어야 한다.

---

## Home Container 제작

---

### Home Container

```js
import { moviesApi } from "api"; // api.js로 부터 기능을 API 관련 기능을 가져오기 위해 import 한다.
import React from "react";
import HomePresenter from "./HomePresenter";

// Class를 export 하도록 한다.
export default class extends React.Component {
  // Home 에서 갖는 State 값들은 총 3가지 + 2가지 (에러, 로딩)이다.
  //   state 초기화
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: null,
  };

  // componentDidMount # 5.2 Home Container
  // componentDidMount()에서는 MoiveDB에서 API를 통해서 외부의 정보를 JSON 객체로 불러온다.
  async componentDidMount() {
    try {
      // async, await, Promise 정리하기 # 5.2 Home Container
      // 객체 비구조화
      const {
        data: { results: nowPlaying },
      } = await moviesApi.nowPlaying();

      const {
        data: { results: upcoming },
      } = await moviesApi.upcoming();

      const {
        data: { results: popular },
      } = await moviesApi.popular();

      this.setState({
        nowPlaying,
        upcoming,
        popular,
      });
    } catch {
      this.setState({
        error: "Can't find movies information",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    console.log(this.state);
    return (
      // return React Element JSX
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
```

1. [export default](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export)는 JavaScript 모듈에서 함수, 객체, 원시 값을 내보낼 때 사용한다. 내보낸 값은 다른 프로그램에서 [import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import) 문을 사용해서 가져올 수 있다. 즉, 객체지향에서 public을 사용하는 것과 비슷하다고 할 수 있다.

<br/>

2. [componentDidMount()](https://ko.reactjs.org/docs/react-component.html) 함수는 [리액트 생명주기](#ReactLifecycle)와 관련된 함수로 컴포넌트가 마운트된 직후, 즉 트리에 삽입된 직후에 호출된다. DOM 노드가 있어야 하는 초기화 작업이 이 메서드에서 이루어지게 된다. 외부에서 데이터를 불러와야 한다면, 네트워크 요청을 보내기 적절한 위치이다.

<br/>

3. [render()](https://ko.reactjs.org/docs/react-component.html#render) 메서드는 클래스 컴포넌트에서 반드시 구현되어야 하는 유일한 메서드이다. 이 메서드가 호출되면 `this.props`와 `this.state`의 값을 활용하여 아래의 값 중 하나를 리턴한다.

   - React Element
   - Array, Fragment
   - Portal
   - String & number
   - Boolean | null

   render 함수는 컴포넌트의 state를 변경하지 않고, 호출될 때마다 동일한 결과를 반환해야 한다. 브라우저와 직접적으로 상호작용하지 않는다.

<br/>

4. `async, await` : [async](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function)는 키워드로 함수를 AsyncFuntion 객체를 반환하는 비동기 함수를 정의하도록 한다. 비동기 함수는 이벤트 루프를 통해 비동기적으로 작동하는 함수로, 암시적으로 Promise를 사용하여 결과를 반환한다. [await](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/await)는 Promise 연산자를 기다리기 위해서 사용된다. 이 연산자는 async function 내부에서만 사용이 가능하다.

   - 동기는 동시에 일어난다는 뜻이다. 요청과 결과가 동시에 일어난다는 약속, 요청하면 시간이 얼마나 걸리던지 상관없이 요청한 자리에서 결과가 주어져야 한다.

   - 비동기는 동시에 일어나지 않는다는 뜻이다. 요청과 결과가 동시에 일어나지 않는다는 약속, 즉 여러 가지 요청이 있을 수 있고 결과 주어짐이 즉각적으로 이루어지지 않아도 된다.

   - [Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타낸다. 즉, 비동기 연산이 종료된 이후의 결과값이나 실패 이유를 처리하기 위한 처리기를 연결할 수 있도록 한다.

<br/>

5. [객체 비구조화](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)는 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식이다. 해당 프로젝트에서는 `const {data: { results: nowPlaying },} = await moviesApi.nowPlaying();` 를 통해서 볼 수 있듯이 data 객체의 results를 nowPlaying으로 이름을 지정하고 그 값을 await를 통해서 moviesApi의 비동기 처리 값을 기다리는 것을 알 수 있다.

<br/>

6. [setState()](https://ko.reactjs.org/docs/faq-state.html)는 state 객체에 대한 업데이트를 실행한다. state가 변경되면, 컴포넌트는 리렌더링 된다.

<br/>
<br/>

### ReactLifecycle

<p align="center">
<a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/"><img src="https://github.com/dudwns9331/WebStudy/blob/master/ReactJS/images/react_life_cycle.PNG" height="465px" width="800px"></a>
</p>

<br/>

## Detail & Search Container 제작

---

### Search Conatiner

```js
import { moviesApi, tvApi } from "../../api";
import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "code",
    error: null,
    loading: true,
  };

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  componentDidMount() {
    this.handleSubmit();
  }

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });

    try {
      const {
        data: { results: movieResults },
      } = await moviesApi.search(searchTerm);

      const {
        data: { results: tvResults },
      } = await tvApi.search(searchTerm);

      this.setState({ movieResults, tvResults });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
```

<br/>

### Search Conatiner

```js
import { moviesApi, tvApi } from "api";
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  constructor(props) {
    super(props);

    const {
      location: { pathname },
    } = props;

    this.state = {
      result: null,
      error: null,
      loading: null,
      isMovie: pathname.includes("/movie/"),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;

    const { isMovie } = this.state;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
      // 종료를 위해서 return 을 사용한다.
    }

    let result = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.moiveDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
```
