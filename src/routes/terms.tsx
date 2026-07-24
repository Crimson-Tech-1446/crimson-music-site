import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/PageShell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service: Crimson Music" },
      { name: "description", content: "The terms governing your use of the Crimson Music application and website." },
      { property: "og:title", content: "Terms of Service: Crimson Music" },
      { property: "og:description", content: "The terms governing your use of Crimson Music." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 24, 2026">
      <p>
        These Terms of Service (“<strong>Terms</strong>”) govern your access to and use of the Crimson
        Music mobile application and this website (together, the “<strong>Service</strong>”). By
        downloading or using Crimson Music, browsing your local audio library, editing song tags, or
        enabling advanced audio features (like the UHQ Upscaler), you acknowledge and agree to be bound
        by these Terms. If you do not agree, do not use the Service.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 16 years old (or the age of digital consent in your jurisdiction) to use
        the Service. By using the Service you represent that you meet this requirement.
      </p>

      <h2>2. Privacy &amp; Local Content</h2>
      <p>
        Crimson Music is primarily an offline local player. We do not upload your personal music files
        to our servers; your music remains on your device. We only access your device storage to
        organize and play your files as requested by you. See our{" "}
        <a href="/privacy">Privacy Policy</a> for full details on what limited data we do process.
      </p>

      <h2>3. License to Use</h2>
      <p>
        Subject to your compliance with these Terms, Crimson Music grants you a personal,
        non-exclusive, non-transferable, revocable license to use the app for personal enjoyment.
        Features include high-fidelity audio playback, the UHQ Upscaler, a 5-band equalizer, the
        “Liquid Glass” interface, and tag/artwork editing for your local library. We reserve the right
        to update, modify, or discontinue features at any time to improve the Service.
      </p>

      <h2>4. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Copy, modify, distribute, sell, or lease any part of the Service.</li>
        <li>Reverse engineer, decompile, or attempt to extract the source code, except where permitted by law.</li>
        <li>Use the Service to infringe intellectual property rights or to distribute unlawful content.</li>
        <li>Introduce malware, launch denial-of-service attacks, or otherwise disrupt the Service.</li>
        <li>Use automated means (bots, scrapers) to access the Service without our written consent.</li>
      </ul>

      <h2>5. User-Generated Content (Lyrics)</h2>
      <p>
        The app allows you to create and save custom lyrics within your local database. You retain
        full ownership of any content you create. If you choose to share or upload content through a
        future service we introduce, you grant us a worldwide, non-exclusive license to host and
        process that content solely as necessary to operate that service.
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        The “Crimson Music” name, the circular music note logo, the “Liquid Glass” design system,
        icons, and all internal source code are the intellectual property of the Crimson Music Team
        and are protected by international copyright and trademark laws. All rights not expressly
        granted are reserved. Third-party marks belong to their respective owners.
      </p>

      <h2>7. Ads and Subscriptions</h2>
      <p>
        The Service may display advertising to keep the app free, and may offer “Ad-Free” periods
        through rewarded ads or future subscription plans. Where payments are supported, they are
        processed securely through the app store or distribution platform you installed Crimson Music
        from (such as Google Play, APKPure, or Aptoide), under that platform's own payment terms. You
        can manage subscriptions and auto-renewal settings directly through the account associated with
        that platform.
      </p>

      <h2>8. Third-Party Services</h2>
      <p>
        The Service may interoperate with third-party services, including advertising SDKs described
        in our <a href="/privacy">Privacy Policy</a>. Your use of any linked third-party service is
        governed by that service's own terms and privacy policy. We are not responsible for
        third-party services.
      </p>

      <h2>9. Termination</h2>
      <p>
        You may stop using the Service at any time. We may suspend or terminate your access if you
        breach these Terms, if required by law, or if we discontinue the Service. Sections that by
        their nature should survive termination will survive.
      </p>

      <h2>10. Disclaimers (As-Is)</h2>
      <p>
        Crimson Music is provided “as is” and “as available” without warranties of any kind, whether
        express, implied, statutory, or otherwise, including warranties of merchantability, fitness
        for a particular purpose, and non-infringement. We do not guarantee that the Service will be
        uninterrupted or error-free, and we specifically disclaim liability for any damage to your
        device or loss of data resulting from use of the app.
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Crimson Music and its officers, directors, employees,
        and agents will not be liable for any indirect, incidental, special, consequential, or
        punitive damages, or any loss of profits, revenues, data, or goodwill, arising out of or in
        connection with your use of the Service. Our aggregate liability for any claim relating to
        the Service will not exceed the greater of (a) the amount you paid us in the 12 months
        preceding the claim or (b) EUR 50. Nothing in these Terms excludes liability that cannot be
        excluded under applicable law (including for gross negligence, willful misconduct, or death or
        personal injury caused by negligence).
      </p>

      <h2>12. Indemnification</h2>
      <p>
        You agree to indemnify and hold Crimson Music harmless from any claim or demand, including
        reasonable attorneys' fees, arising out of your breach of these Terms or your misuse of the
        Service.
      </p>

      <h2>13. Governing Law and Venue</h2>
      <p>
        These Terms are governed by the laws of the Republic of Zambia, without regard to conflict
        of law rules, and the courts of Zambia have jurisdiction over any dispute not otherwise
        subject to mandatory arbitration or small-claims procedures available to you. This clause
        does not override or reduce any mandatory consumer protection rights you have under the
        laws of the country in which you live, where such rights cannot be waived by agreement,
        those local protections continue to apply alongside these Terms regardless of where you
        are located.
      </p>

      <h2>14. Changes</h2>
      <p>
        We may update these Terms from time to time. Material changes will be announced through the
        Service. Continued use of the Service after changes take effect constitutes acceptance.
      </p>

      <h2>15. Feedback &amp; Support</h2>
      <p>
        Questions, feedback, or copyright concerns about these Terms? Contact{" "}
        <a href="mailto:crimson1446@gmail.com">crimson1446@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
