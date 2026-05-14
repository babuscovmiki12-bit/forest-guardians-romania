import { useState } from "react";
import retezatImg from "@/assets/retezat.jpg";
import apuseniImg from "@/assets/apuseni.jpg";
import leteaImg from "@/assets/letea.jpg";
import piatraImg from "@/assets/piatra-craiului.jpg";
import maramuresImg from "@/assets/maramures.jpg";

type Location = {
  id: string;
  name: string;
  /* Position as % within the SVG viewBox area */
  x: number;
  y: number;
  image: string;
  description: string;
  wildlife: string[];
  importance: string;
  warning?: boolean;
};

const LOCATIONS: Location[] = [
  {
    id: "retezat",
    name: "Parcul Național Retezat",
    x: 30,
    y: 62,
    image: retezatImg,
    description:
      "Primul parc național din România, cunoscut pentru cele peste 80 de lacuri glaciare și relieful alpin spectaculos.",
    wildlife: ["Capra neagră", "Marmota", "Acvila de munte", "Floarea de colț"],
    importance:
      "Rezervație a biosferei UNESCO. Adăpostește una dintre cele mai bogate flore alpine din Europa.",
  },
  {
    id: "apuseni",
    name: "Munții Apuseni",
    x: 32,
    y: 38,
    image: apuseniImg,
    description:
      "Un labirint de peșteri, chei calcaroase și păduri seculare de fag și molid.",
    wildlife: ["Urs brun", "Râs", "Liliacul mic cu potcoavă", "Tisă"],
    importance:
      "Rezervorul de carstic și hidrologic al Transilvaniei — sursă de apă curată pentru milioane de oameni.",
  },
  {
    id: "letea",
    name: "Pădurea Letea",
    x: 88,
    y: 52,
    image: leteaImg,
    description:
      "Cea mai veche rezervație naturală din România (1938), o pădure subtropicală unică între dunele Deltei Dunării.",
    wildlife: ["Cai sălbatici", "Vulturul codalb", "Stejar brumăriu", "Viță sălbatică"],
    importance:
      "Ecosistem unic în Europa — un mozaic de pădure, dune și mlaștini protejat de UNESCO.",
  },
  {
    id: "piatra-craiului",
    name: "Piatra Craiului",
    x: 58,
    y: 55,
    image: piatraImg,
    description:
      "O creastă calcaroasă spectaculoasă de 25 km, acoperită de păduri de molid și jnepeniș.",
    wildlife: ["Capra neagră", "Garofița Pietrei Craiului", "Cocoș de munte", "Lup"],
    importance:
      "Endemism vegetal — adăpostește specii care nu cresc nicăieri altundeva pe planetă.",
  },
  {
    id: "maramures",
    name: "Maramureș — zonă defrișată",
    x: 45,
    y: 18,
    image: maramuresImg,
    description:
      "Una dintre cele mai afectate regiuni de tăieri ilegale. Mii de hectare de pădure virgină au dispărut în ultimii 20 de ani.",
    wildlife: ["Urs brun (în declin)", "Lup", "Cerb carpatin", "Salamandră"],
    importance:
      "Pierderea pădurilor virgine afectează clima, biodiversitatea și viața comunităților locale.",
    warning: true,
  },
];

export function RomaniaMap() {
  const [active, setActive] = useState<Location>(LOCATIONS[0]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
      {/* Map */}
      <div className="glass-strong relative aspect-[4/3] overflow-hidden rounded-3xl p-6 shadow-elevated">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, oklch(0.78 0.18 145 / 0.3), transparent 60%)",
          }}
        />
        <svg
          viewBox="0 0 100 75"
          className="relative h-full w-full"
          aria-label="Harta României cu păduri și parcuri naționale"
        >
          {/* Stylized Romania silhouette */}
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
          {/* River suggestions */}
          <path
            d="M20 30 Q40 40 60 38 T92 42"
            fill="none"
            stroke="oklch(0.7 0.12 220 / 0.5)"
            strokeWidth="0.3"
            strokeDasharray="1 1"
          />

          {LOCATIONS.map((loc) => {
            const isActive = active.id === loc.id;
            return (
              <g
                key={loc.id}
                transform={`translate(${loc.x} ${loc.y})`}
                className="cursor-pointer"
                onClick={() => setActive(loc)}
                filter="url(#glow)"
              >
                {isActive && (
                  <circle
                    r="2.5"
                    fill={loc.warning ? "oklch(0.65 0.24 28 / 0.4)" : "oklch(0.78 0.18 145 / 0.4)"}
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
                  {loc.name.split(" ").slice(-1)[0]}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="absolute bottom-4 left-6 right-6 flex flex-wrap gap-2">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActive(loc)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                active.id === loc.id
                  ? loc.warning
                    ? "bg-destructive text-destructive-foreground shadow-glow"
                    : "bg-primary text-primary-foreground shadow-glow"
                  : "glass text-foreground/80 hover:text-foreground"
              }`}
            >
              {loc.name}
            </button>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      <div
        key={active.id}
        className="glass-strong overflow-hidden rounded-3xl shadow-elevated animate-fade-up"
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={active.image}
            alt={active.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          {active.warning && (
            <div className="absolute right-4 top-4 rounded-full bg-destructive px-3 py-1 text-xs font-semibold uppercase tracking-wider text-destructive-foreground shadow-glow">
              ⚠ Zonă afectată
            </div>
          )}
        </div>
        <div className="space-y-5 p-7">
          <h3 className="text-3xl font-semibold text-gradient">{active.name}</h3>
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
