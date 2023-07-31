import React from "react";
import { BsDot } from "react-icons/bs";

const SuggestedVideos = ({
  videoImage,
  videotitle,
  videoChannelName,
  videoViews,
  videoCreationTime,
}) => {
  return (
    <div className="flex flex-row gap-2">
      <img
        src={videoImage}
        alt=""
        className="h-[100px] w-[180px] rounded-md object-cover"
      />
      <div className="flex flex-col gap-1">
        <span className="font-semibold">{videotitle}</span>
        <span className="text-xs text-zinc-500">{videoChannelName}</span>
        <div className="flex flex-row">
          <span className="text-xs text-zinc-500">{videoViews}k</span>
          <BsDot />
          <span className="text-xs text-zinc-500">
            {videoCreationTime.getMonth()} Months ago
          </span>
        </div>
      </div>
    </div>
  );
};

export default SuggestedVideos;
