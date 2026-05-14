import { useState, useRef, useCallback, useEffect } from "react";
import { Volume2, VolumeX, Pause, Play } from "lucide-react";

/**
 * Procedurally generated forest ambience using the Web Audio API.
 * - Layered filtered noise = wind through leaves
 * - Random sine "chirps" with envelope = bird calls
 * No external audio files required.
 */
export function NatureSounds() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);

  const ctxRef = useRef<AudioContext | null>(null);
  const masterRef = useRef<GainNode | null>(null);
  const nodesRef = useRef<{ stop: () => void } | null>(null);
  const chirpTimerRef = useRef<number | null>(null);

  const stop = useCallback(() => {
    if (chirpTimerRef.current) {
      window.clearTimeout(chirpTimerRef.current);
      chirpTimerRef.current = null;
    }
    nodesRef.current?.stop();
    nodesRef.current = null;
    setPlaying(false);
  }, []);

  const start = useCallback(async () => {
    const Ctx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!Ctx) return;

    if (!ctxRef.current) ctxRef.current = new Ctx();
    const ctx = ctxRef.current;
    if (ctx.state === "suspended") await ctx.resume();

    if (!masterRef.current) {
      masterRef.current = ctx.createGain();
      masterRef.current.connect(ctx.destination);
    }
    masterRef.current.gain.value = volume;

    // --- Wind: brown noise through bandpass + lowpass, slow LFO on filter ---
    const bufferSize = 2 * ctx.sampleRate;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    let lastOut = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      lastOut = (lastOut + 0.02 * white) / 1.02;
      data[i] = lastOut * 3.5;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;

    const lowpass = ctx.createBiquadFilter();
    lowpass.type = "lowpass";
    lowpass.frequency.value = 800;
    lowpass.Q.value = 0.7;

    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0.55;

    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.1;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 250;
    lfo.connect(lfoGain);
    lfoGain.connect(lowpass.frequency);

    noise.connect(lowpass);
    lowpass.connect(noiseGain);
    noiseGain.connect(masterRef.current);

    noise.start();
    lfo.start();

    // --- Random bird chirps ---
    const scheduleChirp = () => {
      const delay = 1500 + Math.random() * 4500;
      chirpTimerRef.current = window.setTimeout(() => {
        if (!ctxRef.current || !masterRef.current) return;
        const c = ctxRef.current;
        const osc = c.createOscillator();
        const g = c.createGain();
        const baseFreq = 1500 + Math.random() * 2200;
        osc.frequency.setValueAtTime(baseFreq, c.currentTime);
        osc.frequency.exponentialRampToValueAtTime(
          baseFreq * (1.2 + Math.random() * 0.6),
          c.currentTime + 0.08,
        );
        osc.frequency.exponentialRampToValueAtTime(
          baseFreq * 0.8,
          c.currentTime + 0.18,
        );
        g.gain.setValueAtTime(0.0001, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.18, c.currentTime + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.22);
        osc.connect(g);
        g.connect(masterRef.current);
        osc.start();
        osc.stop(c.currentTime + 0.25);

        // Sometimes a quick second chirp
        if (Math.random() > 0.5) {
          const osc2 = c.createOscillator();
          const g2 = c.createGain();
          osc2.frequency.setValueAtTime(baseFreq * 1.1, c.currentTime + 0.3);
          osc2.frequency.exponentialRampToValueAtTime(
            baseFreq * 1.4,
            c.currentTime + 0.36,
          );
          g2.gain.setValueAtTime(0.0001, c.currentTime + 0.3);
          g2.gain.exponentialRampToValueAtTime(0.14, c.currentTime + 0.32);
          g2.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 0.5);
          osc2.connect(g2);
          g2.connect(masterRef.current!);
          osc2.start(c.currentTime + 0.3);
          osc2.stop(c.currentTime + 0.55);
        }
        scheduleChirp();
      }, delay);
    };
    scheduleChirp();

    nodesRef.current = {
      stop: () => {
        try {
          noise.stop();
        } catch {}
        try {
          lfo.stop();
        } catch {}
      },
    };

    setPlaying(true);
  }, [volume]);

  // Live volume update
  useEffect(() => {
    if (masterRef.current) masterRef.current.gain.value = volume;
  }, [volume]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stop();
      ctxRef.current?.close().catch(() => {});
    };
  }, [stop]);

  const toggle = () => (playing ? stop() : start());

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
      <div
        className={`glass-strong flex items-center gap-2 rounded-full p-1.5 shadow-elevated transition-all duration-300 ${
          open ? "pr-3" : ""
        }`}
        role="group"
        aria-label="Sunete naturale ambientale"
      >
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Oprește sunetele naturii" : "Pornește sunetele naturii"}
          aria-pressed={playing}
          className={`grid h-11 w-11 place-items-center rounded-full text-primary-foreground outline-none transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
            playing
              ? "bg-gradient-glow animate-glow-pulse"
              : "bg-primary/80 hover:bg-primary"
          }`}
        >
          {playing ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
        </button>

        {open && (
          <div className="flex items-center gap-2 pl-1 animate-fade-up">
            <button
              type="button"
              onClick={() => setVolume((v) => (v > 0 ? 0 : 0.4))}
              aria-label={volume > 0 ? "Mut" : "Activează sunetul"}
              className="grid h-9 w-9 place-items-center rounded-full text-foreground/80 outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary"
            >
              {volume > 0 ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              aria-label="Volum sunete naturii"
              className="h-1 w-24 cursor-pointer appearance-none rounded-full bg-foreground/20 accent-[oklch(0.78_0.18_145)] outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Închide controlul de volum" : "Deschide controlul de volum"}
          aria-expanded={open}
          className="hidden sm:grid h-9 w-9 place-items-center rounded-full text-foreground/70 outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span aria-hidden className="text-lg leading-none">{open ? "›" : "‹"}</span>
        </button>
      </div>
      {!open && (
        <span className="sr-only">
          Folosește butonul „Deschide controlul de volum" pentru a regla intensitatea sunetelor naturii.
        </span>
      )}
    </div>
  );
}
