import React, { useState } from "react";

/**
 * Replace:
 * - FORM_ID (already filled below)
 * - ENTRY_ID_NAME, ENTRY_ID_EMAIL, ENTRY_ID_SERVICE, ENTRY_ID_MESSAGE
 *
 * How to get entry IDs: Form editor → ⋮ → Get pre-filled link → copy query params (entry.xxxxx=)
 */
//docs.google.com/forms/d/e/1FAIpQLSenp0yRQ_PGhphAlZPs4q1jtJLh8UiXZC7FiIFHPUurZtC8HQ/viewform?usp=pp_url&entry.2116052852=Your+Name&entry.1558582620=email@email.com&entry.1060472253=Basic+Static+Page&entry.288713975=I+want+a+landing+page+for+my+pest+control+services.
export default function Contact() {
  // ======= EDIT THESE =======
  const FORM_ID = "1FAIpQLSenp0yRQ_PGhphAlZPs4q1jtJLh8UiXZC7FiIFHPUurZtC8HQ";
  // Replace the ENTRY_ID_* placeholders with the real entry IDs from your prefilled link
  const ENTRY_ID_NAME = "entry.2116052852";
  const ENTRY_ID_EMAIL = "entry.1558582620";
  const ENTRY_ID_SERVICE = "entry.1060472253";
  const ENTRY_ID_MESSAGE = "entry.288713975";
  // ==========================

  const ENDPOINT = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // null | {type, message}

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.service) return "Please select a service.";
    if (!form.message.trim()) return "Please tell us about your project.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ type: "error", message: err });
      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      const payload = new FormData();
      payload.append(ENTRY_ID_NAME, form.name);
      payload.append(ENTRY_ID_EMAIL, form.email);
      payload.append(ENTRY_ID_SERVICE, form.service);
      payload.append(ENTRY_ID_MESSAGE, form.message);

      await fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors", // required for cross-origin Google Forms POST
        body: payload,
      });

      setSubmitting(false);
      setForm({ name: "", email: "", service: "", message: "" });
      setStatus({ type: "success", message: "Thanks — your message was sent!" });
    } catch (err) {
      console.error("Submit error:", err);
      setSubmitting(false);
      setStatus({
        type: "error",
        message:
          "There was an error submitting the form. You can email us at brad.dev25@gmail.com.",
      });
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-indigo-500">Start?</span>
            </h2>
            <p className="text-gray-400">
              Get in touch to discuss your project and receive a custom quote
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block mb-2 text-sm font-medium">
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select a service</option>
                <option>Basic Static Page</option>
                <option>Professional Business Page</option>
                <option>Premium Conversion Page</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Tell us about your project..."
              />
            </div>

            {status && (
              <div
                role="alert"
                className={`p-3 rounded-md text-sm ${
                  status.type === "success"
                    ? "bg-green-900/40 text-secondary-300 border border-secondary-700"
                    : "bg-red-900/40 text-red-300 border border-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 text-white font-medium py-3 px-6 rounded-lg transition"
            >
              {submitting ? "Sending…" : "Send Message"}
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-400">
            If you prefer, email us at{" "}
            <a className="text-indigo-500" href="mailto:brad.dev25@gmail.com">
              brad.dev25@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
