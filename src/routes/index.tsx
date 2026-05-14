import { createFileRoute } from "@tanstack/react-router";
import {
  Leaf,
  Wind,
  TreePine,
  PawPrint,
  Recycle,
  Sprout,
  CloudOff,
  Shield,
  AlertTriangle,
  ArrowDown,
  Sparkles,
} from "lucide-react";
import heroForest from "@/assets/hero-forest.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import retezatImg from "@/assets/retezat.jpg";
import apuseniImg from "@/assets/apuseni.jpg";
import { Leaves } from "@/components/Leaves";
import { RomaniaMap } from "@/components/RomaniaMap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luna Pădurii în România — Protejează pădurile, protejezi viața" },
      {
        name: "description",
        content:
          "Un site interactiv dedicat pădurilor României: parcuri naționale, biodiversitate, defrișări și cum putem proteja împreună plămânii Carpaților.",
      },
      { property: "og:title", content: "Luna Pădurii în România" },
      {
        property: "og:description",
        content:
          "Descoperă pădurile României, importanța lor și cum le putem proteja.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Leaves />
      <Nav />
      <Hero />
      <main className="relative z-10">
        <MapSection />
        <ImportanceSection />
        <DeforestationSection />
        <ProtectSection />
        <GallerySection />
        <FinalSection />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  const links = [
    { href: "#harta", label: "Harta" },
    { href: "#importanta", label: "Importanță" },
    { href: "#defrisare", label: "Defrișare" },
    { href: "#protectie", label: "Protecție" },
    { href: "#galerie", label: "Galerie" },
  ];
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[min(960px,92vw)] -translate-x-1/2">
      <nav className="glass-strong flex items-center justify-between rounded-full px-5 py-3 shadow-card">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-glow text-primary-foreground shadow-glow">
            <TreePine size={18} />
          </span>
          <span className="hidden sm:inline text-sm tracking-wide">Luna Pădurii</span>
        </a>
        <ul className="flex items-center gap-1 text-xs sm:text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-foreground/70 transition-colors hover:bg-primary/10 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Parallax background layers */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroForest}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full scale-110 object-cover"
          style={{ filter: "saturate(1.1) brightness(0.55)" }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div
          className="absolute inset-0 animate-float"
          style={{
            background:
              "radial-gradient(ellipse at 70% 30%, oklch(0.78 0.18 145 / 0.35), transparent 50%), radial-gradient(ellipse at 20% 70%, oklch(0.85 0.16 130 / 0.25), transparent 50%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex animate-fade-up items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-primary">
          <Sparkles size={14} /> 15 Martie — 15 Aprilie
        </div>
        <h1
          className="mt-6 animate-fade-up text-5xl font-medium leading-[0.95] sm:text-7xl md:text-8xl"
          style={{ animationDelay: "0.1s" }}
        >
          Luna <span className="text-gradient italic">Pădurii</span>
          <br />
          în România
        </h1>
        <p
          className="mx-auto mt-8 max-w-2xl animate-fade-up text-base leading-relaxed text-foreground/75 sm:text-lg"
          style={{ animationDelay: "0.25s" }}
        >
          Pădurile sunt plămânii planetei și casa miilor de specii.
          <br className="hidden sm:block" />
          Descoperă, protejează, transmite mai departe.
        </p>
        <div
          className="mt-10 flex animate-fade-up flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#harta"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-glow px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 animate-glow-pulse"
          >
            <span className="relative z-10">Explore the Forests</span>
            <ArrowDown size={16} className="relative z-10 transition-transform group-hover:translate-y-1" />
            <span
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
            />
          </a>
          <a
            href="#protectie"
            className="rounded-full border border-foreground/20 px-6 py-4 text-sm font-medium text-foreground/90 transition-colors hover:bg-foreground/5"
          >
            Cum putem ajuta?
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-foreground/30 p-1">
          <div className="h-2 w-1 animate-fall rounded-full bg-primary" style={{ animationDuration: "2s" }} />
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary">{eyebrow}</p>
      <h2 className="text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function MapSection() {
  return (
    <section id="harta" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Hartă interactivă"
          title={<>Pădurile <em className="text-gradient not-italic">vii</em> ale României</>}
          subtitle="Apasă pe oricare punct pentru a descoperi un parc național, o pădure străveche sau o zonă afectată de defrișări."
        />
        <RomaniaMap />
      </div>
    </section>
  );
}

const IMPORTANCE = [
  {
    icon: Wind,
    title: "Oxigen",
    text: "Un singur hectar de pădure produce oxigen pentru aproximativ 30 de oameni timp de un an.",
    stat: "30",
    statLabel: "oameni / hectar",
  },
  {
    icon: Leaf,
    title: "Biodiversitate",
    text: "Pădurile României găzduiesc 60% din populația de urși bruni a Europei și mii de specii rare.",
    stat: "60%",
    statLabel: "din urșii Europei",
  },
  {
    icon: CloudOff,
    title: "Climă",
    text: "Pădurile absorb CO₂, reglează temperatura și previn deșertificarea și alunecările de teren.",
    stat: "−2°C",
    statLabel: "în zonele împădurite",
  },
  {
    icon: PawPrint,
    title: "Habitat",
    text: "Casa pentru lupi, râși, cerbi, mistreți, păsări răpitoare și nenumărate insecte polenizatoare.",
    stat: "33k",
    statLabel: "specii protejate",
  },
];

function ImportanceSection() {
  return (
    <section id="importanta" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="De ce contează"
          title={<>De ce avem nevoie de <span className="text-gradient">păduri</span></>}
          subtitle="Pădurile nu sunt doar copaci. Sunt sisteme vii care susțin întreaga planetă."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {IMPORTANCE.map(({ icon: Icon, title, text, stat, statLabel }, i) => (
            <article
              key={title}
              className="group glass relative flex flex-col gap-4 overflow-hidden rounded-3xl p-7 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-all group-hover:bg-primary/40"
                aria-hidden
              />
              <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-glow text-primary-foreground shadow-glow">
                <Icon size={22} />
              </div>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              <div className="mt-auto border-t border-foreground/10 pt-4">
                <div className="text-3xl font-bold text-gradient">{stat}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{statLabel}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeforestationSection() {
  return (
    <section id="defrisare" className="relative overflow-hidden px-6 py-32">
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, oklch(0.55 0.24 25 / 0.25), transparent 60%), radial-gradient(ellipse at 80% 80%, oklch(0.45 0.2 15 / 0.2), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-destructive/40 bg-destructive/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-destructive">
              <AlertTriangle size={14} /> Avertisment
            </div>
            <h2 className="text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
              Tăierile <span className="bg-gradient-warning bg-clip-text italic text-transparent">ilegale</span> distrug viața
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              În fiecare oră, în România dispar hectare întregi de pădure. Defrișarea nu înseamnă doar copaci tăiați — înseamnă specii care își pierd casa, soluri care se erodează, râuri care seacă și sate care se inundă.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { value: "3", label: "hectare / oră", desc: "tăiate ilegal" },
                { value: "366k", label: "ha pierdute", desc: "în 20 de ani" },
                { value: "−40%", label: "păduri virgine", desc: "din 1990" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="glass relative overflow-hidden rounded-2xl p-5"
                  style={{
                    borderColor: "oklch(0.65 0.24 28 / 0.3)",
                  }}
                >
                  <div className="bg-gradient-warning bg-clip-text text-3xl font-bold text-transparent">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-foreground">{s.label}</div>
                  <div className="text-xs text-muted-foreground">{s.desc}</div>
                </div>
              ))}
            </div>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Eroziunea solului și inundații frecvente în zonele defrișate",
                "Dispariția speciilor de animale care depind de pădurile bătrâne",
                "Eliberarea masivă de CO₂ stocat în copaci și sol",
                "Pierderea sursei de apă potabilă pentru comunități întregi",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-destructive shadow-[0_0_10px_oklch(0.65_0.24_28)]" />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="glass-strong overflow-hidden rounded-3xl shadow-elevated">
              <img
                src={apuseniImg}
                alt="Pădure intactă"
                loading="lazy"
                className="h-72 w-full object-cover"
              />
              <div className="grid grid-cols-2 divide-x divide-border">
                <div className="p-5 text-center">
                  <div className="text-xs uppercase tracking-widest text-primary">Înainte</div>
                  <div className="mt-1 text-2xl font-semibold">Pădure vie</div>
                </div>
                <div className="p-5 text-center">
                  <div className="text-xs uppercase tracking-widest text-destructive">După</div>
                  <div className="mt-1 text-2xl font-semibold">Pământ gol</div>
                </div>
              </div>
            </div>
            <div
              className="absolute -bottom-6 -right-6 hidden rotate-3 rounded-2xl bg-destructive p-5 text-destructive-foreground shadow-glow sm:block"
              style={{ boxShadow: "0 0 40px oklch(0.65 0.24 28 / 0.5)" }}
            >
              <div className="text-xs uppercase tracking-widest opacity-80">Cifră alarmantă</div>
              <div className="mt-1 text-3xl font-bold">1 copac / 2s</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PROTECT = [
  {
    icon: Recycle,
    title: "Reciclează",
    text: "Reciclarea hârtiei salvează 17 copaci pentru fiecare tonă procesată. Separă, refolosește, redu.",
    color: "from-emerald-400 to-teal-500",
  },
  {
    icon: Sprout,
    title: "Plantează",
    text: "Un copac plantat astăzi va absorbi peste 1 tonă de CO₂ în decursul vieții sale.",
    color: "from-lime-400 to-green-500",
  },
  {
    icon: CloudOff,
    title: "Reduce poluarea",
    text: "Mergi pe jos, cu bicicleta sau cu transportul în comun. Mai puțină poluare = păduri mai sănătoase.",
    color: "from-cyan-400 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Protejează animalele",
    text: "Susține rezervațiile, raportează braconajul și nu cumpăra produse din specii pe cale de dispariție.",
    color: "from-amber-400 to-yellow-500",
  },
];

function ProtectSection() {
  return (
    <section id="protectie" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Acțiune"
          title={<>Cum putem <span className="text-gradient">proteja</span> pădurile</>}
          subtitle="Patru gesturi simple care, multiplicate cu milioane de oameni, schimbă lumea."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROTECT.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50"
              style={{ minHeight: 280 }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, oklch(0.78 0.18 145 / 0.25), transparent 70%)",
                }}
              />
              <div className="text-5xl font-bold text-gradient opacity-30">
                0{i + 1}
              </div>
              <Icon
                className="mt-4 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                size={32}
              />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  { src: gallery1, alt: "Pădure verde cu ferigi", span: "row-span-2" },
  { src: gallery2, alt: "Urs brun în pădurea Carpaților" },
  { src: gallery3, alt: "Pădure de fag în culorile toamnei" },
  { src: retezatImg, alt: "Lac glaciar Retezat", span: "col-span-2" },
  { src: gallery4, alt: "Pârâu de munte prin pădurea cu mușchi", span: "row-span-2" },
];

function GallerySection() {
  return (
    <section id="galerie" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Galerie"
          title={<>Frumusețea pe care o <span className="text-gradient italic">apărăm</span></>}
        />
        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY.map((g, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-card ${g.span ?? ""}`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
              <figcaption className="absolute bottom-0 left-0 right-0 translate-y-2 p-5 text-sm font-medium opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {g.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-40">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.3 0.08 145 / 0.6), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-4xl text-center">
        <TreePine className="mx-auto text-primary animate-glow-pulse" size={56} />
        <h2 className="mt-8 text-5xl font-medium leading-[1.05] sm:text-7xl md:text-8xl">
          Protect <em className="text-gradient italic">forests</em>,
          <br />
          protect <em className="text-gradient italic">life</em>.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
          Fiecare copac plantat, fiecare gest de grijă față de natură,
          fiecare voce ridicată — contează. Pădurea de mâine începe astăzi, cu tine.
        </p>
        <a
          href="#top"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-gradient-glow px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
        >
          Înapoi la început
          <Leaf size={16} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-border px-6 py-10 text-center text-xs text-muted-foreground">
      <p>
        Proiect școlar de geografie • Luna Pădurii în România • Realizat cu ❤️ pentru natură
      </p>
    </footer>
  );
}
