import React from "react";
import { BiLike } from "react-icons/bi";
import { AiOutlineDislike } from "react-icons/ai";
import { TbShare3 } from "react-icons/tb";
import { LiaDownloadSolid } from "react-icons/lia";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const SearchVideos = ({ video, title, channelName }) => {
  return (
    <div className="">
      <div className="flex flex-col w-[910px]">
        <img
          src={video}
          className="w-[910px] h-[530px] object-contain cursor-pointer"
        ></img>
        <span className="font-semibold">{title}</span>
        <div className="flex justify-between items-center">
          <div className="flex justify-around gap-3 items-center">
            <img
              src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
              alt=""
              className="rounded-full h-[40px] w-[40px]"
            />
            <div className="flex flex-col ml-2">
              <span>{channelName}</span>
              <span>4.07M subscibers</span>
            </div>
            <button className="p-2 px-6 text-white bg-black rounded-full font-semibold">
              Subscribe
            </button>
          </div>
          <div className="flex justify-between items-center cursor-pointer gap-2.5">
            <div className="flex justify-around items-center rounded-full min-w-[130px] gap-3 bg-zinc-100 py-2 px-3">
              <BiLike size={20} />
              <span className="font-semibold">20k</span>
              <span className="h-6 border-r border-r-zinc-300"></span>
              <AiOutlineDislike size={20} />
            </div>
            <div className="flex justify-center items-center rounded-full gap-2 bg-zinc-100 py-2 px-3">
              <TbShare3 size={20} />
              <span className="font-semibold">Share</span>
            </div>
            <div className="flex justify-center items-center gap-2 rounded-full bg-zinc-100 py-2 px-3">
              <LiaDownloadSolid />
              <span className="font-semibold">Download</span>
            </div>
            <div className="flex items-center rounded-full bg-zinc-100 py-2 px-3">
              <BiDotsHorizontalRounded size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchVideos;
