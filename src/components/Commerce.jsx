import React from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const priceVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15,
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const dividerVariants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ctaVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};


export default function Commerce() {
  return (
    <AnimatedSection>
        
<section
  id="commerce"
  className="relative py-24 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
>
    {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.12),transparent_45%)]" /> */}

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              E-Commerce <span className="text-indigo-500">Solutions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive online store setups to boost your sales and reach
            </p>
          </div>
          <motion.div
            variants={dividerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mb-16 h-px w-82 bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent origin-left shadow-[0_0_20px_rgba(99,102,241,0.4)]
"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* E-Commerce Solution 1 */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 service-card transition duration-300"
            >
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
                Perfect for small businesses looking to establish an online
                store quickly.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Product listing setup</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Payment gateway integration</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Responsive theme and basic SEO</span>
                </li>
              </ul>
<motion.a
  href="#contact"
  variants={ctaVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  whileHover={{
    y: -3,
    boxShadow: "0 20px 40px rgba(99,102,241,0.35)",
  }}
  whileTap={{ scale: 0.97 }}
  className="group inline-flex items-center justify-center bg-indigo-500 text-white px-8 py-4 rounded-lg font-medium relative overflow-hidden"
>
  <span className="relative z-10">Get Started</span>
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700" />
</motion.a>
            </motion.div>

            {/* E-Commerce Solution 2 */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 service-card transition duration-300"
            >
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
                For growing brands needing automation, marketing, and
                multi-channel sales.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Inventory & order automation</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Subscriptions & promotions</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Analytics & CRO optimization</span>
                </li>
              </ul>
<motion.a
  href="#contact"
  variants={ctaVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  whileHover={{
    y: -3,
    boxShadow: "0 20px 40px rgba(99,102,241,0.35)",
  }}
  whileTap={{ scale: 0.97 }}
  className="group inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-4 rounded-lg font-medium relative overflow-hidden"
>
  <span className="relative z-10">Contact Sales</span>
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700" />
</motion.a>

            </motion.div>

            {/* E-Commerce Solution 3 */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 service-card transition duration-300"
            >
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
                Tailored platforms, headless implementations, and high-volume
                scaling.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg
                    className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Custom integrations & APIs</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Performance & security audits</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="text-green-500 mr-2 mt-1 w-4 h-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span>Dedicated support & SLA</span>
                </li>
              </ul>
<motion.a
  href="#contact"
  variants={ctaVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  whileHover={{
    y: -3,
    boxShadow: "0 20px 40px rgba(99,102,241,0.35)",
  }}
  whileTap={{ scale: 0.97 }}
  className="group inline-flex items-center justify-center bg-indigo-500 text-white px-8 py-4 rounded-lg font-medium relative overflow-hidden"
>
  <span className="relative z-10">Request Proposal</span>
  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700" />
</motion.a>

            </motion.div>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
