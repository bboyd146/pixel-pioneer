import React from "react";
import logo from "../assets/pixelpioneerlogo.png";

export default function Nav() {
const [open, setOpen] = React.useState(false);

return (
    <nav className="border-b sticky border-gray-800 py-4 top-0 bg-gray-900/80 backdrop-blur-xl z-50 supports-[backdrop-filter]:bg-[#0b0f1a]/55">
        <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <a href="/" className="flex items-center space-x-2">
                    <img src={logo} alt="PixelPioneer logo" className="h-16 w-auto" />
                    <span className="text-xl font-bold">PixelPioneer</span>
                </a>
            </div>

            <div className="hidden md:flex space-x-8">
                <a href="/" className="hover:text-indigo-500 transition">Home</a>
                <a href="#services" className="hover:text-indigo-500 transition">Services</a>
                <a href="#pricing" className="hover:text-indigo-500 transition">Pricing</a>
                <a href="#contact" className="hover:text-indigo-500 transition">Contact</a>
                <a href="/houston-website-design" className="hover:text-indigo-500 transition">
                    Houston Website Design
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
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className={`md:hidden ${open ? "block" : "hidden"} bg-gray-900/95 border-t border-gray-800`}>
            <div className="container mx-auto px-4 pt-4 pb-6 flex flex-col space-y-3">
                <a href="#" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-gray-800 hover:text-indigo-500 transition">Home</a>
                <a href="#services" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-gray-800 hover:text-indigo-500 transition">Services</a>
                <a href="#pricing" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-gray-800 hover:text-indigo-500 transition">Pricing</a>
                <a href="#contact" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-gray-800 hover:text-indigo-500 transition">Contact</a>
            </div>
        </div>
    </nav>
);
}
