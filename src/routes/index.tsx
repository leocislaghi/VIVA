import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/Hero";
import { ProgressBar } from "@/components/ProgressBar";
import { Reveal } from "@/components/Reveal";
import { Section, PlaceholderGrid } from "@/components/Section";
import { ProductStory, type Product } from "@/components/ProductStory";

import heroAsset from "@/assets/hero-all-products.jpg.asset.json";
import cleanAsset from "@/assets/viva-clean.jpg.asset.json";
import balanceAsset from "@/assets/viva-balance.jpg.asset.json";
import balmAsset from "@/assets/viva-balm.jpg.asset.json";
import freshAsset from "@/assets/viva-fresh.jpg.asset.json";
import glowAsset from "@/assets/viva-glow.jpg.asset.json";
import sunAsset from "@/assets/viva-sun.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VIVA — Active Natural Care" },
      {
        name: "description",
        content:
          "VIVA Active Natural Care: uma apresentação digital da marca em rolagem contínua — Clean, Balance, Balm, Fresh, Glow e Sun.",
      },
      { property: "og:title", content: "VIVA — Active Natural Care" },
      {
        property: "og:description",
        content: "Natural care. Active life. A experiência digital da marca VIVA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products: Product[] = [
  {
    index: "01",
    name: "VIVA Clean",
    sub: "Gel de limpeza facial",
    image: cleanAsset.url,
    alt: "Embalagem do VIVA Clean, gel de limpeza facial de 120ml",
    tint: "var(--sage)",
  },
  {
    index: "02",
    name: "VIVA Balance",
    sub: "Máscara facial",
    image: balanceAsset.url,
    alt: "Pote e caixa do VIVA Balance, máscara facial de 80g",
    tint: "var(--sand)",
  },
  {
    index: "03",
    name: "VIVA Balm",
    sub: "Hidratante para lábios",
    image: balmAsset.url,
    alt: "Embalagem e bastão do VIVA Balm, hidratante para lábios de 4,5g",
    tint: "var(--blush)",
  },
  {
    index: "04",
    name: "VIVA Fresh",
    sub: "Bruma facial",
    image: freshAsset.url,
    alt: "Frasco spray do VIVA Fresh, bruma facial de 120ml",
    tint: "var(--blush)",
  },
  {
    index: "05",
    name: "VIVA Glow",
    sub: "Hidratante facial",
    image: glowAsset.url,
    alt: "Frasco pump do VIVA Glow, hidratante facial de 50g",
    tint: "var(--lilac)",
  },
  {
    index: "06",
    name: "VIVA Sun",
    sub: "Protetor solar facial",
    image: sunAsset.url,
    alt: "Frasco do VIVA Sun, protetor solar facial FPS 50 de 50ml",
    tint: "var(--butter)",
  },
];

const nav = [
  { href: "#viva", label: "A VIVA" },
  { href: "#produtos", label: "Produtos" },
  { href: "#filosofia", label: "Filosofia" },
  { href: "#contato", label: "Contato" },
];

function Index() {
  return (
    <div className="w-full overflow-x-hidden">
      <ProgressBar />

      <nav
        aria-label="Navegação da página"
        className="fixed inset-x-0 top-0 z-40 hidden justify-center gap-10 py-5 lg:flex"
      >
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="eyebrow text-[0.58rem] text-foreground/60 transition-colors hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <main>
        <Hero />

        {/* 02 — A VIVA */}
        <Section
          id="viva"
          index="02 — A VIVA"
          title={
            <>
              VIVA
              <span className="mt-4 block font-sans text-sm font-light tracking-[0.32em] uppercase text-muted-foreground">
                Active Natural Care
              </span>
            </>
          }
        >
          <div className="grid gap-12 border-t border-border pt-12 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <p className="eyebrow">Descrição da marca</p>
            </Reveal>
            <Reveal delay={120}>
              <p className="display-title text-2xl leading-snug text-foreground/70 sm:text-3xl">
                Descrição da marca em breve.
              </p>
              <p className="placeholder-note mt-6">[Conteúdo a definir]</p>
            </Reveal>
          </div>
        </Section>

        {/* 03 — PRODUTOS */}
        <section id="produtos" className="bg-background">
          <div className="mx-auto max-w-6xl px-6 pt-8">
            <Reveal>
              <div className="flex items-baseline gap-6">
                <span className="eyebrow">03 — Produtos</span>
                <span className="rule-line hidden flex-1 sm:block" />
              </div>
              <h2 className="display-title mt-8 max-w-3xl text-4xl sm:text-6xl">
                Seis gestos, um mesmo cuidado.
              </h2>
            </Reveal>
          </div>
          <div className="mt-10">
            {products.map((p, i) => (
              <ProductStory key={p.name} product={p} flip={i % 2 === 1} />
            ))}
          </div>
        </section>

        {/* 04 — INGREDIENTES */}
        <Section
          id="ingredientes"
          index="04 — Ingredientes"
          title="Natureza em cada detalhe."
          tone="cream"
        >
          <PlaceholderGrid items={["Origem", "Ativos naturais", "Formulação"]} />
          <p className="placeholder-note mt-10">[Informações sobre ingredientes a definir]</p>
        </Section>

        {/* 05 — BENEFÍCIOS */}
        <Section id="beneficios" index="05 — Benefícios" title="Cuidado que faz parte da rotina.">
          <div className="grid gap-10 sm:grid-cols-2">
            {["Manhã", "Dia", "Noite", "Sempre"].map((t, i) => (
              <Reveal key={t} delay={i * 90}>
                <div className="border-t border-border pt-6">
                  <h3 className="display-title text-3xl">{t}</h3>
                  <p className="placeholder-note mt-3">[Benefícios a definir]</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 06 — FILOSOFIA */}
        <section id="filosofia" className="bg-sand px-6 py-28 sm:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="eyebrow">06 — Filosofia</span>
              <p className="wordmark mt-10 text-5xl sm:text-7xl">VIVA</p>
              <p className="display-title mx-auto mt-10 max-w-2xl text-2xl italic leading-snug text-foreground/70 sm:text-4xl">
                Propósito da marca a definir.
              </p>
              <div className="mx-auto mt-12 h-px w-24 bg-foreground/20" />
              <p className="placeholder-note mt-8">[Valores da marca a definir]</p>
            </Reveal>
          </div>
        </section>

        {/* 07 — CIÊNCIA + QUALIDADE */}
        <Section id="ciencia" index="07 — Ciência + Natureza" title="Ciência + Natureza.">
          <PlaceholderGrid items={["Composição", "Processos", "Qualidade"]} />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {["Ativos", "Testes", "Informações técnicas"].map((t, i) => (
              <Reveal key={t} delay={i * 90}>
                <div className="border-t border-border pt-5">
                  <h3 className="text-sm tracking-[0.2em] uppercase">{t}</h3>
                  <p className="placeholder-note mt-3">[Informações a definir]</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 08 — SUSTENTABILIDADE */}
        <Section
          id="sustentabilidade"
          index="08 — Sustentabilidade"
          title="Beleza com propósito."
          tone="cream"
        >
          <div className="grid gap-12 border-t border-border pt-12 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <p className="eyebrow">Compromissos</p>
            </Reveal>
            <Reveal delay={120}>
              <p className="display-title text-2xl leading-snug text-foreground/70 sm:text-3xl">
                Conteúdo a definir.
              </p>
              <p className="placeholder-note mt-6">[Informações de sustentabilidade a definir]</p>
            </Reveal>
          </div>
        </Section>

        {/* 09 — EXPERIÊNCIA */}
        <section id="experiencia" className="relative bg-background">
          <div className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
            <Reveal>
              <span className="eyebrow">09 — Experiência</span>
              <h2 className="display-title mt-8 max-w-3xl text-4xl sm:text-6xl">
                A linha completa.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <figure className="mt-12 w-full">
              <img
                src={heroAsset.url}
                alt="Composição com toda a linha VIVA Active Natural Care"
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-cover"
              />
            </figure>
          </Reveal>
        </section>

        {/* 10 — CONCLUSÃO */}
        <section className="bg-cream px-6 py-32 text-center sm:py-44">
          <Reveal>
            <p className="wordmark text-4xl sm:text-6xl">VIVA</p>
            <p className="eyebrow mt-4">Active Natural Care</p>
            <p className="display-title mx-auto mt-10 max-w-lg text-xl italic text-muted-foreground sm:text-2xl">
              Natural care. Active life.
            </p>
          </Reveal>
        </section>
      </main>

      {/* 11 — FOOTER */}
      <footer id="contato" className="border-t border-border bg-background px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-[1fr_auto]">
          <div>
            <p className="wordmark text-xl">VIVA</p>
            <p className="eyebrow mt-2">Active Natural Care</p>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3 sm:gap-12">
            {["Contato", "Instagram", "Site"].map((label) => (
              <div key={label}>
                <dt className="eyebrow text-[0.58rem]">{label}</dt>
                <dd className="placeholder-note mt-2">[A definir]</dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="mx-auto mt-14 max-w-6xl text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} VIVA
        </p>
      </footer>
    </div>
  );
}
