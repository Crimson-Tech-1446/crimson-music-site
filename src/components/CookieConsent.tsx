import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { getConsent, saveConsent, type ConsentCategories } from "@/lib/consent";
import { Cookie, Shield, BarChart3, Megaphone, X } from "lucide-react";

type View = "banner" | "preferences";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState<View>("banner");
  const [prefs, setPrefs] = useState<Omit<ConsentCategories, "essential">>({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const existing = getConsent();
    if (!existing) setVisible(true);
    const onOpen = () => {
      setView("preferences");
      const c = getConsent();
      if (c) setPrefs({ analytics: c.categories.analytics, marketing: c.categories.marketing });
      setVisible(true);
    };
    window.addEventListener("open-cookie-preferences", onOpen);
    return () => window.removeEventListener("open-cookie-preferences", onOpen);
  }, []);

  if (!visible) return null;

  const acceptAll = () => {
    saveConsent({ analytics: true, marketing: true });
    setVisible(false);
  };
  const rejectAll = () => {
    saveConsent({ analytics: false, marketing: false });
    setVisible(false);
  };
  const savePreferences = () => {
    saveConsent(prefs);
    setVisible(false);
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6 pointer-events-none"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-modal="true"
    >
      <div className="mx-auto max-w-3xl pointer-events-auto glass-strong rounded-2xl overflow-hidden shadow-crimson">
        {view === "banner" ? (
          <div className="p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="hidden sm:flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                <Cookie className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h2 id="cookie-title" className="text-lg font-semibold text-foreground">
                  We value your privacy
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Crimson Music uses cookies to keep the site secure and, with your permission,
                  to understand how it's used. No analytics or marketing cookies are set until you
                  choose. Read our{" "}
                  <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link>.
                </p>
                <div className="mt-5 flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={acceptAll}
                    className="inline-flex justify-center items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition shadow-crimson"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={rejectAll}
                    className="inline-flex justify-center items-center px-5 py-2.5 rounded-lg glass text-foreground text-sm font-semibold hover:bg-white/10 transition"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={() => setView("preferences")}
                    className="inline-flex justify-center items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-muted-foreground hover:text-foreground transition"
                  >
                    Manage Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">Cookie Preferences</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Choose which categories of cookies you allow.
                </p>
              </div>
              <button
                onClick={() => setVisible(false)}
                className="p-1.5 rounded-md hover:bg-white/10 transition"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 space-y-3">
              <CategoryRow
                icon={<Shield className="h-4 w-4" />}
                title="Essential"
                description="Required for the site to work. Cannot be disabled."
                checked
                disabled
              />
              <CategoryRow
                icon={<BarChart3 className="h-4 w-4" />}
                title="Analytics"
                description="Help us understand how visitors use the site (aggregated)."
                checked={prefs.analytics}
                onChange={(v) => setPrefs((p) => ({ ...p, analytics: v }))}
              />
              <CategoryRow
                icon={<Megaphone className="h-4 w-4" />}
                title="Marketing"
                description="Used to personalize campaigns and measure ad performance."
                checked={prefs.marketing}
                onChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
              />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button
                onClick={savePreferences}
                className="inline-flex justify-center items-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition shadow-crimson"
              >
                Save Preferences
              </button>
              <button
                onClick={acceptAll}
                className="inline-flex justify-center items-center px-5 py-2.5 rounded-lg glass text-foreground text-sm font-semibold hover:bg-white/10 transition"
              >
                Accept All
              </button>
              <button
                onClick={rejectAll}
                className="inline-flex justify-center items-center px-5 py-2.5 rounded-lg text-sm font-semibold text-muted-foreground hover:text-foreground transition"
              >
                Reject All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function CategoryRow({
  icon,
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-xl glass">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/25">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{description}</div>
      </div>
      <button
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange?.(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition ${
          checked ? "bg-primary" : "bg-white/15"
        } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
