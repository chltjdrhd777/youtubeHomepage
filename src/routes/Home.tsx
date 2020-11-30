import HomeHeader from "components/HomeHeader";
import HomeRecommenVideos from "components/HomeRecommenVideos";
import HomeSidebar from "components/HomeSidebar";
import React from "react";
import styled from "styled-components";

function Home() {
  return (
    <HomeDiv>
      <HomeHeader />
      <div className="Home_contents">
        <HomeSidebar />
        <HomeRecommenVideos />
      </div>
    </HomeDiv>
  );
}

const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  & .Home_contents {
    display: flex;
  }
`;

export default Home;
