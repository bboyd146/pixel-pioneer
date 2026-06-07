export default function WhyProfessional() {
  const points = [
    {
      title: "AI Doesn't Build Strategy",
      text: "AI can generate content, but it doesn't understand your customers, local market, or sales process."
    },
    {
      title: "SEO Is More Than Keywords",
      text: "Ranking requires technical SEO, page structure, speed optimization, and proper indexing."
    },
    {
      title: "Design Doesn't Equal Conversions",
      text: "A beautiful website that doesn't generate leads is still a bad website."
    },
    {
      title: "Mobile Experience Matters",
      text: "Most visitors are on mobile devices. Small mistakes can cost customers."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <span className="text-indigo-400 font-semibold">
            Why Professional Web Design?
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Can't AI Just Build My Website?
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            AI is an incredible tool and we use it ourselves.
            But successful websites require strategy, technical expertise,
            user experience, SEO, and conversion optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {points.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}