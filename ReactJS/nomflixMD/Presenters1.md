# 👨‍👨‍👧‍👦 **Presenters** #6.0 Home, TV, Search, Detail Presenter Coding - PART01

## 접근 방식 : 리액트 컴포넌트 코딩 패턴(= Container Presenter Pattern)

## Presenter의 구성

- 각각의 Presenter들은 Styled Component로 JSX 태그를 생성하고 CSS를 설정한다.

- Presenter는 export되어 Container에서 Rendering 되고 index.js를 통해서 export된다.

- propsType을 통해서 api를 통해서 가져오는 데이터의 유효성을 검사한다.

- 하나의 Presenter를 리턴하면서 각각의 CSS 요소를 배치하고 설정한다.

---

## HomePresenter

```jsx
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, error, loading }) => (
  <>
    <Helmet>
      <title>Movies | Nomfilx</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {/* Upcoming Movies Title 가져오기 */}
        {upcoming && upcoming.length > 0 && (
          <Section title="Upcoming Movies">
            {upcoming.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}

        {/* NowPlaying Title 가져오기 */}
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="Now Playing">
            {nowPlaying.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}

        {/* Popular Movies Title 가져오기 */}
        {popular && popular.length > 0 && (
          <Section title="Popular Movies">
            {popular.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
```

1. `HomePresenter`는 jsx가 표현된 하나의 변수를 리턴한다. 파라미터의 값으로 `nowPlaying, popular, upcoming, error, loading`의 값을 가지는데 `nowPlaying, popular, upcoming`은 `HomeContainer`에서 정의된 state값으로 api를 통해서 가져오는 상태값을 말한다. 나머지 `error`와 `loading`은 데이터를 가져오는 과정에서 발생하는 상태를 의미한다.

2. const 상수 = () => {function} 에서 하나의 element를 리턴할 수 있기 때문에 `<></>(fragment)` 로 묶어 하나의 [fragment](https://ko.reactjs.org/docs/fragments.html)를 리턴할 수 있도록 한다.

3. Helmet은 react 패키지 중 하나로 title의 값을 유연하게 바꿀 수 있도록 해준다. => 잘 사용하지 않음. [react-helmet npm 바로가기](https://www.npmjs.com/package/react-helmet)

```js
import Helmet from "react-helmet";
```

<br/>

4. `<Loader />`의 사용을 통해서 로딩중일때, 업로드 되지 않는 빈 화면을 채워준다.

<br/>

```jsx
{
  /* NowPlaying Title 가져오기 */
}
{
  nowPlaying && nowPlaying.length > 0 && (
    <Section title="Now Playing">
      {nowPlaying.map((movie) => (
        <Poster
          key={movie.id}
          id={movie.id}
          imageUrl={movie.poster_path}
          title={movie.original_title}
          rating={movie.vote_average}
          year={movie.release_date.substring(0, 4)}
          isMovie={true}
        />
      ))}
    </Section>
  );
}
```

5. `upcoming Title, rating, year, image`를 가져온다. 여기서 `Section과` `Poster`는 Compoenet에 정의되어 있다. `<Section>`을 통해서 표시되는 영화들의 구역을 나누고 전체적인 CSS를 작성하고 있다. `Poster`는 `Section`안에 표현되는 영화들의 정보인데, `key, id`(영화를 눌렀을 때 영화 고유의 설명 페이지로 넘어가야 하기 때문에 필요), `imageUrl, title, rating, year, isMovie`(TV의 정보일 때를 판단하기 위해서 필요) 값을 api를 통해서 가져오는 Container로 부터 정의된 값으로 불러온다. 여기서 `nowPlaying && nowPlaying.length > 0 && ` 조건으로 전체를 묶어줌으로써 데이터가 정상적으로 불러와지지 않거나 데이터가 존재하지 않을 때의 오류를 잡아준다.

<br/>

---

### Section을 이용해서 나누고, Poster의 데이터를 불러온 결과

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/ReactJS/images/section_example.PNG" height="465px" width="800px">
</p>

---

<br/>

```js
{error && <Message color="#e74c3c" text={error}
```

6. 위와 같은 코드를 통해서 오류가 발생했을 때 Message를 정의하여 오류 발생시 화면을 구성하도록 한다. Message는 Component 폴더에 구현되어 있다.

### 추가 정보

HomePresenter는 크게 `upcoming, popular, nowPlaying`으로 3가지 구역으로 나누어져 있다. 따라서 데이터를 불러오는 파라미터만 변경해주면 코드의 재사용이 가능하다.

`nowPlaying.map((movie) =>` [map()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map) 함수를 이용한 표현과 `year={movie.release_date.substring(0, 4)}` [substring()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring)을 이용한 함수를 볼 수 있는데 map을 통해서 불러온 json 데이터의 값에서 배열의 값을 가져오면서 하나하나 요소를 불러오는 것이고, substring을 통해서 날짜를 불러오면서 필요한 연도 부분만 잘라서 사용했다.

<br/>

---

## TVPresenter

```jsx
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";
import Helmet from "react-helmet";
const Container = styled.div`
  padding: 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, error, loading }) => (
  <>
    <Helmet>
      <title>TV Shows | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="Top Rated Shows">
            {/* show =>  show.name 하는데, json 객체 안에 show가 있고 거기에 있는 name을 불러온다. */}
            {topRated.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}

        {popular && popular.length > 0 && (
          <Section title="Popular Shows">
            {popular.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}

        {airingToday && airingToday.length > 0 && (
          <Section title="Airing Today">
            {airingToday.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.string,
};

export default TVPresenter;
```

TVPresenter는 [HomePresenter](#HomePresenter)와 내용이 유사하다. api의 요청에서 topRated, popular, airingToday의 파라미터를 가지며 각각 show 배열의 `id, poster_path, original_name, vote_average, first_air_date`의 데이터를 불러와 TV와 관련된 내용을 불러온다.

<br/>

---

## SearchPresenter

```jsx
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";
import Poster from "Components/Poster";

import Helmet from "react-helmet";

const Container = styled.div`
  padding: 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  error,
  searchTerm,
  loading,
  handleSubmit,
  updateTerm,
}) => (
  <Container>
    <Helmet>
      <title>Search | Nomflix</title>
    </Helmet>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Moives or TV Shows..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>

    {loading ? (
      <Loader />
    ) : (
      // fragment
      <>
        {/* MovieResults */}
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map((movie) => (
              <Poster
                key={movie.id}
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.original_title}
                rating={movie.vote_average}
                year={movie.release_date.substring(0, 4)}
                isMovie={true}
              />
            ))}
          </Section>
        )}

        {/* TVResults */}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Show Results">
            {tvResults.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
        {tvResults &&
          movieResults &&
          tvResults.length === 0 &&
          movieResults.length === 0 && (
            <Message
              text={`Nothing Found for : ${searchTerm}`}
              color="#95a5a6"
            ></Message>
          )}
      </>
      // fragemnt End;
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
  loading: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
```

1. SearchPresenter는 `movieResults, tvResults, error searchTerm, loading, handleSubmit, updateTerm` 의 파라미터를 가진다. `movieResults`는 영화를 검색했을때의 결과값을 불러오기 위해서 사용하고 tvResult는 TV 쇼의 검색 결과값을 불러오기 위해서 사용한다. `searchTerm`은 `SearchContainer`에서 넘어온 값으로

```jsx
searchByTerm = async () => {
  const { searchTerm } = this.state;
  this.setState({ loading: true });

  try {
    // 에러 체크
    // throw Error();

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
```

`this.state`로 현재의 상태를 불러와 `searchTerm`에 저장하도록 한다.(초기화) `try catch finally` 문을 이용하여 data의 results값들을 저장하는데, `moviesApi`의 search 함수를 통해서 `searchTerm`의 값을 넘겨주어 그에 해당하는 데이터를 불러오도록 한다. 또는 `tvApi`를 통해서 TV 쇼의 `searchTerm`에 해당하는 값들을 불러오도록 한다.

<br/>

```jsx
const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "bdf7698ebbd3309d2efa560f2d218da7",
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
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
```

api를 불러오는 `api.js`의 내용은 다음과 같다. `axios`를 통해서 해당 `baseURL`을 불러와 공통적으로 해당하는 주소를 저장하고 다음 쿼리에 필요한 `api_key`와 `language`값을 파라미터로 받아 쿼리문에 추가하도록 한다. 그 다음 `moviesApi`는 api의 값을 토대로 `axios`를 통해서 `upPlaying, upcoming, popular, movieDetail`의 json 데이터가 담긴 쿼리를 조합하도록 한다.

```js
{
  error && <Message color="#e74c3c" text={error} />;
}
{
  tvResults &&
    movieResults &&
    tvResults.length === 0 &&
    movieResults.length === 0 && (
      <Message
        text={`Nothing Found for : ${searchTerm}`}
        color="#95a5a6"
      ></Message>
    );
}
```

2. `error` 코드를 삽입함으로써 Component에 존재하는 `Message.js`의 값을 가져오도록한다. 검색결과가 없거나, 검색하는 문자열의 길이가 0인경우에 `Nothing Found for ${검색 문자열}` 을 출력하도록 처리했다.

## SearchPresenter의 결과 화면

### 검색하지 않았을 때의 화면

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/ReactJS/images/search_presenter1.PNG" height="465px" width="800px">
</p>

<br/>
<br/>

### 검색했을 때의 화면

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/ReactJS/images/search_presenter2.PNG" height="465px" width="800px">
</p>
