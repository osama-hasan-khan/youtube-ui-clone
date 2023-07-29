import React from "react";
import LeftMenu from "./components/LeftMenu";
import Videos from "./components/Videos";

const Feed = () => {
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftMenu />
      <Videos />
    </div>
  );
};

export default Feed;
