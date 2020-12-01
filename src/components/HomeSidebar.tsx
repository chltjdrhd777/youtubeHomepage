import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SidebarLarge from "./SidebarLarge";
import SidebarShort from "./SidebarShort";
const $ = require("jquery");

function HomeSidebar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    $(window).resize(function () {
      let width = window.innerWidth;
      setWidth(width);
    });
  }, [width]);

  return (
    <HomeSidevarDiv>
      {width >= 1200 && <SidebarLarge />}
      {width >= 700 && width < 1200 && <SidebarShort />}
      {width < 700 && null}
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
