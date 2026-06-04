// src/components/WhyChooseUs.jsx

import React from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.16,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 28,
        scale: 0.96,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
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

const reasons = [
    {
        icon: "phone-call",
        title: "More Leads",
        description:
            "Clear calls-to-action and conversion-focused layouts designed to generate inquiries.",
    },
    {
        icon: "smartphone",
        title: "Mobile Optimized",
        description:
            "Most customers visit from mobile devices. Every site is built mobile-first.",
    },
    {
        icon: "search",
        title: "Google-Friendly",
        description: "SEO-ready structure to help your business get found online.",
    },
    {
        icon: "zap",
        title: "Fast Loading",
        description: "Performance-focused websites that keep visitors engaged.",
    },
    {
        icon: "shield",
        title: "Reliable Support",
        description: "Ongoing maintenance and support available after launch.",
    },
    {
        icon: "users",
        title: "Local Business Focused",
        description:
            "Built specifically for service businesses that need more calls and customers.",
    },
];

export default function WhyChooseUs() {
    return (
        <AnimatedSection>
            <section
                id="why-us"
                className="relative py-24 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
            >
                <div className="relative z-10 container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Why Choose <span className="text-indigo-500">Pixel Pioneer?</span>
                        </h2>

                        <p className="text-gray-400 max-w-2xl mx-auto">
                            We help local businesses turn their websites into stronger sales
                            and lead-generation tools.
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
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={reason.title}
                                variants={cardVariants}
                                whileHover={{ y: -6 }}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 transition duration-300 hover:border-indigo-500/40 hover:bg-white/10"
                            >
                                <div className="w-14 h-14 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6">
                                    <i
                                        data-feather={reason.icon}
                                        className="text-indigo-500 w-7 h-7"
                                    ></i>
                                </div>

                                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>

                                <p className="text-gray-400 leading-relaxed">
                                    {reason.description}
                                </p>
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
                            Need a website that actually helps your business grow?
                        </h3>

                        <p className="text-gray-400 mb-8">
                            Get a free website audit and see what improvements could help you
                            get more calls, leads, and customers.
                        </p>

                        <motion.a
                            href="/#free-audit"
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
