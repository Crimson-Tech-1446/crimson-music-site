import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/PageShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy: Crimson Music" },
      { name: "description", content: "Crimson Music is a local-first offline player that does not collect any personal data. Learn how we handle device permissions and anonymous data." },
      { property: "og:title", content: "Privacy Policy: Crimson Music" },
      { property: "og:description", content: "Crimson Music does not collect any personal data. Read our full privacy policy." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 24, 2026">
      <p>
        Welcome to <strong>Crimson Music</strong>. Your privacy is of the utmost importance to us. This
        Privacy Policy describes how we handle information when you use our mobile application.
      </p>
      <p>
        It is important to note that <strong>Crimson Music does not collect any Personal Data</strong>{" "}
        (information that can identify a specific individual).
      </p>

      <h2>1. Local-First Philosophy</h2>
      <p>Crimson Music is primarily an <strong>offline local player</strong>.</p>
      <ul>
        <li><strong>Your Music stays yours:</strong> Neither we nor any third party can access or view your personal music files or playback history.</li>
        <li><strong>Local Storage:</strong> All songs you play or manage through the app are stored locally on your device.</li>
        <li><strong>No Uploading:</strong> We do not upload your music library to any servers.</li>
      </ul>

      <h2>2. Device Permissions</h2>
      <p>To provide a premium music experience, our app requests the following permissions:</p>
      <ul>
        <li><strong>Music &amp; Audio (Necessary):</strong> Allows the app to find and play audio files stored on your device.</li>
        <li><strong>Storage (Necessary for older Android versions):</strong> To access local media and custom background images.</li>
        <li><strong>Notifications (Recommended):</strong> To display playback controls on your lock screen and in the notification shade.</li>
      </ul>

      <h2>3. Data Collection &amp; Use</h2>
      <h3>Personal Data</h3>
      <p>
        We <strong>do not</strong> collect personally identifiable data such as your name, email address, or
        phone number.
      </p>
      <h3>Non-Personal Data</h3>
      <p>To improve app performance and user experience, we may collect anonymous interaction data, including:</p>
      <ul>
        <li>App settings and theme preferences.</li>
        <li>Feature usage (e.g., use of the Equalizer or UHQ Upscaler).</li>
        <li>Device information: Hardware model, OS version, advertising identifiers, language, and time zone.</li>
      </ul>
      <h3>Feedback Information</h3>
      <p>
        When you submit feedback via email, we may receive your email address and device status
        information (app version, OS version) solely to help us address your technical issues.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        We use <strong>Appodeal</strong> to support our service through advertisements.
      </p>
      <ul>
        <li>While we do not collect personal data, Appodeal and its partners may collect data (like advertising IDs) to provide relevant ads, subject to your consent.</li>
        <li>You can manage your ad preferences or opt-out of personalized ads within your device's Google settings.</li>
        <li>
          Please refer to the{" "}
          <a href="https://appodeal.com/privacy-policy" target="_blank" rel="noopener noreferrer">
            Appodeal Privacy Policy
          </a>{" "}
          for more details.
        </li>
      </ul>

      <h2>5. Data Retention</h2>
      <p>
        Usage and feedback information are retained only as long as necessary to fulfill improvements.
        Anonymous analytics data is typically processed and summarized without being linked to any
        individual.
      </p>

      <h2>6. Your Rights (EU &amp; California)</h2>
      <p>
        Users in the EU (GDPR) and California (CCPA/CPRA) have specific rights regarding their data,
        including the right to access, delete, or restrict processing. Since we do not collect personal
        identifiers, most of these rights are naturally protected as your data remains local on your
        device.
      </p>

      <h2>7. Children's Privacy</h2>
      <p>
        Crimson Music does not knowingly collect data from children under the age of 13. If you believe a
        child has provided us with any information, please contact us immediately.
      </p>

      <h2>8. Changes to this Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We recommend reviewing this page periodically
        for any changes.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at:{" "}
        <a href="mailto:crimson1446@gmail.com">crimson1446@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
