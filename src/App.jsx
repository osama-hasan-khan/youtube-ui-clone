import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-full">
        <Header />
      </div>
    </BrowserRouter>
  );
};

export default App;
