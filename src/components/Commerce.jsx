import React from "react";

export default function Commerce() {
    return (
        <section id="commerce" className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        E-Commerce <span className="text-indigo-500">Solutions</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive online store setups to boost your sales and reach
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* E-Commerce Solution 1 */}
                    <div className="bg-gray-800 rounded-xl p-8 service-card transition duration-300">
                        <div className="w-16 h-16 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
                            <svg
                                className="text-indigo-500 w-8 h-8"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M6 6h15l-1.5 9h-12z" />
                                <circle cx="9" cy="20" r="1" />
                                <circle cx="18" cy="20" r="1" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Basic E-Commerce Setup</h3>
                        <p className="text-gray-400 mb-4">
                            Perfect for small businesses looking to establish an online store quickly.
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-start">
                                <svg className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <span>Product listing setup</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <span>Payment gateway integration</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <span>Responsive theme and basic SEO</span>
                            </li>
                        </ul>
                        <div className="flex items-center justify-between">
                            <a
                                href="#contact"
                                className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
                                aria-label="Get Basic Setup"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>

                    {/* E-Commerce Solution 2 */}
                    <div className="bg-gray-800 rounded-xl p-8 service-card transition duration-300 border-2 border-indigo-500">
                        <div className="w-16 h-16 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
                            <svg
                                className="text-indigo-500 w-8 h-8"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M3 3h18v4H3z" />
                                <path d="M6 8v11a1 1 0 001 1h10a1 1 0 001-1V8" />
                                <path d="M10 12h4" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Advanced Store</h3>
                        <p className="text-gray-400 mb-4">
                            For growing brands needing automation, marketing, and multi-channel sales.
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-start">
                                <svg className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <span>Inventory & order automation</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <span>Subscriptions & promotions</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <span>Analytics & CRO optimization</span>
                            </li>
                        </ul>
                        <div className="flex items-center justify-between">
                            <a
                                href="#contact"
                                className="inline-flex items-center px-4 py-2 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition"
                                aria-label="Get Advanced Store"
                            >
                                Contact Sales
                            </a>
                        </div>
                    </div>

                    {/* E-Commerce Solution 3 */}
                    <div className="bg-gray-800 rounded-xl p-8 service-card transition duration-300">
                        <div className="w-16 h-16 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
                            <svg
                                className="text-indigo-500 w-8 h-8"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                            >
                                <path d="M12 2v6" />
                                <path d="M6 10v10h12V10" />
                                <path d="M6 14h12" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-3">Enterprise & Custom</h3>
                        <p className="text-gray-400 mb-4">
                            Tailored platforms, headless implementations, and high-volume scaling.
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-start">
                                <svg className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <span>Custom integrations & APIs</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <span>Performance & security audits</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <span>Dedicated support & SLA</span>
                            </li>
                        </ul>
                        <div className="flex items-center justify-between">
                            <a
                                href="#contact"
                                className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
                                aria-label="Contact for Enterprise"
                            >
                                Request Proposal
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}