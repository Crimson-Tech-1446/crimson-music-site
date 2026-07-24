import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Music2 } from "lucide-react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/privacy", label: "Privacy" },
    { to: "/terms", label: "Terms" },
    { to: "/cookies", label: "Cookies" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`glass-strong rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all ${
            scrolled ? "shadow-crimson" : ""
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-[#8b0a24] flex items-center justify-center shadow-crimson group-hover:animate-pulse-glow">
              <Music2 className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              Crimson<span className="text-gradient-crimson">Music</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
                activeProps={{ className: "px-3 py-1.5 rounded-lg text-sm text-foreground bg-white/10" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-3 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
                activeProps={{ className: "px-4 py-2.5 rounded-lg text-sm text-foreground bg-white/10" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
