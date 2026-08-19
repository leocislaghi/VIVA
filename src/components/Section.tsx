import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function Section({
  id,
  index,
  title,
  lead,
  children,
  tone = "default",
}: {
  id: string;
  index: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
  tone?: "default" | "cream" | "sand";
}) {
  const bg = tone === "cream" ? "bg-cream" : tone === "sand" ? "bg-sand" : "bg-background";
  return (
    <section id={id} className={`${bg} px-6 py-24 sm:py-36`}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-baseline gap-6">
            <span className="eyebrow">{index}</span>
            <span className="rule-line hidden flex-1 sm:block" />
          </div>
          <h2 className="display-title mt-8 max-w-3xl text-4xl sm:text-6xl lg:text-7xl">{title}</h2>
          {lead ? (
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {lead}
            </p>
          ) : null}
        </Reveal>
        {children ? <div className="mt-14 sm:mt-20">{children}</div> : null}
      </div>
    </section>
  );
}

export function PlaceholderGrid({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-px overflow-hidden border-y border-border sm:grid-cols-3">
      {items.map((label, i) => (
        <Reveal as="li" key={label} delay={i * 90}>
          <div className="h-full border-b border-border px-1 py-10 sm:border-b-0 sm:border-r sm:px-8">
            <span className="eyebrow text-[0.6rem]">{`0${i + 1}`}</span>
            <h3 className="display-title mt-4 text-2xl sm:text-3xl">{label}</h3>
            <p className="placeholder-note mt-4">[Informação a definir]</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
