/**
 * Cookie consent state. Nothing loads until user gives explicit consent.
 * GDPR: essential = always on, analytics/marketing require opt-in.
 */
export type ConsentCategories = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentState = {
  categories: ConsentCategories;
  timestamp: number;
  version: number;
};

export const CONSENT_VERSION = 1;
const KEY = "crimson-cookie-consent";

export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(categories: Omit<ConsentCategories, "essential"> & { essential?: true }) {
  const state: ConsentState = {
    categories: { essential: true, analytics: !!categories.analytics, marketing: !!categories.marketing },
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
  localStorage.setItem(KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent("consent-updated", { detail: state }));
  loadConsentedScripts(state.categories);
  return state;
}

export function clearConsent() {
  localStorage.removeItem(KEY);
  window.dispatchEvent(new CustomEvent("consent-updated", { detail: null }));
}

/**
 * Loads tracking scripts ONLY if user consented to that category.
 * No scripts are injected on page load — only after explicit consent.
 */
export function loadConsentedScripts(cats: ConsentCategories) {
  if (cats.analytics) {
    // Placeholder — inject Google Analytics only after consent
    // Example:
    // if (!document.getElementById('ga-script')) {
    //   const s = document.createElement('script');
    //   s.id = 'ga-script';
    //   s.async = true;
    //   s.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXX';
    //   document.head.appendChild(s);
    // }
  }
  if (cats.marketing) {
    // Placeholder — inject marketing pixels only after consent
  }
}
