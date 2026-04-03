import {
  Sofa,
  Refrigerator,
  Leaf,
  Home,
  Building2,
  Hammer,
  Package,
  Heart,
} from "lucide-react";

const SERVICES = [
  {
    icon: Home,
    title: "Home Cleanouts",
    desc: "Full-house clearing for move-outs, estate sales, or a fresh start.",
  },
  {
    icon: Sofa,
    title: "Furniture Removal",
    desc: "Sofas, beds, dressers, tables — no item too big or too heavy.",
  },
  {
    icon: Refrigerator,
    title: "Appliance Removal",
    desc: "Fridges, washers, dryers, AC units — we handle the heavy stuff.",
  },
  {
    icon: Leaf,
    title: "Yard Waste",
    desc: "Brush, logs, leaves, old landscaping materials hauled away.",
  },
  {
    icon: Heart,
    title: "Estate Cleanouts",
    desc: "Compassionate, thorough clearing after a loved one passes.",
  },
  {
    icon: Package,
    title: "Hoarding Cleanouts",
    desc: "Non-judgmental, discreet, and thorough. We've seen it all.",
  },
  {
    icon: Hammer,
    title: "Construction Debris",
    desc: "Drywall, lumber, concrete, renovation waste — all of it gone.",
  },
  {
    icon: Building2,
    title: "Commercial Junk",
    desc: "Office cleanouts, retail, storage units, and more.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-clay text-xs tracking-[0.25em] uppercase mb-3">
            What We Haul
          </p>
          <h2 className="font-sans font-bold text-charcoal text-4xl md:text-5xl tracking-tight leading-tight max-w-xl">
            If it needs to go,{" "}
            <span className="font-drama italic text-moss">we haul it.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col gap-3 p-6 rounded-3xl bg-cream-dark border border-charcoal/8 hover:border-moss/30 hover:bg-white transition-all duration-300 cursor-default"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-moss/10 group-hover:bg-moss/20 transition-colors">
                <Icon size={18} className="text-moss" />
              </div>
              <h3 className="font-sans font-semibold text-charcoal text-base">
                {title}
              </h3>
              <p className="font-sans text-charcoal/60 text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-moss text-cream">
          <div>
            <p className="font-sans font-semibold text-lg">
              Not sure if we take it?
            </p>
            <p className="font-sans text-cream/70 text-sm mt-0.5">
              Just ask — we remove almost everything except hazardous materials.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-mag flex-shrink-0 px-6 py-3 rounded-2xl bg-clay font-semibold text-cream text-sm"
          >
            Ask Us Anything
          </a>
        </div>
      </div>
    </section>
  );
}
