import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stash Setup Guide - SV3 Player",
  description: "Learn how to connect SV3 Player to your Stash media server.",
};

export default function StashGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <nav className="text-sm mb-6">
        <Link href="/docs/" className="text-blue-600 dark:text-blue-400 hover:underline">Docs</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/docs/services/" className="text-blue-600 dark:text-blue-400 hover:underline">Services</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600 dark:text-gray-400">Stash</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">Stash</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
        Stash is a self-hosted media organizer with a powerful GraphQL API. SV3 Player provides full integration with Stash servers, letting you browse and play your entire library from your iOS device.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Requirements</h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li>Stash server running and accessible from your iOS device</li>
          <li>API key generated in Stash settings</li>
          <li>Network access to your server (local network, VPN, or exposed endpoint)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Getting Your API Key</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">Before connecting, you&apos;ll need an API key from your Stash server:</p>
        <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-4">
          <li>Open your Stash web interface in a browser</li>
          <li>Click the <strong className="text-foreground">gear icon</strong> to open Settings</li>
          <li>Navigate to <strong className="text-foreground">Security</strong></li>
          <li>Under <strong className="text-foreground">Authentication</strong>, find the API Keys section</li>
          <li>Click <strong className="text-foreground">Generate</strong> to create a new key, or copy an existing one</li>
          <li>Save this key — you&apos;ll need it for SV3 Player</li>
        </ol>
        <p className="text-gray-500 dark:text-gray-500 italic">
          Tip: Give your API key a descriptive name like &quot;SV3 Player&quot; so you can identify it later.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Connection Steps</h2>
        <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 space-y-2 mb-4">
          <li>Open SV3 Player and go to <strong className="text-foreground">Settings</strong> → <strong className="text-foreground">Service Connections</strong></li>
          <li>Tap <strong className="text-foreground">Add Service</strong></li>
          <li>Select <strong className="text-foreground">Stash</strong> from the service list</li>
          <li>Enter your server details:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li><strong className="text-foreground">Server URL</strong> — Your Stash server address (e.g., <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">192.168.1.100:9999</code> or <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">stash.yourdomain.com</code>)</li>
              <li><strong className="text-foreground">API Key</strong> — The key you generated above</li>
            </ul>
          </li>
          <li>Tap <strong className="text-foreground">Test Connection</strong> to verify</li>
          <li>If successful, tap <strong className="text-foreground">Save</strong></li>
        </ol>
        <p className="text-gray-600 dark:text-gray-400">
          The default Stash port is <strong className="text-foreground">9999</strong>. Include the port in your URL unless you&apos;ve configured a reverse proxy.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">What You Can Do</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">With Stash connected, SV3 Player gives you access to:</p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong className="text-foreground">Scenes</strong> — Browse all your videos with thumbnails, titles, and metadata</li>
          <li><strong className="text-foreground">Performers</strong> — Filter content by performer</li>
          <li><strong className="text-foreground">Tags</strong> — Organize and filter by your tag system</li>
          <li><strong className="text-foreground">Studios</strong> — Filter by studio/source</li>
          <li><strong className="text-foreground">Ratings</strong> — See and filter by your ratings</li>
          <li><strong className="text-foreground">Favorites</strong> — Quick access to favorited content</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">URL Formats</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">SV3 Player accepts various URL formats:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-2 pr-4 font-semibold">Format</th>
                <th className="text-left py-2 font-semibold">Example</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 pr-4">IP with port</td>
                <td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">192.168.1.100:9999</code></td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 pr-4">Hostname with port</td>
                <td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">stash.local:9999</code></td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 pr-4">Domain (with proxy)</td>
                <td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">stash.yourdomain.com</code></td>
              </tr>
              <tr>
                <td className="py-2 pr-4">HTTPS</td>
                <td className="py-2"><code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">https://stash.yourdomain.com</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          If you don&apos;t specify a protocol, SV3 Player will try HTTPS first, then fall back to HTTP.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Troubleshooting</h2>

        <h3 className="text-xl font-medium mb-3 mt-6">Connection Failed</h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
          <li><strong className="text-foreground">Check the URL</strong> — Make sure you&apos;ve included the port (default: 9999)</li>
          <li><strong className="text-foreground">Verify network access</strong> — Your iOS device must be able to reach the server. Try accessing the Stash URL in Safari first.</li>
          <li><strong className="text-foreground">Check the API key</strong> — Regenerate it if you&apos;re unsure it&apos;s correct</li>
          <li><strong className="text-foreground">Firewall issues</strong> — Ensure port 9999 (or your custom port) is open</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-6">Videos Won&apos;t Play</h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
          <li><strong className="text-foreground">Check stream URL</strong> — Stash needs to serve video files. Verify playback works in the Stash web interface.</li>
          <li><strong className="text-foreground">Transcoding</strong> — If videos are in unusual formats, ensure Stash&apos;s transcoding is configured</li>
          <li><strong className="text-foreground">File permissions</strong> — Stash must have read access to your video files</li>
        </ul>

        <h3 className="text-xl font-medium mb-3 mt-6">Slow Loading</h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
          <li><strong className="text-foreground">Thumbnail generation</strong> — If Stash is still generating thumbnails, browsing may be slow initially</li>
          <li><strong className="text-foreground">Network speed</strong> — Large thumbnail grids require decent bandwidth. Consider enabling thumbnail caching in Stash.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Multiple Stash Servers</h2>
        <p className="text-gray-600 dark:text-gray-400">
          You can connect multiple Stash servers to SV3 Player. Each server appears as a separate connection in Settings. Switch between them by tapping the server name in the app.
        </p>
      </section>
    </div>
  );
}
