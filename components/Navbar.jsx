"use client";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#hero");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`flex items-center justify-between gap-6 px-5 py-3 rounded-full transition-all duration-500 w-full max-w-4xl ${
          scrolled
            ? "bg-cream/70 backdrop-blur-xl border border-moss/15 shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a
          href="#hero"
          className={`font-sans font-800 text-sm tracking-widest uppercase transition-colors duration-300 ${
            scrolled ? "text-moss" : "text-cream"
          }`}
        >
          Blue Ridge Boys
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`link-lift text-sm font-medium transition-colors duration-300 ${
                scrolled ? "text-charcoal/70 hover:text-moss" : "text-cream/80 hover:text-cream"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+15405550199"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 link-lift ${
              scrolled ? "text-charcoal/60 hover:text-moss" : "text-cream/70 hover:text-cream"
            }`}
          >
            <Phone size={13} />
            (540) 555-0199
          </a>
          <a
            href="#contact"
            className="btn-mag flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-clay text-cream shadow-sm"
          >
            Free Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col gap-1.5 p-1 ${
            scrolled ? "text-charcoal" : "text-cream"
          }`}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full mt-2 left-4 right-4 bg-cream/95 backdrop-blur-xl border border-moss/15 rounded-3xl shadow-xl p-6 flex flex-col gap-4 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-charcoal font-medium hover:text-moss transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+15405550199"
            className="flex items-center gap-2 text-charcoal/60 text-sm"
          >
            <Phone size={14} /> (540) 555-0199
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-mag flex items-center justify-center py-3 rounded-2xl text-sm font-semibold bg-clay text-cream"
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </header>
  );
}
