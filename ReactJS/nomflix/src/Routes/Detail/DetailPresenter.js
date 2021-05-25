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
  width: 50%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
`;

const Data = styled.div`
  width: 80%;
  margin-left: 60px;
`;

const Title = styled.h3`
  font-size: 50px;
  margin-bottom: 15px;
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

// 처음 시도
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
          {/* 처음 시도 비디오 추가 */}
          {/* <Videos
            src={`https://www.youtube.com/embed/${result.videos.results[0].key}`}
          ></Videos> */}
          {/* 두번째 시도 비디오 추가 */}
          <Videos
            videoUrl={result.videos.results[0].key}
            name={result.videos.results[0].name}
            type={result.videos.results[0].type}
          ></Videos>
          {/* <Videos
            videoUrl={result.videos.results[1].key}
            name={result.videos.results[1].name}
            type={result.videos.results[1].type}
          ></Videos> */}
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
