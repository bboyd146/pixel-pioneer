import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import { Helmet } from "react-helmet-async";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function WebsiteDesignKaty() {
  return (
    <>
      <Helmet>
        <title>Website Design Katy TX for Small Businesses | Pixel Pioneer</title>
        <meta
          name="description"
          content="Pixel Pioneer provides website design in Katy TX for small businesses that need more leads, better mobile performance, local SEO, and professional web development."
        />
      </Helmet>

      <div className="relative min-h-screen bg-[#0b0f1a] text-white overflow-x-hidden texture-overlay">
        <Nav />

        <main className="relative z-10 pt-[88px]">
          <section className="relative min-h-[75vh] flex items-center bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent">
            <div className="container mx-auto px-4 py-24 text-center">
              <p className="text-indigo-500 font-semibold mb-4">
                Website Design Katy TX
              </p>

              <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto mb-6">
                Website Design in Katy TX for Small Businesses
              </h1>

              <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10">
                Pixel Pioneer builds fast, mobile-friendly websites for Katy
                businesses that want more calls, quote requests, and local
                customers.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/#free-audit"
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

          <AnimatedSection>
            <section className="py-24">
              <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    A Better Website for Your Katy Business
                  </h2>

                  <p className="text-gray-400 mb-6">
                    Customers often judge your business before they ever call.
                    If your website is slow, outdated, or hard to use on mobile,
                    you may be losing leads to competitors.
                  </p>

                  <p className="text-gray-400">
                    We build websites focused on trust, mobile usability, local
                    SEO, and clear calls-to-action so Katy customers can find
                    you and contact you faster.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Website Problems We Fix
                  </h3>

                  <ul className="space-y-4">
                    {[
                      "Outdated design",
                      "Poor mobile experience",
                      "Slow page load times",
                      "Weak local SEO",
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

          <AnimatedSection>
            <section className="py-24 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Katy Web Design Services
                </h2>

                <p className="text-gray-400 max-w-2xl mx-auto mb-14">
                  Whether you need a new website or a redesign, we build with
                  speed, search visibility, and lead generation in mind.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    "Small business websites",
                    "Website redesigns",
                    "Local SEO structure",
                    "Mobile-first design",
                    "Contact form setup",
                    "Website maintenance",
                  ].map((service) => (
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

          <AnimatedSection>
  <section className="py-24 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Website Design Services in Katy, TX
      </h2>

      <p className="text-gray-400 text-lg mb-6">
        Katy is one of the fastest-growing areas near Houston, and more local
        businesses are competing for attention online. A professional website
        helps your business look credible, explain your services clearly, and
        turn visitors into real leads.
      </p>

      <p className="text-gray-400 text-lg mb-6">
        Pixel Pioneer builds websites for Katy businesses with mobile-first
        design, local SEO structure, fast loading performance, and clear calls
        to action.
      </p>

      <p className="text-gray-400 text-lg">
        Whether you are starting from scratch or improving an existing website,
        we help create a strong online foundation for long-term growth.
      </p>
    </div>
  </section>
</AnimatedSection>

<AnimatedSection>
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Websites for Katy Service Businesses
        </h2>

        <p className="text-gray-400">
          We focus on practical websites for businesses that need more calls,
          quote requests, appointments, and customer trust.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {[
          "Contractors",
          "Accountants",
          "Pest Control",
          "Landscapers",
          "Cleaning Services",
          "Local Service Businesses",
        ].map((industry) => (
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

<AnimatedSection>
  <section className="py-20 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center bg-white/5 border border-white/10 rounded-2xl p-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Also Serving Houston Businesses
        </h2>

        <p className="text-gray-400 mb-8">
          Pixel Pioneer also provides website design and web development
          services for businesses across Houston and surrounding areas.
        </p>

        <a
          href="/houston-website-design"
          className="inline-flex text-indigo-400 hover:text-indigo-300 font-medium"
        >
          View Houston Website Design Services →
        </a>
      </div>
    </div>
  </section>
</AnimatedSection>

<AnimatedSection>
  <section className="py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Katy Website Design FAQs
        </h2>

        <p className="text-gray-400">
          Common questions from Katy business owners.
        </p>
      </div>

      <div className="space-y-6">
        {[
          {
            q: "Do I need a website for my Katy business?",
            a: "Yes. Most customers search online before choosing a business. A professional website helps establish trust, explain your services, and generate leads.",
          },
          {
            q: "How much does website design cost?",
            a: "Pricing depends on your goals, number of pages, features, and project scope. Pixel Pioneer offers transparent website packages for small businesses.",
          },
          {
            q: "Can you redesign my current website?",
            a: "Yes. We can improve your design, mobile experience, speed, SEO structure, contact forms, and overall conversion flow.",
          },
          {
            q: "Do you offer SEO?",
            a: "Yes. Every website is built with SEO basics in mind, including page structure, headings, metadata, mobile performance, and local keyword targeting.",
          },
          {
            q: "How long does a website take?",
            a: "Most small business websites can be completed within a few weeks depending on content, revisions, and project complexity.",
          },
        ].map((faq) => (
          <div
            key={faq.q}
            className="bg-white/5 border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
            <p className="text-gray-400">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
</AnimatedSection>

          <AnimatedSection>
            <section className="py-24">
              <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Serving Katy, Houston, Cypress, and Nearby Areas
                </h2>

                <p className="text-gray-400 mb-10">
                  Pixel Pioneer helps local service businesses and professional
                  firms create websites that look credible, load fast, and make
                  it easy for customers to take action.
                </p>

                <motion.a
                  href="/#contact"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium"
                >
                  Request a Quote
                </motion.a>
              </div>
            </section>
          </AnimatedSection>
        </main>

        <Footer />
      </div>
    </>
  );
}