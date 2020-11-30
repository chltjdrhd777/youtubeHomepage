import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import SidebarList from "./SidebarList";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

function HomeSidebar() {
  return (
    <HomeSidevarDiv>
      <div className="sidebar_part1">
        <SidebarList Icon={HomeIcon} title="홈" />
        <SidebarList Icon={WhatshotIcon} title="인기" />
        <SidebarList Icon={SubscriptionsIcon} title="구독" />
      </div>
      <div className="sidebar_part2">
        <SidebarList Icon={VideoLibraryIcon} title="보관함" />
        <SidebarList Icon={HistoryIcon} title="시청 기록" />
        <SidebarList Icon={OndemandVideoIcon} title="내 동영상" />
        <SidebarList Icon={WatchLaterIcon} title="나중에 볼 동영상" />
        <SidebarList Icon={ThumbUpIcon} title="좋아요 표시한 동영상" />
      </div>
      <div className="sidebar_part3"></div>
      <div className="sidebar_part4"></div>
      <div className="sidebar_part5"></div>
    </HomeSidevarDiv>
  );
}

const HomeSidevarDiv = styled.div`
  flex: 0.2;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  & .sidebar_part1,
  .sidebar_part2 {
    border-bottom: 1px solid lightgray;
  }
`;

export default HomeSidebar;
