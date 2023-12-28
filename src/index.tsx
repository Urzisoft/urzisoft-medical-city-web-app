import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Common/Navbar/Navbar";
import Sidebar from "./Components/Common/Sidebar/Sidebar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Navbar />
    <Sidebar />
    <App />
  </BrowserRouter>,
);

reportWebVitals();
