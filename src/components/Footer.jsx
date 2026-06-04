import React from "react";
import logo from "../assets/pixelpioneerlogo.png";

export default function Footer() {
const year = new Date().getFullYear();

return (
    <footer className="bg-gray-900/50 py-12">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-6 md:mb-0">
                    <a href="/" className="flex items-center space-x-2">
                    <img src={logo} alt="PixelPioneer logo" className="h-10 w-auto" />
                    <span className="text-xl font-bold">PixelPioneer</span>
                    </a>
                </div>
                <div className="flex space-x-6 mb-6 md:mb-0">
                    <a href="https://github.com/bboyd146" className="hover:text-indigo-500 transition"><i data-feather="github"></i></a>
                    <a href="https://www.linkedin.com/in/bradleydboyd/" className="hover:text-indigo-500 transition"><i data-feather="linkedin"></i></a>
                    <a href="#" className="hover:text-indigo-900 transition"><i data-feather="mail"></i></a>
                </div>
                <div className="text-gray-400 text-sm">© {year} PixelPioneer. All rights reserved.</div>
            </div>
        </div>
    </footer>
);
}
