import React from "react";

export default function Nav() {
  return (
    <nav className="border-b border-gray-800 py-4 sticky top-0 bg-gray-900/80 backdrop-blur z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <i data-feather="code" className="text-indigo-500"></i>
          <span className="text-xl font-bold">PixelPioneer</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-indigo-500 transition">Home</a>
          <a href="#services" className="hover:text-indigo-500 transition">Services</a>
          <a href="#pricing" className="hover:text-indigo-500 transition">Pricing</a>
          <a href="#contact" className="hover:text-indigo-500 transition">Contact</a>
        </div>
        <button className="md:hidden">
          <i data-feather="menu"></i>
        </button>
      </div>
    </nav>
  );
}
