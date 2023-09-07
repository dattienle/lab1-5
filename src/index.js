import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RouterCustom from "./routerConfig";
import "./style/all.scss";
import { ThemProvider } from "./theme/theme/ThemeContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemProvider>
      <RouterCustom />
    </ThemProvider>
  </BrowserRouter>
);
