import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import WebsiteDesignHouston from "./pages/WebsiteDesignHouston";
import WebsiteDesignKaty from "./pages/WebsiteDesignKaty";
import ContactSuccess from "./pages/ContactSuccess";
import ProjectQuestionnaire from "./pages/ProjectQuestionnaire";
import { HelmetProvider } from "react-helmet-async";
import ScrollToHash from "./components/ScrollToHash";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToHash />

        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="/houston-website-design"
            element={<WebsiteDesignHouston />}
          />
          <Route
            path="/website-design-katy-tx"
            element={<WebsiteDesignKaty />}
          />
          <Route path="/contact-success" element={<ContactSuccess />} />
          <Route
            path="/project-questionnaire"
            element={<ProjectQuestionnaire />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);
