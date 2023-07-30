import React from "react";
import { BsDot } from "react-icons/bs";

const VideoCards = ({
  thumbnailUrl,
  channelName,
  title,
  viewCount,
  createdAt,
}) => {
  return (
    <div className="mb-4 py-4 px-2">
      <img
        src={thumbnailUrl}
        alt=""
        className="h-[220px] w-[400px] object-cover rounded-xl"
      />
      <div className="flex gap-3 p-1">
        <img
          src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
          alt=""
          className="rounded-full h-[40px] w-[40px]"
        />
        <div className="flex flex-col">
          <div className="flex">
            <span className="font-semibold max-w-[90%]">{title}</span>
          </div>
          <div className="text-sm text-zinc-600">
            <span>{channelName}</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm">{viewCount}k</span>
            <BsDot size={16} />
            <span className="text-sm">{createdAt.getMonth()} days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;
