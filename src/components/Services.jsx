import React from "react";

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-indigo-500">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Tailored solutions for every business need and budget</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-800 rounded-xl p-8 service-card transition duration-300">
            <div className="w-16 h-16 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
              <i data-feather="layout" className="text-indigo-500 w-8 h-8"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Basic Static Page</h3>
            <p className="text-gray-400 mb-4">
              Perfect for startups and personal brands needing a simple online presence.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <i data-feather="check" className="text-green-500 mr-2 mt-1 w-4 h-4"></i>
                <span>Simple, clean layout</span>
              </li>
              <li className="flex items-start">
                <i data-feather="check" className="text-green-500 mr-2 mt-1 w-4 h-4"></i>
                <span>Mobile responsive</span>
              </li>
              <li className="flex items-start">
                <i data-feather="check" className="text-green-500 mr-2 mt-1 w-4 h-4"></i>
                <span>Single section focus</span>
              </li>
            </ul>
            <div className="text-indigo-500 font-bold">$300 – $600</div>
          </div>

          {/* Service 2 - Popular */}
          <div className="bg-gray-800 rounded-xl p-8 service-card transition duration-300 border-2 border-indigo-500 relative">
            <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg rounded-tr-lg">
              POPULAR
            </div>
            <div className="w-16 h-16 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
              <i data-feather="briefcase" className="text-indigo-500 w-8 h-8"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Professional Business Page</h3>
            <p className="text-gray-400 mb-4">
              Ideal for established businesses looking to expand their digital footprint.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <i data-feather="check" className="text-green-500 mr-2 mt-1 w-4 h-4"></i>
                <span>Multiple sections</span>
              </li>
              <li className="flex items-start">
                <i data-feather="check" className="text-green-500 mr-2 mt-1 w-4 h-4"></i>
                <span>Fully responsive</span>
              </li>
              <li className="flex items-start">
                <i data-feather="check" className="text-green-500 mr-2 mt-1 w-4 h-4"></i>
                <span>Contact form integration</span>
              </li>
              <li className="flex items-start">
                <i data-feather="check" className="text-green-500 mr-2 mt-1 w-4 h-4"></i>
                <span>SEO optimization</span>
              </li>
              <li className="flex items-start">
                <i data-feather="check" className="text-green-500 mr-2 mt-1 w-4 h-4"></i>
                <span>Analytics setup</span>
              </li>
            </ul>
            <div className="text-indigo-500 font-bold">$800 – $1,500</div>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-800 rounded-xl p-8 service-card transition duration-300">
            <div className="w-16 h-16 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
              <i data-feather="award" className="text-indigo-500 w-8 h-8"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Premium Conversion Page</h3>
            <p className="text-gray-400 mb-4">
              High-performance pages designed to maximize conversions and revenue.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <i data-feather="check" className="text-green-500 mr-2 mt-1 w-4 h-4"></i>
                <span>Advanced animations</span>
              </li>
              <li className="flex items-start">
                <i data-feather="check" className="text-green-500 mr-2 mt-1 w-4 h-4"></i>
                <span>CRM/API integrations</span>
              </li>
              <li className="flex items-start">
                <i data-feather="check" className="text-green-500 mr-2 mt-1 w-4 h-4"></i>
                <span>Booking/payment features</span>
              </li>
              <li className="flex items-start">
                <i data-feather="check" className="text-green-500 mr-2 mt-1 w-4 h-4"></i>
                <span>Conversion optimization</span>
              </li>
              <li className="flex items-start">
                <i data-feather="check" className="text-green-500 mr-2 mt-1 w-4 h-4"></i>
                <span>Performance focused</span>
              </li>
            </ul>
            <div className="text-indigo-500 font-bold">$1,500 – $3,000+</div>
          </div>
        </div>
      </div>
    </section>
  );
}
