import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/Hero";
import { ProgressBar } from "@/components/ProgressBar";
import { Reveal } from "@/components/Reveal";
import { Section, InfoGrid, DataTable } from "@/components/Section";
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
          "VIVA Active Natural Care: skincare natural para uma rotina ativa. Conheça a linha Clean, Fresh, Glow, Sun, Balance e Balm, o conceito, a ciência e o plano de negócio da marca.",
      },
      { property: "og:title", content: "VIVA — Active Natural Care" },
      {
        property: "og:description",
        content:
          "Natural care. Active life. Skincare natural artesanal para antes e depois da atividade física.",
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
    alt: "Embalagem do VIVA Clean, gel de limpeza facial",
    tint: "var(--sage)",
    description:
      "Gel de limpeza facial para começar e encerrar o dia — ideal antes e depois do treino, removendo suor e impurezas sem ressecar.",
    ingredients: "Babosa + chá verde",
    benefits: "Limpeza suave, sensação de frescor e ação antioxidante do chá verde.",
    cost: "R$ 25,00",
    price: "R$ 49,90",
  },
  {
    index: "02",
    name: "VIVA Fresh",
    sub: "Bruma facial",
    image: freshAsset.url,
    alt: "Frasco spray do VIVA Fresh, bruma facial",
    tint: "var(--blush)",
    description:
      "Bruma facial para refrescar a pele a qualquer momento do dia, durante ou logo após a atividade física.",
    ingredients: "Água floral + aloe vera",
    benefits: "Frescor imediato, leveza e sensação de conforto na pele.",
    cost: "R$ 24,00",
    price: "R$ 47,90",
  },
  {
    index: "03",
    name: "VIVA Glow",
    sub: "Creme hidratante facial",
    image: glowAsset.url,
    alt: "Frasco pump do VIVA Glow, creme hidratante facial",
    tint: "var(--lilac)",
    description:
      "Creme hidratante de textura leve, pensado para repor a hidratação da pele depois do movimento.",
    ingredients: "Aloe vera + ácido hialurônico biotecnológico",
    benefits: "Hidratação prolongada, maciez e aspecto saudável.",
    cost: "R$ 29,00",
    price: "R$ 57,90",
  },
  {
    index: "04",
    name: "VIVA Sun",
    sub: "Protetor solar facial",
    image: sunAsset.url,
    alt: "Frasco do VIVA Sun, protetor solar facial",
    tint: "var(--butter)",
    description:
      "Proteção solar para quem treina ao ar livre, combinando filtros UV com o cuidado natural da linha.",
    ingredients: "Aloe vera + filtros UV",
    benefits: "Proteção contra a radiação UV com sensação confortável na pele.",
    cost: "R$ 37,00",
    price: "R$ 72,90",
  },
  {
    index: "05",
    name: "VIVA Balance",
    sub: "Máscara facial",
    image: balanceAsset.url,
    alt: "Pote e caixa do VIVA Balance, máscara facial",
    tint: "var(--sand)",
    description:
      "Máscara facial para os momentos de pausa da rotina, equilibrando a pele depois de dias intensos.",
    ingredients: "Argila branca + camomila",
    benefits: "Sensação de equilíbrio, pele limpa e confortável.",
    cost: "R$ 27,00",
    price: "R$ 52,90",
  },
  {
    index: "06",
    name: "VIVA Balm",
    sub: "Hidratante labial com cor",
    image: balmAsset.url,
    alt: "Embalagem e bastão do VIVA Balm, hidratante labial com cor",
    tint: "var(--blush)",
    description:
      "Hidratante labial com cor, prático para levar na bolsa ou na mochila de treino.",
    ingredients: "Manteiga de cacau + óleos vegetais",
    benefits: "Hidratação dos lábios, toque nutritivo e cor suave.",
    cost: "R$ 20,00",
    price: "R$ 39,90",
  },
];

const nav = [
  { href: "#viva", label: "A VIVA" },
  { href: "#produtos", label: "Produtos" },
  { href: "#ciencia", label: "Ciência" },
  { href: "#filosofia", label: "Filosofia" },
  { href: "#negocio", label: "Negócio" },
  { href: "#contato", label: "Contato" },
];

const valores = [
  "Autocuidado",
  "Bem-estar",
  "Naturalidade",
  "Movimento",
  "Sustentabilidade",
  "Qualidade",
  "Inovação",
];

const bioplastico = [
  "Amido",
  "Celulose",
  "Ácido polilático (PLA)",
  "Plastificantes",
  "Fibras vegetais",
  "Aditivos",
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
              <p className="eyebrow">Conceito</p>
            </Reveal>
            <Reveal delay={120}>
              <p className="display-title text-2xl leading-snug text-foreground/70 sm:text-3xl">
                Uma marca de skincare natural criada para acompanhar uma rotina ativa, unindo
                autocuidado, natureza, bem-estar e movimento.
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Os produtos VIVA foram desenvolvidos para diferentes momentos do dia, especialmente
                antes e depois da prática de atividades físicas. O intuito da marca é incentivar o
                cuidado com a pele de forma simples, prática e natural, proporcionando frescor,
                hidratação e bem-estar. A VIVA mostra que cuidar de si também faz parte de uma vida
                ativa e saudável, incentivando as pessoas a se cuidarem mesmo com o corre do dia a
                dia.
              </p>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                <span className="eyebrow text-[0.58rem]">Paleta de cores</span>
                <br />
                Lilás, verde pastel, rosa pastel, amarelo manteiga, cinza claro e off white.
              </p>
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

        {/* 04 — CIÊNCIA */}
        <Section
          id="ciencia"
          index="04 — Ciência"
          title="Biologia, Química e Física."
          lead="As três áreas sustentam o desenvolvimento, a estabilidade e a conservação da linha VIVA."
          tone="cream"
        >
          <InfoGrid
            items={[
              {
                title: "Biologia",
                text: "Estuda a pele e as propriedades dos ingredientes naturais. Plantas como babosa, chá verde e camomila, além da manteiga de cacau e dos óleos vegetais, possuem compostos bioativos relacionados à hidratação, à ação antioxidante e ao cuidado da pele — sem finalidade de tratar ou curar doenças. A Biologia também orienta as embalagens, já que o bioplástico pode ser produzido a partir de matérias-primas vegetais como amido e celulose.",
              },
              {
                title: "Química",
                text: "Permite compreender a composição, as propriedades e a estabilidade dos ingredientes. Conceitos como pH, solubilidade, compatibilidade e estabilidade garantem a qualidade; luz, temperatura, oxigênio e umidade podem alterar as formulações, por isso avaliam-se aparência, textura, odor e pH durante o desenvolvimento. A escolha do bioplástico de origem vegetal também parte da Química.",
              },
              {
                title: "Física",
                text: "Relaciona-se ao armazenamento, à conservação e à escolha das embalagens. Temperatura, luz, calor e umidade podem alterar textura e estabilidade dos produtos; a embalagem funciona como barreira contra esses fatores, contribuindo para a conservação e a qualidade dos cosméticos VIVA.",
              },
            ]}
          />
        </Section>

        {/* 05 — MISSÃO E VISÃO */}
        <Section id="missao" index="05 — Missão e Visão" title="Cuidar faz parte do movimento.">
          <div className="grid gap-10 sm:grid-cols-2">
            <Reveal>
              <div className="border-t border-border pt-6">
                <h3 className="display-title text-3xl">Missão</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Promover o autocuidado por meio de cosméticos naturais, incentivando
                  principalmente quem pratica atividades físicas a cuidar da pele antes e depois dos
                  exercícios. A VIVA busca oferecer produtos práticos que proporcionem frescor,
                  hidratação e bem-estar, mostrando que cuidar da pele também faz parte de uma
                  rotina ativa.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="border-t border-border pt-6">
                <h3 className="display-title text-3xl">Visão</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Ser uma marca reconhecida por unir skincare natural, bem-estar, movimento e
                  sustentabilidade, incentivando pessoas que praticam atividades físicas a incluírem
                  o cuidado com a pele em sua rotina.
                </p>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* 06 — FILOSOFIA / VALORES */}
        <section id="filosofia" className="bg-sand px-6 py-28 sm:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="eyebrow">06 — Valores</span>
              <p className="wordmark mt-10 text-5xl sm:text-7xl">VIVA</p>
              <p className="display-title mx-auto mt-10 max-w-2xl text-2xl italic leading-snug text-foreground/70 sm:text-4xl">
                Natural care. Active life.
              </p>
              <div className="mx-auto mt-12 h-px w-24 bg-foreground/20" />
              <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                {valores.map((v) => (
                  <li key={v} className="eyebrow text-[0.62rem]">
                    {v}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 07 — SUSTENTABILIDADE / EMBALAGENS */}
        <Section
          id="sustentabilidade"
          index="07 — Embalagens"
          title="Bioplástico de origem vegetal."
          tone="cream"
        >
          <div className="grid gap-12 border-t border-border pt-12 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <p className="eyebrow">Matéria-prima</p>
            </Reveal>
            <Reveal delay={120}>
              <p className="display-title text-2xl leading-snug text-foreground/70 sm:text-3xl">
                As embalagens da VIVA serão produzidas com bioplástico à base de materiais de origem
                vegetal, como amido e celulose, buscando reduzir o impacto ambiental das embalagens
                convencionais.
              </p>
              <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {bioplastico.map((c) => (
                  <li
                    key={c}
                    className="border-b border-border pb-3 text-sm text-muted-foreground"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>

        {/* 08 — NEGÓCIO */}
        <Section
          id="negocio"
          index="08 — Custos e Preços"
          title="O plano por trás da linha."
          lead="Primeiro lote de 6.000 unidades, com fabricação terceirizada: a marca é dona dos produtos, enquanto uma indústria cosmética realiza a parte industrial."
        >
          <div className="space-y-16">
            <Reveal>
              <DataTable
                caption="Investimento inicial"
                head={["Item", "Valor"]}
                rows={[
                  ["Produção base (6.000 unidades)", "R$ 135.200"],
                  ["+ 20% de qualidade", "R$ 27.040"],
                  ["Produção atualizada", "R$ 162.240"],
                  ["Desenvolvimento inicial", "R$ 4.500"],
                  ["Frete/logística e embalagem de envio", "R$ 38.000"],
                  ["TOTAL", "R$ 204.500"],
                ]}
              />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                São R$ 162.240 de produção mais R$ 30.000 para logística e distribuição nacional
                inicial — cerca de R$ 5,00 por produto em média. Os Correios calculam o preço de
                cada encomenda considerando CEP de origem e destino, peso e dimensões, podendo ainda
                existir cobrança por peso volumétrico.
              </p>
            </Reveal>

            <Reveal>
              <DataTable
                caption="O que está incluso nos R$ 135.200 (custo base)"
                head={["Categoria", "O que inclui", "Custo estimado"]}
                rows={[
                  [
                    "Desenvolvimento/formulação dos 6 produtos",
                    "Criação e ajustes das 6 fórmulas, protótipos e desenvolvimento inicial",
                    "R$ 15.000",
                  ],
                  [
                    "Testes de estabilidade, microbiologia e físico-químicos",
                    "Estabilidade, testes microbiológicos e físico-químicos",
                    "R$ 12.000",
                  ],
                  [
                    "Testes específicos VIVA Sun",
                    "Testes específicos de fotoproteção e eficácia",
                    "R$ 10.000 em análise",
                  ],
                  [
                    "Regularização/documentação sanitária",
                    "Documentação e processos regulatórios",
                    "R$ 5.000",
                  ],
                  [
                    "Matérias-primas + ativos",
                    "Aloe vera, chá verde, ácido hialurônico, filtros UV, argila, camomila, manteigas, óleos etc.",
                    "R$ 27.000",
                  ],
                  [
                    "Bioplástico",
                    "Frascos, potes, tampas e componentes das embalagens",
                    "R$ 4.000",
                  ],
                  ["Rótulos", "Impressão, acabamento e aplicação", "R$ 4.000"],
                  [
                    "Fabricação/envase/controle",
                    "Pesagem, mistura, fabricação, envase e controle básico",
                    "R$ 24.000",
                  ],
                  [
                    "Caixas e materiais de expedição",
                    "Embalagens secundárias, proteção e materiais para envio",
                    "R$ 5.000",
                  ],
                  [
                    "Compatibilidade produto × embalagem",
                    "Avaliação da interação entre formulação e embalagem",
                    "R$ 4.000",
                  ],
                  [
                    "Perdas/reserva técnica",
                    "Aproximadamente 4% para perdas, retrabalho e variações de produção",
                    "R$ 5.200",
                  ],
                  [
                    "TOTAL — custo base",
                    "6.000 unidades, antes do acréscimo de 20%",
                    "R$ 135.200",
                  ],
                ]}
              />
            </Reveal>

            <Reveal>
              <DataTable
                caption="Tabela de preços"
                head={["Produto", "Custo após 20%", "Preço comercial"]}
                rows={[
                  ["VIVA Clean", "R$ 25,00", "R$ 49,90"],
                  ["VIVA Fresh", "R$ 24,00", "R$ 47,90"],
                  ["VIVA Glow", "R$ 29,00", "R$ 57,90"],
                  ["VIVA Sun", "R$ 37,00", "R$ 72,90"],
                  ["VIVA Balance", "R$ 27,00", "R$ 52,90"],
                  ["VIVA Balm", "R$ 20,00", "R$ 39,90"],
                ]}
              />
            </Reveal>

            <Reveal>
              <DataTable
                caption="Variáveis de venda — 49% do preço precisa cobrir os custos do produto"
                head={["Variável", "%"]}
                rows={[
                  ["Imposto", "6%"],
                  ["Cartão, pix, gateway", "4%"],
                  ["Comissão (site próprio)", "0%"],
                  ["Marketing", "12%"],
                  ["Frete subsidiado", "5%"],
                  ["Trocas e reenvios", "2%"],
                  ["Margem de lucro desejada", "20%"],
                ]}
              />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Considera-se que o frete não é 100% gratuito. Os percentuais são premissas de
                planejamento: impostos e taxas reais dependem do regime tributário, do faturamento,
                da plataforma e da forma de pagamento.
              </p>
            </Reveal>

            <Reveal>
              <DataTable
                caption="Exemplo de venda — VIVA Glow a R$ 57,90"
                head={["Destino do dinheiro", "%", "Valor aproximado"]}
                rows={[
                  ["Custo do produto", "—", "R$ 29,90"],
                  ["Impostos", "6%", "R$ 3,47"],
                  ["Cartão, pix, gateway", "4%", "R$ 2,32"],
                  ["Marketing", "12%", "R$ 6,95"],
                  ["Frete subsidiado", "5%", "R$ 2,90"],
                  ["Trocas e reenvios", "2%", "R$ 1,16"],
                  ["Lucro", "20%", "R$ 11,58"],
                  ["Preço", "100%", "R$ 57,90"],
                ]}
              />
            </Reveal>

            <Reveal>
              <DataTable
                caption="Se vendermos as 6.000 unidades"
                head={["Produto", "Unidades", "Preço", "Faturamento"]}
                rows={[
                  ["VIVA Clean", "1.000", "R$ 49,90", "R$ 49.900"],
                  ["VIVA Fresh", "1.000", "R$ 47,90", "R$ 47.900"],
                  ["VIVA Glow", "1.000", "R$ 57,90", "R$ 57.900"],
                  ["VIVA Sun", "1.000", "R$ 72,90", "R$ 72.900"],
                  ["VIVA Balance", "1.000", "R$ 52,90", "R$ 52.900"],
                  ["VIVA Balm", "1.000", "R$ 39,90", "R$ 39.900"],
                  ["TOTAL", "6.000", "—", "R$ 321.400"],
                ]}
              />
              <div className="mt-8 grid gap-6 border-t border-border pt-8 lg:grid-cols-2">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Com essa tabela de preços, o primeiro lote inteiro teria um faturamento bruto
                  estimado de <strong className="text-foreground">R$ 321.400</strong>. Foram
                  investidos R$ 162.240 para produzir o lote, já considerando os 20% de melhora de
                  qualidade — mas isso não significa um lucro de R$ 159.160, porque ainda existem as
                  variáveis de venda.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Imposto (6%), pagamento (4%), marketing (12%), frete subsidiado (5%) e
                  trocas/reenvios (2%) somam 29% do faturamento: 29% de R$ 321.400 = R$ 93.206.
                  Assim, R$ 321.400 − R$ 93.206 − R$ 162.000 ={" "}
                  <strong className="text-foreground">R$ 66.194</strong>, ficando próximo dos 20% do
                  faturamento como o planejado.
                </p>
              </div>
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
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Cosméticos naturais artesanais para uma rotina ativa.
            </p>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3 sm:gap-12">
            <div>
              <dt className="eyebrow text-[0.58rem]">Linha</dt>
              <dd className="mt-2 text-sm text-muted-foreground">6 produtos</dd>
            </div>
            <div>
              <dt className="eyebrow text-[0.58rem]">Embalagens</dt>
              <dd className="mt-2 text-sm text-muted-foreground">Bioplástico vegetal</dd>
            </div>
            <div>
              <dt className="eyebrow text-[0.58rem]">Venda</dt>
              <dd className="mt-2 text-sm text-muted-foreground">Site próprio</dd>
            </div>
          </dl>
        </div>
        <p className="mx-auto mt-14 max-w-6xl text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} VIVA — Active Natural Care
        </p>
      </footer>
    </div>
  );
}
