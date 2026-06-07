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
import NoWebsiteYet from "./components/NoWebsiteYet";
import WhyProfessional from "./components/WhyProfessional";
import FAQ from "./components/FAQ";
import FreeAudit from "./components/FreeAudit";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    feather.replace();
  }, []);

  // useEffect(() => {
  //   const anchors = document.querySelectorAll('a[href^="#"]');
  //   const handler = (e) => {
  //     const href = e.currentTarget.getAttribute("href");
  //     if (!href || href === "#") return;
  //     e.preventDefault();
  //     const el = document.querySelector(href);
  //     if (el) el.scrollIntoView({ behavior: "smooth" });
  //   };
  //   anchors.forEach((a) => a.addEventListener("click", handler));
  //   return () =>
  //     anchors.forEach((a) => a.removeEventListener("click", handler));
  // }, []);

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
<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0e1224] to-[#0b0f1a]" />

<div className="absolute top-[-25%] left-[-25%] w-[420px] h-[420px] md:w-[700px] md:h-[700px] bg-indigo-500/20 rounded-full blur-[70px] md:blur-[150px]" />

<div className="absolute top-[20%] right-[-25%] w-[460px] h-[460px] md:w-[800px] md:h-[800px] bg-purple-500/15 rounded-full blur-[80px] md:blur-[170px]" />

<div className="absolute bottom-[10%] left-[-25%] w-[460px] h-[460px] md:w-[800px] md:h-[800px] bg-blue-500/15 rounded-full blur-[80px] md:blur-[170px]" />

<div className="absolute bottom-[-25%] right-[-25%] w-[420px] h-[420px] md:w-[700px] md:h-[700px] bg-indigo-500/20 rounded-full blur-[70px] md:blur-[150px]" />
  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
</div>
      <Nav />

      <main className="relative z-10 pt-[88px]">
        <Hero />
        <Portfolio />
        <Services />
        <WhyChooseUs />
        <NoWebsiteYet />
        <WhyProfessional />
        {/* <Commerce /> */}
        <Pricing />
        <FreeAudit />
        <AuditExpectations />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
