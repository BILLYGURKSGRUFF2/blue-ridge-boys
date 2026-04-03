import { Phone, Mail, Share2, Camera } from "lucide-react";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Area", href: "#contact" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  "Home Cleanouts",
  "Furniture Removal",
  "Appliance Removal",
  "Yard Waste",
  "Estate Cleanouts",
  "Construction Debris",
];

export default function Footer() {
  return (
    <footer className="bg-charcoal rounded-t-[3rem] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-cream/8">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <p className="font-sans font-bold text-cream text-xl tracking-widest uppercase">
              Blue Ridge Boys
            </p>
            <p className="font-sans text-cream/50 text-sm leading-relaxed max-w-xs">
              Fast, affordable junk removal across the Blue Ridge region. Same-day pickup. Free estimates.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <a
                href="tel:+15405550199"
                className="flex items-center gap-2 text-cream/60 hover:text-cream text-sm transition-colors link-lift"
              >
                <Phone size={13} />
                <span className="font-mono">(540) 555-0199</span>
              </a>
              <a
                href="mailto:hello@blueridgeboys.com"
                className="flex items-center gap-2 text-cream/60 hover:text-cream text-sm transition-colors link-lift"
              >
                <Mail size={13} />
                <span className="font-mono">hello@blueridgeboys.com</span>
              </a>
            </div>
            <div className="flex gap-3 mt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="flex items-center justify-center w-8 h-8 rounded-xl bg-cream/8 hover:bg-cream/15 transition-colors"
              >
                <Share2 size={14} className="text-cream/60" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex items-center justify-center w-8 h-8 rounded-xl bg-cream/8 hover:bg-cream/15 transition-colors"
              >
                <Camera size={14} className="text-cream/60" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-cream/30 text-xs tracking-widest uppercase mb-2">
              Navigation
            </p>
            {NAV.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-sans text-cream/60 hover:text-cream text-sm transition-colors link-lift"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-cream/30 text-xs tracking-widest uppercase mb-2">
              Services
            </p>
            {SERVICES.map((s) => (
              <a
                key={s}
                href="#services"
                className="font-sans text-cream/60 hover:text-cream text-sm transition-colors link-lift"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-cream/25 text-xs tracking-wider">
            © {new Date().getFullYear()} Blue Ridge Boys · Licensed &amp; Insured · Blue Ridge, VA
          </p>

          {/* System status */}
          <div className="flex items-center gap-2">
            <span className="pulse-dot w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
            <span className="font-mono text-xs text-cream/30 tracking-wider">
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
