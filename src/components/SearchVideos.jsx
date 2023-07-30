import React from "react";

const SearchVideos = ({ video, title, channelName }) => {
  return (
    <div className="">
      <div className="flex flex-col">
        <img
          src={video}
          className="w-[900px] h-[530px] object-contain cursor-pointer"
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
        </div>
      </div>
    </div>
  );
};

export default SearchVideos;
