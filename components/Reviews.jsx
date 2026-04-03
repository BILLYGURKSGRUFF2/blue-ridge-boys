import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Roanoke, VA",
    stars: 5,
    text: "Called Blue Ridge Boys on a Monday, they showed up that same afternoon and cleared out my entire garage. Couldn't believe how fast and professional they were. Worth every penny.",
    tag: "Garage Cleanout",
  },
  {
    name: "James T.",
    location: "Botetourt County, VA",
    stars: 5,
    text: "Used them for an estate cleanout after my mother passed. They were respectful, efficient, and made a really difficult time so much easier. I can't recommend them enough.",
    tag: "Estate Cleanout",
    featured: true,
  },
  {
    name: "Kevin L.",
    location: "Salem, VA",
    stars: 5,
    text: "Needed a washer, dryer, and old couch removed before my house went on the market. Quick response, fair price, great service. They even swept up after.",
    tag: "Appliance Removal",
  },
  {
    name: "Donna R.",
    location: "Christiansburg, VA",
    stars: 5,
    text: "Five-star experience start to finish. The quote was exactly what I paid, the crew was on time, and they were in and out in under an hour. Already booked them again.",
    tag: "Home Cleanout",
  },
  {
    name: "Mike W.",
    location: "Floyd, VA",
    stars: 5,
    text: "Tons of construction debris left over from a renovation. They hauled it all in one trip, no complaints, no hidden fees. Honest guys doing honest work.",
    tag: "Construction Debris",
  },
  {
    name: "Lisa H.",
    location: "Vinton, VA",
    stars: 5,
    text: "I was nervous about a hoarding cleanout — it was a lot. They handled it with zero judgment and genuine kindness. The space looks incredible now. Thank you.",
    tag: "Hoarding Cleanout",
  },
];

function Stars({ n }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={12} className="fill-clay text-clay" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-mono text-clay text-xs tracking-[0.25em] uppercase mb-3">
              Real Reviews
            </p>
            <h2 className="font-sans font-bold text-charcoal text-4xl md:text-5xl tracking-tight leading-tight">
              Don't take our word{" "}
              <span className="font-drama italic text-moss">for it.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-moss/8 border border-moss/15">
            <div className="text-center">
              <p className="font-sans font-bold text-charcoal text-2xl leading-none">4.9</p>
              <Stars n={5} />
            </div>
            <div className="w-px h-10 bg-charcoal/10" />
            <div>
              <p className="font-sans text-sm font-medium text-charcoal">
                200+ Google Reviews
              </p>
              <p className="font-mono text-charcoal/40 text-xs">Blue Ridge region</p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {REVIEWS.map(({ name, location, stars, text, tag, featured }) => (
            <div
              key={name}
              className={`break-inside-avoid flex flex-col gap-4 p-6 rounded-3xl border transition-all ${
                featured
                  ? "bg-moss border-moss text-cream"
                  : "bg-cream-dark border-charcoal/8 hover:border-moss/30"
              }`}
            >
              <Stars n={stars} />
              <p
                className={`font-sans text-sm leading-relaxed ${
                  featured ? "text-cream/80" : "text-charcoal/70"
                }`}
              >
                &ldquo;{text}&rdquo;
              </p>
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-current/10">
                <div>
                  <p
                    className={`font-sans font-semibold text-sm ${
                      featured ? "text-cream" : "text-charcoal"
                    }`}
                  >
                    {name}
                  </p>
                  <p
                    className={`font-mono text-xs ${
                      featured ? "text-cream/50" : "text-charcoal/40"
                    }`}
                  >
                    {location}
                  </p>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-mono ${
                    featured
                      ? "bg-white/10 text-cream/60"
                      : "bg-moss/10 text-moss"
                  }`}
                >
                  {tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
