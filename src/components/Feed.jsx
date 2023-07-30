import React from "react";
import LeftMenu from "./LeftMenu";
import Videos from "./Videos";

const Feed = () => {
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftMenu />
      <div className="w-[calc(100%-240px)] overflow-y-scroll">
        <Videos />
      </div>
    </div>
  );
};

export default Feed;
