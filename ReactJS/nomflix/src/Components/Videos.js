import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const VideoTitle = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
`;

const VideoTab = styled.div`
  display: flex;
`;

const VideoButton = styled.button``;

const VideoYoutube = styled.iframe`
  width: 80%;
  height: 65%;
`;

const Videos = ({ videoUrl, name, type }) => (
  <>
    <VideoTitle>
      {type} : {name}
    </VideoTitle>
    <VideoContainer>
      <VideoYoutube
        src={`https://www.youtube.com/embed/${videoUrl}`}
      ></VideoYoutube>
    </VideoContainer>
  </>
);
Videos.propTypes = {
  videoUrl: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Videos;
