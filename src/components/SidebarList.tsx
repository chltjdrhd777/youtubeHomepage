import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React from "react";
import styled from "styled-components";

interface ListProprs {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
}

function SidebarList({ Icon, title }: ListProprs) {
  return (
    <SidebarListDiv>
      <Icon />
      {title}
    </SidebarListDiv>
  );
}

const SidebarListDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;

  & > svg {
    color: gray;
    font-size: x-large;
    margin-right: 20px;
  }

  &:hover {
    background: lightgray;
    & > svg {
      color: red;
    }
  }
`;

export default SidebarList;
