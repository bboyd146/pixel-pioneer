// src/components/FreeAudit.jsx

import React from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function FreeAudit() {
  return (
    <AnimatedSection>
      <section
        id="free-audit"
        className="relative py-24 bg-gradient-to-b from-transparent via-indigo-500/10 to-transparent"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 md:p-14">
            <p className="text-indigo-500 font-semibold mb-3">
              Free Website Audit
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              See What’s Holding Your Website Back
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Get a quick review of your website with actionable recommendations
              to improve speed, mobile experience, SEO, and lead generation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 text-left">
              {[
                "Mobile layout",
                "Page speed",
                "SEO basics",
                "Lead capture",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-black/20 border border-white/10 rounded-lg p-4"
                >
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{
                y: -3,
                boxShadow: "0 20px 40px rgba(99,102,241,0.35)",
              }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center bg-indigo-500 text-white px-8 py-4 rounded-lg font-medium relative overflow-hidden"
            >
              <span className="relative z-10">Request My Free Audit</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700" />
            </motion.a>

            <p className="text-gray-500 text-sm mt-5">
              No pressure. No obligation. Just honest feedback on how your site
              can perform better.
            </p>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
