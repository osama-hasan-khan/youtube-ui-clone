import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import SearchResult from "./components/SearchResult ";
import Download from "./components/Download";
import Feed from "./components/Feed";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col h-screen">
          <div className="fixed top-0 w-full">
            <Header />
          </div>
          <Routes>
            <Route index element={<Feed />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/downloads" element={<Download />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
