"use client";
import { useState } from "react";
import { Phone, Mail, Clock, CheckCircle } from "lucide-react";

const SERVICES = [
  "Home / Full Cleanout",
  "Furniture Removal",
  "Appliance Removal",
  "Yard Waste",
  "Estate Cleanout",
  "Hoarding Cleanout",
  "Construction Debris",
  "Commercial Junk",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-2xl border border-charcoal/15 bg-cream focus:outline-none focus:border-moss focus:ring-2 focus:ring-moss/10 font-sans text-sm text-charcoal placeholder:text-charcoal/35 transition-all";

  return (
    <section id="contact" className="py-24 px-6 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div className="flex flex-col justify-center">
            <p className="font-mono text-clay text-xs tracking-[0.25em] uppercase mb-3">
              Get in Touch
            </p>
            <h2 className="font-sans font-bold text-cream text-4xl md:text-5xl tracking-tight leading-tight mb-6">
              Free estimate.{" "}
              <span className="font-drama italic text-clay">
                No pressure.
              </span>
            </h2>
            <p className="font-sans text-cream/60 text-base leading-relaxed mb-10 max-w-sm">
              Fill out the form and we&apos;ll get back to you within the hour — or
              just give us a call. We&apos;re real people, not robots.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-moss/20 flex items-center justify-center">
                  <Phone size={16} className="text-clay" />
                </div>
                <div>
                  <p className="font-sans font-medium text-cream text-sm">Call or Text</p>
                  <a
                    href="tel:+15405550199"
                    className="font-mono text-cream/50 text-sm hover:text-cream transition-colors"
                  >
                    (540) 555-0199
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-moss/20 flex items-center justify-center">
                  <Mail size={16} className="text-clay" />
                </div>
                <div>
                  <p className="font-sans font-medium text-cream text-sm">Email</p>
                  <a
                    href="mailto:hello@blueridgeboys.com"
                    className="font-mono text-cream/50 text-sm hover:text-cream transition-colors"
                  >
                    hello@blueridgeboys.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-moss/20 flex items-center justify-center">
                  <Clock size={16} className="text-clay" />
                </div>
                <div>
                  <p className="font-sans font-medium text-cream text-sm">Hours</p>
                  <p className="font-mono text-cream/50 text-sm">
                    Mon–Sat 7am–7pm · Sun by request
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-cream rounded-3xl p-8 md:p-10">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-10 text-center">
                <CheckCircle size={40} className="text-moss" />
                <h3 className="font-sans font-bold text-charcoal text-2xl">
                  We got it!
                </h3>
                <p className="font-sans text-charcoal/60 text-sm max-w-xs">
                  We&apos;ll reach out within the hour. Check your phone — we&apos;ll usually text.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-mag mt-4 px-6 py-3 rounded-2xl bg-moss text-cream font-semibold text-sm"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs text-charcoal/50 tracking-wider uppercase">
                      Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={set("name")}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs text-charcoal/50 tracking-wider uppercase">
                      Phone *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="(540) 000-0000"
                      value={form.phone}
                      onChange={set("phone")}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-charcoal/50 tracking-wider uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={set("email")}
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-charcoal/50 tracking-wider uppercase">
                    Service Type *
                  </label>
                  <select
                    required
                    value={form.service}
                    onChange={set("service")}
                    className={inputClass}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-charcoal/50 tracking-wider uppercase">
                    Tell us more
                  </label>
                  <textarea
                    rows={4}
                    placeholder="What needs to be removed? Any access issues, stairs, or special notes..."
                    value={form.message}
                    onChange={set("message")}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p className="font-mono text-xs text-red-500">
                    Something went wrong. Please call us directly at (540) 555-0199.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-mag w-full py-4 rounded-2xl bg-clay text-cream font-semibold text-sm disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                >
                  {status === "loading" ? "Sending..." : "Get My Free Quote →"}
                </button>

                <p className="font-mono text-charcoal/30 text-[11px] text-center tracking-wider">
                  We respond within 1 hour during business hours
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
