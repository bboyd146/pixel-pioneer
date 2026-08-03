// src/components/Portfolio.jsx

import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

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

export default function Portfolio() {
  return (
    <AnimatedSection>
      <section
        id="reviews"
        className="relative overflow-hidden bg-gradient-to-b from-[#0b0f1a] via-indigo-500/5 to-transparent pt-10 pb-24"
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl"
        />

        <div className="relative z-10 container mx-auto px-4">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              Client Reviews
            </p>

            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Trusted by{" "}
              <span className="text-indigo-500">Business Owners</span>
            </h2>

            <p className="mx-auto max-w-2xl text-gray-400">
              See what clients have to say about working with PixelPioneer on
              their websites, digital presence, and business growth.
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={dividerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mb-14 h-px w-full max-w-sm origin-left bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent shadow-[0_0_20px_rgba(99,102,241,0.4)]"
          />

          {/* Elfsight widget container */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl backdrop-blur-xl sm:p-6 md:p-8"
          >
            <div
              className="elfsight-app-4b13dddf-4de7-4147-8268-393305cb7253"
              data-elfsight-app-lazy
            />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.55,
              ease: "easeOut",
            }}
            className="mx-auto mt-20 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl sm:p-10"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
              Start Your Project
            </p>

            <h3 className="mb-4 text-2xl font-bold md:text-3xl">
              Ready to improve your online presence?
            </h3>

            <p className="mb-8 text-gray-400">
              Let’s build a professional website that strengthens your
              credibility and helps turn visitors into customers.
            </p>

            <motion.a
              href="#free-audit"
              whileHover={{
                y: -3,
                boxShadow: "0 20px 40px rgba(99,102,241,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-indigo-500 px-8 py-4 font-medium text-white"
            >
              <span className="relative z-10">
                Request a Free Website Audit
              </span>

              <span className="absolute inset-0 translate-x-[-150%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[150%]" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </AnimatedSection>
  );
}