"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".phil-word",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const wrapWords = (text, className = "") =>
    text.split(" ").map((w, i) => (
      <span
        key={i}
        className={`phil-word inline-block opacity-0 mr-[0.25em] ${className}`}
      >
        {w}
      </span>
    ));

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-40 px-6 overflow-hidden bg-charcoal"
    >
      {/* Background forest texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80&fit=crop')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-transparent to-charcoal/60" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="font-mono text-cream/30 text-xs tracking-[0.3em] uppercase mb-12">
          Our Philosophy
        </p>

        {/* Contrast statement 1 */}
        <p className="font-sans text-cream/40 text-lg md:text-2xl leading-relaxed mb-8">
          {wrapWords("Most junk removal focuses on:")}
          <br />
          <span className="text-cream/60 text-2xl md:text-3xl">
            {wrapWords("getting the truck in and out as fast as possible.")}
          </span>
        </p>

        {/* Contrast statement 2 */}
        <p className="font-sans text-cream text-2xl md:text-4xl leading-relaxed font-medium">
          {wrapWords("We focus on:")}
        </p>
        <p className="font-drama text-cream text-5xl md:text-7xl lg:text-8xl italic leading-none mt-2">
          {wrapWords("leaving your space")}
          <br />
          <span className="text-clay">{wrapWords("spotless.")}</span>
        </p>

        <div className="mt-16 h-px w-24 bg-clay/40" />
        <p className="mt-8 font-sans text-cream/50 text-base max-w-md leading-relaxed">
          Every job ends with a walkthrough. If it's not right, we fix it.
          That's the Blue Ridge Boys guarantee.
        </p>
      </div>
    </section>
  );
}
