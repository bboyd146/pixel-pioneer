import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const tableVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const priceVariants = {
  hidden: { opacity: 0, y: 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.1, duration: 0.3 },
  },
};

const dividerVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Pricing() {
  return (
    <AnimatedSection>
      <section id="pricing" className="relative py-20 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent relative z-10 mt-20">
      
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pricing <span className="text-indigo-500">Comparison</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how our service tiers compare to help you make the right
              choice
            </p>
          </div>

                    <motion.div
            variants={dividerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto my-20 h-px w-100 bg-gradient-to-b from-transparent via-white-5 to-transparent origin-left shadow-[0_0_20px_rgba(99,102,241,0.4)]"
          />

{/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(99,102,241,0.12),transparent_40%)]" /> */}

          {/* Pages pricing table */}
          <div className="overflow-x-auto mb-12">
            <h3 className="text-2xl font-semibold text-center mb-6">
              <span className="text-indigo-500">Pages</span> Pricing
            </h3>
            <motion.table
              className="w-full"
              variants={tableVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <thead>
                <motion.tr
                  variants={rowVariants}
                  className="border-b border-gray-700 hover:bg-white/5 transition"
                >
                  <th className="text-left py-4 px-4">Features</th>
                  <th className="text-center py-4 px-4">Basic</th>
                  <th className="text-center py-4 px-4">Professional</th>
                  <th className="text-center py-4 px-4">Premium</th>
                </motion.tr>
              </thead>
              <tbody>
                <motion.tr
                  variants={rowVariants}
                  className="border-b border-gray-700 hover:bg-white/5 transition"
                >
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
                </motion.tr>
                <motion.tr
                  variants={rowVariants}
                  className="border-b border-gray-700 hover:bg-white/5 transition"
                >
                  <td className="py-4 px-4">Number of Sections</td>
                  <td className="text-center py-4 px-4">1</td>
                  <td className="text-center py-4 px-4">3–5</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                </motion.tr>
                <motion.tr
                  variants={rowVariants}
                  className="border-b border-gray-700 hover:bg-white/5 transition"
                >
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
                </motion.tr>
                <motion.tr
                  variants={rowVariants}
                  className="border-b border-gray-700 hover:bg-white/5 transition"
                >
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
                </motion.tr>
                <motion.tr
                  variants={rowVariants}
                  className="border-b border-gray-700 hover:bg-white/5 transition"
                >
                  <td className="py-4 px-4">Animations</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center text-gray-400">
                      <i data-feather="x" className="w-5 h-5"></i>
                    </div>
                  </td>
                  <td className="text-center py-4 px-4">Basic</td>
                  <td className="text-center py-4 px-4">Advanced</td>
                </motion.tr>
                <motion.tr
                  variants={rowVariants}
                  className="border-b border-gray-700 hover:bg-white/5 transition"
                >
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
                </motion.tr>
                <motion.tr
                  variants={rowVariants}
                  className="border-b border-gray-700 hover:bg-white/5 transition"
                >
                  <td className="py-4 px-4">Price Range</td>
                  <motion.td
                    variants={priceVariants}
                    className="text-center py-4 px-4 text-indigo-500 font-bold tracking-wide"
                    whileHover={{
                      textShadow: "0 0 12px rgba(99,102,241,0.6)",
                    }}
                  >
                    $300 – $600
                  </motion.td>
                  <motion.td
                    variants={priceVariants}
                    className="text-center py-4 px-4 text-indigo-500 font-bold"
                    whileHover={{
                      textShadow: "0 0 12px rgba(99,102,241,0.6)",
                    }}
                  >
                    $800 – $1,500
                  </motion.td>
                  <motion.td
                    variants={priceVariants}
                    className="text-center py-4 px-4 text-indigo-500 font-bold"
                    whileHover={{
                      textShadow: "0 0 12px rgba(99,102,241,0.6)",
                    }}
                  >
                    $1,500 – $3,000+
                  </motion.td>
                </motion.tr>
              </tbody>
            </motion.table>
          </div>

          <motion.div
            variants={dividerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto my-20 h-px w-100 bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent origin-left"
          />

          {/* E-commerce pricing table */}
          <div className="overflow-x-auto transparent">
            <h3 className="text-2xl font-semibold text-center mb-6">
              <span className="text-indigo-500">E-Commerce</span> Pricing
            </h3>
            <motion.table
              className="w-full"
              variants={tableVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <thead>
                <motion.tr
                  variants={rowVariants}
                  className="border-b border-gray-700 hover:bg-white/5 transition"
                >
                  <th className="text-left py-4 px-4">Features</th>
                  <th className="text-center py-4 px-4">Starter</th>
                  <th className="text-center py-4 px-4">Business</th>
                  <th className="text-center py-4 px-4">Enterprise</th>
                </motion.tr>
              </thead>
              <tbody>
                <motion.tr
                  variants={rowVariants}
                  className="border-b border-gray-700 hover:bg-white/5 transition"
                >
                  <td className="py-4 px-4">Payment Integration</td>
                  <td className="text-center py-4 px-4">Stripe / PayPal</td>
                  <td className="text-center py-4 px-4">Multiple Gateways</td>
                  <td className="text-center py-4 px-4">
                    Custom & Marketplace
                  </td>
                </motion.tr>
                <motion.tr
                  variants={rowVariants}
                  className="border-b border-gray-700 hover:bg-white/5 transition"
                >
                  <td className="py-4 px-4">Inventory Management</td>
                  <td className="text-center py-4 px-4">Basic</td>
                  <td className="text-center py-4 px-4">Advanced</td>
                  <td className="text-center py-4 px-4">
                    Advanced / Custom Systems
                  </td>
                </motion.tr>
                <motion.tr
                  variants={rowVariants}
                  className="border-b border-gray-700 hover:bg-white/5 transition"
                >
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
                </motion.tr>
                <motion.tr
                  variants={rowVariants}
                  className="border-b border-gray-700 hover:bg-white/5 transition"
                >
                  <td className="py-4 px-4">Revision Rounds</td>
                  <td className="text-center py-4 px-4">2</td>
                  <td className="text-center py-4 px-4">3</td>
                  <td className="text-center py-4 px-4">Unlimited</td>
                </motion.tr>
                <motion.tr
                  variants={rowVariants}
                  className="border-b border-gray-700 hover:bg-white/5 transition"
                >
                <td className="py-4 px-4">Price Range</td>
                  <motion.td
                    variants={priceVariants}
                    className="text-center py-4 px-4 text-indigo-500 font-bold tracking-wide"
                    whileHover={{
                      textShadow: "0 0 12px rgba(99,102,241,0.6)",
                    }}
                  >
                    $500 – $1,000
                  </motion.td>
                  <motion.td className="text-center py-4 px-4 text-indigo-500 font-bold">
                    $2,500 – $5,000
                  </motion.td>
                  <motion.td className="text-center py-4 px-4 text-indigo-500 font-bold">
                    $10,000 – $20,000+
                  </motion.td>
                </motion.tr>
              </tbody>
            </motion.table>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <motion.a
                href="#contact"
                whileHover={{
                  y: -3,
                  boxShadow: "0 20px 40px rgba(99,102,241,0.35)",
                }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center bg-indigo-500 text-white px-10 py-4 rounded-lg font-medium relative overflow-hidden"
              >
                <span className="relative z-10">Let’s Build Your Site</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] hover:translate-x-[150%] transition-transform duration-700" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
