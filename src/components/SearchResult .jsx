import React from "react";
import { feedVideos, searchVideos, suggestedVideos } from "../utils/constants";
import SearchVideos from "./SearchVideos";
import SuggestedVideos from "./SuggestedVideos";

const SearchResult = () => {
  return (
    <div className="pl-[90px] pt-6 flex flex-row gap-5">
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
      <div className="max-w-[460px] pt-2 flex flex-col overflow-y-scroll gap-3">
        {suggestedVideos.map((result) => {
          return (
            <SuggestedVideos
              videoImage={result.thumbnailUrl}
              videotitle={result.title}
              videoChannelName={result.channelName}
              videoViews={result.viewCount}
              videoCreationTime={result.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
