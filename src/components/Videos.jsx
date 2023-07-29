import React from "react";
import { feedVideos } from "../utils/constants";

const Videos = () => {
  return (
    <div className="grid grid-cols-3 py-4  px-8 gap-14 overflow-y-auto cursor-pointer">
      {feedVideos.map((video) => {
        return (
          <img
            src={video.thumbnailUrl}
            alt=""
            className="h-[200px] w-[380px] rounded-xl object-cover"
          />
        );
      })}
    </div>
  );
};

export default Videos;
