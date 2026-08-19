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
      className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-cream"
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `scale(${1.02 - p * 0.06})`,
          filter: `blur(${p * 3}px)`,
          opacity: 1 - p * 0.85,
          transition: "transform 120ms linear",
        }}
      >
        <img
          src={heroAsset.url}
          alt="Linha completa de produtos VIVA Active Natural Care: Clean, Balance, Balm, Fresh, Glow e Sun"
          className="max-h-full w-full object-contain object-center"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-[14svh] flex flex-col items-center gap-4 px-6 text-center sm:hidden"
        style={{ opacity: 1 - p * 1.8, transform: `translateY(${p * -20}px)` }}
      >
        <h1 className="wordmark text-4xl leading-none text-foreground">VIVA</h1>
        <p className="eyebrow text-[0.58rem]">Active Natural Care</p>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center gap-5 px-6 pb-10 text-center sm:pb-14"
        style={{ opacity: 1 - p * 1.6, transform: `translateY(${p * -24}px)` }}
      >
        <div className="hidden sm:block">
          <p className="wordmark text-3xl leading-none text-foreground lg:text-4xl">VIVA</p>
          <p className="eyebrow mt-3">Active Natural Care</p>
        </div>
        <p className="display-title max-w-xs text-lg italic text-muted-foreground sm:max-w-none sm:text-2xl">
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

