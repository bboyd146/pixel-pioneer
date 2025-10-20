import React from "react";

export default function Hero() {
  return (
    <section className="hero-gradient py-80">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-indigo-500">Elevate</span> Your Digital Presence
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          Custom web solutions designed to convert visitors into customers and grow your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#services"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium glow-on-hover transition"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="border border-indigo-500 text-indigo hover:bg-indigo-500/10 px-8 py-3 rounded-lg font-medium transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
