import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Music2, Shield, Headphones, Sparkles, Radio, Lock, Pause, SkipForward, AudioLines } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-8 sm:pt-16 pb-20">
        <div className="text-center">
          <h1 className="mt-6 text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05]">
            Feel every beat.
            <br />
            <span className="text-gradient-crimson">Own your data.</span>
          </h1>
          <p className="mt-6 mx-auto max-w-xl text-lg text-muted-foreground leading-relaxed">
            Crimson Music is a high-fidelity music player built with privacy at its core.
            Free to use, ad-supported, and we never sell your data.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/privacy"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-crimson hover:brightness-110 transition"
            >
              <Shield className="h-4 w-4" />
              Privacy first
            </Link>
          </div>
        </div>

        {/* Player mockup */}
        <div className="mt-20 mx-auto max-w-2xl">
          <div className="relative rounded-full glass-strong shadow-crimson overflow-hidden pl-3 pr-4 py-3 sm:pl-4 sm:pr-6 sm:py-4">
            {/* Top progress line */}
            <div className="absolute top-0 left-0 h-[3px] w-2/5 bg-gradient-to-r from-primary to-[#ff3b5c] rounded-full" />

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gradient-to-br from-primary via-[#a11030] to-[#5c0818] flex items-center justify-center shrink-0 shadow-crimson">
                <Music2 className="h-6 w-6 text-white" strokeWidth={2} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm sm:text-base truncate">Midnight Reverie</div>
                <div className="text-xs sm:text-sm text-muted-foreground truncate">Aurora Vale · Nocturnes</div>
              </div>

              <AudioLines className="hidden sm:block h-5 w-5 text-primary shrink-0" strokeWidth={2} />

              <button
                type="button"
                aria-label="Pause"
                className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-primary to-[#a11030] flex items-center justify-center shrink-0 shadow-crimson"
              >
                <Pause className="h-5 w-5 text-white" fill="currentColor" strokeWidth={0} />
              </button>

              <button
                type="button"
                aria-label="Next track"
                className="h-9 w-9 flex items-center justify-center shrink-0 text-foreground/90"
              >
                <SkipForward className="h-5 w-5" fill="currentColor" strokeWidth={0} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">Features</div>
          <h2 className="mt-2 text-4xl font-bold tracking-tight">Built for listeners who care.</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {[
            { icon: Headphones, title: "Hi-Fi audio", desc: "Lossless playback with adaptive equalization tuned to your ears." },
            { icon: Sparkles, title: "Liquid UI", desc: "Silky animations and glass surfaces make navigating a joy." },
            { icon: Radio, title: "Smart queues", desc: "On-device intelligence builds sets that match your mood." },
            { icon: Lock, title: "Minimal data collection", desc: "Ads keep the app free, but we never sell your data or use it beyond what's disclosed in our Privacy Policy." },
            { icon: Shield, title: "GDPR & CCPA", desc: "Your rights, respected. Export or delete your data anytime." },
            { icon: Music2, title: "Offline first", desc: "Download and play without a connection, without accounts required." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-2xl p-6 hover:bg-white/[0.04] transition">
              <div className="h-11 w-11 rounded-xl bg-primary/15 ring-1 ring-primary/30 flex items-center justify-center text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy pledge */}
      <section id="privacy-pledge" className="mx-auto max-w-6xl px-4 py-16">
        <div className="glass-strong rounded-3xl p-8 sm:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-xs uppercase tracking-widest text-primary font-semibold">Our pledge</div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
                Consent before collection. Always.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Nothing tracks you on this website until you explicitly say yes. The app
                itself minimizes data collection, uses on-device processing wherever possible,
                and never sells your data.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/privacy" className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm shadow-crimson hover:brightness-110 transition">
                  Read Privacy Policy
                </Link>
                <Link to="/contact" className="px-5 py-2.5 rounded-lg glass font-semibold text-sm hover:bg-white/10 transition">
                  Data requests
                </Link>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "No cookies dropped without consent",
                "Right to be forgotten: one click away",
                "AES-256 encryption for data in transit and at rest",
                "Full data export in a machine-readable format",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 glass rounded-xl p-4">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 ring-1 ring-primary/30">
                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="text-4xl font-bold tracking-tight">Listen without limits.</h2>
        <p className="mt-3 text-muted-foreground">Crimson Music is coming soon. Stay tuned.</p>
      </section>
    </PageShell>
  );
}
