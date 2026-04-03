import { CheckCircle, Truck } from "lucide-react";

const TIERS = [
  {
    name: "Small Load",
    label: "1–3 items",
    price: "$99",
    priceNote: "starting at",
    icon: "📦",
    items: [
      "Single piece of furniture",
      "1–2 appliances",
      "A few boxes of junk",
      "Small cleanout items",
    ],
    cta: "Book Small Load",
    featured: false,
  },
  {
    name: "Half Truck",
    label: "Medium load",
    price: "$249",
    priceNote: "starting at",
    icon: "🚛",
    items: [
      "One room of furniture",
      "Multiple appliances",
      "Partial garage cleanout",
      "Yard debris & brush",
    ],
    cta: "Book Half Truck",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Full Truck",
    label: "Large load",
    price: "$449",
    priceNote: "starting at",
    icon: "🏠",
    items: [
      "Full estate or home cleanout",
      "Multi-room furniture",
      "Complete garage or basement",
      "Large construction debris",
    ],
    cta: "Book Full Truck",
    featured: false,
  },
];

const INCLUDED = [
  "Free on-site quote before we start",
  "All labor included — we do the lifting",
  "Same-day & next-day availability",
  "Eco-friendly: donate & recycle first",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-mono text-clay text-xs tracking-[0.25em] uppercase mb-3">
              Transparent Pricing
            </p>
            <h2 className="font-sans font-bold text-charcoal text-4xl md:text-5xl tracking-tight leading-tight">
              No surprises.{" "}
              <span className="font-drama italic text-moss">
                Ever.
              </span>
            </h2>
            <p className="font-sans text-charcoal/60 text-base mt-3 max-w-sm leading-relaxed">
              We price by the truckload. You see the price before we start —
              and you only pay when the job&apos;s done right.
            </p>
          </div>

          {/* Included callout */}
          <div className="flex flex-col gap-2 p-5 rounded-3xl bg-moss/6 border border-moss/15 max-w-xs">
            <p className="font-mono text-moss text-xs tracking-widest uppercase mb-1">
              Always Included
            </p>
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle size={13} className="text-clay flex-shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-charcoal/70">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TIERS.map(({ name, label, price, priceNote, icon, items, cta, featured, badge }) => (
            <div
              key={name}
              className={`relative flex flex-col gap-6 p-8 rounded-3xl border transition-all ${
                featured
                  ? "bg-moss border-moss text-cream shadow-xl shadow-moss/20 scale-[1.02]"
                  : "bg-cream-dark border-charcoal/8 hover:border-moss/30"
              }`}
            >
              {badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-clay text-cream text-xs font-semibold font-mono tracking-wider">
                    {badge}
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{icon}</span>
                  <div className="flex items-center gap-1.5">
                    <Truck
                      size={14}
                      className={featured ? "text-cream/50" : "text-charcoal/30"}
                    />
                    <span
                      className={`font-mono text-xs tracking-wider ${
                        featured ? "text-cream/50" : "text-charcoal/30"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                </div>
                <p
                  className={`font-mono text-[11px] tracking-widest uppercase mb-1 ${
                    featured ? "text-cream/50" : "text-charcoal/40"
                  }`}
                >
                  {priceNote}
                </p>
                <p
                  className={`font-sans font-bold text-5xl tracking-tight ${
                    featured ? "text-cream" : "text-charcoal"
                  }`}
                >
                  {price}
                </p>
                <p
                  className={`font-sans font-semibold text-lg mt-1 ${
                    featured ? "text-cream" : "text-charcoal"
                  }`}
                >
                  {name}
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle
                      size={13}
                      className={`flex-shrink-0 mt-0.5 ${
                        featured ? "text-clay" : "text-moss"
                      }`}
                    />
                    <span
                      className={`font-sans text-sm ${
                        featured ? "text-cream/80" : "text-charcoal/70"
                      }`}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={`btn-mag mt-auto flex items-center justify-center py-3.5 rounded-2xl font-semibold text-sm ${
                  featured
                    ? "bg-clay text-cream shadow-lg shadow-clay/30"
                    : "bg-moss text-cream"
                }`}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-charcoal/30 text-xs tracking-wider">
          Prices vary by item type, location, and access. Final quote given on-site before any work begins.
        </p>
      </div>
    </section>
  );
}
