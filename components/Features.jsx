"use client";
import { useEffect, useRef, useState } from "react";

/* ─── Card 1: Diagnostic Shuffler (Same-Day) ─── */
const SCHEDULE_ITEMS = [
  { label: "TODAY", sub: "Available Now", color: "bg-clay text-cream" },
  { label: "TOMORROW", sub: "Next Morning", color: "bg-moss text-cream" },
  { label: "THIS WEEK", sub: "Your Schedule", color: "bg-charcoal text-cream" },
];

function ShufflerCard() {
  const [items, setItems] = useState(SCHEDULE_ITEMS);

  useEffect(() => {
    const id = setInterval(() => {
      setItems((prev) => {
        const next = [...prev];
        next.push(next.shift());
        return next;
      });
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col gap-4 p-6 rounded-3xl bg-cream-dark border border-charcoal/8 h-full">
      <p className="font-mono text-clay text-xs tracking-widest uppercase">
        Book Today
      </p>
      <h3 className="font-sans font-bold text-charcoal text-xl leading-tight">
        Same-Day &amp; Next-Day Pickup
      </h3>
      <p className="font-sans text-charcoal/60 text-sm leading-relaxed">
        We work around your schedule — mornings, afternoons, even weekends.
      </p>

      {/* Stacked cards */}
      <div className="relative mt-2 h-28">
        {[...items].reverse().map((item, i) => {
          const zi = i;
          const scale = 0.88 + i * 0.06;
          const ty = i === 2 ? 0 : i === 1 ? 12 : 22;
          return (
            <div
              key={item.label}
              className={`absolute inset-x-0 flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-700 ${item.color}`}
              style={{
                zIndex: zi,
                transform: `translateY(${ty}px) scale(${scale})`,
                transformOrigin: "top center",
              }}
            >
              <span className="font-sans font-bold text-sm tracking-wide">
                {item.label}
              </span>
              <span className="font-mono text-xs opacity-70">{item.sub}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Card 2: Telemetry Typewriter (Pricing) ─── */
const FEED_LINES = [
  "Scanning load... done",
  "Volume: 0.5 truck load",
  "No hidden fees detected",
  "Price confirmed: $175",
  "Quote sent to your phone",
  "Crew dispatched...",
];

function TypewriterCard() {
  const [lines, setLines] = useState([FEED_LINES[0]]);
  const [idx, setIdx] = useState(1);
  const scrollRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((prev) => {
        const next = prev % FEED_LINES.length;
        setLines((l) => {
          const updated = [...l, FEED_LINES[next]];
          return updated.slice(-4);
        });
        return next + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="flex flex-col gap-4 p-6 rounded-3xl bg-charcoal border border-cream/10 h-full">
      <div className="flex items-center gap-2">
        <span className="pulse-dot w-2 h-2 rounded-full bg-clay flex-shrink-0" />
        <p className="font-mono text-clay text-xs tracking-widest uppercase">
          Live Feed
        </p>
      </div>
      <h3 className="font-sans font-bold text-cream text-xl leading-tight">
        Upfront Pricing. Always.
      </h3>
      <p className="font-sans text-cream/50 text-sm leading-relaxed">
        No surprise fees. No upsells. Just a fair price before we start.
      </p>

      {/* Terminal */}
      <div
        ref={scrollRef}
        className="mt-auto bg-black/40 rounded-2xl p-4 overflow-hidden flex flex-col gap-1.5 min-h-[90px]"
      >
        {lines.map((line, i) => (
          <div
            key={`${line}-${i}`}
            className="fade-in-up flex items-center gap-2 font-mono text-xs"
          >
            <span className="text-clay">›</span>
            <span
              className={i === lines.length - 1 ? "text-cream" : "text-cream/40"}
            >
              {line}
            </span>
            {i === lines.length - 1 && (
              <span className="cursor-blink text-clay">▋</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Card 3: Scheduler (Full Service) ─── */
const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

function SchedulerCard() {
  const [active, setActive] = useState(2);
  const [pressed, setPressed] = useState(null);

  useEffect(() => {
    let day = 2;
    const tick = () => {
      day = (day + 1) % 7;
      setPressed(day);
      setTimeout(() => {
        setActive(day);
        setPressed(null);
      }, 200);
    };
    const id = setInterval(tick, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col gap-4 p-6 rounded-3xl bg-cream-dark border border-charcoal/8 h-full">
      <p className="font-mono text-clay text-xs tracking-widest uppercase">
        Full Service
      </p>
      <h3 className="font-sans font-bold text-charcoal text-xl leading-tight">
        We Do All the Work
      </h3>
      <p className="font-sans text-charcoal/60 text-sm leading-relaxed">
        You point, we haul. Our crew loads everything — no lifting required.
      </p>

      {/* Weekly grid */}
      <div className="mt-auto">
        <p className="font-mono text-charcoal/40 text-xs mb-2 tracking-widest">
          PICK A DAY
        </p>
        <div className="flex items-center gap-1.5">
          {DAYS.map((d, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-1 aspect-square rounded-xl text-xs font-semibold transition-all duration-200 ${
                active === i
                  ? "bg-clay text-cream scale-110 shadow-md"
                  : pressed === i
                  ? "bg-moss/30 text-moss scale-95"
                  : "bg-cream border border-charcoal/10 text-charcoal/50 hover:border-moss/30"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between p-3 rounded-2xl bg-moss text-cream">
          <span className="font-sans text-sm font-medium">Crew assigned</span>
          <span className="font-mono text-xs text-cream/60">Ready to haul</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Export ─── */
export default function Features() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-mono text-clay text-xs tracking-[0.25em] uppercase mb-3">
            Why Blue Ridge Boys
          </p>
          <h2 className="font-sans font-bold text-charcoal text-4xl md:text-5xl tracking-tight leading-tight max-w-xl">
            Built different.{" "}
            <span className="font-drama italic text-moss">
              Works better.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ShufflerCard />
          <TypewriterCard />
          <SchedulerCard />
        </div>
      </div>
    </section>
  );
}
