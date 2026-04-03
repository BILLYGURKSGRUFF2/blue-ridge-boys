"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare, Truck, CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Request a Quote",
    desc: "Tell us what you've got — fill out our quick form or give us a call. We'll give you a fair, upfront price in minutes. No pressure, no obligation.",
    detail: "Free estimates · No commitment required · Same-day response",
    canvasFn: CanvasWave,
    bg: "bg-cream",
    text: "text-charcoal",
  },
  {
    num: "02",
    icon: Truck,
    title: "We Show Up",
    desc: "Our crew arrives on time, fully equipped, and ready to work. Often same-day or next-day. You don't lift a finger — we do everything.",
    detail: "Same-day available · On-time guarantee · Full crew included",
    canvasFn: CanvasGrid,
    bg: "bg-moss",
    text: "text-cream",
  },
  {
    num: "03",
    icon: CheckCircle,
    title: "It's Gone",
    desc: "We haul everything away, sweep up, and do a walkthrough. We recycle and donate what we can. You're left with a clean, clear space.",
    detail: "Eco-friendly disposal · Donate & recycle · Clean sweep included",
    canvasFn: CanvasPulse,
    bg: "bg-charcoal",
    text: "text-cream",
  },
];

function CanvasWave({ color }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let frame;
    let t = 0;
    const draw = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      ctx.beginPath();
      const amp = 12, freq = 0.02;
      for (let x = 0; x <= canvas.offsetWidth; x += 2) {
        const y = canvas.offsetHeight / 2 + Math.sin(x * freq + t) * amp + Math.sin(x * freq * 1.7 + t * 1.3) * (amp * 0.5);
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = 0.4;
      ctx.stroke();
      t += 0.025;
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frame);
  }, [color]);
  return <canvas ref={ref} className="w-full h-full" />;
}

function CanvasGrid({ color }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let frame, t = 0;
    const draw = () => {
      const W = canvas.offsetWidth, H = canvas.offsetHeight;
      canvas.width = W * window.devicePixelRatio;
      canvas.height = H * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      ctx.clearRect(0, 0, W, H);
      const cols = 10, rows = 4, cw = W / cols, ch = H / rows;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const phase = (c + r * cols) / (cols * rows);
          const alpha = 0.1 + 0.35 * Math.abs(Math.sin(t * 1.5 + phase * Math.PI * 2));
          ctx.globalAlpha = alpha;
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(cw * c + cw / 2, ch * r + ch / 2, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      // Scanning line
      const lx = (W * ((t * 0.3) % 1));
      ctx.globalAlpha = 0.5;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(lx, 0);
      ctx.lineTo(lx, H);
      ctx.stroke();
      t += 0.02;
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frame);
  }, [color]);
  return <canvas ref={ref} className="w-full h-full" />;
}

function CanvasPulse({ color }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let frame, t = 0;
    const draw = () => {
      const W = canvas.offsetWidth, H = canvas.offsetHeight;
      canvas.width = W * window.devicePixelRatio;
      canvas.height = H * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      ctx.clearRect(0, 0, W, H);
      const cx = W / 2, cy = H / 2;
      for (let i = 3; i >= 0; i--) {
        const r = 15 + i * 20 + Math.sin(t + i * 0.8) * 6;
        ctx.globalAlpha = 0.08 + (0.12 * (3 - i) / 3);
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalAlpha = 0.6;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(cx, cy, 5, 0, Math.PI * 2);
      ctx.fill();
      t += 0.04;
      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(frame);
  }, [color]);
  return <canvas ref={ref} className="w-full h-full" />;
}

export default function Process() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".process-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} className="py-24 px-6 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-mono text-clay text-xs tracking-[0.25em] uppercase mb-3">
            How It Works
          </p>
          <h2 className="font-sans font-bold text-charcoal text-4xl md:text-5xl tracking-tight leading-tight">
            Three steps.{" "}
            <span className="font-drama italic text-moss">Done deal.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {STEPS.map(({ num, icon: Icon, title, desc, detail, canvasFn: Canvas, bg, text }) => (
            <div
              key={num}
              className={`process-card opacity-0 flex flex-col gap-5 p-7 rounded-3xl ${bg} overflow-hidden relative`}
            >
              {/* Canvas bg animation */}
              <div className="absolute inset-0 opacity-60 pointer-events-none">
                <Canvas color={text.includes("cream") ? "#f2f0e9" : "#2e4036"} />
              </div>

              <div className="relative z-10 flex items-start justify-between">
                <span className={`font-mono text-xs tracking-widest opacity-40 ${text}`}>
                  {num}
                </span>
                <div
                  className={`flex items-center justify-center w-9 h-9 rounded-xl ${
                    bg === "bg-cream" ? "bg-moss/10" : "bg-white/10"
                  }`}
                >
                  <Icon size={16} className={text} />
                </div>
              </div>

              <div className="relative z-10 flex-1">
                <h3 className={`font-sans font-bold text-2xl mb-3 ${text}`}>{title}</h3>
                <p className={`font-sans text-sm leading-relaxed ${text} opacity-70`}>{desc}</p>
              </div>

              <div className={`relative z-10 pt-4 border-t ${bg === "bg-cream" ? "border-charcoal/10" : "border-white/10"}`}>
                <p className={`font-mono text-[10px] tracking-widest uppercase ${text} opacity-40`}>
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="btn-mag inline-flex items-center px-8 py-4 rounded-full font-semibold text-cream bg-clay shadow-lg shadow-clay/20"
          >
            Start With a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
