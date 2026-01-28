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

export default function Services() {
  return (
    <AnimatedSection>
<section
  id="services"
  className="relative py-24 bg-transparent bg-gradient-to-t from-transparent via-indigo-500/10 to-transparent"
>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-indigo-500">Services</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Tailored solutions for every business need and budget
            </p>
          </div>
          <motion.div
            variants={dividerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mb-16 h-px w-82 bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent origin-left"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Service 1 */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 service-card transition duration-300 hover:border-indigo-500/40 hover:bg-white/10"
            >
              <div className="w-16 h-16 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
                <i
                  data-feather="layout"
                  className="text-indigo-500 w-8 h-8"
                ></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Basic Static Page</h3>
              <p className="text-gray-400 mb-4">
                Perfect for startups and personal brands needing a simple online
                presence.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <i
                    data-feather="check"
                    className="text-green-500 mr-3 w-4 h-4"
                  ></i>
                  <span>Simple, clean layout</span>
                </li>
                <li className="flex items-center">
                  <i
                    data-feather="check"
                    className="text-green-500 mr-3 w-4 h-4"
                  ></i>
                  <span>Mobile responsive</span>
                </li>
                <li className="flex items-center">
                  <i
                    data-feather="check"
                    className="text-green-500 mr-3 w-4 h-4"
                  ></i>
                  <span>Single section focus</span>
                </li>
              </ul>
              <motion.div
                variants={priceVariants}
                className="text-indigo-500 font-bold tracking-wide"
                whileHover={{
                  textShadow: "0 0 12px rgba(99,102,241,0.6)",
                }}
              >
                $300 – $600
              </motion.div>
            </motion.div>

            {/* Service 2 - Popular */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white/5 rounded-xl p-8 service-card transition duration-300 border-2 border-indigo-500 relative"
            >
              <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <div className="w-16 h-16 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
                <i
                  data-feather="briefcase"
                  className="text-indigo-500 w-8 h-8"
                ></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Professional Business Page
              </h3>
              <p className="text-gray-400 mb-4">
                Ideal for established businesses looking to expand their digital
                footprint.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <i
                    data-feather="check"
                    className="text-green-500 mr-3 w-4 h-4"
                  ></i>
                  <span>Multiple sections</span>
                </li>
                <li className="flex items-center">
                  <i
                    data-feather="check"
                    className="text-green-500 mr-3 w-4 h-4"
                  ></i>
                  <span>Fully responsive</span>
                </li>
                <li className="flex items-center">
                  <i
                    data-feather="check"
                    className="text-green-500 mr-3 w-4 h-4"
                  ></i>
                  <span>Contact form integration</span>
                </li>
                <li className="flex items-center">
                  <i
                    data-feather="check"
                    className="text-green-500 mr-3 w-4 h-4"
                  ></i>
                  <span>SEO optimization</span>
                </li>
                <li className="flex items-center">
                  <i
                    data-feather="check"
                    className="text-green-500 mr-3 w-4 h-4"
                  ></i>
                  <span>Analytics setup</span>
                </li>
              </ul>
              <motion.div
                variants={priceVariants}
                className="text-indigo-500 font-bold tracking-wide"
                whileHover={{
                  textShadow: "0 0 12px rgba(99,102,241,0.6)",
                }}
              >
                $800 – $1,500
              </motion.div>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white/5 rounded-xl p-8 service-card transition duration-300"
            >
              <div className="w-16 h-16 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
                <i data-feather="award" className="text-indigo-500 w-8 h-8"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Premium Conversion Page
              </h3>
              <p className="text-gray-400 mb-4">
                High-performance pages designed to maximize conversions and
                revenue.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <i
                    data-feather="check"
                    className="text-green-500 mr-3 w-4 h-4"
                  ></i>
                  <span>Advanced animations</span>
                </li>
                <li className="flex items-center">
                  <i
                    data-feather="check"
                    className="text-green-500 mr-3 w-4 h-4"
                  ></i>
                  <span>CRM/API integrations</span>
                </li>
                <li className="flex items-center">
                  <i
                    data-feather="check"
                    className="text-green-500 mr-3 w-4 h-4"
                  ></i>
                  <span>Booking/payment features</span>
                </li>
                <li className="flex items-center">
                  <i
                    data-feather="check"
                    className="text-green-500 mr-3 w-4 h-4"
                  ></i>
                  <span>Conversion optimization</span>
                </li>
                <li className="flex items-center">
                  <i
                    data-feather="check"
                    className="text-green-500 mr-3 w-4 h-4"
                  ></i>
                  <span>Performance focused</span>
                </li>
              </ul>
              <motion.div
                variants={priceVariants}
                className="text-indigo-500 font-bold tracking-wide"
                whileHover={{
                  textShadow: "0 0 12px rgba(99,102,241,0.6)",
                }}
              >
                $1,500 – $3,000+
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
