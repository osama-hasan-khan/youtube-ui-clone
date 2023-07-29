import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import SearchResult from "./components/SearchResult ";
import Feed from "./Feed";
import Download from "./components/Download";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Feed />} />
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
