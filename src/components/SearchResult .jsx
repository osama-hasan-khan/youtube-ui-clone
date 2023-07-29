import React, { useContext } from "react";
import { Context } from "../contexts/contextApi";

const SearchResult = () => {
  const { clicked } = useContext(Context);
  return <div>SearchResult </div>;
};

export default SearchResult;
