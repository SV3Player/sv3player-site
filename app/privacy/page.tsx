import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - SV3 Player",
  description: "SV3 Player privacy policy - learn how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8">Last updated: January 1, 2025</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Overview</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          SV3 Player is designed with privacy in mind. We do not collect, store, or transmit any of your personal data to external servers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Data Storage</h2>

        <h3 className="text-xl font-medium mb-3 mt-6">Local Storage Only</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">All data is stored locally on your device:</p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 mb-6">
          <li>Server credentials are stored in the iOS Keychain</li>
          <li>App preferences are stored in UserDefaults</li>
          <li>No data is sent to SV3 Player servers (we don&apos;t have any)</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">What We Store</h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 mb-6">
          <li>Server URLs and authentication tokens for your media servers</li>
          <li>App preferences (theme, display settings)</li>
          <li>Optional: Cached thumbnails for performance</li>
        </ul>

        <h3 className="text-xl font-medium mb-3">What We Don&apos;t Store</h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
          <li>Video content</li>
          <li>Watch history (stored on your media servers, not in the app)</li>
          <li>Personal information</li>
          <li>Analytics or usage data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Third-Party Services</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          SV3 Player connects directly to your configured media servers:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 mb-4">
          <li>Stash</li>
          <li>Plex</li>
          <li>Emby</li>
          <li>Jellyfin</li>
          <li>Custom GraphQL endpoints</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400">
          Your credentials and data are transmitted directly between your device and your servers. We have no visibility into this communication.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Network Communication</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-3">The app only communicates with:</p>
        <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 space-y-1">
          <li>Your configured media servers (to fetch and stream content)</li>
          <li>Apple&apos;s App Store (for app updates and optional tips)</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Children&apos;s Privacy</h2>
        <p className="text-gray-600 dark:text-gray-400">
          SV3 Player is not directed at children under 17. We do not knowingly collect information from children.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Changes to This Policy</h2>
        <p className="text-gray-600 dark:text-gray-400">
          We may update this privacy policy from time to time. Changes will be posted on this page with an updated revision date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Contact</h2>
        <p className="text-gray-600 dark:text-gray-400">
          If you have questions about this privacy policy, please open an issue on our GitLab repository.
        </p>
      </section>
    </div>
  );
}
