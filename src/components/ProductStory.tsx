import { Reveal } from "@/components/Reveal";

export type Product = {
  index: string;
  name: string;
  sub: string;
  image: string;
  alt: string;
  tint: string;
  description: string;
  ingredients: string;
  benefits: string;
  cost: string;
  price: string;
};

export function ProductStory({ product, flip }: { product: Product; flip: boolean }) {
  return (
    <article
      className="relative overflow-hidden py-16 sm:py-24"
      style={{
        background: `linear-gradient(180deg, transparent, color-mix(in oklab, ${product.tint} 45%, transparent), transparent)`,
      }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <figure className="overflow-hidden rounded-sm bg-card shadow-[0_30px_80px_-50px_rgba(0,0,0,0.4)]">
            <img
              src={product.image}
              alt={product.alt}
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-contain transition-transform duration-[1200ms] ease-out hover:scale-[1.02]"
            />
          </figure>
        </Reveal>

        <Reveal delay={120} className={flip ? "lg:order-1" : ""}>
          <div className="max-w-md">
            <span className="eyebrow">{product.index}</span>
            <h3 className="display-title mt-4 text-4xl sm:text-5xl">
              {product.name}
              <span className="mt-1 block font-sans text-base font-light tracking-[0.28em] uppercase text-muted-foreground">
                {product.sub}
              </span>
            </h3>
            <div className="rule-line my-8" />
            <dl className="space-y-6">
              <div>
                <dt className="eyebrow text-[0.6rem]">Descrição</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.6rem]">Composição</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.ingredients}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.6rem]">Benefícios</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {product.benefits}
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex items-baseline gap-6 border-t border-border pt-6">
              <div>
                <span className="eyebrow text-[0.55rem]">Preço comercial</span>
                <p className="display-title mt-1 text-2xl">{product.price}</p>
              </div>
              <div>
                <span className="eyebrow text-[0.55rem]">Custo unitário</span>
                <p className="mt-1 text-sm text-muted-foreground">{product.cost}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  );
}
