import React, { useEffect } from "react";
import feather from "feather-icons";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Replace feather icons after mount
    feather.replace();
  }, []);

  // Smooth scroll behavior for internal anchor links
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handler = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (!href || href === "#") return;
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    anchors.forEach((a) => a.addEventListener("click", handler));
    return () => anchors.forEach((a) => a.removeEventListener("click", handler));
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
