import { useEffect, useState } from "react";
import heroAsset from "@/assets/hero-all-products.jpg.asset.json";

export function Hero() {
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const vh = typeof window !== "undefined" ? window.innerHeight || 1 : 1;
  const p = Math.min(1, y / vh);

  return (
    <section
      id="hero"
      aria-label="VIVA Active Natural Care"
      className="relative h-[100svh] w-full overflow-hidden bg-cream"
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `scale(${1.06 - p * 0.08})`,
          filter: `blur(${p * 3}px)`,
          opacity: 1 - p * 0.85,
          transition: "transform 120ms linear",
        }}
      >
        <img
          src={heroAsset.url}
          alt="Linha completa de produtos VIVA Active Natural Care: Clean, Balance, Balm, Fresh, Glow e Sun"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 40%, transparent 45%, color-mix(in oklab, var(--cream) 55%, transparent) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/3"
          style={{
            background:
              "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--background) 92%, transparent))",
          }}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center gap-6 px-6 pb-10 sm:pb-14"
        style={{ opacity: 1 - p * 1.6, transform: `translateY(${p * -24}px)` }}
      >
        <div className="text-center">
          <h1 className="wordmark text-3xl leading-none text-foreground sm:text-5xl">VIVA</h1>
          <p className="eyebrow mt-3 text-[0.6rem] sm:text-[0.68rem]">Active Natural Care</p>
        </div>
        <p className="display-title max-w-xs text-center text-lg italic text-muted-foreground sm:max-w-none sm:text-2xl">
          Natural care. Active life.
        </p>
        <div className="flex flex-col items-center gap-2">
          <span className="eyebrow text-[0.55rem]">Role</span>
          <span className="block h-10 w-px animate-pulse bg-foreground/30" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
