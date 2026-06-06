import { useState, useEffect } from "react";
import { ExternalLink, Menu, X, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";

// ─── DADOS DO PRODUTO ───────────────────────────────────────────────
// Para adicionar novas imagens: inclua o caminho em productImages abaixo
const productImages = [
  {
    src: "/images/suporte-notebook-2.jpg",
    alt: "Suporte articulado com notebook em uso — trabalhe com mais conforto e produtividade",
    label: "Trabalhe com mais conforto e produtividade",
  },
  {
    src: "/images/suporte-notebook.jpg",
    alt: "Suporte articulado com altura ajustável para postura ideal",
    label: "Ajuste a altura ideal para sua postura",
  },
  {
    src: "/images/suporte-notebook-3.jpg",
    alt: "Estrutura metálica resistente e estável do suporte articulado",
    label: "Estrutura metálica resistente e estável",
  },
  {
    src: "/images/suporte-notebook-4.jpg",
    alt: "Base giratória 360° do suporte para notebook — máxima praticidade",
    label: "Base giratória 360° para máxima praticidade",
  },
  {
    src: "/images/suporte-notebook-5.jpg",
    alt: "Suporte para notebook trazendo mais organização e espaço na mesa",
    label: "Mais organização e espaço na sua mesa",
  },
  {
    src: "/images/suporte-notebook-6.jpg",
    alt: "Suporte articulado ideal para home office, estudos e trabalho remoto",
    label: "Ideal para home office, estudos e trabalho remoto",
  },
];

const benefits = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4C14 4 7 9 7 16a7 7 0 0014 0c0-7-7-12-7-12Z" stroke="#1A1A1A" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M14 20v-6" stroke="#1A1A1A" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: "Mais conforto para trabalhar",
    desc: "A tela elevada reduz a tensão no pescoço e nos ombros durante longas jornadas.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="20" height="14" rx="2" stroke="#1A1A1A" strokeWidth="1.4"/>
        <path d="M10 8V6a2 2 0 014 0v2" stroke="#1A1A1A" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M14 15v2" stroke="#1A1A1A" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="2" stroke="#1A1A1A" strokeWidth="1.4"/>
      </svg>
    ),
    title: "Melhor postura",
    desc: "Posiciona o notebook na altura ideal dos olhos, favorecendo uma postura mais saudável.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="9" height="9" rx="1.5" stroke="#1A1A1A" strokeWidth="1.4"/>
        <rect x="15" y="4" width="9" height="9" rx="1.5" stroke="#1A1A1A" strokeWidth="1.4"/>
        <rect x="4" y="15" width="9" height="9" rx="1.5" stroke="#1A1A1A" strokeWidth="1.4"/>
        <rect x="15" y="15" width="9" height="9" rx="1.5" stroke="#1A1A1A" strokeWidth="1.4"/>
      </svg>
    ),
    title: "Mais espaço na mesa",
    desc: "Com o notebook elevado, você libera área útil para teclado, mouse e outros itens.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M6 22V12l8-8 8 8v10a1 1 0 01-1 1H7a1 1 0 01-1-1Z" stroke="#1A1A1A" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M11 23v-6h6v6" stroke="#1A1A1A" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Ideal para home office",
    desc: "Compatível com notebooks de diferentes tamanhos. Dobra facilmente para guardar.",
  },
];

const futureProducts = [
  { name: "Monitor Light Bar", desc: "Iluminação para tela sem reflexo", soon: true },
  { name: "Organizador de Cabos", desc: "Mesa limpa, mente limpa", soon: true },
  { name: "Suporte para Headset", desc: "Seu headset sempre à mão", soon: true },
];

// ─── COMPONENTE PRINCIPAL ────────────────────────────────────────────
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

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
          <button onClick={() => scrollTo("hero")} className="flex flex-col items-start leading-none">
            <span className="text-xl font-semibold tracking-tight text-[#1A1A1A]">▲ ELEVAR</span>
            <span className="text-[10px] tracking-widest text-[#999] uppercase">Home</span>
          </button>
          <nav className="hidden md:flex items-center gap-8">
            {[{ label: "Início", id: "hero" }, { label: "Sobre", id: "sobre" }, { label: "Escolhas", id: "escolhas" }].map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-sm text-[#666] hover:text-[#1A1A1A] transition-colors">{item.label}</button>
            ))}
            <button onClick={() => scrollTo("produto")} className="text-sm px-4 py-2 bg-[#1A1A1A] text-white rounded-full hover:bg-[#333] transition-colors">Produto Destaque</button>
          </nav>
          <button className="md:hidden text-[#1A1A1A]" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#E8E6E1] px-6 py-6 flex flex-col gap-5">
            {[{ label: "Início", id: "hero" }, { label: "Sobre a Elevar", id: "sobre" }, { label: "Escolhas da Elevar", id: "escolhas" }, { label: "Produto destaque", id: "produto" }].map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-left text-base text-[#1A1A1A] font-medium">{item.label}</button>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-8 font-medium">Elevar Home</p>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight max-w-3xl text-[#1A1A1A]">
          Melhore seu ambiente.<br />
          <span className="text-[#888]">Eleve seus resultados.</span>
        </h1>
        <p className="mt-8 text-base md:text-lg text-[#666] max-w-lg leading-relaxed">
          Recomendações para quem busca mais conforto, organização e produtividade no dia a dia. Pequenas mudanças no ambiente podem gerar mais foco e uma rotina mais agradável.
        </p>
        <button onClick={() => scrollTo("escolhas")} className="mt-10 px-8 py-3.5 bg-[#1A1A1A] text-white text-sm rounded-full hover:bg-[#333] transition-colors">
          Conhecer as Escolhas da Elevar
        </button>
        <button onClick={() => scrollTo("sobre")} className="mt-10 text-[#CCCAC5] hover:text-[#999] transition-colors" aria-label="Rolar para baixo">
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </section>

      {/* ── Sobre ── */}
      <section id="sobre" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-5 font-medium">Sobre a Elevar</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] mb-8 max-w-xl leading-snug">Seu ambiente influencia seus resultados.</h2>
          <div className="w-10 h-px bg-[#D8D6D1] mb-8" />
          <p className="text-base md:text-lg text-[#555] leading-relaxed max-w-2xl">
            Passamos horas trabalhando, estudando e produzindo. Acreditamos que um ambiente mais confortável, organizado e funcional pode contribuir para dias melhores e resultados melhores. A Elevar existe para ajudar você a encontrar soluções que realmente façam diferença na sua rotina.
          </p>
        </div>
      </section>

      {/* ── O que valorizamos ── */}
      <section className="py-20 px-6 bg-[#F9F8F6]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-10 text-center font-medium">O que valorizamos</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { label: "Conforto", desc: "Ambientes que acolhem e reduzem o cansaço.", icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M3 14c0-3 1.5-5 4-6l1-4h6l1 4c2.5 1 4 3 4 6v1H3v-1Z" stroke="#888" strokeWidth="1.3" strokeLinejoin="round"/><path d="M1 18h20" stroke="#888" strokeWidth="1.3" strokeLinecap="round"/></svg> },
              { label: "Organização", desc: "Espaços funcionais que facilitam a rotina.", icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="#888" strokeWidth="1.3"/><rect x="12" y="3" width="7" height="7" rx="1.5" stroke="#888" strokeWidth="1.3"/><rect x="3" y="12" width="7" height="7" rx="1.5" stroke="#888" strokeWidth="1.3"/><rect x="12" y="12" width="7" height="7" rx="1.5" stroke="#888" strokeWidth="1.3"/></svg> },
              { label: "Qualidade", desc: "Produtos que entregam o que prometem.", icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="8" stroke="#888" strokeWidth="1.3"/><path d="M7.5 11l2.5 2.5 4.5-4.5" stroke="#888" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { label: "Produtividade", desc: "Soluções que apoiam foco e resultados.", icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M11 3v4M11 15v4M3 11h4M15 11h4" stroke="#888" strokeWidth="1.3" strokeLinecap="round"/><circle cx="11" cy="11" r="3" stroke="#888" strokeWidth="1.3"/></svg> },
            ].map((v) => (
              <div key={v.label} className="bg-white border border-[#EAE8E3] rounded-2xl p-5 md:p-6 flex flex-col gap-3">
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
          <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-5 font-medium">Recomendações</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1A1A] mb-8 leading-snug">Escolhas da Elevar</h2>
          <div className="w-10 h-px bg-[#D8D6D1] mb-8" />
          <p className="text-base md:text-lg text-[#555] leading-relaxed">
            Pesquisamos e selecionamos produtos que ajudam a criar ambientes mais confortáveis, organizados e produtivos. Nosso foco não é quantidade. Nosso foco é recomendar soluções que realmente façam diferença na experiência diária.
          </p>
          <button onClick={() => scrollTo("produto")} className="mt-8 text-sm text-[#1A1A1A] underline underline-offset-4 decoration-[#D0CEC9] hover:decoration-[#1A1A1A] transition-all">
            Ver produto em destaque ↓
          </button>
        </div>
      </section>

      {/* ── Produto Destaque ── */}
      <section id="produto" className="py-20 px-6 bg-[#F9F8F6]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-10 text-center font-medium">Escolha da Semana</p>

          <div className="bg-white border border-[#EAE8E3] rounded-3xl overflow-hidden md:grid md:grid-cols-2">

            {/* ── Galeria de imagens ── */}
            <div className="bg-[#F7F6F4] flex flex-col">
              {/* Imagem principal */}
              <div className="relative flex items-center justify-center p-6 md:p-8 min-h-[300px] md:min-h-[420px]">
                <img
                  key={activeImage}
                  src={productImages[activeImage].src}
                  alt={productImages[activeImage].alt}
                  className="w-full h-full object-contain max-h-[360px]"
                />
                {/* Setas */}
                <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors" aria-label="Imagem anterior">
                  <ChevronLeft className="w-4 h-4 text-[#555]" />
                </button>
                <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors" aria-label="Próxima imagem">
                  <ChevronRight className="w-4 h-4 text-[#555]" />
                </button>
                {/* Label da imagem ativa */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <p className="text-[10px] text-[#555] font-medium whitespace-nowrap">{productImages[activeImage].label}</p>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 px-4 pb-5 justify-center flex-wrap">
                {productImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${activeImage === i ? "border-[#1A1A1A] opacity-100" : "border-transparent opacity-40 hover:opacity-70"}`}
                    aria-label={`Ver imagem ${i + 1}`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Contador */}
              <div className="flex justify-center pb-4 gap-1.5">
                {productImages.map((_, i) => (
                  <span key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${activeImage === i ? "bg-[#1A1A1A]" : "bg-[#D0CEC9]"}`} />
                ))}
              </div>
            </div>

            {/* ── Conteúdo ── */}
            <div className="p-8 md:p-12 flex flex-col justify-center gap-6">
              <div>
                <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-2 font-medium">Ergonomia</p>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] leading-snug">Suporte Articulado para Notebook</h3>
              </div>

              <p className="text-sm text-[#666] leading-relaxed">
                Seu ambiente influencia diretamente seu conforto, foco e produtividade.
                Este suporte ajuda a posicionar o notebook na altura ideal, melhora a postura, libera espaço na mesa
                e torna seu ambiente mais organizado. Uma pequena mudança que pode fazer diferença todos os dias.
              </p>

              <ul className="flex flex-col gap-3">
                {[
                  "Melhora a postura durante o uso",
                  "Ajuda a reduzir desconfortos causados por telas baixas",
                  "Libera espaço útil no ambiente",
                  "Contribui para uma mesa mais organizada",
                  "Ajuste flexível para diferentes necessidades",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#555]">
                    <span className="mt-[3px] w-4 h-4 rounded-full border border-[#D0CEC9] flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* O que você ganha */}
              <div className="bg-[#F9F8F6] border border-[#EAE8E3] rounded-2xl p-5 flex flex-col gap-3">
                <p className="text-xs font-semibold text-[#1A1A1A] uppercase tracking-wide">O que você ganha com esse suporte</p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Mais conforto durante o trabalho",
                    "Melhor postura ao usar o notebook",
                    "Mais espaço e organização na mesa",
                    "Ambiente mais profissional",
                    "Mais foco e produtividade",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#555]">
                      <span className="text-[#1A1A1A]">✅</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <p className="text-xs text-[#888] leading-relaxed italic">
                  "Pequenas mudanças no ambiente podem gerar mais conforto, foco e produtividade todos os dias."
                </p>
                <a href="https://amzn.to/4ucGJg1" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1A1A1A] text-white text-sm rounded-full hover:bg-[#333] transition-colors w-full md:w-fit mt-2">
                  Conhecer o Produto
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <p className="text-[11px] text-[#BBBAB5] pl-1">Sem custo adicional para você.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefícios visuais ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-5 font-medium text-center">Benefícios</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] text-center mb-12 leading-snug">O que muda no seu dia a dia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-5 bg-[#F9F8F6] border border-[#EAE8E3] rounded-2xl p-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-[#EAE8E3]">
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

      {/* ── Por que a Elevar recomenda ── */}
      <section className="py-24 px-6 bg-[#F9F8F6]">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-5 font-medium">Nossa visão</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-8 leading-snug">Por que a Elevar recomenda este produto</h2>
          <div className="w-10 h-px bg-[#D8D6D1] mb-8" />
          <p className="text-base text-[#555] leading-relaxed mb-6">
            Antes de recomendar qualquer produto, analisamos três critérios: impacto real no conforto e produtividade, qualidade de construção e relação custo-benefício honesta.
          </p>
          <p className="text-base text-[#555] leading-relaxed">
            Este suporte atende aos três. Ele é simples, funcional e faz uma diferença real na rotina de quem passa horas na frente do computador. Não é sobre gadget ou tendência — é sobre tornar o seu dia a dia mais confortável e eficiente.
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
              "Quem trabalha em home office",
              "Quem passa muitas horas no notebook",
              "Estudantes",
              "Profissionais administrativos",
              "Analistas e gestores",
              "Quem quer montar um setup mais produtivo",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#555]">
                <span className="text-[#1A1A1A] text-base">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Outras soluções ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-widest text-[#BBBAB5] uppercase mb-5 font-medium">Em breve</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-3 leading-snug">Outras soluções para seu ambiente</h2>
          <p className="text-sm text-[#888] mb-10">Estamos pesquisando as próximas recomendações da Elevar.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {futureProducts.map((p) => (
              <div key={p.name} className="bg-[#F9F8F6] border border-[#EAE8E3] rounded-2xl p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-[#1A1A1A]">{p.name}</p>
                  {p.soon && (
                    <span className="text-[10px] tracking-widest text-[#BBBAB5] uppercase border border-[#E0DED9] rounded-full px-2 py-0.5">Em breve</span>
                  )}
                </div>
                <p className="text-xs text-[#999] leading-relaxed">{p.desc}</p>
                <div className="h-px bg-[#EAE8E3] mt-1" />
                <p className="text-xs text-[#BBBAB5]">Avise-me quando disponível</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Aviso afiliado ── */}
      <section className="py-10 px-6 bg-[#F9F8F6] border-t border-[#EAE8E3]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-[#BBBAB5] leading-relaxed">
            Os links desta página podem ser de afiliados. Você não paga nenhum valor adicional, mas podemos receber uma comissão pelas compras qualificadas. Isso nos ajuda a manter nossas recomendações atualizadas e continuar encontrando soluções úteis para nossos visitantes.
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

