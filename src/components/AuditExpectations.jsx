// src/components/AuditExpectations.jsx

import React from "react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    title: "Submit Your Website",
    text: "Send your website URL and let us know what you want to improve.",
  },
  {
    title: "We Review Key Areas",
    text: "We check mobile layout, speed, SEO basics, calls-to-action, and lead flow.",
  },
  {
    title: "You Get Clear Feedback",
    text: "You receive practical recommendations on what could help your website perform better.",
  },
  {
    title: "Optional Next Steps",
    text: "If you want help fixing the issues, we can provide a quote. No pressure.",
  },
];

export default function AuditExpectations() {
  return (
    <AnimatedSection>
      <section
        id="audit-expectations"
        className="relative py-24 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What to Expect From Your{" "}
              <span className="text-indigo-500">Free Audit</span>
            </h2>

            <p className="text-gray-400">
              This is a quick, honest review designed to help you understand
              where your website may be losing leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-indigo-500/40 transition"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-5 text-indigo-500 font-bold">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}