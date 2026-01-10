import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Getting Started - SV3 Player",
  description: "Learn how to install SV3 Player and connect to your media servers.",
};

export default function GettingStartedPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">Getting Started</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
        Get up and running with SV3 Player in just a few minutes.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Requirements</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">Before you begin, you&apos;ll need:</p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-4">
          <li><strong className="text-foreground">iPhone or iPad</strong> running iOS 17.0 or later</li>
          <li><strong className="text-foreground">A compatible media server</strong> already set up and accessible:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Stash</li>
              <li>Plex Media Server</li>
              <li>Emby</li>
              <li>Jellyfin</li>
              <li>Any GraphQL endpoint with video content</li>
            </ul>
          </li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400">
          SV3 Player is a client app — it connects to your existing servers but doesn&apos;t provide or host any content itself.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Installation</h2>
        <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li>Download SV3 Player from the App Store</li>
          <li>Open the app to begin the onboarding process</li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Onboarding Walkthrough</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          When you first launch SV3 Player, you&apos;ll be guided through a quick setup process.
        </p>

        <h3 className="text-xl font-medium mb-3">Step 1: Welcome</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The welcome screen introduces SV3 Player and confirms that you understand the app requires your own media servers. This isn&apos;t a streaming service — it&apos;s a player for content you already have access to.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Tap <strong className="text-foreground">Get Started</strong> to continue.</p>

        <h3 className="text-xl font-medium mb-3">Step 2: Security (Optional)</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          You can protect your app with a 4-digit PIN. This adds a layer of privacy, requiring the PIN each time you open SV3 Player.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-2"><strong className="text-foreground">Setting up a PIN:</strong></p>
        <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 space-y-1 mb-3 ml-4">
          <li>Tap <strong className="text-foreground">Set Up PIN</strong></li>
          <li>Enter a 4-digit code</li>
          <li>Confirm your code</li>
        </ol>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          <strong className="text-foreground">Biometric unlock:</strong> If your device supports Face ID or Touch ID, you can enable biometric unlock after setting a PIN.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-6">You can skip this step and enable security later in Settings.</p>

        <h3 className="text-xl font-medium mb-3">Step 3: Content Analysis (Optional)</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3">
          Content Analysis is an optional feature that automatically blurs potentially sensitive thumbnails. This is useful when browsing in public or shared spaces.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-2"><strong className="text-foreground">How it works:</strong></p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 mb-3 ml-4">
          <li>Uses Apple&apos;s on-device Sensitive Content Analysis framework</li>
          <li>All processing happens locally on your device — nothing is sent anywhere</li>
          <li>Detected content is blurred until you tap to reveal it</li>
        </ul>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          <strong className="text-foreground">Requirements:</strong> iOS 17 or later
        </p>

        <h3 className="text-xl font-medium mb-3">Step 4: Connect Your Servers</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">The final step is adding your media servers. SV3 Player supports:</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-2 pr-4 font-semibold">Service</th>
                <th className="text-left py-2 font-semibold">Connection Type</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 pr-4">Stash</td>
                <td className="py-2">GraphQL with API key</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 pr-4">Plex</td>
                <td className="py-2">OAuth authentication</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 pr-4">Emby</td>
                <td className="py-2">Username/password or API key</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 pr-4">Jellyfin</td>
                <td className="py-2">Username/password or API key</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Custom GraphQL</td>
                <td className="py-2">Configurable endpoint</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Adding Your First Server</h2>
        <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-4">
          <li>Go to <strong className="text-foreground">Settings</strong> → <strong className="text-foreground">Service Connections</strong></li>
          <li>Tap <strong className="text-foreground">Add Service</strong></li>
          <li>Select your server type</li>
          <li>Enter your server details:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li><strong className="text-foreground">Server URL</strong> — Your server&apos;s address (e.g., <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">192.168.1.100:9999</code>)</li>
              <li><strong className="text-foreground">Authentication</strong> — API key, username/password, or OAuth depending on the service</li>
            </ul>
          </li>
          <li>Tap <strong className="text-foreground">Test Connection</strong> to verify everything works</li>
          <li>Tap <strong className="text-foreground">Save</strong></li>
        </ol>
        <p className="text-gray-600 dark:text-gray-400">
          For detailed setup instructions, see the guide for your service:{" "}
          <Link href="/docs/services/stash/" className="text-blue-600 dark:text-blue-400 hover:underline">Stash</Link> ·{" "}
          <Link href="/docs/services/plex/" className="text-blue-600 dark:text-blue-400 hover:underline">Plex</Link> ·{" "}
          <Link href="/docs/services/emby/" className="text-blue-600 dark:text-blue-400 hover:underline">Emby</Link> ·{" "}
          <Link href="/docs/services/jellyfin/" className="text-blue-600 dark:text-blue-400 hover:underline">Jellyfin</Link> ·{" "}
          <Link href="/docs/services/custom-graphql/" className="text-blue-600 dark:text-blue-400 hover:underline">Custom GraphQL</Link>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Basic Navigation</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">Once connected, here&apos;s how to get around:</p>

        <h3 className="text-xl font-medium mb-2">Feed View</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The main screen shows your video library in a vertical feed. Swipe up and down to browse content. Tap a video to start playback.
        </p>

        <h3 className="text-xl font-medium mb-2">Player Controls</h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 mb-4">
          <li><strong className="text-foreground">Swipe up/down</strong> — Next/previous video</li>
          <li><strong className="text-foreground">Double-tap</strong> — Play/pause</li>
          <li><strong className="text-foreground">Tap</strong> — Show/hide controls overlay</li>
          <li><strong className="text-foreground">Swipe from left edge</strong> — Return to feed</li>
        </ul>

        <h3 className="text-xl font-medium mb-2">Filters</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Narrow down your library using filters. Filter by tags, performers, studios, ratings, duration, and more depending on your server&apos;s metadata.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Next Steps</h2>
        <ul className="space-y-2">
          <li>
            <strong className="text-foreground">Service Guides:</strong>{" "}
            <Link href="/docs/services/stash/" className="text-blue-600 dark:text-blue-400 hover:underline">Stash</Link> ·{" "}
            <Link href="/docs/services/plex/" className="text-blue-600 dark:text-blue-400 hover:underline">Plex</Link> ·{" "}
            <Link href="/docs/services/emby/" className="text-blue-600 dark:text-blue-400 hover:underline">Emby</Link> ·{" "}
            <Link href="/docs/services/jellyfin/" className="text-blue-600 dark:text-blue-400 hover:underline">Jellyfin</Link> ·{" "}
            <Link href="/docs/services/custom-graphql/" className="text-blue-600 dark:text-blue-400 hover:underline">Custom GraphQL</Link>
          </li>
          <li>
            <Link href="/privacy/" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link>
            <span className="text-gray-600 dark:text-gray-400"> — How SV3 Player handles your data</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
