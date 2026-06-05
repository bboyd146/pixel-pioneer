import React from "react";
import logo from "../assets/pixelpioneerlogo.webp";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-black/30 border-t border-white/10 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <a href="/" className="flex items-center gap-3 mb-4">
                            <img
                                src={logo}
                                alt="Pixel Pioneer logo"
                                className="h-16 w-auto"
                            />

                            <span className="text-xl font-bold">Pixel Pioneer</span>
                        </a>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Custom websites for Houston businesses focused on lead generation,
                            SEO, and long-term growth.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-semibold mb-4">Navigation</h3>

                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="/" className="hover:text-indigo-500 transition">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/#portfolio"
                                    className="hover:text-indigo-500 transition"
                                >
                                    Portfolio
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/#services"
                                    className="hover:text-indigo-500 transition"
                                >
                                    Services
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/#contact"
                                    className="hover:text-indigo-500 transition"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* SEO Pages */}
                    <div>
                        <h3 className="font-semibold mb-4">Services</h3>

                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a
                                    href="/houston-website-design"
                                    className="hover:text-indigo-500 transition"
                                >
                                    Houston Website Design
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/#free-audit"
                                    className="hover:text-indigo-500 transition"
                                >
                                    Free Website Audit
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/#pricing"
                                    className="hover:text-indigo-500 transition"
                                >
                                    Website Pricing
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/#contact"
                                    className="hover:text-indigo-500 transition"
                                >
                                    Request a Quote
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>

                        <div className="flex gap-5 mb-4">
                            <a
                                href="https://github.com/bboyd146"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-indigo-500 transition"
                            >
                                <i data-feather="github"></i>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/bradleydboyd/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-indigo-500 transition"
                            >
                                <i data-feather="linkedin"></i>
                            </a>

                            <a
                                href="mailto:bradley@pixelpioneer.dev"
                                className="hover:text-indigo-500 transition"
                            >
                                <i data-feather="mail"></i>
                            </a>
                        </div>

                        <p className="text-gray-400 text-sm">Houston, Texas</p>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
                    © {year} Pixel Pioneer. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
