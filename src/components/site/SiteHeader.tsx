import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const NAV = [
  { label: "Serviços", to: "/", hash: "servicos" },
  { label: "Especialidade", to: "/", hash: "especialidade" },
  { label: "Portfólio", to: "/portfolio", hash: undefined },
  { label: "Estúdio", to: "/", hash: "estudio" },
  { label: "Onde encontrar", to: "/", hash: "localizacao" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        scrolled || open ? "bg-background/92 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10 md:py-7">
        <Link to="/" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-xl tracking-[0.18em] uppercase md:text-2xl">
            Débora Tonani
          </span>
          <span className="mt-1 text-[0.6rem] tracking-[0.42em] text-muted-foreground uppercase">
            {SITE.role}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="text-[0.7rem] tracking-[0.2em] text-foreground/70 uppercase transition-colors duration-300 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/agendar" className="btn-ink px-7 py-3 min-h-0 text-[0.68rem]">
            Agendar horário
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={`h-px w-7 bg-foreground transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-7 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border/60 bg-background transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {NAV.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              onClick={() => setOpen(false)}
              className="border-b border-border/50 py-5 font-display text-2xl"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/agendar" onClick={() => setOpen(false)} className="btn-ink mt-7 mb-6 w-full">
            Agendar horário
          </Link>
        </nav>
      </div>
    </header>
  );
}
