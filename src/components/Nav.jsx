import React from "react";
import logo from "../assets/pixelpioneerlogo.webp";

export default function Nav() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] border-b border-white/10 bg-[#0b0f1a]/55 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/#home" className="flex items-center gap-3">
          <img src={logo} alt="Pixel Pioneer logo" className="h-10 w-auto" />
          <span className="text-xl font-bold">PixelPioneer</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <a href="/#home" className="hover:text-indigo-400 transition">Home</a>
          <a href="/#services" className="hover:text-indigo-400 transition">Services</a>
          <a href="/#pricing" className="hover:text-indigo-400 transition">Pricing</a>
          <a href="/#contact" className="hover:text-indigo-400 transition">Contact</a>
          <a href="/houston-website-design" className="hover:text-indigo-400 transition">
            Houston Web Design
          </a>
          <a href="/website-design-katy-tx" className="hover:text-indigo-400 transition">
            Katy Web Design
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
        >
          {!open ? (
            <svg className="w-6 h-6 text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden ${open ? "block" : "hidden"} bg-[#0b0f1a]/90 backdrop-blur-xl border-t border-white/10`}
      >
        <div className="container mx-auto px-4 pt-4 pb-6 flex flex-col space-y-3">
          <a href="/#home" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-white/5 hover:text-indigo-400 transition">Home</a>
          <a href="/#services" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-white/5 hover:text-indigo-400 transition">Services</a>
          <a href="/#pricing" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-white/5 hover:text-indigo-400 transition">Pricing</a>
          <a href="/#contact" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-white/5 hover:text-indigo-400 transition">Contact</a>
          <a href="/houston-website-design" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-white/5 hover:text-indigo-400 transition">Houston Web Design</a>
        </div>
      </div>
    </header>
  );
}