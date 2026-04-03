import { MapPin } from "lucide-react";

const AREAS = [
  "Roanoke", "Salem", "Vinton", "Botetourt County",
  "Floyd", "Christiansburg", "Blacksburg", "Radford",
  "Bedford", "Moneta", "Hardy", "Cave Spring",
];

export default function ServiceArea() {
  return (
    <section className="py-20 px-6 bg-cream-dark">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        <div className="flex-1">
          <p className="font-mono text-clay text-xs tracking-[0.25em] uppercase mb-3">
            Service Area
          </p>
          <h2 className="font-sans font-bold text-charcoal text-3xl md:text-4xl tracking-tight leading-tight mb-4">
            Proudly serving the{" "}
            <span className="font-drama italic text-moss">Blue Ridge</span>
          </h2>
          <p className="font-sans text-charcoal/60 text-base leading-relaxed max-w-md">
            We cover Roanoke, the New River Valley, and the surrounding Blue Ridge region.
            Not sure if we reach you? Call or text us — we'll let you know.
          </p>
          <a
            href="#contact"
            className="btn-mag mt-6 inline-flex items-center px-6 py-3 rounded-2xl bg-moss text-cream font-semibold text-sm"
          >
            Check Your Area
          </a>
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {AREAS.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-cream border border-charcoal/8 hover:border-moss/30 transition-colors"
              >
                <MapPin size={13} className="text-clay flex-shrink-0" />
                <span className="font-sans text-sm text-charcoal/80">{area}</span>
              </div>
            ))}
          </div>
          <p className="font-mono text-charcoal/30 text-xs mt-4 tracking-wider">
            + surrounding counties · free travel to most areas
          </p>
        </div>
      </div>
    </section>
  );
}
