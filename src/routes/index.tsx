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
  Droplets,
  Mountain,
  BookOpen,
} from "lucide-react";
import heroForest from "@/assets/hero-forest.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import retezatImg from "@/assets/retezat-real.jpg";
import apuseniImg from "@/assets/apuseni-real.jpg";
import leteaImg from "@/assets/letea-real.jpg";
import piatraImg from "@/assets/piatra-craiului-real.jpg";
import deforest1 from "@/assets/deforest-1.jpg";
import deforest2 from "@/assets/deforest-2.jpg";
import { Leaves } from "@/components/Leaves";
import { RomaniaMap } from "@/components/RomaniaMap";
import { NatureSounds } from "@/components/NatureSounds";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luna Pădurii în România — Protejează pădurile, protejezi viața" },
      {
        name: "description",
        content:
          "Site interactiv dedicat pădurilor României: parcuri naționale, biodiversitate, defrișări și cum putem proteja împreună plămânii Carpaților.",
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
      <a
        href="#harta"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground focus:shadow-glow"
      >
        Sari la conținut
      </a>
      <Leaves />
      <Nav />
      <Hero />
      <main id="continut" className="relative z-10">
        <IntroSection />
        <MapSection />
        <ImportanceSection />
        <FactsSection />
        <DeforestationSection />
        <ProtectSection />
        <GallerySection />
        <FinalSection />
      </main>
      <Footer />
      <NatureSounds />
    </div>
  );
}

function Nav() {
  const links = [
    { href: "#harta", label: "Harta" },
    { href: "#importanta", label: "Importanță" },
    { href: "#fapte", label: "Fapte" },
    { href: "#defrisare", label: "Defrișare" },
    { href: "#protectie", label: "Protecție" },
    { href: "#galerie", label: "Galerie" },
  ];
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[min(1040px,94vw)] -translate-x-1/2">
      <nav
        aria-label="Navigare principală"
        className="glass-strong flex items-center justify-between rounded-full px-5 py-3 shadow-card"
      >
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-full bg-gradient-glow text-primary-foreground shadow-glow"
          >
            <TreePine size={18} />
          </span>
          <span className="hidden sm:inline text-sm tracking-wide">Luna Pădurii</span>
        </a>
        <ul className="flex items-center gap-1 text-xs sm:text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-foreground/70 transition-colors hover:bg-primary/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
      aria-label="Introducere"
    >
      <div className="absolute inset-0 -z-10" aria-hidden>
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
          <Sparkles size={14} aria-hidden /> 15 Martie — 15 Aprilie
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
          Descoperă, protejează și transmite mai departe.
        </p>
        <div
          className="mt-10 flex animate-fade-up flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#harta"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-glow px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 animate-glow-pulse focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="relative z-10">Descoperă pădurile</span>
            <ArrowDown
              size={16}
              className="relative z-10 transition-transform group-hover:translate-y-1"
              aria-hidden
            />
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
            />
          </a>
          <a
            href="#protectie"
            className="rounded-full border border-foreground/20 px-6 py-4 text-sm font-medium text-foreground/90 transition-colors hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Cum putem ajuta?
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50"
        aria-hidden
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-foreground/30 p-1">
          <div
            className="h-2 w-1 animate-fall rounded-full bg-primary"
            style={{ animationDuration: "2s" }}
          />
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

function IntroSection() {
  return (
    <section
      id="introducere"
      aria-label="Introducere despre pădurile României"
      className="relative px-6 pt-32"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-primary">
            <BookOpen size={14} className="inline mr-2" aria-hidden />
            Despre proiect
          </p>
          <h2 className="text-3xl font-medium leading-tight sm:text-4xl">
            România — una dintre ultimele patrii ale{" "}
            <span className="text-gradient italic">pădurilor virgine</span> ale Europei
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Aproximativ <strong className="text-foreground">27% din suprafața României</strong> este acoperită de păduri — peste 6,5 milioane de hectare. Carpații românești adăpostesc cele mai întinse păduri seculare din afara Rusiei: stejari de 500 de ani, fagi monumentali și molizi care au crescut neatinși de secole.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            „Luna Pădurii” este o tradiție care datează din 1902, când silvicultorul Spiru Haret a propus o lună dedicată plantării și protejării arborilor. Astăzi, între 15 martie și 15 aprilie, școli, comunități și voluntari plantează milioane de copaci în toată țara.
          </p>
        </div>
        <aside className="grid gap-3">
          {[
            { icon: TreePine, label: "Suprafață împădurită", value: "27%" },
            { icon: Mountain, label: "Vârste de păduri virgine", value: "500+ ani" },
            { icon: Droplets, label: "Râuri care izvorăsc din păduri", value: "60%" },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="glass flex items-center gap-4 rounded-2xl p-5"
            >
              <div
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-glow text-primary-foreground"
                aria-hidden
              >
                <Icon size={20} />
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section id="harta" className="relative px-6 py-32" aria-labelledby="harta-titlu">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary">
            Hartă interactivă
          </p>
          <h2
            id="harta-titlu"
            className="text-4xl font-medium leading-tight sm:text-5xl md:text-6xl"
          >
            Pădurile <em className="text-gradient not-italic">vii</em> ale României
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Apasă (sau folosește săgețile tastaturii) pe oricare punct pentru a descoperi un parc național, o pădure străveche sau o zonă afectată de defrișări.
          </p>
        </div>
        <RomaniaMap />
      </div>
    </section>
  );
}

const IMPORTANCE = [
  {
    icon: Wind,
    title: "Oxigen",
    text: "Un singur hectar de pădure produce oxigen pentru aproximativ 30 de oameni timp de un an și absoarbe peste 6 tone de CO₂ anual.",
    stat: "30",
    statLabel: "oameni / hectar",
  },
  {
    icon: Leaf,
    title: "Biodiversitate",
    text: "Pădurile României găzduiesc 60% din populația de urși bruni, 40% din lupii și 35% din râșii Europei — o concentrație unică pe continent.",
    stat: "60%",
    statLabel: "din urșii Europei",
  },
  {
    icon: CloudOff,
    title: "Climă",
    text: "Pădurile absorb CO₂, reglează temperatura, opresc deșertificarea și previn alunecările de teren și inundațiile.",
    stat: "−2°C",
    statLabel: "în zonele împădurite",
  },
  {
    icon: PawPrint,
    title: "Habitat",
    text: "Casa pentru lupi, râși, cerbi, mistreți, păsări răpitoare, lilieci rari și mii de specii de insecte polenizatoare.",
    stat: "33k",
    statLabel: "specii protejate",
  },
  {
    icon: Droplets,
    title: "Apă curată",
    text: "Rădăcinile pădurilor filtrează natural apa și mențin debitul izvoarelor. Fără ele, peste 60% din râurile României ar seca în timpul verii.",
    stat: "60%",
    statLabel: "izvoare protejate",
  },
  {
    icon: Mountain,
    title: "Soluri stabile",
    text: "Pădurile țin pământul pe loc. O singură coroană de fag bătrân stabilizează tone de sol și previne alunecările de teren.",
    stat: "10x",
    statLabel: "mai puține inundații",
  },
  {
    icon: Sprout,
    title: "Sol fertil",
    text: "Frunzele căzute, fungii și microorganismele crează în 100 de ani doar 1 cm de humus — fundamentul vieții pe uscat.",
    stat: "1 cm",
    statLabel: "humus / 100 ani",
  },
  {
    icon: TreePine,
    title: "Răcoare naturală",
    text: "O pădure matură răcește aerul cu până la 5 °C în zilele caniculare și eliberează zilnic mii de litri de apă în atmosferă.",
    stat: "−5°C",
    statLabel: "în pădure vara",
  },
];

function ImportanceSection() {
  return (
    <section
      id="importanta"
      className="relative px-6 py-32"
      aria-labelledby="importanta-titlu"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary">
            De ce contează
          </p>
          <h2
            id="importanta-titlu"
            className="text-4xl font-medium leading-tight sm:text-5xl md:text-6xl"
          >
            De ce avem nevoie de <span className="text-gradient">păduri</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Pădurile nu sunt doar copaci. Sunt sisteme vii care susțin întreaga planetă.
          </p>
        </div>
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
              <div
                className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-glow text-primary-foreground shadow-glow"
                aria-hidden
              >
                <Icon size={22} />
              </div>
              <h3 className="text-2xl font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              <div className="mt-auto border-t border-foreground/10 pt-4">
                <div className="text-3xl font-bold text-gradient">{stat}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {statLabel}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FactsSection() {
  const facts = [
    {
      title: "Ultimele păduri virgine ale Europei",
      text: "Peste 65% din pădurile virgine ale Uniunii Europene se află în Carpații românești — un patrimoniu natural unic pe continent.",
    },
    {
      title: "Stejarii de 500 de ani",
      text: "În Pădurea Letea cresc stejari brumării vechi de peste 5 secole, alături de liane de origine mediteraneană.",
    },
    {
      title: "Cele mai mari mamifere ale Europei",
      text: "România are cea mai numeroasă populație de urși bruni din Europa (peste 6.000 exemplare) și sute de lupi și râși.",
    },
    {
      title: "200 de milioane de copaci pe an",
      text: "Atât absoarbe România anual prin păduri — echivalentul a aproape 27 de milioane de tone de CO₂.",
    },
    {
      title: "Fagi UNESCO",
      text: "12 păduri seculare de fag din România sunt protejate ca patrimoniu mondial UNESCO din 2017.",
    },
    {
      title: "Apă curată pentru milioane",
      text: "Pădurile filtrează și mențin apele dulci. 60% din izvoarele țării încep sub coronamentul forestier.",
    },
  ];
  return (
    <section
      id="fapte"
      className="relative px-6 py-32"
      aria-labelledby="fapte-titlu"
    >
      <div
        className="absolute inset-0 -z-10 opacity-40"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, oklch(0.78 0.18 145 / 0.18), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary">
            Fapte uimitoare
          </p>
          <h2
            id="fapte-titlu"
            className="text-4xl font-medium leading-tight sm:text-5xl md:text-6xl"
          >
            Știai că <span className="text-gradient italic">România</span>...
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {facts.map((f, i) => (
            <article
              key={f.title}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div
                className="text-gradient text-5xl font-bold opacity-30"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeforestationSection() {
  return (
    <section
      id="defrisare"
      className="relative overflow-hidden px-6 py-32"
      aria-labelledby="defrisare-titlu"
    >
      <div
        className="absolute inset-0 -z-10 opacity-50"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, oklch(0.55 0.24 25 / 0.25), transparent 60%), radial-gradient(ellipse at 80% 80%, oklch(0.45 0.2 15 / 0.2), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-destructive/40 bg-destructive/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-destructive">
              <AlertTriangle size={14} aria-hidden /> Avertisment
            </div>
            <h2
              id="defrisare-titlu"
              className="text-4xl font-medium leading-tight sm:text-5xl md:text-6xl"
            >
              Tăierile{" "}
              <span className="text-gradient-warning italic">ilegale</span>{" "}
              distrug viața
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              În fiecare oră, în România dispar hectare întregi de pădure. Defrișarea nu înseamnă doar copaci tăiați — înseamnă specii care își pierd casa, soluri care se erodează, râuri care seacă și sate care se inundă. Conform investigațiilor Greenpeace România și Agent Green, peste <strong className="text-foreground">38 de milioane de metri cubi de lemn</strong> au fost tăiate ilegal în ultimii 20 de ani.
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
                  style={{ borderColor: "oklch(0.65 0.24 28 / 0.3)" }}
                >
                  <div
                    className="text-gradient-warning text-3xl font-bold"
                    aria-hidden
                  >
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-foreground">
                    <span className="sr-only">{s.value} </span>
                    {s.label}
                  </div>
                  <div className="text-xs text-muted-foreground">{s.desc}</div>
                </div>
              ))}
            </div>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Eroziunea solului și inundații frecvente în zonele defrișate",
                "Dispariția speciilor de animale care depind de pădurile bătrâne (urs, lup, râs, cocoș de munte)",
                "Eliberarea masivă de CO₂ stocat în copaci și sol — accelerează schimbările climatice",
                "Pierderea sursei de apă potabilă pentru comunități întregi",
                "Pagube economice de peste 6 miliarde de euro estimate de Curtea de Conturi",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-destructive shadow-[0_0_10px_oklch(0.65_0.24_28)]"
                  />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="glass-strong overflow-hidden rounded-3xl shadow-elevated">
              <div className="grid grid-cols-2">
                <img
                  src={apuseniImg}
                  alt="Pădure intactă din Munții Apuseni"
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
                <img
                  src={deforest1}
                  alt="Versant defrișat din Carpați — cioturi pe pământ gol"
                  loading="lazy"
                  className="h-56 w-full object-cover"
                />
              </div>
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

            <div className="mt-4 overflow-hidden rounded-3xl shadow-elevated">
              <img
                src={deforest2}
                alt="Vedere aeriană a unei văi carpatice cu defrișări masive"
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <p className="bg-card/80 px-4 py-3 text-xs italic text-muted-foreground backdrop-blur">
                Vedere aeriană — drumurile forestiere și parchetele tăiate brăzdează pădurile Carpaților.
              </p>
            </div>

            <div
              className="mt-6 inline-flex rotate-1 items-center gap-4 rounded-2xl bg-destructive p-5 text-destructive-foreground shadow-glow"
              style={{ boxShadow: "0 0 40px oklch(0.65 0.24 28 / 0.5)" }}
              aria-label="Cifră alarmantă: un copac la fiecare două secunde"
            >
              <AlertTriangle size={28} aria-hidden className="shrink-0" />
              <div>
                <div className="text-[10px] uppercase tracking-widest opacity-80">Cifră alarmantă</div>
                <div className="mt-0.5 text-2xl font-bold leading-none">1 copac / 2s</div>
              </div>
            </div>
          </div>
        </div>

        {/* Extra info row */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Cauze principale",
              items: [
                "Tăieri ilegale și braconaj forestier",
                "Corupție în sistemul silvic și firme-fantomă",
                "Cerere mare de lemn (mobilă, peleți, hârtie)",
                "Lipsa monitorizării din satelit până în 2016",
              ],
            },
            {
              title: "Impact ecologic",
              items: [
                "Dispar habitatele urșilor și râșilor",
                "Râurile devin imprevizibile — viituri și secete",
                "Pierderea biodiversității unice (peste 40 specii rare)",
                "Eliberare de CO₂ — accelerează încălzirea globală",
              ],
            },
            {
              title: "Impact uman",
              items: [
                "Inundații devastatoare (2005, 2008, 2010, 2020)",
                "Alunecări de teren peste sate întregi",
                "Aer și apă potabilă de calitate scăzută",
                "Pierderi economice de 6 miliarde € (Curtea de Conturi)",
              ],
            },
          ].map((block) => (
            <div
              key={block.title}
              className="glass rounded-2xl p-6"
              style={{ borderColor: "oklch(0.65 0.24 28 / 0.25)" }}
            >
              <h3 className="text-gradient-warning mb-4 text-lg font-semibold">
                {block.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-foreground/85">
                    <span
                      aria-hidden
                      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-destructive"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-medium">
            Cronologia <span className="text-gradient-warning italic">defrișărilor</span> în România
          </h3>
          <ol className="relative grid gap-6 md:grid-cols-4">
            {[
              { year: "1990", text: "Începutul retrocedărilor — peste 3,5 milioane ha de pădure trec în proprietate privată, fără control real." },
              { year: "2005", text: "Inundații catastrofale în Banat și Maramureș — direct legate de defrișările masive din amonte." },
              { year: "2015", text: "Investigația Out of Control (EIA) demonstrează tăieri ilegale industriale în Carpați." },
              { year: "2019", text: "Doi pădurari sunt uciși apărând pădurea — Liviu Pop (Maramureș) și Răducu Gorcioaia (Suceava)." },
            ].map((t) => (
              <li
                key={t.year}
                className="glass relative rounded-2xl p-5"
                style={{ borderColor: "oklch(0.65 0.24 28 / 0.3)" }}
              >
                <div className="text-gradient-warning text-3xl font-bold">{t.year}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const PROTECT = [
  {
    icon: Recycle,
    title: "Reciclează",
    text: "Reciclarea unei tone de hârtie salvează 17 copaci și 26.000 litri de apă. Separă, refolosește, redu consumul.",
  },
  {
    icon: Sprout,
    title: "Plantează",
    text: "Un copac plantat astăzi va absorbi peste 1 tonă de CO₂ în decursul vieții sale. Participă la acțiunile de împădurire din Luna Pădurii.",
  },
  {
    icon: CloudOff,
    title: "Reduce poluarea",
    text: "Mergi pe jos, cu bicicleta sau cu transportul în comun. Mai puțină poluare înseamnă păduri mai sănătoase și aer mai curat.",
  },
  {
    icon: Shield,
    title: "Protejează animalele",
    text: "Susține rezervațiile, raportează braconajul la 112 sau Inspectorul Pădurii și nu cumpăra produse din specii pe cale de dispariție.",
  },
];

function ProtectSection() {
  return (
    <section
      id="protectie"
      className="relative px-6 py-32"
      aria-labelledby="protectie-titlu"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary">Acțiune</p>
          <h2
            id="protectie-titlu"
            className="text-4xl font-medium leading-tight sm:text-5xl md:text-6xl"
          >
            Cum putem <span className="text-gradient">proteja</span> pădurile
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Patru gesturi simple care, multiplicate cu milioane de oameni, schimbă lumea.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROTECT.map(({ icon: Icon, title, text }, i) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50"
              style={{ minHeight: 280 }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, oklch(0.78 0.18 145 / 0.25), transparent 70%)",
                }}
              />
              <div
                className="text-5xl font-bold text-gradient opacity-30"
                aria-hidden
              >
                0{i + 1}
              </div>
              <Icon
                aria-hidden
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
  { src: gallery1, alt: "Pădure verde cu ferigi luminate de soare", span: "row-span-2" },
  { src: gallery2, alt: "Urs brun în pădurea Carpaților" },
  { src: gallery3, alt: "Pădure de fag în culorile toamnei" },
  { src: retezatImg, alt: "Lac glaciar în Parcul Național Retezat", span: "col-span-2" },
  { src: gallery4, alt: "Pârâu de munte prin pădurea cu mușchi", span: "row-span-2" },
  { src: gallery5, alt: "Pădure de fag la răsărit, raze de soare prin ceață" },
  { src: gallery6, alt: "Cerb carpatin în luminișul de toamnă" },
  { src: gallery8, alt: "Vedere aeriană a Carpaților în culorile toamnei", span: "col-span-2" },
  { src: piatraImg, alt: "Creasta calcaroasă a Pietrei Craiului" },
  { src: gallery7, alt: "Râu de munte cristalin prin pădurea de molid" },
  { src: leteaImg, alt: "Pădurea Letea — stejari seculari și liane" },
];

function GallerySection() {
  return (
    <section id="galerie" className="relative px-6 py-32" aria-labelledby="galerie-titlu">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-primary">Galerie</p>
          <h2
            id="galerie-titlu"
            className="text-4xl font-medium leading-tight sm:text-5xl md:text-6xl"
          >
            Frumusețea pe care o <span className="text-gradient italic">apărăm</span>
          </h2>
        </div>
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
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90"
              />
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
    <section
      className="relative isolate overflow-hidden px-6 py-40"
      aria-label="Mesaj final"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.3 0.08 145 / 0.6), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-4xl text-center">
        <TreePine
          aria-hidden
          className="mx-auto text-primary animate-glow-pulse"
          size={56}
        />
        <h2 className="mt-8 text-5xl font-medium leading-[1.05] sm:text-7xl md:text-8xl">
          Protejează <em className="text-gradient italic">pădurile</em>,
          <br />
          protejezi <em className="text-gradient italic">viața</em>.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
          Fiecare copac plantat, fiecare gest de grijă față de natură,
          fiecare voce ridicată — contează. Pădurea de mâine începe astăzi, cu tine.
        </p>
        <a
          href="#top"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-gradient-glow px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Înapoi la început
          <Leaf size={16} aria-hidden />
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
      <p className="mt-2 opacity-70">
        Imagini: Wikimedia Commons (CC) • Date: Romsilva, Greenpeace România, Agent Green, UNESCO
      </p>
    </footer>
  );
}
