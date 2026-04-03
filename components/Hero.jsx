"use client";
import { useEffect, useRef } from "react";
import { ArrowDown, Phone } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-line",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }
      )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-dvh flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&fit=crop')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-moss/30" />
      {/* Subtle top vignette */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-charcoal/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        {/* Locally owned badge */}
        <div className="hero-line flex items-center gap-3 mb-6 opacity-0">
          <span className="px-3 py-1.5 rounded-full bg-clay/20 border border-clay/30 text-clay text-xs font-mono tracking-widest uppercase">
            Locally Owned
          </span>
          <span className="text-cream/40 text-xs font-mono">·</span>
          <span className="text-cream/50 text-xs font-mono tracking-wider">Blue Ridge, Virginia</span>
        </div>

        <h1 className="leading-none mb-6">
          <span className="hero-line block font-sans font-bold text-cream text-4xl md:text-6xl lg:text-7xl tracking-tight opacity-0">
            Heavy lifting is our
          </span>
          <span className="hero-line block font-drama text-cream text-6xl md:text-9xl lg:text-[10rem] italic leading-none opacity-0">
            calling.
          </span>
        </h1>

        <p className="hero-sub max-w-md text-cream/70 text-base md:text-lg leading-relaxed mb-10 opacity-0">
          Same-day pickup, transparent pricing, and we do all the work —
          because your time is worth more than a trip to the dump.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="#contact"
            className="hero-cta btn-mag flex items-center px-7 py-4 rounded-full font-semibold text-cream bg-clay shadow-lg shadow-clay/30 opacity-0"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:+15405550199"
            className="hero-cta flex items-center gap-2 text-cream/80 hover:text-cream font-medium transition-colors link-lift opacity-0"
          >
            <Phone size={16} />
            <span className="font-mono text-sm">(540) 555-0199</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#trust"
        className="absolute bottom-8 right-8 md:right-16 flex flex-col items-center gap-2 text-cream/40 hover:text-cream/70 transition-colors"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
