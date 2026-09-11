import React, { useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const FORM_ID =
    "1FAIpQLSenp0yRQ_PGhphAlZPs4q1jtJLh8UiXZC7FiIFHPUurZtC8HQ";

  const ENTRY_ID_NAME = "entry.2116052852";
  const ENTRY_ID_EMAIL = "entry.1558582620";
  const ENTRY_ID_WEBSITE = "entry.1763070305";
  const ENTRY_ID_SERVICE = "entry.1060472253";
  const ENTRY_ID_MESSAGE = "entry.288713975";

  const ENDPOINT = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    service: "",
    message: "",

    // Honeypot — real users should never fill this out.
    companyWebsite: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  // Stores the time this component/form loaded.
  const formStartedAt = useRef(Date.now());

  const handleChange = (e) =>
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));

  const validate = () => {
    if (!form.name.trim()) {
      return "Please enter your name.";
    }

    if (!form.email.trim()) {
      return "Please enter your email.";
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      return "Please enter a valid email.";
    }

    // Website is intentionally optional.

    if (!form.service) {
      return "Please select a service.";
    }

    if (!form.message.trim()) {
      return "Please tell us about your project.";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    /*
     * SPAM CHECK #1:
     * Honeypot field.
     *
     * Normal users cannot see this input.
     * Many bots automatically fill every input.
     */
    if (form.companyWebsite.trim()) {
      console.warn("Spam submission blocked.");

      // Pretend the form worked instead of telling the bot
      // exactly why it was rejected.
      window.location.href = "/contact-success";
      return;
    }

    /*
     * SPAM CHECK #2:
     * Reject submissions completed unrealistically quickly.
     */
    const completionTime = Date.now() - formStartedAt.current;

    if (completionTime < 3000) {
      console.warn("Submission completed too quickly.");

      setStatus({
        type: "error",
        message:
          "Please wait a moment and review your information before submitting.",
      });

      return;
    }

    const validationError = validate();

    if (validationError) {
      setStatus({
        type: "error",
        message: validationError,
      });

      return;
    }

    setSubmitting(true);
    setStatus(null);

    try {
      const payload = new FormData();

      payload.append(ENTRY_ID_NAME, form.name.trim());
      payload.append(ENTRY_ID_EMAIL, form.email.trim());
      payload.append(ENTRY_ID_WEBSITE, form.website.trim());
      payload.append(ENTRY_ID_SERVICE, form.service);
      payload.append(ENTRY_ID_MESSAGE, form.message.trim());

      await fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });

      setForm({
        name: "",
        email: "",
        website: "",
        service: "",
        message: "",
        companyWebsite: "",
      });

      window.location.href = "/contact-success";
    } catch (err) {
      console.error("Submit error:", err);

      setSubmitting(false);

      setStatus({
        type: "error",
        message:
          "There was an error submitting the form. You can email us at bradley@pixelpioneer.dev.",
      });
    }
  };

  return (
    <AnimatedSection>
      <section
        id="contact"
        className="relative py-24 bg-gradient-to-t from-transparent via-indigo-500/10 to-transparent"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_85%,rgba(99,102,241,0.28),transparent_50%)]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to{" "}
                <span className="text-indigo-500">Start?</span>
              </h2>

              <p className="text-gray-400">
                Tell us about your website and we'll provide actionable
                recommendations to improve speed, SEO, and lead generation.
              </p>
            </div>

            <form
              className="space-y-6"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* ========================================
                  HONEYPOT
                  Hidden from humans.
                  Do not remove.
              ======================================== */}
              <div
                aria-hidden="true"
                className="absolute opacity-0 pointer-events-none"
                style={{
                  left: "-9999px",
                  top: "-9999px",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden",
                }}
              >
                <label htmlFor="companyWebsite">
                  Company Website
                </label>

                <input
                  id="companyWebsite"
                  name="companyWebsite"
                  value={form.companyWebsite}
                  onChange={handleChange}
                  type="text"
                  tabIndex="-1"
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    autoComplete="name"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    autoComplete="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block mb-2 text-sm font-medium"
                >
                  Website URL{" "}
                  <span className="text-gray-400 font-normal">
                    (if applicable)
                  </span>
                </label>

                <input
                  id="website"
                  name="website"
                  value={form.website}
                  onChange={handleChange}
                  type="url"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block mb-2 text-sm font-medium"
                >
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

                  <option>Free Website Audit</option>

                  <option>
                    Not Sure / Need Advice
                  </option>

                  <option>
                    New Business Website
                  </option>

                  <option>
                    Website Redesign
                  </option>

                  <option>
                    E-Commerce Website
                  </option>

                  <option>
                    Membership / Training Website
                  </option>

                  <option>
                    Website Maintenance
                  </option>

                  <option>
                    SEO / Website Improvements
                  </option>

                  <option>
                    Enterprise & Custom
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Project Details
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Tell us what you're looking for. New website, redesign, more leads, SEO, online payments, memberships, or anything else."
                />
              </div>

              {status && (
                <div
                  role="alert"
                  className={`p-3 rounded-md text-sm ${
                    status.type === "success"
                      ? "bg-green-900/40 text-green-300 border border-green-700"
                      : "bg-red-900/40 text-red-300 border border-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition"
              >
                {submitting
                  ? "Sending…"
                  : "Send Message"}
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-400">
              If you prefer, email us at{" "}
              <a
                className="text-indigo-500 hover:text-indigo-400"
                href="mailto:bradley@pixelpioneer.dev"
              >
                bradley@pixelpioneer.dev
              </a>
              .
            </p>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0b0f1a]" />
      </section>
    </AnimatedSection>
  );
}