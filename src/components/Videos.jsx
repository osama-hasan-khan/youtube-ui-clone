import React from "react";
import { feedVideos } from "../utils/constants";
import VideoCards from "./VideoCards";

const Videos = () => {
  return (
    <div className="grid grid-cols-3 cursor-pointer">
      {feedVideos.map((video) => {
        return (
          <VideoCards
            thumbnailUrl={video.thumbnailUrl}
            channelName={video.channelName}
            title={video.title}
            viewCount={video.viewCount}
            createdAt={video.createdAt}
          />
        );
      })}
    </div>
  );
};

export default Videos;
