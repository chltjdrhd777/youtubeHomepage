import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

interface Props {
  image?: string;
  title?: string;
  channel?: string;
  views?: string;
  timestamp?: string;
  channelImage?: string;
}

function VideoCard({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}: Props) {
  return (
    <VideoCardDiv>
      <img src={image} alt="video image" />
      <div className="vidoe_Info">
        <Avatar
          className="video_info_avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="video_info_text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} and {timestamp}
          </p>
        </div>
      </div>
    </VideoCardDiv>
  );
}

const VideoCardDiv = styled.div``;

export default VideoCard;
