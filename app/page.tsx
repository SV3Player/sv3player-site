import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">SV3 Player</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Swipe through your own content. No algorithms. No tracking. Just your media.
        </p>
        <Link
          href="/docs/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          Get Started
        </Link>
      </section>

      {/* Your Content Your Control */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Your Content. Your Control.</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          SV3 Player is a vertical-first video player designed for your self-hosted media libraries.
          Swipe through your collection the way you want — without algorithms deciding what you see next,
          without engagement metrics tracking your every move, and without depending on platforms that may not be there tomorrow.
        </p>
      </section>

      <hr className="border-gray-200 dark:border-gray-800 my-12" />

      {/* Built for Privacy */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Built for Privacy</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold">✓</span>
            <span><strong>No Analytics</strong> — We don&apos;t collect usage data. Ever.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold">✓</span>
            <span><strong>No Cloud Sync</strong> — Your credentials stay on your device in the secure iOS Keychain.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold">✓</span>
            <span><strong>Direct Connection</strong> — Stream directly from your servers. We&apos;re not in the middle.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 font-bold">✓</span>
            <span><strong>No Account Required</strong> — Just install and connect to your media.</span>
          </li>
        </ul>
      </section>

      <hr className="border-gray-200 dark:border-gray-800 my-12" />

      {/* Vertical First */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Vertical-First Experience</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          Designed around the natural way you hold your phone. Swipe up for the next video,
          swipe down to go back. Build queues, shuffle your library, and let it play — all optimized for portrait viewing.
        </p>
      </section>

      <hr className="border-gray-200 dark:border-gray-800 my-12" />

      {/* Services */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Connect Your Servers</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 pr-4 font-semibold">Service</th>
                <th className="text-left py-3 font-semibold">Integration</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-3 pr-4 font-medium text-foreground">Stash</td>
                <td className="py-3">Full GraphQL support with scenes, performers, tags, and studios</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-3 pr-4 font-medium text-foreground">Plex</td>
                <td className="py-3">Browse libraries and stream from your Plex Media Server</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-3 pr-4 font-medium text-foreground">Emby</td>
                <td className="py-3">Complete library access with filtering and search</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-3 pr-4 font-medium text-foreground">Jellyfin</td>
                <td className="py-3">Open-source server support with full feature parity</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-foreground">Custom GraphQL</td>
                <td className="py-3">Connect any compatible endpoint with configurable mappings</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <hr className="border-gray-200 dark:border-gray-800 my-12" />

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Features</h2>
        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
          <li><strong className="text-foreground">Smart Queue</strong> — Build playlists across multiple servers with shuffle</li>
          <li><strong className="text-foreground">Powerful Filters</strong> — Find exactly what you want by tags, performers, ratings, and more</li>
          <li><strong className="text-foreground">Customizable Themes</strong> — Light, dark, and custom color schemes</li>
          <li><strong className="text-foreground">App Lock</strong> — Optional biometric or PIN protection</li>
          <li><strong className="text-foreground">Offline-Ready</strong> — Works entirely on your local network</li>
        </ul>
      </section>

      <hr className="border-gray-200 dark:border-gray-800 my-12" />

      {/* Get the App */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Get the App</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          SV3 Player is available for iPhone and iPad.
        </p>
        <p className="text-gray-500 dark:text-gray-500 italic">Coming soon to the App Store.</p>
      </section>

      <hr className="border-gray-200 dark:border-gray-800 my-12" />

      {/* Learn More */}
      <section>
        <h2 className="text-3xl font-semibold mb-6">Learn More</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/docs/" className="text-blue-600 dark:text-blue-400 hover:underline">
              Getting Started
            </Link>
            <span className="text-gray-600 dark:text-gray-400"> — Set up your first server connection</span>
          </li>
          <li>
            <Link href="/docs/services/" className="text-blue-600 dark:text-blue-400 hover:underline">
              Service Guides
            </Link>
            <span className="text-gray-600 dark:text-gray-400"> — Detailed setup for each platform</span>
          </li>
          <li>
            <Link href="/privacy/" className="text-blue-600 dark:text-blue-400 hover:underline">
              Privacy Policy
            </Link>
            <span className="text-gray-600 dark:text-gray-400"> — How we handle your data (spoiler: we don&apos;t)</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
