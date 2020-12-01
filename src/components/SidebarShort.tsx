import React from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

function SidebarShort() {
  return (
    <SidebarShortDiv>
      <div className="ShortList">
        <HomeIcon />
        <p>홈</p>
      </div>
      <div className="ShortList">
        <WhatshotIcon />
        <p>인기</p>
      </div>
      <div className="ShortList">
        <SubscriptionsIcon />
        <p>구독</p>
      </div>
      <div className="ShortList">
        <VideoLibraryIcon />
        <p>보관함</p>
      </div>
    </SidebarShortDiv>
  );
}

const SidebarShortDiv = styled.div`
  display: flex;
  flex-direction: column;

  & .ShortList {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    width: 40%;
    cursor: pointer;
    & > svg {
      color: gray;
      margin-bottom: 5px;
    }

    & > p {
      font-size: 15px;
    }

    &:hover {
      background-color: lightgray;
      & > svg {
        color: red;
      }
    }
  }
`;

export default SidebarShort;
