import React from "react";

// import browserRouter to navigate throut the page
import { BrowserRouter, Route, Routes } from "react-router-dom";

// importing all the components
import Header from "./components/Header";
import SearchResult from "./components/SearchResult ";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-full">
        <Header />
        <Routes>
          <Route path="/searchResult/:searchQuery" element={<SearchResult />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
