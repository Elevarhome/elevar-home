import { useState, useEffect } from "react";
import { ExternalLink, Menu, X, ArrowDown } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] font-sans">

      {/* ── Header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-[#E8E6E1]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="flex flex-col items-start leading-none"
          >
            <span className="text-xl font-semibold tracking-tight text-[#1A1A1A]">
              ▲ ELEVAR
            </span>
            <span className="text-[10px] tracking-widest text-[#999] uppercase">
              Home
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Início", id: "hero" },
              { label: "Sobre", id: "sobre" },
              { label: "Escolhas", id: "escolhas" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm text-[#666] hover:text-[#1A1A1A] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("produto")}
              className="text-sm px-4 py-2 bg-[#1A1A1A] text-white rounded-full hover:bg-[#333] transition-colors"
            >
              Produto Destaque
            </button>
          </nav>

          <button
            className="md:hidden text-[#1A1A1A]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#E8E6E1] px-6 py-6 flex flex-col gap-5">
            {[
              { label: "Início", id: "hero" },
              { label: "Sobre a Elevar", id: "sobre" },
              { label: "Escolhas da Elevar", id: "escolhas" },
              { label: "Produto destaque", id: "produto" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-base text-[#1A1A1A] font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16"
      >
        <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-8 font-medium">
          Elevar Home
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight max-w-3xl text-[#1A1A1A]">
          Melhore seu ambiente.
          <br />
          <span className="text-[#888]">Eleve seus resultados.</span>
        </h1>
        <p className="mt-8 text-base md:text-lg text-[#666] max-w-lg leading-relaxed">
          Recomendações para quem busca mais conforto, organização e
          produtividade no dia a dia. Pequenas mudanças no ambiente podem
          gerar mais foco e uma rotina mais agradável.
        </p>
        <button
          onClick={() => scrollTo("escolhas")}
          className="mt-10 px-8 py-3.5 bg-[#1A1A1A] text-white text-sm rounded-full hover:bg-[#333] transition-colors"
        >
          Conhecer as Escolhas da Elevar
        </button>
        <button
          onClick={() => scrollTo("sobre")}
          className="mt-10 flex flex-col items-center gap-1 text-[#CCCAC5] hover:text-[#999] transition-colors"
          aria-label="Rolar para baixo"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </section>

      {/* ── Sobre ── */}
      <section id="sobre" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-5 font-medium">
            Sobre a Elevar
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] mb-8 max-w-xl leading-snug">
            Seu ambiente influencia seus resultados.
          </h2>
          <div className="w-10 h-px bg-[#D8D6D1] mb-8" />
          <p className="text-base md:text-lg text-[#555] leading-relaxed max-w-2xl">
            Passamos horas trabalhando, estudando e produzindo. Acreditamos que
            um ambiente mais confortável, organizado e funcional pode contribuir
            para dias melhores e resultados melhores. A Elevar existe para
            ajudar você a encontrar soluções que realmente façam diferença na
            sua rotina.
          </p>
        </div>
      </section>

      {/* ── O que valorizamos ── */}
      <section className="py-20 px-6 bg-[#F9F8F6]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-10 text-center font-medium">
            O que valorizamos
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              {
                label: "Conforto",
                desc: "Ambientes que acolhem e reduzem o cansaço.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M3 14c0-3 1.5-5 4-6l1-4h6l1 4c2.5 1 4 3 4 6v1H3v-1Z" stroke="#888" strokeWidth="1.3" strokeLinejoin="round"/>
                    <path d="M1 18h20" stroke="#888" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                label: "Organização",
                desc: "Espaços funcionais que facilitam a rotina.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#888" strokeWidth="1.3"/>
                    <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="#888" strokeWidth="1.3"/>
                    <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="#888" strokeWidth="1.3"/>
                    <rect x="12" y="12" width="7" height="7" rx="1.5" stroke="#888" strokeWidth="1.3"/>
                  </svg>
                ),
              },
              {
                label: "Qualidade",
                desc: "Produtos que entregam o que prometem.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" stroke="#888" strokeWidth="1.3"/>
                    <path d="M7.5 11l2.5 2.5 4.5-4.5" stroke="#888" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                label: "Produtividade",
                desc: "Soluções que apoiam foco e resultados.",
                icon: (
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M11 3v4M11 15v4M3 11h4M15 11h4" stroke="#888" strokeWidth="1.3" strokeLinecap="round"/>
                    <circle cx="11" cy="11" r="3" stroke="#888" strokeWidth="1.3"/>
                  </svg>
                ),
              },
            ].map((v) => (
              <div
                key={v.label}
                className="bg-white border border-[#EAE8E3] rounded-2xl p-5 md:p-6 flex flex-col gap-3"
              >
                {v.icon}
                <p className="text-sm font-semibold text-[#1A1A1A]">{v.label}</p>
                <p className="text-xs text-[#999] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Escolhas da Elevar ── */}
      <section id="escolhas" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-5 font-medium">
            Recomendações
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] mb-8 leading-snug">
            Escolhas da Elevar
          </h2>
          <div className="w-10 h-px bg-[#D8D6D1] mb-8" />
          <p className="text-base md:text-lg text-[#555] leading-relaxed">
            Pesquisamos e selecionamos produtos que ajudam a criar ambientes
            mais confortáveis, organizados e produtivos. Nosso foco não é
            quantidade. Nosso foco é recomendar soluções que realmente façam
            diferença na experiência diária.
          </p>
          <button
            onClick={() => scrollTo("produto")}
            className="mt-8 text-sm text-[#1A1A1A] underline underline-offset-4 decoration-[#D0CEC9] hover:decoration-[#1A1A1A] transition-all"
          >
            Ver produto em destaque ↓
          </button>
        </div>
      </section>

      {/* ── Produto destaque ── */}
      <section id="produto" className="py-20 px-6 bg-[#F9F8F6]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-10 text-center font-medium">
            Escolha da Semana
          </p>

          <div className="bg-white border border-[#EAE8E3] rounded-3xl overflow-hidden md:grid md:grid-cols-2">

            {/* Imagem real do produto */}
            <div className="relative bg-[#F7F6F4] min-h-[300px] md:min-h-[480px] overflow-hidden flex items-center justify-center p-8 md:p-12">
              <img
                src="/images/suporte-notebook.jpg"
                alt="Suporte articulado para notebook em alumínio cinza espacial com base giratória 360°"
                className="w-full h-full object-contain max-h-[420px]"
              />
            </div>

            {/* Conteúdo */}
            <div className="p-8 md:p-12 flex flex-col justify-center gap-6">
              <div>
                <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-2 font-medium">
                  Ergonomia
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] leading-snug">
                  Suporte Articulado para Notebook
                </h3>
              </div>

              <p className="text-sm text-[#666] leading-relaxed">
                Passamos horas olhando para telas todos os dias. Este suporte
                ajuda a elevar o notebook para uma posição mais confortável,
                melhora a organização da mesa e contribui para uma rotina mais
                produtiva e agradável. Ideal para trabalho, estudos e home office.
              </p>

              <ul className="flex flex-col gap-3">
                {[
                  "Melhora a postura durante o uso",
                  "Ajuda a reduzir desconfortos causados por telas baixas",
                  "Libera espaço útil no ambiente",
                  "Contribui para uma mesa mais organizada",
                  "Ajuste flexível para diferentes necessidades",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[#555]"
                  >
                    <span className="mt-[3px] w-4 h-4 rounded-full border border-[#D0CEC9] flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2 pt-2">
                <a
                  href="https://amzn.to/4ucGJg1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1A1A1A] text-white text-sm rounded-full hover:bg-[#333] transition-colors w-full md:w-fit"
                >
                  Ver na Amazon
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-[11px] text-[#BBBAB5] pl-1">
                  Sem custo adicional para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Aviso afiliado ── */}
      <section className="py-10 px-6 bg-white border-t border-[#EAE8E3]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-[#BBBAB5] leading-relaxed">
            Os links desta página podem ser de afiliados. Você não paga nenhum
            valor adicional, mas podemos receber uma comissão pelas compras
            qualificadas. Isso nos ajuda a manter nossas recomendações
            atualizadas e continuar encontrando soluções úteis para nossos
            visitantes.
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 px-6 bg-[#F9F8F6] border-t border-[#EAE8E3]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-col items-center md:items-start gap-0.5">
            <span className="text-base font-semibold tracking-tight text-[#1A1A1A]">
              ▲ ELEVAR
            </span>
            <span className="text-xs text-[#999]">
              Melhore seu ambiente. Eleve seus resultados.
            </span>
          </div>
          <p className="text-xs text-[#CCCAC5]">Elevar Home © 2026</p>
        </div>
      </footer>

    </div>
  );
}
