# 👨‍👨‍👧‍👦 **Presenters** #6.0 Home, TV, Search, Detail Presenter Coding - PART02

## 접근 방식 : 리액트 컴포넌트 코딩 패턴(= Container Presenter Pattern)

## Presenter의 구성

- 각각의 Presenter들은 Styled Component로 JSX 태그를 생성하고 CSS를 설정한다.

- Presenter는 export되어 Container에서 Rendering 되고 index.js를 통해서 export된다.

- propsType을 통해서 api를 통해서 가져오는 데이터의 유효성을 검사한다.

- 하나의 Presenter를 리턴하면서 각각의 CSS 요소를 배치하고 설정한다.

---

## DetailPresenter

```jsx
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import noPoster from "assets/noPosterSmall.png";

import Helmet from "react-helmet";
import Videos from "Components/Videos";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 50px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 13px;
  opacity: 0.7;
  line-height: 1.5;
  width: 70%;
  margin-bottom: 20px;
`;

// const Videos = styled.iframe`
//   width: 70%;
//   height: 70%;
// `;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Nomflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />

      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : noPoster
          }
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>{result.runtime || result.episode_run_time} min</Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          {/* <Videos
            src={`https://www.youtube.com/embed/${result.videos.results[0].key}`}
          ></Videos> */}
          <Videos
            videoUrl={result.videos.results[0].key}
            name={result.videos.results[0].name}
            type={result.videos.results[0].type}
          ></Videos>
        </Data>
      </Content>
    </Container>
  );
DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.string,
};

export default DetailPresenter;
```

> DetailPresenter는 Nomfilx 프로젝트의 [README](https://github.com/dudwns9331/WebStudy/tree/master/ReactJS/nomflix#readme) 에 표시된 체크리스트 과제를 수행하면서 계속적으로 변화된다.

<br/>

1. DetailPresenter는 먼저 Movies나 TV의 Results들을 클릭했을 때의 영화, TV쇼의 대략적인 정보를 포함하는 결과를 출력하는 화면이다.

2. DetailContainer의 구성은 Container

- Backdrop : background 이미지를 지정한다.
- Content : Data, Title, Item, ItemContainer, Divider, Overview, Videos를 감싸는 결과에 대한 표시되는 데이터들을 감싸는 div이다.
- Cover : 화면 좌측에 표시되는 결과값의 이미지를 불러온다.
- Data : Content와 같은 내용을 포함하고 Content의 제어를 받는다.
- Title : 설명란의 가장 윗 부분에, 결과값의 title을 출력한다.
- ItemContainer : Title을 제외한 연도, 영상길이(분), 장르를 감싸는 Container이다.
- Item : 연도, 영상길이, 장르와 같은 정보를 담는 태그이다.
- Divider : Item사이를 중앙점으로 나누기 위해 사용하는 태그이다.
- Overview : Title, Item들 밑의 결과값 영상에 대한 간략적인 설명을 포함한다. 해당 정보는 MDB에서 api를 통해서 가져온다.

<br/>

3. background-image를 `url()` 함수를 통해서 `props.bgImage`로 background-image에 대한 주소를 불러오도록 한다.

```jsx
<Helmet>
  <title>
    {result.original_title ? result.original_title : result.original_name} |
    Nomflix
  </title>
</Helmet>
```

<br/>

4. Helmet을 이용해서 해당 결과값에 대한 고유한 title 정보를 페이지의 title로 지정하도록 한다.

### READMD 과제 (업데이트 예정 #1)

```jsx
{
  /* <Videos
            src={`https://www.youtube.com/embed/${result.videos.results[0].key}`}
          ></Videos> */
}
<Videos
  videoUrl={result.videos.results[0].key}
  name={result.videos.results[0].name}
  type={result.videos.results[0].type}
></Videos>;
```

Overview밑에 해당 결과값에 대한 영상 정보를 가져온다. 현재는 트레일러만 가져오도록 Videos.js를 작성했고 처음 시도는 DetailPresenter에 자체적으로 Videos Element를 생성해서 추가해 주었지만, Videos에 대한 데이터 정보를 더 많이 가져오기 위해 분리함.

---

## 결과 화면

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/ReactJS/images/detail_presenter.PNG" height="465px" width="800px">
</p>

<br/>

---

## Styled-Component CSS

### 해당 프로젝트에서 Styled-Component 사용했기 때문에 CSS 문법에 맞춰 각각의 요소들을 설명하도록 함.

```jsx
const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;
```

```jsx
const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
`;
```

```jsx
const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;
```

```jsx
const Title = styled.h3`
  font-size: 50px;
  margin-bottom: 10px;
`;
```

```jsx
const ItemContainer = styled.div`
  margin: 20px 0;
`;
```

```jsx
const Item = styled.span``;
```

```jsx
const Divider = styled.span`
  margin: 0 10px;
`;
```

```jsx
const Overview = styled.p`
  font-size: 13px;
  opacity: 0.7;
  line-height: 1.5;
  width: 70%;
  margin-bottom: 20px;
`;
```

> 해당 프로젝트를 진행하면서 CSS에 대한 조정이 힘들고 개념이 부족하다고 느꼈기 때문에 추가적인 개념 정리 및 설명을 쓰도록한다.

- [position](https://developer.mozilla.org/ko/docs/Web/CSS/position)

  - position은 문서 상에 요소를 배치하는 방법을 지정한다.
  - relative, absolute와 같은 속성을 가진다.
  - absolute : 요소를 일반적인 문서 흐름에서 제거하고, 페이지 레이아웃에 공간도 배정하지 않는다. 최종적인 위치는 top, left, bottom, right의 값에 따라 결정된다.

- top, left, bottm, right : 요소들의 위치를 지정한다.

- [width, height](https://developer.mozilla.org/ko/docs/Web/CSS/width) : 요소의 너비와 높이를 정한다.

  - px, em, %, auto와 같은 속성을 사용할 수 있다.
  - em은 요소의 글꼴 크기 단위이다.
  - vh는 뷰포트의 초기 컨테이닝 블록 높이 1%와 같다.

- [background-image, background-position, background-size](https://developer.mozilla.org/ko/docs/Web/CSS/background)

  - image 속성은 요소의 배경 이미지를 한 개나 여러 개 지정한다.
  - position 속성은 각 배경 이미지의 초기 위치를 설정한다. 위치는에서 설정 한 위치 레이어를 기준으로한다. center center 속성은 정 가운데에 위치하도록 한다.
  - size 속성은 배경 이미지의 크기를 조정한다. 늘리거나 줄이거나 공간에 맞출 수 있다.

- [filter](https://developer.mozilla.org/ko/docs/Web/CSS/filter)

  - 속성은 흐림 효과나 색상 변형 등 그래픽 효과를 요소에 적용한다. 보통 필터는 이미지, 배경, 테두리 렌더링을 조정하는 데 쓰인다.
  - `blur(3px)`는 이미지를 흐리게하는데 픽셀 수가 높아질수록 더 흐려진다.

- [opacity](https://developer.mozilla.org/ko/docs/Web/CSS/opacity)

  - 성은 요소의 불투명도를 설정한다. 불투명도는 요소 뒤쪽 콘텐츠가 숨겨지는 정도로, 투명도의 반대이다. 숫자가 커질수록 불투명해진다.

- [z-index](https://developer.mozilla.org/ko/docs/Web/CSS/z-index)

  - z-index속성은 위치 지정 요소와, 그 자손 또는 하위 플렉스 아이템의 Z축 순서를 지정한다. 더 큰 z-index 값을 가진 요소가 작은 값의 요소 위를 덮는다. 즉, 숫자가 높을수록 위에 위치하게 된다. 이미지를 겹치거나 요소 위에 겹처서 다른 요소를 표현할 때 사용한다.

- [margin](https://developer.mozilla.org/ko/docs/Web/CSS/margin)

  - CSS 속성은 요소의 네 방향 바깥 여백 영역을 설정한다. margin-top, margin-right, margin-bottom, margin-left의 단축 속성이다.

- [line-height](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)

  - 라인박스의 높이를 지정한다. 즉 텍스트 줄 사이의 간격을 지정하는것이다.

- [Containing Block](https://developer.mozilla.org/ko/docs/Web/CSS/Containing_block)

  - 요소의 크기와 위치는 컨테이닝 블록에 영향을 받는다. 백분율 값을 사용한 width, height, padding, margin 속성의 값과 절대적 위치(absolute나 fixed 등)로 설정된 요소의 오프셋 속성 값은 자신의 컨테이닝 블록으로부터 계산된다.

### Containing Block과 요소

<br/>

<p align="center">
<img src="https://github.com/dudwns9331/WebStudy/blob/master/ReactJS/images/containing_block.PNG" height="465px" width="800px">
</p>
