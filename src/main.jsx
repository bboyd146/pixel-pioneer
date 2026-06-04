import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import WebsiteDesignHouston from "./pages/WebsiteDesignHouston";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/website-design-houston"
          element={<WebsiteDesignHouston />}
        />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);