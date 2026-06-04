// src/components/Portfolio.jsx

import React from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import alln1pestcontrol from "../assets/projects/alln1pestcontrol.png";
import gibsontaxcpa from "../assets/projects/gibsontaxcpa.png";
import flatfeeconsulting from "../assets/projects/flatfeeconsulting.png";
import { g } from "framer-motion/client";

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

const projects = [
  {
    title: "All N1 Pest Control",
    type: "Local Service Business",
    description:
      "A professional pest control website focused on lead generation, mobile usability, and local SEO.",
    image: alln1pestcontrol,
    link: "https://alln1pestcontrolmanagement.com",
    features: [
      "Mobile responsive design",
      "Lead capture forms",
      "Local SEO improvements",
      "Performance-focused layout",
    ],
  },
  {
    title: "Gibson Tax & Accounting",
    type: "CPA / Professional Services",
    description:
      "A professional CPA website built to showcase services, generate consultations, and establish trust.",
    image: gibsontaxcpa,
    link: "https://gibsontaxcpa.com",
    features: [
      "Custom service pages",
      "Consultation-focused layout",
      "Mobile-first design",
      "Professional branding",
    ],
  },
  {
    title: "Flat Fee Consulting",
    type: "Financial Forensics / Consulting",
    description:
      "Financial forensics and accounting data cleanup for business owners and attorneys dealing with unclear, disorganized, or suspicious financial activity.",
    image: flatfeeconsulting,
    link: "https://flatfeeconsulting.com",
    features: [
      "WordPress CMS for easy updates",
      "Framer Motion animations",
      "Responsive layout",
      "Conversion-focused structure",
    ],
  },
];

export default function Portfolio() {
  return (
    <AnimatedSection>
      <section
        id="portfolio"
className="relative pt-10 pb-24 bg-gradient-to-b from-[#0b0f1a] via-indigo-500/5 to-transparent"      >
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent <span className="text-indigo-500">Projects</span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Real websites built for businesses looking to attract customers,
              improve credibility, and grow online.
            </p>
          </div>

          <motion.div
            variants={dividerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mb-16 h-px w-82 bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent origin-left shadow-[0_0_20px_rgba(99,102,241,0.4)]"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden transition duration-300 hover:border-indigo-500/40 hover:bg-white/10"
              >
                <div className="aspect-video bg-indigo-500/10 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} website preview`}
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-8">
                  <p className="text-indigo-500 text-sm font-semibold mb-2">
                    {project.type}
                  </p>

                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                  <p className="text-gray-400 mb-5">{project.description}</p>

                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start">
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
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{
                      y: -3,
                      boxShadow: "0 20px 40px rgba(99,102,241,0.35)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="group inline-flex items-center justify-center bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium relative overflow-hidden"
                  >
                    <span className="relative z-10">View Project</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.55, ease: "easeOut" }}
            className="mt-20 text-center bg-white/5 border border-white/10 rounded-xl p-10 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Like what you see?
            </h3>

            <p className="text-gray-400 mb-8">
              Let’s build a website that helps your business generate more
              leads, calls, and customers.
            </p>

            <motion.a
              href="#free-audit"
              whileHover={{
                y: -3,
                boxShadow: "0 20px 40px rgba(99,102,241,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center bg-indigo-500 text-white px-8 py-4 rounded-lg font-medium relative overflow-hidden"
            >
              <span className="relative z-10">
                Request a Free Website Audit
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}
