import React from "react";
import { feedVideos, searchVideos } from "../utils/constants";
import SearchVideos from "./SearchVideos";

const SearchResult = () => {
  return (
    <div className="pl-[90px] pt-6">
      <div className="">
        {searchVideos.map((result) => {
          return (
            <SearchVideos
              video={result.thumbnailUrl}
              title={result.title}
              channelName={result.channelName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
