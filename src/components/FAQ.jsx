export default function FAQ() {
  const faqs = [
    {
      q: "How much does a website cost?",
      a: "Pricing depends on the scope of the project. Most small business websites fall into a predictable range and we provide transparent pricing."
    },
    {
      q: "How long does a website take?",
      a: "Most websites are completed within a few weeks depending on content, revisions, and complexity."
    },
    {
      q: "Do I need a website if I already use social media?",
      a: "Yes. Your website is your digital headquarters and gives you more control than any social platform."
    },
    {
      q: "Can I build it myself with AI?",
      a: "You can. Many business owners do. The challenge is creating something that performs well, ranks, converts visitors, and supports long-term growth."
    },
    {
      q: "Do you offer maintenance?",
      a: "Yes. We offer ongoing maintenance, updates, monitoring, and support."
    },
    {
      q: "Can you redesign my existing website?",
      a: "Absolutely. We can improve design, speed, SEO, user experience, and conversions."
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-400">
            Common questions we receive from business owners.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3">
                {faq.q}
              </h3>

              <p className="text-gray-400">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}