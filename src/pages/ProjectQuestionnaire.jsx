import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const steps = [
  { number: "01", short: "Business", title: "Tell us about your business" },
  { number: "02", short: "Goals", title: "What are we building?" },
  { number: "03", short: "Brand", title: "Let's talk about your brand" },
  { number: "04", short: "Website", title: "What does your website need?" },
  { number: "05", short: "Project", title: "Budget & timeline" },
  { number: "06", short: "Review", title: "Review your project" },
];

const websiteTypes = [
  "Brand-new website",
  "Website redesign",
  "Updates to an existing website",
  "E-commerce / online store",
  "Membership / training website",
  "Landing page",
  "Not sure — recommend the best approach",
];

const goals = [
  "Generate more leads",
  "Get more phone calls",
  "Sell products online",
  "Book appointments",
  "Showcase services",
  "Build credibility",
  "Improve Google visibility",
  "Offer memberships or courses",
];

const styles = [
  "Modern",
  "Minimal / Clean",
  "Professional",
  "Bold",
  "Luxury / Premium",
  "Friendly / Approachable",
  "Creative",
  "Dark",
  "Colorful",
];

const pages = [
  "Home",
  "About",
  "Services",
  "Individual service pages",
  "Contact",
  "FAQ",
  "Testimonials / Reviews",
  "Gallery / Portfolio",
  "Blog",
  "Pricing",
  "Shop",
  "Booking",
  "Members area",
];

const features = [
  "Contact forms",
  "Quote / request form",
  "Appointment booking",
  "Online payments",
  "E-commerce",
  "Customer / client portal",
  "User accounts / login",
  "Membership / subscription",
  "Online courses / training",
  "Newsletter signup",
  "Live chat",
  "Google Reviews",
  "Social media integration",
  "File uploads",
  "Maps / location",
  "Website search",
];

const initialForm = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  businessDescription: "",
  services: "",
  location: "",

  websiteType: "",
  goals: [],
  projectDescription: "",

  hasDomain: "",
  domain: "",
  hasHosting: "",
  hostingProvider: "",
  currentWebsite: "",

  hasLogo: "",
  brandColors: "",
  designControl: "",
  styles: [],
  inspiration: "",

  pages: [],
  contentStatus: "",
  imageStatus: "",
  features: [],
  integrations: "",
  businessEmail: "",

  seo: "",
  serviceAreas: "",
  googleBusiness: "",

  timeline: "",
  budget: "",

  mustHave: "",
  avoid: "",
  additionalDetails: "",
  referralSource: "",
};

export default function ProjectQuestionnaire() {
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const progress = useMemo(
    () => ((currentStep + 1) / steps.length) * 100,
    [currentStep],
  );

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: null,
      }));
    }
  };

  const toggleArrayValue = (field, value) => {
    setForm((prev) => {
      const exists = prev[field].includes(value);

      return {
        ...prev,
        [field]: exists
          ? prev[field].filter((item) => item !== value)
          : [...prev[field], value],
      };
    });
  };

  const validateStep = () => {
    const nextErrors = {};

    if (currentStep === 0) {
      if (!form.name.trim()) nextErrors.name = "Please enter your name.";
      if (!form.businessName.trim())
        nextErrors.businessName = "Please enter your business name.";
      if (!form.email.trim()) nextErrors.email = "Please enter your email.";
      if (!form.businessDescription.trim())
        nextErrors.businessDescription =
          "Tell us a little about your business.";
    }

    if (currentStep === 1) {
      if (!form.websiteType)
        nextErrors.websiteType = "Please select a project type.";
      if (form.goals.length === 0)
        nextErrors.goals = "Please select at least one goal.";
    }

    if (currentStep === 4) {
      if (!form.timeline) nextErrors.timeline = "Please select a timeline.";
      if (!form.budget) nextErrors.budget = "Please select a budget range.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep()) return;

    window.scrollTo({ top: 0, behavior: "smooth" });

    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const previousStep = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Connect this to your form endpoint/email service later.
    console.log("Pixel Pioneer Project Questionnaire:", form);

    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return <SuccessScreen />;
  }

  return (
    <>
      <Helmet>
        <title>Website Project Questionnaire | Pixel Pioneer</title>
        <meta
          name="description"
          content="Tell Pixel Pioneer about your website project, goals, branding, features, timeline, and budget."
        />
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="relative min-h-screen bg-[#0b0f1a] text-white overflow-x-hidden texture-overlay">
        {/* Atmospheric background */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0e1224] to-[#0b0f1a]" />

          <div className="absolute top-[-20%] left-[-25%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-indigo-500/20 rounded-full blur-[90px] md:blur-[170px]" />

          <div className="absolute top-[25%] right-[-25%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-purple-500/15 rounded-full blur-[100px] md:blur-[180px]" />

          <div className="absolute bottom-[-20%] left-[15%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-blue-500/10 rounded-full blur-[100px] md:blur-[180px]" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        </div>

        <Nav />

        <main className="relative z-10 pt-[88px]">
          {/* HERO */}
          <section className="pt-16 md:pt-24 pb-10">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-indigo-400 font-semibold mb-4"
                >
                  Website Project Questionnaire
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  className="text-4xl md:text-6xl font-bold mb-6"
                >
                  Tell us about your{" "}
                  <span className="text-indigo-400">project.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
                >
                  Whether you have everything planned out or just an idea, these
                  details help us understand your vision and recommend the right
                  approach.
                </motion.p>

                <div className="mt-7 inline-flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  Takes about 5–7 minutes
                </div>
              </div>
            </div>
          </section>

          {/* FORM AREA */}
          <section className="pb-24 md:pb-32">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <ProgressHeader currentStep={currentStep} progress={progress} />

                <div className="bg-white/[0.045] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl shadow-black/20">
                  <div className="p-6 sm:p-8 md:p-12">
                    <div className="mb-10">
                      <p className="text-indigo-400 text-sm font-semibold mb-3">
                        STEP {steps[currentStep].number} OF 06
                      </p>

                      <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        {steps[currentStep].title}
                      </h2>

                      <p className="text-gray-400">
                        {getStepDescription(currentStep)}
                      </p>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -18 }}
                        transition={{ duration: 0.22 }}
                      >
                        {currentStep === 0 && (
                          <BusinessStep
                            form={form}
                            updateField={updateField}
                            errors={errors}
                          />
                        )}

                        {currentStep === 1 && (
                          <GoalsStep
                            form={form}
                            updateField={updateField}
                            toggleArrayValue={toggleArrayValue}
                            errors={errors}
                          />
                        )}

                        {currentStep === 2 && (
                          <BrandStep
                            form={form}
                            updateField={updateField}
                            toggleArrayValue={toggleArrayValue}
                          />
                        )}

                        {currentStep === 3 && (
                          <WebsiteStep
                            form={form}
                            updateField={updateField}
                            toggleArrayValue={toggleArrayValue}
                          />
                        )}

                        {currentStep === 4 && (
                          <ProjectStep
                            form={form}
                            updateField={updateField}
                            errors={errors}
                          />
                        )}

                        {currentStep === 5 && <ReviewStep form={form} />}
                      </motion.div>
                    </AnimatePresence>

                    <div className="border-t border-white/10 mt-12 pt-8 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
                      {currentStep > 0 ? (
                        <motion.button
                          type="button"
                          onClick={previousStep}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="px-6 py-3.5 rounded-lg border border-white/15 hover:border-white/30 text-gray-300 hover:text-white transition cursor-pointer"
                        >
                          ← Back
                        </motion.button>
                      ) : (
                        <div />
                      )}

                      {currentStep < steps.length - 1 ? (
                        <motion.button
                          type="button"
                          onClick={nextStep}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-indigo-500 hover:bg-indigo-600 px-7 py-3.5 rounded-lg font-medium transition shadow-lg shadow-indigo-500/10 cursor-pointer"
                        >
                          Continue →
                        </motion.button>
                      ) : (
                        <motion.button
                          type="button"
                          onClick={handleSubmit}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="bg-indigo-500 hover:bg-indigo-600 px-8 py-3.5 rounded-lg font-medium transition shadow-lg shadow-indigo-500/10 cursor-pointer"
                        >
                          Submit Project
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-center text-gray-600 text-sm mt-6">
                  Your project information is only used to prepare your
                  recommendations and estimate.
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

/* ----------------------------------------
   STEP 1
---------------------------------------- */

function BusinessStep({ form, updateField, errors }) {
  return (
    <div className="space-y-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Your Name" required error={errors.name}>
          <Input
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder="Bradley Boyd"
          />
        </Field>

        <Field
          label="Business / Company Name"
          required
          error={errors.businessName}
        >
          <Input
            value={form.businessName}
            onChange={(e) => updateField("businessName", e.target.value)}
            placeholder="Your business name"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Email Address" required error={errors.email}>
          <Input
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="you@business.com"
          />
        </Field>

        <Field label="Phone Number">
          <Input
            type="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder="(555) 555-5555"
          />
        </Field>
      </div>

      <Field
        label="What does your business do?"
        required
        error={errors.businessDescription}
      >
        <Textarea
          value={form.businessDescription}
          onChange={(e) => updateField("businessDescription", e.target.value)}
          placeholder="Tell us a little about your business, who you serve, and what you do."
        />
      </Field>

      <Field label="What products or services do you offer?">
        <Textarea
          value={form.services}
          onChange={(e) => updateField("services", e.target.value)}
          placeholder="List your primary services or products."
        />
      </Field>

      <Field label="What city or area do you primarily serve?">
        <Input
          value={form.location}
          onChange={(e) => updateField("location", e.target.value)}
          placeholder="Houston, Katy, nationwide, etc."
        />
      </Field>
    </div>
  );
}

/* ----------------------------------------
   STEP 2
---------------------------------------- */

function GoalsStep({ form, updateField, toggleArrayValue, errors }) {
  return (
    <div className="space-y-10">
      <Field
        label="What are you looking for?"
        required
        error={errors.websiteType}
      >
        <OptionGrid
          options={websiteTypes}
          selected={form.websiteType}
          onSelect={(value) => updateField("websiteType", value)}
        />
      </Field>

      <Field
        label="What are the main goals of your website?"
        description="Select all that apply."
        required
        error={errors.goals}
      >
        <MultiOptionGrid
          options={goals}
          selected={form.goals}
          onToggle={(value) => toggleArrayValue("goals", value)}
        />
      </Field>

      <Field label="Describe what you want the website to accomplish.">
        <Textarea
          value={form.projectDescription}
          onChange={(e) => updateField("projectDescription", e.target.value)}
          placeholder="For example: I want a more professional online presence and more quote requests from Google."
        />
      </Field>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Do you already own a domain name?">
          <SelectButtons
            options={["Yes", "No", "Not sure"]}
            value={form.hasDomain}
            onChange={(value) => updateField("hasDomain", value)}
          />
        </Field>

        <Field label="Do you currently have website hosting?">
          <SelectButtons
            options={["Yes", "No", "Not sure"]}
            value={form.hasHosting}
            onChange={(value) => updateField("hasHosting", value)}
          />
        </Field>
      </div>

      <AnimatePresence>
        {form.hasDomain === "Yes" && (
          <Reveal>
            <Field label="What is your domain name?">
              <Input
                value={form.domain}
                onChange={(e) => updateField("domain", e.target.value)}
                placeholder="yourbusiness.com"
              />
            </Field>
          </Reveal>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {form.hasHosting === "Yes" && (
          <Reveal>
            <Field label="Who is your hosting provider?">
              <Input
                value={form.hostingProvider}
                onChange={(e) => updateField("hostingProvider", e.target.value)}
                placeholder="SiteGround, Bluehost, GoDaddy, WordPress.com..."
              />
            </Field>
          </Reveal>
        )}
      </AnimatePresence>

      <Field label="Current website URL, if applicable">
        <Input
          value={form.currentWebsite}
          onChange={(e) => updateField("currentWebsite", e.target.value)}
          placeholder="https://..."
        />
      </Field>
    </div>
  );
}

/* ----------------------------------------
   STEP 3
---------------------------------------- */

function BrandStep({ form, updateField, toggleArrayValue }) {
  return (
    <div className="space-y-10">
      <Field label="Do you already have a logo?">
        <OptionGrid
          options={[
            "Yes — ready to use",
            "Yes — but it may need updating",
            "No",
            "No — take the creative lead",
          ]}
          selected={form.hasLogo}
          onSelect={(value) => updateField("hasLogo", value)}
        />
      </Field>

      <Field label="Do you have preferred brand colors?">
        <Textarea
          value={form.brandColors}
          onChange={(e) => updateField("brandColors", e.target.value)}
          placeholder="Tell us your colors, hex codes, or simply say 'I'm open to suggestions.'"
        />
      </Field>

      <Field label="How involved would you like to be in the design direction?">
        <OptionGrid
          options={[
            "I know exactly what I want",
            "I have ideas but want your input",
            "Take the creative lead",
          ]}
          selected={form.designControl}
          onSelect={(value) => updateField("designControl", value)}
        />
      </Field>

      <Field
        label="Which styles fit your vision?"
        description="Select as many as you like."
      >
        <MultiOptionGrid
          options={styles}
          selected={form.styles}
          onToggle={(value) => toggleArrayValue("styles", value)}
        />
      </Field>

      <Field
        label="Are there any websites you like?"
        description="Share links and tell us what stands out."
      >
        <Textarea
          value={form.inspiration}
          onChange={(e) => updateField("inspiration", e.target.value)}
          placeholder={`Example:
https://example.com — I like the clean layout and colors.
https://example2.com — I like the way they show their services.`}
        />
      </Field>
    </div>
  );
}

/* ----------------------------------------
   STEP 4
---------------------------------------- */

function WebsiteStep({ form, updateField, toggleArrayValue }) {
  return (
    <div className="space-y-10">
      <Field
        label="Which pages do you think you'll need?"
        description="Don't worry if you're unsure. We can recommend the final structure."
      >
        <MultiOptionGrid
          options={pages}
          selected={form.pages}
          onToggle={(value) => toggleArrayValue("pages", value)}
        />
      </Field>

      <Field label="Is your written website content ready?">
        <OptionGrid
          options={[
            "Yes — everything is ready",
            "Some of it is ready",
            "No",
            "I need help organizing / writing it",
          ]}
          selected={form.contentStatus}
          onSelect={(value) => updateField("contentStatus", value)}
        />
      </Field>

      <Field label="Do you already have photos or images?">
        <OptionGrid
          options={[
            "Yes",
            "Some",
            "No",
            "I'd like Pixel Pioneer to source imagery",
          ]}
          selected={form.imageStatus}
          onSelect={(value) => updateField("imageStatus", value)}
        />
      </Field>

      <Field
        label="What functionality does your website need?"
        description="Select everything that may apply."
      >
        <MultiOptionGrid
          options={features}
          selected={form.features}
          onToggle={(value) => toggleArrayValue("features", value)}
        />
      </Field>

      <Field label="Does the website need to connect to any other platforms?">
        <Textarea
          value={form.integrations}
          onChange={(e) => updateField("integrations", e.target.value)}
          placeholder="Stripe, Calendly, QuickBooks, Mailchimp, Microsoft 365, Google Workspace, CRM, etc."
        />
      </Field>

      <Field label="Do you need professional business email setup?">
        <SelectButtons
          options={["Yes", "No", "Already have it", "Not sure"]}
          value={form.businessEmail}
          onChange={(value) => updateField("businessEmail", value)}
        />
      </Field>

      <Field label="Would you like the website optimized for Google?">
        <SelectButtons
          options={["Yes", "No", "Not sure"]}
          value={form.seo}
          onChange={(value) => updateField("seo", value)}
        />
      </Field>

      <Field label="What cities or service areas do you want to target?">
        <Input
          value={form.serviceAreas}
          onChange={(e) => updateField("serviceAreas", e.target.value)}
          placeholder="Houston, Katy, Cypress, Sugar Land..."
        />
      </Field>

      <Field label="Do you currently have a Google Business Profile?">
        <SelectButtons
          options={["Yes", "No", "Not sure"]}
          value={form.googleBusiness}
          onChange={(value) => updateField("googleBusiness", value)}
        />
      </Field>
    </div>
  );
}

/* ----------------------------------------
   STEP 5
---------------------------------------- */

function ProjectStep({ form, updateField, errors }) {
  return (
    <div className="space-y-10">
      <Field
        label="When would you ideally like the website completed?"
        required
        error={errors.timeline}
      >
        <OptionGrid
          options={[
            "As soon as possible",
            "Within 2–4 weeks",
            "Within 1–2 months",
            "2+ months",
            "No specific deadline",
          ]}
          selected={form.timeline}
          onSelect={(value) => updateField("timeline", value)}
        />
      </Field>

      <Field
        label="What budget range have you set aside for the project?"
        required
        description="This helps us recommend a realistic approach based on your goals."
        error={errors.budget}
      >
        <OptionGrid
          options={[
            "Under $1,000",
            "$1,000 – $2,000",
            "$2,000 – $3,500",
            "$3,500 – $5,000",
            "$5,000+",
            "I'm not sure yet",
          ]}
          selected={form.budget}
          onSelect={(value) => updateField("budget", value)}
        />
      </Field>

      <Field label="Is there anything you absolutely want included?">
        <Textarea
          value={form.mustHave}
          onChange={(e) => updateField("mustHave", e.target.value)}
          placeholder="Specific sections, functionality, animations, integrations, design ideas, etc."
        />
      </Field>

      <Field label="Is there anything you don't want?">
        <Textarea
          value={form.avoid}
          onChange={(e) => updateField("avoid", e.target.value)}
          placeholder="Colors, styles, layouts, features, or anything you'd prefer we avoid."
        />
      </Field>

      <Field label="Anything else we should know?">
        <Textarea
          value={form.additionalDetails}
          onChange={(e) => updateField("additionalDetails", e.target.value)}
          placeholder="Add any additional project details here."
        />
      </Field>

      <Field label="How did you hear about Pixel Pioneer?">
        <select
          value={form.referralSource}
          onChange={(e) => updateField("referralSource", e.target.value)}
          className={inputClass}
        >
          <option value="" className="bg-[#111625]">
            Select one
          </option>
          <option className="bg-[#111625]">Google</option>
          <option className="bg-[#111625]">Referral</option>
          <option className="bg-[#111625]">Social Media</option>
          <option className="bg-[#111625]">
            Existing Pixel Pioneer client
          </option>
          <option className="bg-[#111625]">
            Saw a website built by Pixel Pioneer
          </option>
          <option className="bg-[#111625]">Other</option>
        </select>
      </Field>
    </div>
  );
}

/* ----------------------------------------
   STEP 6
---------------------------------------- */

function ReviewStep({ form }) {
  const sections = [
    {
      title: "Business",
      rows: [
        ["Name", form.name],
        ["Business", form.businessName],
        ["Email", form.email],
        ["Phone", form.phone],
        ["Location", form.location],
      ],
    },
    {
      title: "Project",
      rows: [
        ["Project type", form.websiteType],
        ["Goals", form.goals.join(", ")],
        ["Current website", form.currentWebsite],
        ["Domain", form.domain],
      ],
    },
    {
      title: "Brand & Design",
      rows: [
        ["Logo", form.hasLogo],
        ["Brand colors", form.brandColors],
        ["Design direction", form.designControl],
        ["Style", form.styles.join(", ")],
      ],
    },
    {
      title: "Website",
      rows: [
        ["Pages", form.pages.join(", ")],
        ["Features", form.features.join(", ")],
        ["Content", form.contentStatus],
        ["Images", form.imageStatus],
        ["SEO", form.seo],
      ],
    },
    {
      title: "Project Details",
      rows: [
        ["Timeline", form.timeline],
        ["Budget", form.budget],
        ["Referral", form.referralSource],
      ],
    },
  ];

  return (
    <div>
      <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-5 mb-8">
        <p className="text-gray-300">
          Take a quick look through your answers. If everything looks good,
          submit your project and we'll review the details.
        </p>
      </div>

      <div className="space-y-5">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-black/20 border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-lg font-bold mb-5">{section.title}</h3>

            <div className="space-y-4">
              {section.rows
                .filter(([, value]) => value)
                .map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-1 sm:gap-6"
                  >
                    <span className="text-gray-500 text-sm">{label}</span>
                    <span className="text-gray-200 text-sm">{value}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------
   SUCCESS
---------------------------------------- */

function SuccessScreen() {
  return (
    <>
      <Helmet>
        <title>Project Received | Pixel Pioneer</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <div className="relative min-h-screen bg-[#0b0f1a] text-white overflow-x-hidden texture-overlay">
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0e1224] to-[#0b0f1a]" />
          <div className="absolute top-[-20%] left-[-20%] w-[700px] h-[700px] bg-indigo-500/20 rounded-full blur-[160px]" />
          <div className="absolute bottom-[-25%] right-[-20%] w-[700px] h-[700px] bg-purple-500/15 rounded-full blur-[160px]" />
        </div>

        <Nav />

        <main className="relative z-10 pt-[88px]">
          <section className="min-h-[75vh] flex items-center py-24">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-7">
                  <span className="text-green-400 text-2xl">✓</span>
                </div>

                <p className="text-indigo-400 font-semibold mb-4">
                  Project Received
                </p>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Thanks for telling us about your project.
                </h1>

                <p className="text-gray-400 text-lg md:text-xl mb-10">
                  We'll review your goals, website requirements, branding,
                  timeline, and budget and follow up with recommended next
                  steps.
                </p>

                <motion.a
                  href="/"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-medium"
                >
                  Return Home
                </motion.a>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

/* ----------------------------------------
   SHARED UI
---------------------------------------- */

function ProgressHeader({ currentStep, progress }) {
  return (
    <div className="mb-6 md:mb-8">
      <div className="hidden md:grid grid-cols-6 gap-3 mb-5">
        {steps.map((step, index) => (
          <div key={step.number}>
            <div
              className={`text-xs font-semibold transition ${
                index <= currentStep ? "text-indigo-400" : "text-gray-600"
              }`}
            >
              {step.number}
            </div>

            <div
              className={`text-sm mt-1 transition ${
                index === currentStep ? "text-white" : "text-gray-500"
              }`}
            >
              {step.short}
            </div>
          </div>
        ))}
      </div>

      <div className="flex md:hidden justify-between items-center mb-3">
        <span className="text-sm text-gray-400">
          Step {currentStep + 1} of {steps.length}
        </span>

        <span className="text-sm text-indigo-400">
          {steps[currentStep].short}
        </span>
      </div>

      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.35 }}
        />
      </div>
    </div>
  );
}

function Field({ label, description, required, error, children }) {
  return (
    <div>
      <label className="block font-medium text-gray-200 mb-2">
        {label}
        {required && <span className="text-indigo-400 ml-1">*</span>}
      </label>

      {description && (
        <p className="text-sm text-gray-500 mb-4">{description}</p>
      )}

      {children}

      {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
    </div>
  );
}

const inputClass =
  "w-full bg-black/25 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder:text-gray-600 outline-none focus:border-indigo-500/70 focus:ring-2 focus:ring-indigo-500/10 transition";

function Input(props) {
  return <input {...props} className={inputClass} />;
}

function Textarea(props) {
  return <textarea {...props} rows={5} className={`${inputClass} resize-y`} />;
}

function OptionGrid({ options, selected, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {options.map((option) => {
        const active = selected === option;

        return (
          <motion.button
            key={option}
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onSelect(option)}
            className={`text-left p-4 rounded-xl border transition cursor-pointer ${
              active
                ? "bg-indigo-500/10 border-indigo-500/60 text-white"
                : "bg-black/20 border-white/10 text-gray-300 hover:border-white/20"
            }`}
          >
            <div className="flex items-start gap-3">
              <span
                className={`mt-0.5 w-5 h-5 min-w-5 rounded-full border flex items-center justify-center ${
                  active ? "border-indigo-400 bg-indigo-500" : "border-white/20"
                }`}
              >
                {active && <span className="text-[11px]">✓</span>}
              </span>

              <span className="text-sm">{option}</span>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}

function MultiOptionGrid({ options, selected, onToggle }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {options.map((option) => {
        const active = selected.includes(option);

        return (
          <motion.button
            key={option}
            type="button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.99 }}
            onClick={() => onToggle(option)}
            className={`text-left p-4 rounded-xl border transition cursor-pointer ${
              active
                ? "bg-indigo-500/10 border-indigo-500/60 text-white"
                : "bg-black/20 border-white/10 text-gray-300 hover:border-white/20"
            }`}
          >
            <div className="flex items-start gap-3">
              <span
                className={`mt-0.5 w-5 h-5 min-w-5 rounded-md border flex items-center justify-center ${
                  active ? "border-indigo-400 bg-indigo-500" : "border-white/20"
                }`}
              >
                {active && <span className="text-[11px]">✓</span>}
              </span>

              <span className="text-sm">{option}</span>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}

function SelectButtons({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`px-4 py-2.5 rounded-lg border text-sm transition cursor-pointer ${
            value === option
              ? "bg-indigo-500/15 border-indigo-500/60 text-indigo-300"
              : "bg-black/20 border-white/10 text-gray-400 hover:border-white/20"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function Reveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

function getStepDescription(step) {
  const descriptions = [
    "Start with the basics so we understand who you are and what your business does.",
    "Tell us why you're considering a new website and what you want it to accomplish.",
    "Already have a brand? Great. Starting from scratch? We can help with that too.",
    "Now we'll get into the pages, content, functionality, and tools your website may need.",
    "A little project context helps us recommend the right scope and approach.",
    "You're almost done. Make sure everything looks right before sending it over.",
  ];

  return descriptions[step];
}
