import { motion } from "framer-motion";

export default function NoWebsiteYet() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">

        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-sm">

          <div className="text-center mb-12">
            <span className="text-indigo-400 font-semibold">
              Starting From Scratch?
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Don't Have a Website Yet?
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto">
              That's perfectly fine. Many of our clients come to us with
              nothing more than a business idea, Facebook page, or logo.
              We help create a professional online presence from the ground up.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-bold text-xl mb-3">
                Launch Faster
              </h3>

              <p className="text-gray-400">
                Skip months of trial and error and get a website that is
                ready to generate leads.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="font-bold text-xl mb-3">
                Built For Growth
              </h3>

              <p className="text-gray-400">
                Start with a foundation that supports SEO,
                advertising, and future expansion.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-bold text-xl mb-3">
                Clear Guidance
              </h3>

              <p className="text-gray-400">
                We'll help determine the right pages,
                messaging, and strategy for your business.
              </p>
            </div>

          </div>

          <div className="text-center mt-12">
            <motion.a
              href="/#contact"
              whileHover={{ y: -3 }}
              className="inline-flex bg-indigo-500 hover:bg-indigo-600 px-8 py-4 rounded-lg font-medium"
            >
              Get a Website Plan
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}