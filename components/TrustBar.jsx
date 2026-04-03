import { Star, ShieldCheck, Recycle, Clock } from "lucide-react";

const STATS = [
  { icon: Clock, value: "Same-Day", label: "Pickup Available", accent: true },
  { icon: Star, value: "4.9★", label: "Google Rating" },
  { icon: ShieldCheck, value: "Licensed", label: "& Insured" },
  { icon: Recycle, value: "Eco-First", label: "Disposal" },
];

export default function TrustBar() {
  return (
    <section id="trust" className="bg-moss py-10 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map(({ icon: Icon, value, label, accent }) => (
          <div
            key={label}
            className="flex flex-col items-center text-center gap-2"
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-2xl ${
                accent ? "bg-clay" : "bg-moss-light"
              }`}
            >
              <Icon size={18} className="text-cream" />
            </div>
            <div>
              <p className="font-sans font-bold text-cream text-lg leading-none">
                {value}
              </p>
              <p className="font-mono text-cream/50 text-xs tracking-wider mt-0.5">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
