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

export function InfoGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ul className="grid gap-px overflow-hidden border-y border-border sm:grid-cols-3">
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={i * 90}>
          <div className="h-full border-b border-border px-1 py-10 sm:border-b-0 sm:border-r sm:px-8">
            <span className="eyebrow text-[0.6rem]">{`0${i + 1}`}</span>
            <h3 className="display-title mt-4 text-2xl sm:text-3xl">{item.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}

export function DataTable({
  head,
  rows,
  caption,
}: {
  head: string[];
  rows: string[][];
  caption?: string;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
        {caption ? (
          <caption className="eyebrow mb-4 text-left text-[0.58rem]">{caption}</caption>
        ) : null}
        <thead>
          <tr className="border-y border-border">
            {head.map((h) => (
              <th
                key={h}
                className="py-4 pr-6 text-[0.6rem] font-normal tracking-[0.22em] uppercase text-muted-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("|")} className="border-b border-border/60">
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={`py-4 pr-6 align-top ${i === 0 ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
