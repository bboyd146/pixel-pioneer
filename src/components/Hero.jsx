import React from "react";
import hero from "../assets/videos/hero.mp4";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={hero}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-red/60 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-indigo-400 glow-text">Elevate</span>{" "}
          Your Digital Presence
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          Custom web solutions designed to convert visitors into customers
          and grow your business.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#services"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium transition shadow-lg shadow-indigo-500/30"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="border border-indigo-400 text-indigo-300 hover:bg-indigo-500/10 px-8 py-3 rounded-lg font-medium transition"
          >
            Get in Touch
          </a>
        </div>
        
      </div>
      {/* Hero → Services transition fade */}
<div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0b0f1a]" />

    </section>
  );
}
