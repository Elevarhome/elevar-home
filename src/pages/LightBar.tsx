import { useState, useEffect } from "react";
import { ExternalLink, Menu, X, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";

// ─── DADOS DA LIGHT BAR ─────────────────────────────────────────────
// Para adicionar imagens reais: substitua os src abaixo pelos caminhos corretos
const productImages = [
  {
    src: "/images/lightbar-1.jpg",
    alt: "ELEVAR Light Bar instalada no monitor — trabalhe com mais conforto visual",
    label: "Trabalhe com mais conforto visual",
  },
  {
    src: "/images/lightbar-2.jpg",
    alt: "Ambiente de home office com ELEVAR Light Bar — mais agradável para produzir",
    label: "Um ambiente mais agradável para produzir",
  },
  {
    src: "/images/lightbar-3.jpg",
    alt: "Ajuste de iluminação da ELEVAR Light Bar para cada momento",
    label: "Ajuste a iluminação para cada momento",
  },
  {
    src: "/images/lightbar-4.jpg",
    alt: "Instalação simples da ELEVAR Light Bar por USB sem ocupar espaço",
    label: "Instalação simples e sem ocupar espaço",
  },
  {
    src: "/images/lightbar-5.jpg",
    alt: "Mesa de trabalho transformada com ELEVAR Light Bar",
    label: "Transforme a aparência da sua mesa",
  },
];

const benefits = [
  {
    icon: "👀",
    title: "Menos fadiga visual",
    desc: "Iluminação adequada reduz o cansaço dos olhos durante longas jornadas.",
  },
  {
    icon: "💻",
    title: "Ambiente mais profissional",
    desc: "Visual clean e elegante que eleva a aparência do seu setup.",
  },
  {
    icon: "🎯",
    title: "Mais foco durante o trabalho",
    desc: "Um ambiente bem iluminado contribui para mais concentração e produtividade.",
  },
  {
    icon: "✨",
    title: "Visual mais agradável",
    desc: "Iluminação suave e direcionada que transforma qualquer ambiente.",
  },
  {
    icon: "🔌",
    title: "Instalação simples por USB",
    desc: "Conecta direto ao computador ou carregador. Sem complicação.",
  },
];

const relatedProducts = [
  {
    name: "Suporte Articulado para Notebook",
    status: "available",
    href: "/",
    desc: "Mais conforto e organização para sua mesa.",
  },
  {
    name: "Organizador de Cabos",
    status: "soon",
    desc: "Mesa limpa, mente limpa.",
  },
  {
    name: "Mousepad Premium",
    status: "soon",
    desc: "A base ideal para o seu setup.",
  },
];

export default function LightBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const prevImage = () =>
    setActiveImage((i) => (i === 0 ? productImages.length - 1 : i - 1));
  const nextImage = () =>
    setActiveImage((i) => (i === productImages.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#1A1A1A] font-sans">

      {/* ── Header ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-[#E8E6E1]" : "bg-transparent"}`}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex flex-col items-start leading-none">
            <span className="text-xl font-semibold tracking-tight text-[#1A1A1A]">▲ ELEVAR</span>
            <span className="text-[10px] tracking-widest text-[#999] uppercase">Home</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm text-[#666] hover:text-[#1A1A1A] transition-colors">Início</a>
            <a href="/" className="text-sm text-[#666] hover:text-[#1A1A1A] transition-colors">Sobre</a>
            <a href="/" className="text-sm text-[#666] hover:text-[#1A1A1A] transition-colors">Escolhas</a>
            <button onClick={() => scrollTo("produto")} className="text-sm px-4 py-2 bg-[#1A1A1A] text-white rounded-full hover:bg-[#333] transition-colors">
              Ver Produto
            </button>
          </nav>
          <button className="md:hidden text-[#1A1A1A]" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#E8E6E1] px-6 py-6 flex flex-col gap-5">
            <a href="/" className="text-base text-[#1A1A1A] font-medium">← Voltar para Escolhas da Elevar</a>
            <button onClick={() => scrollTo("produto")} className="text-left text-base text-[#1A1A1A] font-medium">Ver Produto</button>
            <button onClick={() => scrollTo("beneficios")} className="text-left text-base text-[#1A1A1A] font-medium">Benefícios</button>
            <button onClick={() => scrollTo("relacionados")} className="text-left text-base text-[#1A1A1A] font-medium">Produtos Relacionados</button>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        <a href="/" className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-8 font-medium hover:text-[#888] transition-colors flex items-center gap-1">
          ← Elevar Home
        </a>
        <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-4 font-medium">Produto 2</p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight max-w-3xl text-[#1A1A1A]">
          ELEVAR Light Bar
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-[#888] font-light tracking-tight">
          Ilumine seu ambiente. Eleve sua produtividade.
        </p>
        <p className="mt-6 text-base md:text-lg text-[#666] max-w-lg leading-relaxed">
          Uma iluminação melhor pode transformar sua experiência de trabalho, estudo e home office.
        </p>
        <button onClick={() => scrollTo("produto")} className="mt-10 px-8 py-3.5 bg-[#1A1A1A] text-white text-sm rounded-full hover:bg-[#333] transition-colors">
          Conhecer o Produto
        </button>
        <button onClick={() => scrollTo("produto")} className="mt-10 text-[#CCCAC5] hover:text-[#999] transition-colors" aria-label="Rolar para baixo">
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </section>

      {/* ── Produto ── */}
      <section id="produto" className="py-20 px-6 bg-[#F9F8F6]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-10 text-center font-medium">Escolha da Elevar</p>

          <div className="bg-white border border-[#EAE8E3] rounded-3xl overflow-hidden md:grid md:grid-cols-2">

            {/* Galeria */}
            <div className="bg-[#F7F6F4] flex flex-col">
              <div className="relative flex items-center justify-center p-6 md:p-8 min-h-[300px] md:min-h-[420px]">
                {imageError[activeImage] ? (
                  <div className="flex flex-col items-center gap-3 text-[#C8C6C1]">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <rect x="8" y="12" width="32" height="4" rx="2" stroke="#C8C6C1" strokeWidth="1.5"/>
                      <rect x="4" y="20" width="40" height="20" rx="3" stroke="#C8C6C1" strokeWidth="1.5"/>
                      <line x1="24" y1="12" x2="24" y2="8" stroke="#C8C6C1" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="24" cy="6" r="2" stroke="#C8C6C1" strokeWidth="1.5"/>
                    </svg>
                    <p className="text-xs text-[#BBBAB5] text-center">Imagem em breve</p>
                    <p className="text-[10px] text-[#D0CEC9] text-center">{productImages[activeImage].label}</p>
                  </div>
                ) : (
                  <img
                    key={activeImage}
                    src={productImages[activeImage].src}
                    alt={productImages[activeImage].alt}
                    className="w-full h-full object-contain max-h-[360px]"
                    onError={() => setImageError(prev => ({ ...prev, [activeImage]: true }))}
                  />
                )}
                <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors">
                  <ChevronLeft className="w-4 h-4 text-[#555]" />
                </button>
                <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors">
                  <ChevronRight className="w-4 h-4 text-[#555]" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <p className="text-[10px] text-[#555] font-medium whitespace-nowrap">{productImages[activeImage].label}</p>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 px-4 pb-4 justify-center flex-wrap">
                {productImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-10 h-10 rounded-xl border-2 transition-all flex items-center justify-center ${activeImage === i ? "border-[#1A1A1A] bg-white" : "border-transparent bg-white/50 opacity-40 hover:opacity-70"}`}
                  >
                    {imageError[i] ? (
                      <span className="text-[8px] text-[#999]">{i + 1}</span>
                    ) : (
                      <img src={productImages[i].src} alt="" className="w-full h-full object-cover rounded-lg" onError={() => setImageError(prev => ({ ...prev, [i]: true }))} />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex justify-center pb-4 gap-1.5">
                {productImages.map((_, i) => (
                  <span key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${activeImage === i ? "bg-[#1A1A1A]" : "bg-[#D0CEC9]"}`} />
                ))}
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-8 md:p-12 flex flex-col justify-center gap-6">
              <div>
                <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-2 font-medium">Iluminação</p>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] leading-snug">ELEVAR Light Bar</h3>
                <p className="text-sm text-[#888] mt-1">Ilumine seu ambiente. Eleve sua produtividade.</p>
              </div>

              <p className="text-sm text-[#666] leading-relaxed">
                Muitas pessoas passam horas em frente ao computador utilizando iluminação inadequada.
                A ELEVAR Light Bar ajuda a criar um ambiente mais confortável, agradável e produtivo
                sem ocupar espaço na mesa. Uma pequena mudança capaz de melhorar sua rotina todos os dias.
              </p>

              {/* O que você ganha */}
              <div className="bg-[#F9F8F6] border border-[#EAE8E3] rounded-2xl p-5 flex flex-col gap-3">
                <p className="text-xs font-semibold text-[#1A1A1A] uppercase tracking-wide">O que você ganha</p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Menos fadiga visual durante o trabalho",
                    "Ambiente mais profissional e agradável",
                    "Mais foco e concentração",
                    "Instalação simples por USB",
                    "Não ocupa espaço na mesa",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#555]">
                      <span>✅</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-[#888] leading-relaxed italic">
                "Iluminação adequada é uma das mudanças mais simples e eficazes para melhorar seu ambiente."
              </p>

              {/* Botões de compra */}
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1A1A1A] text-white text-sm rounded-full hover:bg-[#333] transition-colors w-full"
                >
                  Comprar na Amazon
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#D0CEC9] text-[#1A1A1A] text-sm rounded-full hover:bg-[#F9F8F6] transition-colors w-full"
                >
                  Comprar no Mercado Livre
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-[11px] text-[#BBBAB5] pl-1 text-center">Links em breve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefícios ── */}
      <section id="beneficios" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-5 font-medium text-center">Benefícios</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] text-center mb-12 leading-snug">
            O que você ganha com a ELEVAR Light Bar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-5 bg-[#F9F8F6] border border-[#EAE8E3] rounded-2xl p-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-[#EAE8E3] text-2xl">
                  {b.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A1A] mb-1">{b.title}</p>
                  <p className="text-xs text-[#888] leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Descrição principal ── */}
      <section className="py-24 px-6 bg-[#F9F8F6]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-5 font-medium">O produto</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-8 leading-snug">Iluminação que trabalha a seu favor</h2>
          <div className="w-10 h-px bg-[#D8D6D1] mb-8" />
          <p className="text-base text-[#555] leading-relaxed mb-4">
            Muitas pessoas passam horas em frente ao computador utilizando iluminação inadequada.
          </p>
          <p className="text-base text-[#555] leading-relaxed mb-4">
            A ELEVAR Light Bar ajuda a criar um ambiente mais confortável, agradável e produtivo sem ocupar espaço na mesa.
          </p>
          <p className="text-base text-[#555] leading-relaxed">
            Uma pequena mudança capaz de melhorar sua rotina todos os dias.
          </p>
        </div>
      </section>

      {/* ── Para quem é indicado ── */}
      <section className="py-20 px-6 bg-white border-t border-[#EAE8E3]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-5 font-medium">Indicação</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-8 leading-snug">Para quem é indicado</h2>
          <div className="w-10 h-px bg-[#D8D6D1] mb-8" />
          <ul className="flex flex-col gap-3">
            {[
              "Home Office",
              "Estudantes",
              "Analistas",
              "Gestores",
              "Profissionais Administrativos",
              "Quem passa horas no computador",
              "Quem deseja melhorar seu setup",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#555]">
                <span className="text-[#1A1A1A]">✔</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Por que a Elevar recomenda ── */}
      <section className="py-24 px-6 bg-[#F9F8F6]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-5 font-medium">Nossa visão</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-8 leading-snug">Por que a Elevar recomenda este produto</h2>
          <div className="w-10 h-px bg-[#D8D6D1] mb-8" />
          <p className="text-base text-[#555] leading-relaxed mb-4">
            Escolhemos esta Light Bar porque ela combina conforto visual, praticidade e estética em um único produto.
          </p>
          <p className="text-base text-[#555] leading-relaxed">
            É uma das formas mais simples de melhorar seu ambiente sem precisar investir em um setup complexo.
          </p>
        </div>
      </section>

      {/* ── Produtos relacionados ── */}
      <section id="relacionados" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-5 font-medium">Explore mais</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-3 leading-snug">Outras soluções para seu ambiente</h2>
          <p className="text-sm text-[#888] mb-10">Conheça outras escolhas da Elevar para o seu dia a dia.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedProducts.map((p) => (
              <div key={p.name} className="bg-[#F9F8F6] border border-[#EAE8E3] rounded-2xl p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#1A1A1A]">{p.name}</p>
                  {p.status === "soon" && (
                    <span className="text-[10px] tracking-widest text-[#BBBAB5] uppercase border border-[#E0DED9] rounded-full px-2 py-0.5">Em breve</span>
                  )}
                  {p.status === "available" && (
                    <span className="text-[10px] tracking-widest text-white bg-[#1A1A1A] rounded-full px-2 py-0.5">Disponível</span>
                  )}
                </div>
                <p className="text-xs text-[#999] leading-relaxed">{p.desc}</p>
                {p.status === "available" && p.href && (
                  <a href={p.href} className="text-xs text-[#1A1A1A] underline underline-offset-4 decoration-[#D0CEC9] hover:decoration-[#1A1A1A] transition-all mt-1">
                    Ver produto →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Aviso afiliado ── */}
      <section className="py-10 px-6 bg-[#F9F8F6] border-t border-[#EAE8E3]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-[#BBBAB5] leading-relaxed">
            Os links desta página podem ser de afiliados. Você não paga nenhum valor adicional, mas podemos receber uma comissão pelas compras qualificadas. Isso nos ajuda a manter nossas recomendações atualizadas.
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-12 px-6 bg-white border-t border-[#EAE8E3]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-col items-center md:items-start gap-0.5">
            <span className="text-base font-semibold tracking-tight text-[#1A1A1A]">▲ ELEVAR</span>
            <span className="text-xs text-[#999]">Melhore seu ambiente. Eleve seus resultados.</span>
          </div>
          <p className="text-xs text-[#CCCAC5]">Elevar Home © 2026</p>
        </div>
      </footer>

    </div>
  );
}
