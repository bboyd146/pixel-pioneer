import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to <span className="text-indigo-500">Start?</span></h2>
            <p className="text-gray-400">Get in touch to discuss your project and receive a custom quote</p>
          </div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="service" className="block mb-2 text-sm font-medium">Service Interest</label>
              <select id="service" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
                <option selected disabled>Select a service</option>
                <option>Basic Static Page</option>
                <option>Professional Business Page</option>
                <option>Premium Conversion Page</option>
                <option>Custom Project</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Project Details</label>
              <textarea id="message" rows="5" className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
