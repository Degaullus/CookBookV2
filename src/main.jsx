import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ApiContextProvider from "./context/ApiContext.jsx";
import HorrorComedyContextProvider from "./context/HorrorComedyContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HorrorComedyContextProvider>
    <ApiContextProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </ApiContextProvider>
  </HorrorComedyContextProvider>
);
