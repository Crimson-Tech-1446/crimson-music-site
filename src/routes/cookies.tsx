import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/PageShell";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy: Crimson Music" },
      { name: "description", content: "The cookies used on the Crimson Music website and how to manage them." },
      { property: "og:title", content: "Cookie Policy: Crimson Music" },
      { property: "og:description", content: "The cookies we use and how to manage them." },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  const openPrefs = () => window.dispatchEvent(new Event("open-cookie-preferences"));
  return (
    <LegalPage title="Cookie Policy" updated="July 20, 2026">
      <p>
        This Cookie Policy explains how Crimson Music uses cookies and similar technologies on this
        website. It complements our{" "}
        <a href="/privacy">Privacy Policy</a>. By continuing to use this website you can adjust your
        preferences at any time by clicking{" "}
        <button onClick={openPrefs} className="underline text-primary">Cookie Preferences</button>.
      </p>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device by websites you visit. Similar
        technologies include local storage, pixels, and tags. They enable core functionality, remember
        your preferences, and, where you consent, help us understand how the site is used.
      </p>

      <h2>2. Categories We Use</h2>
      <ul>
        <li><strong>Essential</strong>: required for security and basic operation. Always on.</li>
        <li><strong>Analytics</strong>: help us understand aggregate usage. Loaded only after consent.</li>
        <li><strong>Marketing</strong>: measure campaign performance. Loaded only after consent.</li>
      </ul>

      <h2>3. Cookies We May Set</h2>
      <p>
        The table below lists the cookies and storage items currently used by this website.
        We do not currently load analytics or marketing cookies. The categories exist in our
        cookie preferences so that, if we introduce analytics or marketing tools in the future,
        they will only activate after you give consent. This policy will be updated first if
        that changes.
      </p>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Provider</th>
            <th>Category</th>
            <th>Purpose</th>
            <th>Expiration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>crimson-cookie-consent</td>
            <td>Crimson Music</td>
            <td>Essential</td>
            <td>Stores your cookie consent choices.</td>
            <td>12 months (localStorage)</td>
          </tr>
          <tr>
            <td>__cf_bm</td>
            <td>Cloudflare</td>
            <td>Essential</td>
            <td>Distinguishes humans from bots to protect the site.</td>
            <td>30 minutes</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Managing Your Preferences</h2>
      <p>
        You can change or withdraw consent at any time by clicking{" "}
        <button onClick={openPrefs} className="underline text-primary">Cookie Preferences</button>{" "}
        or via the link in the site footer. You can also block cookies via your browser settings;
        note that essential cookies are required for the site to function.
      </p>

      <h2>5. Do Not Track</h2>
      <p>
        Because there is no consistent industry standard for “Do Not Track” signals, we treat the
        absence of consent as a refusal and do not load analytics or marketing cookies.
      </p>

      <h2>6. Changes</h2>
      <p>
        We may update this Cookie Policy from time to time. The “Last updated” date reflects the most
        recent revision. Material changes will re-prompt the consent banner.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions? Email{" "}
        <a href="mailto:crimson1446@gmail.com">crimson1446@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
