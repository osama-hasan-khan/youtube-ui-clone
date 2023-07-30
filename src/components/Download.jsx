import React from "react";

const Download = () => {
  return (
    <div className="h-[calc(100%-56px)] w-[calc(100%-240px)]">
      <div className="flex flex-col justify-center items-center pt-20 gap-3">
        <h1 className="font-semibold">
          Always have something to watch with Smart downloads
        </h1>
        <p className="font-light">
          We'll automatically download recommended videos for you.
        </p>
        <button className="text-white bg-blue-700 rounded-full px-3 py-1.5">
          Turn on smart Downloads
        </button>
      </div>
    </div>
  );
};

export default Download;
