import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// proving context api to the whole app
import { ContextProviver } from "./contexts/contextApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProviver>
      <App />
    </ContextProviver>
  </React.StrictMode>
);
