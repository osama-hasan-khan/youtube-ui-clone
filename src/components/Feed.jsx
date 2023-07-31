import React from "react";
import LeftMenu from "./LeftMenu";
import Videos from "./Videos";
import Slider from "./Slider";

const Feed = () => {
  return (
    <div className="flex flex-row h-[calc(100%-56px)] mt-16">
      <LeftMenu />
      <div className="w-[calc(100%-240px)] overflow-y-scroll">
        <Slider />
        <Videos />
      </div>
    </div>
  );
};

export default Feed;
