import { useState, useRef, useEffect, useCallback, useId } from "react";
import retezatImg from "@/assets/retezat-real.jpg";
import apuseniImg from "@/assets/apuseni-real.jpg";
import leteaImg from "@/assets/letea-real.jpg";
import piatraImg from "@/assets/piatra-craiului-real.jpg";
import maramuresImg from "@/assets/maramures.jpg";
import domogledImg from "@/assets/domogled.jpg";
import calimaniImg from "@/assets/calimani.jpg";
import rodnaImg from "@/assets/rodna.jpg";
import semenicImg from "@/assets/semenic.jpg";
import suceavaImg from "@/assets/suceava-deforest.jpg";
import fagarasImg from "@/assets/fagaras-deforest.jpg";

type Location = {
  id: string;
  name: string;
  shortName: string;
  /* Position as % within the SVG viewBox area */
  x: number;
  y: number;
  image: string;
  imageCredit: string;
  area: string;
  founded: string;
  description: string;
  wildlife: string[];
  importance: string;
  warning?: boolean;
};

const LOCATIONS: Location[] = [
  {
    id: "retezat",
    name: "Parcul Național Retezat",
    shortName: "Retezat",
    x: 30,
    y: 62,
    image: retezatImg,
    imageCredit: "Foto: Wikimedia Commons",
    area: "38.138 ha",
    founded: "1935 — primul parc național al României",
    description:
      "Cunoscut drept „țara apelor albastre”, Retezatul găzduiește peste 80 de lacuri glaciare, printre care Bucura — cel mai mare lac glaciar din țară (8,8 ha) — și Zănoaga, cel mai adânc (29 m). Aici cresc peste 1.190 de specii de plante, multe dintre ele endemice.",
    wildlife: [
      "Capră neagră",
      "Marmotă alpină",
      "Acvilă de munte",
      "Floarea de colț",
      "Zâmbru (Pinus cembra)",
      "Urs brun",
    ],
    importance:
      "Rezervație a Biosferei UNESCO din 1979. Adăpostește una dintre cele mai bogate flore alpine din Europa și ultimele păduri virgine de molid din Carpați.",
  },
  {
    id: "apuseni",
    name: "Munții Apuseni",
    shortName: "Apuseni",
    x: 32,
    y: 38,
    image: apuseniImg,
    imageCredit: "Foto: Wikimedia Commons",
    area: "75.784 ha",
    founded: "Parc Natural din 2000",
    description:
      "Un labirint subteran cu peste 1.500 de peșteri (Scărișoara, Meziad, Urșilor), chei calcaroase spectaculoase și păduri seculare de fag și molid. Ascunde Cetățile Ponorului — un sistem de chei și avene unic în Europa.",
    wildlife: [
      "Urs brun",
      "Râs eurasiatic",
      "Liliacul mic cu potcoavă",
      "Tisă (Taxus baccata)",
      "Cocoș de munte",
      "Salamandră de foc",
    ],
    importance:
      "Rezervorul carstic și hidrologic al Transilvaniei — sursă de apă curată pentru milioane de oameni. Peșterile adăpostesc gheață veche de mii de ani.",
  },
  {
    id: "letea",
    name: "Pădurea Letea",
    shortName: "Letea",
    x: 88,
    y: 52,
    image: leteaImg,
    imageCredit: "Foto: Wikimedia Commons",
    area: "5.247 ha",
    founded: "1938 — cea mai veche rezervație naturală din România",
    description:
      "Cea mai nordică pădure subtropicală din Europa, situată pe grindurile dintre brațele Sulina și Chilia ale Dunării. Stejarii ei seculari, înfășurați în liane (viță sălbatică, hamei), trăiesc între dune de nisip și mlaștini.",
    wildlife: [
      "Cai sălbăticiți (peste 500 exemplare)",
      "Vulturul codalb",
      "Stejar brumăriu",
      "Liană (Periploca graeca)",
      "Pelican comun",
      "Șarpe rău (Coluber caspius)",
    ],
    importance:
      "Ecosistem unic în Europa — singurul loc din lume cu acest mozaic de pădure de stejar, dune de nisip și liane mediteraneene. Inclus în Rezervația Biosferei Delta Dunării (UNESCO).",
  },
  {
    id: "piatra-craiului",
    name: "Parcul Național Piatra Craiului",
    shortName: "Piatra Craiului",
    x: 58,
    y: 55,
    image: piatraImg,
    imageCredit: "Foto: Wikimedia Commons",
    area: "14.781 ha",
    founded: "Parc Național din 1990",
    description:
      "O creastă calcaroasă de 25 km — cea mai lungă și impresionantă din Carpați — cu vârful Vârful La Om (2.238 m). Pe versanți cresc păduri de molid, fag și jnepeniș, iar în văi se ascund chei spectaculoase precum Zărneștilor și Dâmbovicioarei.",
    wildlife: [
      "Capră neagră",
      "Garofița Pietrei Craiului (endemic mondial)",
      "Cocoș de munte",
      "Lup carpatin",
      "Râs",
      "Acvilă de stâncă",
    ],
    importance:
      "Endemism vegetal — peste 1.100 de specii de plante, dintre care Garofița Pietrei Craiului (Dianthus callizonus) nu crește nicăieri altundeva pe Pământ.",
  },
  {
    id: "maramures",
    name: "Maramureș — zonă defrișată",
    shortName: "Maramureș",
    x: 45,
    y: 18,
    image: maramuresImg,
    imageCredit: "Foto: imagine documentară",
    area: "peste 340 ha tăiate doar într-un singur dosar (2020)",
    founded: "Zonă afectată de tăieri ilegale masive",
    description:
      "Una dintre cele mai afectate regiuni din Europa de tăieri ilegale. Mii de hectare de pădure virgină au dispărut în ultimii 20 de ani, deși Maramureșul găzduiește unele dintre ultimele păduri seculare ale continentului. Investigațiile autorităților au descoperit prejudicii de ordinul milioanelor de euro.",
    wildlife: [
      "Urs brun (în declin accentuat)",
      "Lup carpatin",
      "Cerb carpatin",
      "Salamandră",
      "Cocoș de munte (vulnerabil)",
      "Bufniță de pădure",
    ],
    importance:
      "Pierderea pădurilor virgine afectează clima locală, biodiversitatea, debitul râurilor și siguranța comunităților — defrișările au dus la inundații majore în 2008 și 2010.",
    warning: true,
  },
  {
    id: "domogled",
    name: "Parcul Național Domogled-Valea Cernei",
    shortName: "Domogled",
    x: 26,
    y: 70,
    image: domogledImg,
    imageCredit: "Foto: documentar",
    area: "61.211 ha — cel mai mare parc național din România",
    founded: "Parc Național din 1990 (rezervație din 1932)",
    description:
      "Un canion de calcar lung de 84 km, sculptat de râul Cerna între Munții Mehedinți și Cernei. Aici trăiește pinul negru de Banat (Pinus nigra var. banatica), endemic mondial, alături de cea mai mare diversitate de fluturi din Europa — peste 1.500 de specii.",
    wildlife: [
      "Pin negru de Banat (endemic)",
      "Vipera cu corn",
      "Scorpionul carpatin",
      "Liliacul mediteraneean",
      "Acvilă țipătoare mică",
      "Peste 1.500 specii de fluturi",
    ],
    importance:
      "Microclimat sub-mediteraneean unic la nord de Dunăre — temperaturi de iarnă blânde permit supraviețuirea unor specii termofile rare. Inclus în rețeaua Natura 2000.",
  },
  {
    id: "calimani",
    name: "Parcul Național Călimani",
    shortName: "Călimani",
    x: 58,
    y: 30,
    image: calimaniImg,
    imageCredit: "Foto: documentar",
    area: "24.041 ha",
    founded: "Parc Național din 2000",
    description:
      "Cel mai mare crater vulcanic din Europa (10 km diametru), inactiv de 9 milioane de ani. Pe versanți cresc zâmbri seculari (Pinus cembra) — unii trecuți de 500 de ani — și apare fenomenul „12 Apostoli”, coloane andezitice modelate de eroziune.",
    wildlife: [
      "Zâmbru (Pinus cembra) — peste 500 ani",
      "Cocoș de munte",
      "Urs brun",
      "Râs",
      "Floare de colț",
      "Ciuf de pădure",
    ],
    importance:
      "Singurul parc din România cu vegetație vulcanică și mlaștini de turbă oligotrofe — arhive climatice cu polen vechi de 10.000 de ani. Vechea exploatare de sulf, închisă în 1997, a lăsat răni încă vizibile.",
  },
  {
    id: "rodna",
    name: "Parcul Național Munții Rodnei",
    shortName: "Rodna",
    x: 50,
    y: 22,
    image: rodnaImg,
    imageCredit: "Foto: documentar",
    area: "46.399 ha",
    founded: "Rezervație a Biosferei UNESCO (1979)",
    description:
      "Cel mai înalt masiv din Carpații Orientali, cu vârful Pietrosul Rodnei (2.303 m). Adăpostește 23 de lacuri glaciare, peste 1.100 specii de plante și ultimele turme libere de capră neagră reintroduse după 1964.",
    wildlife: [
      "Capră neagră (reintrodusă)",
      "Marmotă alpină",
      "Acvilă de munte",
      "Smârdar (Rhododendron myrtifolium)",
      "Floarea de colț",
      "Cocoș de munte",
    ],
    importance:
      "Una dintre cele mai bogate flore alpine din Carpați — peste 130 de specii ocrotite. Sursă pentru râurile Someș, Bistrița și Vișeu.",
  },
  {
    id: "semenic",
    name: "Făgetele seculare Semenic-Cheile Carașului",
    shortName: "Semenic",
    x: 18,
    y: 60,
    image: semenicImg,
    imageCredit: "Foto: documentar",
    area: "36.665 ha (din care 4.292 ha păduri virgine UNESCO)",
    founded: "Sit UNESCO Patrimoniu Mondial (2017)",
    description:
      "Cele mai întinse și compacte păduri virgine de fag din zona temperată a Europei. Făget Izvoarele Nerei adăpostește fagi de peste 350 de ani, înalți de 50 m. Fac parte din rețeaua transnațională „Ancient and Primeval Beech Forests of the Carpathians”.",
    wildlife: [
      "Fag european (peste 350 ani)",
      "Urs brun",
      "Lup",
      "Râs",
      "Bufnița mare",
      "Salamandră de foc",
    ],
    importance:
      "Patrimoniu Mondial UNESCO — laborator viu pentru ecologia pădurilor neperturbate. România deține peste 60% din pădurile virgine de fag protejate UNESCO la nivel mondial.",
  },
  {
    id: "suceava",
    name: "Suceava — defrișări în Bucovina",
    shortName: "Suceava",
    x: 65,
    y: 18,
    image: suceavaImg,
    imageCredit: "Foto: documentar",
    area: "peste 20.000 ha tăiate ilegal (2015–2022)",
    founded: "Punct fierbinte al tăierilor ilegale",
    description:
      "Bucovina, cândva renumită pentru codrii ei seculari, a pierdut zone întinse din cauza unei rețele de firme cu acte falsificate. În 2019, pădurarul Liviu Pop a fost ucis în pădure după ce semnalase tăieri ilegale — cazul a declanșat proteste naționale și inițiativa „Forest Inspector”.",
    wildlife: [
      "Cocoș de munte (în declin)",
      "Cerb carpatin",
      "Urs brun",
      "Lup",
      "Bufnița urală",
      "Ciocănitoare cu spate alb",
    ],
    importance:
      "Pădurile Bucovinei stochează carbon pentru întreaga regiune și alimentează bazinele Sucevei, Moldovei și Bistriței. Pierderea lor accelerează eroziunea și crește riscul de inundații.",
    warning: true,
  },
  {
    id: "fagaras",
    name: "Munții Făgăraș — cicatrici de exploatare",
    shortName: "Făgăraș",
    x: 55,
    y: 58,
    image: fagarasImg,
    imageCredit: "Foto: documentar aerian",
    area: "circa 10.000 ha afectate de tăieri rase",
    founded: "Zonă vizată de programul „Yellowstone-ul Europei”",
    description:
      "Cei mai înalți munți ai României (Moldoveanu 2.544 m) sunt străbătuți de drumuri forestiere ilegale vizibile din satelit. Foundation Conservation Carpathia a cumpărat și replantat peste 1.200 ha pentru a crea un viitor parc național de 250.000 ha — cel mai ambițios proiect de re-sălbăticire din Europa.",
    wildlife: [
      "Urs brun (cea mai mare populație din UE)",
      "Lup carpatin",
      "Râs eurasiatic",
      "Zimbru (reintrodus 2020)",
      "Capră neagră",
      "Vultur pleșuv (reintroducere planificată)",
    ],
    importance:
      "Făgărașul leagă populațiile de carnivore mari din Carpați cu cele din Balcani — coridor ecologic critic la nivel european. Refacerea pădurilor poate readuce 1 milion de tone CO₂ stocate pe an.",
    warning: true,
  },
];

export function RomaniaMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = LOCATIONS[activeIndex];
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const liveRegionId = useId();

  const move = useCallback((delta: number) => {
    setActiveIndex((i) => {
      const next = (i + delta + LOCATIONS.length) % LOCATIONS.length;
      buttonRefs.current[next]?.focus();
      return next;
    });
  }, []);

  // Keyboard navigation: arrow keys cycle locations when map area is focused
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      move(1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      move(-1);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
      buttonRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      const last = LOCATIONS.length - 1;
      setActiveIndex(last);
      buttonRefs.current[last]?.focus();
    }
  };

  return (
    <div
      className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12"
      role="region"
      aria-label="Hartă interactivă a pădurilor și parcurilor naționale din România"
    >
      {/* Map */}
      <div
        className="glass-strong relative aspect-[4/3] overflow-hidden rounded-3xl p-6 shadow-elevated"
        onKeyDown={handleKeyDown}
      >
        <div
          className="absolute inset-0 opacity-40"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at 30% 30%, oklch(0.78 0.18 145 / 0.3), transparent 60%)",
          }}
        />

        <p className="sr-only">
          Folosește tastele săgeți pentru a naviga între locații. Tab pentru a sări direct la un buton de locație.
        </p>

        <svg
          viewBox="0 0 100 75"
          className="relative h-full w-full"
          role="img"
          aria-labelledby={`${liveRegionId}-title`}
        >
          <title id={`${liveRegionId}-title`}>
            Harta României cu 5 locații forestiere marcate
          </title>
          <defs>
            <linearGradient id="mapFill" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.35 0.08 145 / 0.7)" />
              <stop offset="100%" stopColor="oklch(0.25 0.06 155 / 0.85)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.8" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M18 20 L30 10 L48 8 L62 12 L78 14 L92 22 L95 38 L92 50 L86 58 L78 64 L66 68 L52 70 L40 68 L28 62 L20 52 L14 40 L12 30 Z"
            fill="url(#mapFill)"
            stroke="oklch(0.78 0.18 145 / 0.6)"
            strokeWidth="0.4"
          />
          <path
            d="M20 30 Q40 40 60 38 T92 42"
            fill="none"
            stroke="oklch(0.7 0.12 220 / 0.5)"
            strokeWidth="0.3"
            strokeDasharray="1 1"
            aria-hidden
          />

          {LOCATIONS.map((loc, i) => {
            const isActive = activeIndex === i;
            return (
              <g
                key={loc.id}
                transform={`translate(${loc.x} ${loc.y})`}
                filter="url(#glow)"
                aria-hidden
              >
                {isActive && (
                  <circle
                    r="2.5"
                    fill={
                      loc.warning
                        ? "oklch(0.65 0.24 28 / 0.4)"
                        : "oklch(0.78 0.18 145 / 0.4)"
                    }
                    className="animate-ping-slow"
                  />
                )}
                <circle
                  r={isActive ? 1.6 : 1.1}
                  fill={loc.warning ? "oklch(0.65 0.24 28)" : "oklch(0.85 0.18 135)"}
                  stroke="white"
                  strokeWidth="0.2"
                  className="transition-all duration-300"
                />
                <text
                  y="-2.5"
                  textAnchor="middle"
                  fontSize="2"
                  fill="oklch(0.96 0.02 110)"
                  fontWeight={isActive ? 700 : 400}
                  className="pointer-events-none select-none"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {loc.shortName}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Accessible buttons (also visible chips) */}
        <div
          role="tablist"
          aria-label="Selectează o locație forestieră"
          className="absolute bottom-4 left-6 right-6 flex flex-wrap gap-2"
        >
          {LOCATIONS.map((loc, i) => {
            const isActive = activeIndex === i;
            return (
              <button
                key={loc.id}
                ref={(el) => {
                  buttonRefs.current[i] = el;
                }}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`${liveRegionId}-panel`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                aria-label={`${loc.name}${loc.warning ? " (zonă afectată de defrișări)" : ""}`}
                className={`rounded-full px-3 py-1 text-xs font-medium outline-none transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                  isActive
                    ? loc.warning
                      ? "bg-destructive text-destructive-foreground shadow-glow"
                      : "bg-primary text-primary-foreground shadow-glow"
                    : "glass text-foreground/80 hover:text-foreground"
                }`}
              >
                {loc.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail panel — live region announces changes */}
      <div
        id={`${liveRegionId}-panel`}
        key={active.id}
        role="tabpanel"
        aria-live="polite"
        aria-atomic="true"
        className="glass-strong overflow-hidden rounded-3xl shadow-elevated animate-fade-up"
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={active.image}
            alt={`${active.name} — fotografie`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"
            aria-hidden
          />
          {active.warning && (
            <div className="absolute right-4 top-4 rounded-full bg-destructive px-3 py-1 text-xs font-semibold uppercase tracking-wider text-destructive-foreground shadow-glow">
              ⚠ Zonă afectată
            </div>
          )}
          <span className="absolute bottom-2 right-3 text-[10px] uppercase tracking-wider text-foreground/60">
            {active.imageCredit}
          </span>
        </div>
        <div className="space-y-5 p-7">
          <div>
            <h3 className="text-3xl font-semibold text-gradient">{active.name}</h3>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span>
                <strong className="text-foreground/80">Suprafață:</strong> {active.area}
              </span>
              <span>
                <strong className="text-foreground/80">Statut:</strong> {active.founded}
              </span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {active.description}
          </p>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Faună & Floră
            </p>
            <div className="flex flex-wrap gap-2">
              {active.wildlife.map((w) => (
                <span
                  key={w}
                  className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-foreground/90"
                >
                  {w}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border-l-2 border-accent bg-accent/5 p-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
              Importanță ecologică
            </p>
            <p className="text-sm text-foreground/90">{active.importance}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Hint to make focus-visible useful when initially rendered
export function useMapFocusHint() {
  useEffect(() => {
    /* no-op — placeholder for future enhancements */
  }, []);
}
