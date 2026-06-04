// src/pages/WebsiteDesignHouston.jsx

import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

const services = [
  "Custom website design",
  "Mobile-first development",
  "Local SEO structure",
  "Contact form setup",
  "Speed optimization",
  "Google-friendly page layout",
];

const industries = [
  "Pest control",
  "Tax & accounting firms",
  "Contractors",
  "Landscaping companies",
  "Cleaning services",
  "Barbershops & salons",
];

export default function WebsiteDesignHouston() {
  return (
    <main className="bg-[#0b0f1a] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(99,102,241,0.25),transparent_45%)]" />

        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <p className="text-indigo-500 font-semibold mb-4">
            Houston Website Design
          </p>

          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto mb-6">
            Website Design in Houston for Small Businesses That Need More Leads
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Pixel Pioneer builds fast, mobile-friendly websites for Houston
            businesses that want better Google visibility, stronger branding,
            and more customer inquiries.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/#contact"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium"
            >
              Request a Free Website Audit
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
      </section>

      {/* LOCAL PROBLEM */}
      <AnimatedSection>
        <section className="py-24 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Website Should Help Houston Customers Choose You
              </h2>

              <p className="text-gray-400 mb-6">
                Many small business websites look outdated, load slowly, or make
                it hard for customers to call, request a quote, or understand
                the service. That means lost opportunities.
              </p>

              <p className="text-gray-400">
                We design websites around trust, speed, mobile usability, and
                clear calls-to-action so your business can turn visitors into
                real leads.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                Common Website Problems We Fix
              </h3>

              <ul className="space-y-4">
                {[
                  "Outdated design that hurts credibility",
                  "Poor mobile experience",
                  "Slow load times",
                  "Weak Google search visibility",
                  "Confusing navigation",
                  "No clear call-to-action",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* SERVICES */}
      <AnimatedSection>
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Houston Web Design Services
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mb-14">
              Whether you need a brand-new website or a redesign of your current
              site, we build with performance and lead generation in mind.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-indigo-500/40 transition"
                >
                  <div className="w-14 h-14 bg-indigo-500/10 rounded-lg flex items-center justify-center mx-auto mb-5">
                    <span className="text-indigo-500 text-2xl">✦</span>
                  </div>

                  <h3 className="text-xl font-bold">{service}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* INDUSTRIES */}
      <AnimatedSection>
        <section className="py-24 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Websites for Houston Service Businesses
              </h2>

              <p className="text-gray-400">
                We focus on practical websites for local businesses that depend
                on calls, quote requests, appointments, and customer trust.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="bg-white/5 border border-white/10 rounded-lg p-5 text-center"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* WHY LOCAL */}
      <AnimatedSection>
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Why Work With a Houston Web Developer?
            </h2>

            <p className="text-gray-400 text-center mb-10">
              Working with a local developer means your website can be built
              around the actual market you serve — Houston, Katy, Cypress, Sugar
              Land, and surrounding areas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-3">Local Search Focus</h3>
                <p className="text-gray-400">
                  Your site can be structured around the keywords local
                  customers actually search for, like Houston website design,
                  small business websites Houston, and service-based searches.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-3">Direct Communication</h3>
                <p className="text-gray-400">
                  You work directly with the person building your site instead
                  of getting passed between sales reps, account managers, and
                  support tickets.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-24 bg-gradient-to-t from-indigo-500/10 via-transparent to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-white/5 border border-white/10 rounded-2xl p-10 md:p-14">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Need a Better Website for Your Houston Business?
              </h2>

              <p className="text-gray-400 text-lg mb-8">
                Request a free website audit and see what improvements could
                help your business get more calls, leads, and customers.
              </p>

              <motion.a
                href="/#contact"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium"
              >
                Request a Free Website Audit
              </motion.a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
