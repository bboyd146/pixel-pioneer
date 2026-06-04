import React from "react";
import hero from "../assets/videos/hero.mp4";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0b0f1a]"
    >
      <video
        className="absolute inset-0 z-0 w-full h-full object-cover"
        src={hero}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/60 to-[#0b0f1a]" />

      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-indigo-400 glow-text">Websites</span> That Turn{" "}
          <span className="text-indigo-400 glow-text">Visitors</span> Into{" "}
          <span className="text-indigo-400 glow-text">Customers</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          We build fast, SEO-optimized websites for local businesses that want
          more calls, leads, and revenue
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/#portfolio"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium transition shadow-lg shadow-indigo-500/30"
          >
            View Our Work
          </a>

          <a
            href="/#free-audit"
            className="border border-indigo-400 text-indigo-300 hover:bg-indigo-500/10 px-8 py-3 rounded-lg font-medium transition"
          >
            Get a Free Website Audit
          </a>
        </div>
      </div>

{/* Deep hero fade */}
<div className="pointer-events-none absolute bottom-[-1px] left-0 z-20 w-full h-72 bg-gradient-to-b from-transparent via-[#0b0f1a]/85 to-[#0b0f1a]" />

{/* Soft dark blur */}
<div className="pointer-events-none absolute bottom-[-80px] left-0 z-20 w-full h-56 bg-[#0b0f1a] blur-xl opacity-90" />
</section>
  );
}