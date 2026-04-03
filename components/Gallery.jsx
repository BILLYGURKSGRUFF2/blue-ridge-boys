const JOBS = [
  {
    label: "Garage Cleanout",
    location: "Roanoke, VA",
    before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop",
    after: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80&fit=crop",
    tag: "Same-Day",
  },
  {
    label: "Estate Cleanout",
    location: "Botetourt County, VA",
    before: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80&fit=crop",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&fit=crop",
    tag: "Full Truck",
  },
  {
    label: "Yard Waste Removal",
    location: "Salem, VA",
    before: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80&fit=crop",
    after: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80&fit=crop",
    tag: "Half Day",
  },
];

function JobCard({ label, location, before, after, tag }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-2">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-cream-dark">
          <img
            src={before}
            alt={`Before — ${label}`}
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-charcoal/80 text-cream text-[10px] font-mono tracking-wider">
            BEFORE
          </span>
        </div>
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-cream-dark">
          <img
            src={after}
            alt={`After — ${label}`}
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded-lg bg-moss/90 text-cream text-[10px] font-mono tracking-wider">
            AFTER
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-sans font-semibold text-charcoal text-sm">{label}</p>
          <p className="font-mono text-charcoal/40 text-xs">{location}</p>
        </div>
        <span className="px-2.5 py-1 rounded-full bg-clay/10 text-clay text-xs font-mono">
          {tag}
        </span>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="py-24 px-6 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-mono text-clay text-xs tracking-[0.25em] uppercase mb-3">
            Real Jobs
          </p>
          <h2 className="font-sans font-bold text-charcoal text-4xl md:text-5xl tracking-tight leading-tight">
            See the{" "}
            <span className="font-drama italic text-moss">difference.</span>
          </h2>
          <p className="font-sans text-charcoal/60 text-base mt-3 max-w-md leading-relaxed">
            Every job ends with a clean sweep and a walkthrough. These are real
            results from real Blue Ridge neighbors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOBS.map((job) => (
            <JobCard key={job.label} {...job} />
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-3xl bg-charcoal">
          <div>
            <p className="font-sans font-semibold text-cream text-lg">
              Ready for your own &ldquo;after&rdquo; photo?
            </p>
            <p className="font-sans text-cream/50 text-sm mt-0.5">
              Same-day service available. Free estimate before we start.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-mag flex-shrink-0 px-6 py-3 rounded-2xl bg-clay text-cream font-semibold text-sm"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
