import React from "react";
import styled from "styled-components";
import VideoCard from "./VideoCard";

function HomeRecommenVideos() {
  return (
    <HomeRecoVideosDiv>
      <h2>Recommended</h2>

      <VideoCard />
    </HomeRecoVideosDiv>
  );
}

const HomeRecoVideosDiv = styled.div`
  flex: 0.8;
  background-color: #f9f9f9;
  padding: 40px 20px;
  padding-bottom: 0;
  height: 100vh;

  & > p {
    margin-bottom: 20px;
  }
`;

export default HomeRecommenVideos;
