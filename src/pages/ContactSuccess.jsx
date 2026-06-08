import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const steps = [
  {
    title: "We Review Your Request",
    text: "We look over your website, business goals, and what you want to improve.",
  },
  {
    title: "We Identify Opportunities",
    text: "We check for issues with mobile experience, SEO, speed, lead capture, and overall trust.",
  },
  {
    title: "We Follow Up",
    text: "You’ll receive next steps, recommendations, or a quote depending on your request.",
  },
];

const prepItems = [
  "Think about your biggest goal: more calls, better SEO, a redesign, or a new website.",
  "Gather examples of websites you like.",
  "List any competitors you want to outrank or look better than.",
  "Check your email for our response.",
];

export default function ContactSuccess() {
  return (
    <>
      <Helmet>
        <title>Thank You | Pixel Pioneer</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="relative min-h-screen bg-[#0b0f1a] text-white overflow-x-hidden texture-overlay">
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0e1224] to-[#0b0f1a]" />
          <div className="absolute top-[-25%] left-[-25%] w-[420px] h-[420px] md:w-[700px] md:h-[700px] bg-indigo-500/20 rounded-full blur-[70px] md:blur-[150px]" />
          <div className="absolute top-[20%] right-[-25%] w-[460px] h-[460px] md:w-[800px] md:h-[800px] bg-purple-500/15 rounded-full blur-[80px] md:blur-[170px]" />
          <div className="absolute bottom-[10%] left-[-25%] w-[460px] h-[460px] md:w-[800px] md:h-[800px] bg-blue-500/15 rounded-full blur-[80px] md:blur-[170px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        </div>

        <Nav />

        <main className="relative z-10 pt-[88px]">
          <section className="py-24 md:py-32">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <p className="text-indigo-400 font-semibold mb-4">
                  Request Received
                </p>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Thank You! We’ll Review Your Request Soon.
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
                  Your information has been submitted. We’ll review your
                  website, business goals, and request details before following
                  up with recommendations or next steps.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium"
                  >
                    Return Home
                  </motion.a>

                  <motion.a
                    href="/#portfolio"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="border border-white/20 hover:border-indigo-500 text-white px-8 py-4 rounded-lg font-medium"
                  >
                    View Recent Work
                  </motion.a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
            <div className="container mx-auto px-4">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What Happens Next?
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Here’s what you can expect after submitting your request.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="bg-white/5 border border-white/10 rounded-xl p-8"
                  >
                    <div className="w-14 h-14 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
                      <span className="text-indigo-400 font-bold text-xl">
                        {index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  How to Get the Most From Your Audit
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {prepItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-start bg-black/20 border border-white/10 rounded-lg p-5"
                    >
                      <span className="text-green-500 mr-3">✓</span>
                      <p className="text-gray-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Don’t Have a Website Yet?
                </h2>

                <p className="text-gray-400 text-lg mb-8">
                  That’s okay. If you’re starting from scratch, we’ll focus on
                  your business goals, services, competitors, and what kind of
                  website would help you generate leads.
                </p>

                <motion.a
                  href="/#contact"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium"
                >
                  Submit More Details
                </motion.a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}