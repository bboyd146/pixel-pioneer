import React, { useEffect } from "react";
import feather from "feather-icons";
import { Helmet } from "react-helmet-async";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
// import Commerce from "./components/Commerce";
import WhyChooseUs from "./components/WhyChooseUs";
import AuditExpectations from "./components/AuditExpectations";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import FreeAudit from "./components/FreeAudit";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    feather.replace();
  }, []);

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
    return () =>
      anchors.forEach((a) => a.removeEventListener("click", handler));
  }, []);

  <Helmet>
    <title>Houston Web Developer & Website Design | Pixel Pioneer</title>

    <meta
      name="description"
      content="Pixel Pioneer builds custom websites for Houston businesses. Web design, SEO optimization, mobile-first development, and website maintenance."
    />
  </Helmet>;

  return (
    <div className="relative min-h-screen bg-[#0b0f1a] text-white overflow-x-hidden texture-overlay">
      {/* Global atmospheric background */}
      <div
        className="pointer-events-none absolute inset-0 animate-[float_30s_linear_infinite]
"
      >
        {/* Base vertical gradient (prevents black bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0e1224] to-[#0b0f1a]" />

        {/* Glow band 1 – top */}
        <div className="absolute top-[-20%] left-[-20%] w-[800px] h-[800px] bg-indigo-500/25 rounded-full blur-[160px]" />

        {/* Glow band 2 – upper middle */}
        <div className="absolute top-[25%] right-[-25%] w-[900px] h-[900px] bg-purple-500/20 rounded-full blur-[180px]" />

        {/* Glow band 3 – lower middle */}
        <div className="absolute top-[55%] left-[-25%] w-[900px] h-[900px] bg-blue-500/20 rounded-full blur-[180px]" />

        {/* Glow band 4 – bottom */}
        <div className="absolute bottom-[-20%] right-[-20%] w-[800px] h-[800px] bg-indigo-500/25 rounded-full blur-[160px]" />

        {/* Soft vignette (lighter than before) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-gray/30" />
      </div>

      <Nav />

      <main className="relative z-10">
        <Hero />
        <Portfolio />
        <Services />
        <WhyChooseUs />
        {/* <Commerce /> */}
        <Pricing />
        <FreeAudit />
        <AuditExpectations />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
