import React from "react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pricing <span className="text-indigo-500">Comparison</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how our service tiers compare to help you make the right choice
          </p>
        </div>
        {/* Pages pricing table */}
        <div className="overflow-x-auto mb-12">
          <h3 className="text-2xl font-semibold text-center mb-6">
            <span className="text-indigo-500">Pages</span> Pricing
          </h3>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-4">Features</th>
                <th className="text-center py-4 px-4">Basic</th>
                <th className="text-center py-4 px-4">Professional</th>
                <th className="text-center py-4 px-4">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-4">Mobile Responsive</td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center text-green-500">
                    <i data-feather="check" className="w-5 h-5"></i>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center text-green-500">
                    <i data-feather="check" className="w-5 h-5"></i>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center text-green-500">
                    <i data-feather="check" className="w-5 h-5"></i>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-4">Number of Sections</td>
                <td className="text-center py-4 px-4">1</td>
                <td className="text-center py-4 px-4">3–5</td>
                <td className="text-center py-4 px-4">Unlimited</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-4">Contact Form</td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center text-green-500">
                    <i data-feather="check" className="w-5 h-5"></i>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center text-green-500">
                    <i data-feather="check" className="w-5 h-5"></i>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center text-green-500">
                    <i data-feather="check" className="w-5 h-5"></i>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-4">SEO Optimization</td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center text-gray-400">
                    <i data-feather="x" className="w-5 h-5"></i>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center text-green-500">
                    <i data-feather="check" className="w-5 h-5"></i>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center text-green-500">
                    <i data-feather="check" className="w-5 h-5"></i>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-4">Animations</td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center text-gray-400">
                    <i data-feather="x" className="w-5 h-5"></i>
                  </div>
                </td>
                <td className="text-center py-4 px-4">Basic</td>
                <td className="text-center py-4 px-4">Advanced</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-4">Integrations</td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center text-gray-400">
                    <i data-feather="x" className="w-5 h-5"></i>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center text-gray-400">
                    <i data-feather="x" className="w-5 h-5"></i>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center text-green-500">
                    <i data-feather="check" className="w-5 h-5"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4">Price Range</td>
                <td className="text-center py-4 px-4 text-indigo-500 font-bold">
                  $300 – $600
                </td>
                <td className="text-center py-4 px-4 text-indigo-500 font-bold">
                  $800 – $1,500
                </td>
                <td className="text-center py-4 px-4 text-indigo-500 font-bold">
                  $1,500 – $3,000+
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* E-commerce pricing table */}
        <div className="overflow-x-auto">
          <h3 className="text-2xl font-semibold text-center mb-6">
            <span className="text-indigo-500">E-Commerce</span> Pricing
          </h3>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-4">Features</th>
                <th className="text-center py-4 px-4">Starter</th>
                <th className="text-center py-4 px-4">Business</th>
                <th className="text-center py-4 px-4">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-4">Payment Integration</td>
                <td className="text-center py-4 px-4">Stripe / PayPal</td>
                <td className="text-center py-4 px-4">Multiple Gateways</td>
                <td className="text-center py-4 px-4">Custom & Marketplace</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-4">Inventory Management</td>
                <td className="text-center py-4 px-4">Basic</td>
                <td className="text-center py-4 px-4">Advanced</td>
                <td className="text-center py-4 px-4">
                  Advanced / Custom Systems
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-4">Integrations</td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center text-gray-400">
                    <i data-feather="x" className="w-5 h-5"></i>
                  </div>
                </td>{" "}
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center text-green-500">
                    <i data-feather="check" className="w-5 h-5"></i>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center text-green-500">
                    <i data-feather="check" className="w-5 h-5"></i>
                  </div>
                </td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-4 px-4">Revision Rounds</td>
                <td className="text-center py-4 px-4">2</td>
                <td className="text-center py-4 px-4">3</td>
                <td className="text-center py-4 px-4">Unlimited</td>
              </tr>
              <tr>
                <td className="py-4 px-4">Price Range</td>
                <td className="text-center py-4 px-4 text-indigo-500 font-bold">
                  $500 – $1,000
                </td>
                <td className="text-center py-4 px-4 text-indigo-500 font-bold">
                  $2,500 – $5,000
                </td>
                <td className="text-center py-4 px-4 text-indigo-500 font-bold">
                  $10,000 – $20,000+
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
