import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { Avatar } from "@material-ui/core";

function HomeHeader() {
  return (
    <HomeHeaderDiv>
      <div className="header_right">
        <i
          className="fas fa-bars"
          onClick={() => {
            console.log("hi");
          }}
        ></i>

        <div className="header_right_logoDiv">
          <img src={require("../../public/youtubeLogo.png")} alt="" />
          <p>KR</p>
        </div>
      </div>

      <form className="header_middleSearch">
        <div className="input_spacing">
          <input type="text" placeholder="검색" />
        </div>

        <button>
          <SearchIcon />
          <HoverDescription className="if_it_hovered">
            <p>검색</p>
          </HoverDescription>
        </button>
      </form>

      <div className="header_left">
        <div className="header_left_icons">
          <VideoCallIcon />
          <HoverDescription
            className="if_it_hovered"
            style={{ top: "64px", right: "0px" }}
          >
            <p>만들기</p>
          </HoverDescription>
        </div>
        <div className="header_left_icons">
          <ViewModuleIcon />
          <HoverDescription
            className="if_it_hovered"
            style={{ top: "64px", right: "-25px", width: "100px" }}
          >
            <p>Youtube 앱</p>
          </HoverDescription>
        </div>
        <div className="header_left_icons">
          <NotificationsIcon />
          <HoverDescription
            className="if_it_hovered"
            style={{ top: "64px", right: "-5px" }}
          >
            <p>알림</p>
          </HoverDescription>
        </div>

        <Avatar className="header_left_Avatar" />
      </div>
    </HomeHeaderDiv>
  );
}

const HomeHeaderDiv = styled.div`
  display: flex;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
  opacity: 90%;

  & .header_right {
    display: flex;
    position: relative;
    align-items: center;

    & > i {
      color: gray;
      font-size: 20px;
      margin-left: 20px;
      cursor: pointer;
    }

    & .header_right_logoDiv {
      & > img {
        object-fit: contain;
        width: 100px;
        height: 50px;
        margin-left: 30px;
        cursor: pointer;
      }

      & > p {
        position: absolute;
        top: 0;
        right: -20px;
        color: gray;
        font-weight: 500;
        font-size: 13px;
      }
    }
  }

  & .header_middleSearch {
    width: 50%;
    height: 35px;
    display: flex;
    align-items: center;
    border: 0.8px solid lightgray;
    border-radius: 3px;

    & .input_spacing {
      height: 100%;
      flex: 0.8;
      margin-left: 7px;
      border-right: 0.5px solid lightgray;
    }

    & .input_spacing > input {
      width: 100%;
      border: none;
      height: 100%;
      font-size: 20px;
      color: gray;
      ::-webkit-input-placeholder {
        font-size: 20px;
        padding-left: 5px;
      }

      &:focus {
        outline: none;
      }
    }

    & > button {
      border: none;
      height: 100%;
      flex: 0.2;
      cursor: pointer;
      position: relative;

      &:hover {
        & > svg {
          transition: color 0.3s ease-in;
          color: black;
        }
        & .if_it_hovered {
          transition: all 0.3s ease-in;
          visibility: visible;
          opacity: 90%;
        }
      }
      &:focus {
        outline: none;
      }
      & > svg {
        color: gray;
      }
    }
  }

  & .header_left {
    display: flex;
    align-items: center;
    margin-right: 35px;

    & .header_left_icons {
      position: relative;
      & > svg {
        padding: 15px;
        color: gray;
        font-size: 30px;
        cursor: pointer;
        &:hover {
          transition: color 0.3s ease-in;
          color: black;
        }
      }
      &:hover {
        & .if_it_hovered {
          transition: all 0.3s ease-in;
          visibility: visible;
          opacity: 90%;
        }
      }
    }

    & .header_left_Avatar {
      margin-left: 20px;
      cursor: pointer;
    }
  }
`;

const HoverDescription = styled.div`
  position: absolute;
  background: gray;
  color: white;
  height: 35px;
  width: 70px;
  right: 25px;
  top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  visibility: hidden;
  opacity: 0%;
`;

export default HomeHeader;
