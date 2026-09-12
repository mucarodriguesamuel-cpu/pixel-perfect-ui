import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Reveal } from "@/components/site/Reveal";
import { useServices } from "@/lib/booking";
import { SITE } from "@/lib/site";

import heroImg from "@/assets/hero-maos.jpg";
import especialidadeImg from "@/assets/especialidade.jpg";
import estudioImg from "@/assets/portfolio-6.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Débora Tonani — Nail Designer | Alongamento de unhas em Vila Mariana" },
      {
        name: "description",
        content:
          "Alongamentos naturais, banho de gel, manutenção e blindagem com Débora Tonani, nail designer em Vila Mariana, São Paulo, há 16 anos.",
      },
      {
        property: "og:title",
        content: "Débora Tonani — Nail Designer | Alongamento natural em São Paulo",
      },
      {
        property: "og:description",
        content:
          "Beleza sofisticada com acabamento delicado, natural e pensado para valorizar suas mãos. Atendimento em estúdio na Vila Mariana.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const PILARES = [
  { title: "Naturalidade" },
  { title: "Técnica" },
  { title: "Atendimento personalizado" },
];
const DESTAQUES = [
  {
    title: "Aparência natural",
    text: "Alongamentos pensados para valorizar o formato das mãos com resultado delicado.",
  },
  {
    title: "Resistência",
    text: "Beleza e durabilidade para o dia a dia.",
  },
  {
    title: "Acabamento delicado",
    text: "Cuidado em cada detalhe para um resultado elegante.",
  },
  {
    title: "Atendimento personalizado",
    text: "Cada atendimento é pensado para o estilo de cada cliente.",
  },
];

const EXPERIENCIA = [
  "Atendimento personalizado",
  "Horário agendado",
  "Ambiente acolhedor",
  "Atenção aos detalhes",
];
const SERVICO_IMAGENS: Record<string, string> = {
  "Alongamento de unhas": p3,
  "Banho de gel": p2,
  "Manutenção": p1,
  "Blindagem": p5,
};

const SERVICO_FALLBACK = [
  { name: "Alongamento de unhas", description: "Resultado natural, resistente e elegante." },
  { name: "Banho de gel", description: "Proteção e fortalecimento das unhas naturais." },
  { name: "Manutenção", description: "Cuidado periódico recomendado a cada 25 a 30 dias." },
  { name: "Blindagem", description: "Proteção e fortalecimento da unha natural." },
];

function Home() {
  const { data: services } = useServices();

  return (
    <div className="bg-background">
      <SiteHeader />
      <main>
        {/* HERO */}
        <section className="relative min-h-[100svh] overflow-hidden pt-28 md:pt-32">
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 pb-16 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24">
            <div className="lg:pr-10">
              <Reveal>
                <p className="eyebrow">
                  {SITE.name} — {SITE.role}
                </p>
                <span className="hairline mt-5 w-28" />
              </Reveal>

             <Reveal delay={120}>
  <h1 className="mt-8 font-display text-[clamp(2.9rem,8.5vw,6.2rem)] leading-[0.98] tracking-[-0.02em]">
    16 anos de técnica.
    <br />
    <em className="text-[color-mix(in_oklab,var(--gold)_78%,var(--espresso))]">
      Naturalidade
    </em>
    <br />
    em cada detalhe.
  </h1>
</Reveal>

<Reveal delay={220}>
  <p className="mt-8 max-w-md text-[0.98rem] leading-relaxed text-muted-foreground">
    Alongamentos pensados para valorizar suas mãos com aparência natural, acabamento delicado e atendimento personalizado.
  </p>
</Reveal>

              <Reveal delay={320}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link to="/agendar" className="btn-ink">
                    Agendar horário
                  </Link>
                  <Link to="/portfolio" className="btn-outline-ink">
                    Ver trabalhos
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={420}>
                <div className="mt-12 flex items-center gap-4">
                  <span className="h-px w-10 bg-gold/70" />
                  <span className="text-[0.7rem] tracking-[0.28em] text-muted-foreground uppercase">
                    Atendimento em estúdio
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="relative">
              <div className="absolute -top-6 right-4 hidden h-40 w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent lg:block" />
              <Reveal delay={180}>
                <figure className="relative">
                  <img
                    src={heroImg}
                    alt="Mãos com alongamento de unhas natural em tom nude sobre seda champagne"
                    width={1008}
                    height={1504}
                    className="h-[58vh] w-full object-cover object-center sm:h-[70vh] lg:h-[86vh]"
                  />
                  <figcaption className="absolute -bottom-4 -left-4 hidden bg-background px-6 py-4 lg:block">
                    <span className="text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
                      Vila Mariana · São Paulo
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FRASE DE IMPACTO */}
        <section className="bg-sand">
          <div className="mx-auto max-w-[1100px] px-6 py-24 md:px-10 md:py-40">
            <Reveal>
              <span className="hairline w-20" />
              <blockquote className="mt-10 font-display text-[clamp(1.9rem,4.6vw,3.6rem)] leading-[1.15] italic">
                “O melhor alongamento é aquele que ninguém percebe que é alongamento.”
              </blockquote>
              <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
                A proposta do trabalho é unir resistência, delicadeza e naturalidade em cada
                detalhe.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SERVIÇOS — menu editorial */}
        <section id="servicos" className="scroll-mt-24">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <p className="eyebrow">Menu de serviços</p>
                <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05]">
                  Cada etapa
                  <br />
                  com propósito.
                </h2>
                <span className="hairline mt-8 w-24" />
              </Reveal>
            </div>

            <ul>
              {(services ?? []).map((s, i) => (
                <Reveal as="li" key={s.id} delay={i * 80}>
                  <div className="group border-t border-border py-9 transition-colors duration-500 last:border-b hover:border-gold">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-baseline sm:justify-between">
                      <div className="max-w-lg">
                        <div className="flex items-baseline gap-4">
                          <span className="text-[0.7rem] tracking-[0.24em] text-gold">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="font-display text-[clamp(1.6rem,3.4vw,2.4rem)] leading-tight transition-transform duration-500 group-hover:translate-x-1">
                            {s.name}
                          </h3>
                        </div>
                        <p className="mt-3 pl-9 text-sm leading-relaxed text-muted-foreground">
                          {s.description}
                        </p>
                      </div>
                      <Link
                        to="/agendar"
                        search={{ servico: s.id }}
                        className="ml-9 inline-flex shrink-0 items-center gap-3 text-[0.7rem] tracking-[0.24em] uppercase sm:ml-0"
                      >
                        <span className="border-b border-transparent pb-1 transition-colors duration-300 group-hover:border-gold">
                          Agendar
                        </span>
                        <span className="transition-transform duration-500 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* ESPECIALIDADE — imagem grande com bloco sobreposto */}
        <section id="especialidade" className="scroll-mt-24 bg-[color-mix(in_oklab,var(--nude)_38%,var(--background))]">
          <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
            <div className="relative lg:pl-[6%]">
              <Reveal>
                <img
                  src={especialidadeImg}
                alt="Trabalho de unhas com acabamento natural realizado por Débora Tonani"
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="h-[46vh] w-full object-cover md:h-[68vh] lg:w-[78%]"
                />
              </Reveal>

              <Reveal delay={200}>
                <div className="relative z-10 -mt-12 ml-auto max-w-xl bg-background px-7 py-10 md:-mt-24 md:px-14 md:py-16 lg:absolute lg:right-0 lg:bottom-[-3rem] lg:mt-0 lg:max-w-lg">
                  <span className="hairline w-16" />
                <h2 className="mt-7 font-display text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.08]">
  Naturalidade não acontece por acaso.
</h2>
<p className="mt-6 text-sm leading-relaxed text-muted-foreground">
  São 16 anos aperfeiçoando técnica, proporção e acabamento para criar unhas que combinam com cada cliente. O objetivo não é simplesmente alongar, mas valorizar as mãos com um resultado bonito, resistente e principalmente natural.
</p>
                  <dl className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                    {DESTAQUES.map((d) => (
                      <div key={d.title}>
                        <dt className="font-display text-lg">{d.title}</dt>
                        <dd className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {d.text}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
{/* MISSÃO E VALORES */}
<section className="border-y border-border bg-background">
  <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
    <Reveal>
      <p className="eyebrow">Missão</p>
      <h2 className="mt-5 font-display text-3xl leading-tight md:text-4xl">
        Valorizar a beleza das mãos com naturalidade.
      </h2>
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        Unir técnica, resistência e cuidado para criar resultados que respeitem o estilo e a individualidade de cada cliente.
      </p>
    </Reveal>

    <Reveal delay={120}>
      <p className="eyebrow">Valores</p>
      <p className="mt-5 font-display text-2xl leading-relaxed">
        Naturalidade · Técnica · Cuidado · Atenção aos detalhes · Atendimento personalizado
      </p>
    </Reveal>
  </div>
</section>
        {/* PORTFÓLIO */}
        <section id="portfolio" className="scroll-mt-24">
          <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-36">
            <Reveal>
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="eyebrow">Portfólio</p>
                  <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.05]">
                    Trabalhos que falam por si
                  </h2>
                </div>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.24em] uppercase"
                >
                  <span className="border-b border-gold/60 pb-1">Ver mais trabalhos</span>
                  <span>→</span>
                </Link>
              </div>
            </Reveal>

            <div className="mt-16 grid grid-cols-12 gap-4 md:gap-7">
              <Reveal className="col-span-12 md:col-span-7">
                <img
                  src={p2}
                  alt="Alongamentos de unha em tom branco leitoso sobre linho cru"
                  loading="lazy"
                  className="h-[38vh] w-full object-cover md:h-[52vh]"
                />
              </Reveal>
              <Reveal delay={120} className="col-span-7 md:col-span-5 md:mt-16">
                <img
                  src={p3}
                  alt="Mãos com alongamento nude e francesinha delicada sobre veludo marrom"
                  loading="lazy"
                  className="h-[34vh] w-full object-cover md:h-[60vh]"
                />
              </Reveal>
              <Reveal delay={80} className="col-span-5 md:col-span-4 md:-mt-10">
                <img
                  src={p1}
                  alt="Fita de seda e esmalte nude sobre pedra bege"
                  loading="lazy"
                  className="h-[34vh] w-full object-cover md:h-[46vh]"
                />
              </Reveal>
              <Reveal delay={160} className="col-span-12 md:col-span-8">
                <img
                  src={p5}
                  alt="Unhas naturais em tom nude sobre tricô bege"
                  loading="lazy"
                  className="h-[42vh] w-full object-cover md:h-[58vh]"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* EXPERIÊNCIA NO ESTÚDIO */}
        <section id="estudio" className="scroll-mt-24 bg-espresso text-espresso-foreground">
          <div className="mx-auto grid max-w-[1400px] gap-14 px-6 py-24 md:px-10 md:py-36 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
            <Reveal>
              <img
                src={estudioImg}
               alt="Trabalho de nail design realizado por Débora Tonani"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-[40vh] w-full object-cover md:h-[62vh]"
              />
            </Reveal>
            <Reveal delay={150}>
              <p className="eyebrow text-espresso-foreground/50">Experiência</p>
              <h2 className="mt-6 font-display text-[clamp(2.1rem,4.6vw,3.6rem)] leading-[1.08]">
                Uma experiência pensada para você
              </h2>
              <p className="mt-7 max-w-lg text-sm leading-relaxed text-espresso-foreground/70">
                Cada atendimento é realizado com atenção, calma e cuidado para que o resultado final
                combine com seu estilo e sua rotina.
              </p>
              <ul className="mt-12">
                {EXPERIENCIA.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-5 border-t border-espresso-foreground/15 py-5 last:border-b"
                  >
                    <span className="h-px w-6 bg-gold" />
                    <span className="text-sm tracking-[0.12em]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/agendar"
                className="btn-ink mt-12 bg-espresso-foreground text-espresso hover:bg-champagne"
              >
                Reservar meu horário
              </Link>
            </Reveal>
          </div>
        </section>

        {/* LOCALIZAÇÃO */}
        <section id="localizacao" className="scroll-mt-24">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">Onde encontrar</p>
              <h2 className="mt-6 font-display text-[clamp(2.1rem,4.6vw,3.4rem)] leading-[1.08]">
                Vila Mariana,
                <br />
                São Paulo
              </h2>
              <span className="hairline mt-8 w-20" />
              <div className="mt-8 space-y-2 text-sm text-muted-foreground">
                <p>{SITE.name} — {SITE.role}</p>
                <p>Atendimento em estúdio, somente com horário agendado.</p>
                <p>
                  O endereço completo é enviado no WhatsApp após a confirmação do seu agendamento.
                </p>
              </div>
              <Link to="/agendar" className="btn-outline-ink mt-10">
                Agendar horário
              </Link>
            </Reveal>

            <Reveal delay={150}>
              <div className="h-[38vh] w-full overflow-hidden border border-border md:h-[52vh]">
                <iframe
                  title="Mapa da região da Vila Mariana, São Paulo"
                  src="https://www.google.com/maps?q=Vila%20Mariana%2C%20S%C3%A3o%20Paulo&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full grayscale-[35%]"
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
