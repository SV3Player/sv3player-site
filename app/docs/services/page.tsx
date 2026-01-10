import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Guides - SV3 Player",
  description: "Learn how to connect SV3 Player to your media servers.",
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">Service Guides</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
        SV3 Player connects directly to your self-hosted media servers. Choose your server type below for step-by-step setup instructions.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Quick Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-2 pr-4 font-semibold">Service</th>
                <th className="text-left py-2 pr-4 font-semibold">Default Port</th>
                <th className="text-left py-2 pr-4 font-semibold">Authentication</th>
                <th className="text-left py-2 font-semibold">API Type</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 dark:text-gray-400">
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 pr-4"><Link href="/docs/services/stash/" className="text-blue-600 dark:text-blue-400 hover:underline">Stash</Link></td>
                <td className="py-2 pr-4">9999</td>
                <td className="py-2 pr-4">API Key</td>
                <td className="py-2">GraphQL</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 pr-4"><Link href="/docs/services/plex/" className="text-blue-600 dark:text-blue-400 hover:underline">Plex</Link></td>
                <td className="py-2 pr-4">32400</td>
                <td className="py-2 pr-4">OAuth (Plex account)</td>
                <td className="py-2">REST</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 pr-4"><Link href="/docs/services/emby/" className="text-blue-600 dark:text-blue-400 hover:underline">Emby</Link></td>
                <td className="py-2 pr-4">8096</td>
                <td className="py-2 pr-4">Username/Password or API Key</td>
                <td className="py-2">REST</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <td className="py-2 pr-4"><Link href="/docs/services/jellyfin/" className="text-blue-600 dark:text-blue-400 hover:underline">Jellyfin</Link></td>
                <td className="py-2 pr-4">8096</td>
                <td className="py-2 pr-4">Username/Password or API Key</td>
                <td className="py-2">REST</td>
              </tr>
              <tr>
                <td className="py-2 pr-4"><Link href="/docs/services/custom-graphql/" className="text-blue-600 dark:text-blue-400 hover:underline">Custom GraphQL</Link></td>
                <td className="py-2 pr-4">Varies</td>
                <td className="py-2 pr-4">Configurable</td>
                <td className="py-2">GraphQL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Detailed Guides</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">
              <Link href="/docs/services/stash/" className="text-blue-600 dark:text-blue-400 hover:underline">Stash</Link>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Connect to your Stash media organizer. Full support for scenes, performers, tags, studios, and ratings. Requires an API key from your Stash settings.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">
              <Link href="/docs/services/plex/" className="text-blue-600 dark:text-blue-400 hover:underline">Plex</Link>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Connect to Plex Media Server using your Plex account. Sign in through Plex&apos;s secure OAuth flow — no API keys to manage.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">
              <Link href="/docs/services/emby/" className="text-blue-600 dark:text-blue-400 hover:underline">Emby</Link>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Connect to your Emby server with username/password or API key authentication. Browse libraries, search content, and stream with transcoding support.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">
              <Link href="/docs/services/jellyfin/" className="text-blue-600 dark:text-blue-400 hover:underline">Jellyfin</Link>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Connect to the open-source Jellyfin media server. Similar to Emby with username/password or API key authentication.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">
              <Link href="/docs/services/custom-graphql/" className="text-blue-600 dark:text-blue-400 hover:underline">Custom GraphQL</Link>
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Connect to any GraphQL endpoint that serves video content. Configure custom queries and field mappings for non-standard servers.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Multiple Servers</h2>
        <p className="text-gray-600 dark:text-gray-400">
          You can connect multiple servers to SV3 Player — even different types. For example, you might have both a Stash server and a Plex server. Each appears as a separate connection in Settings, and you can switch between them at any time.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Connection Tips</h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong className="text-foreground">Local network</strong> — For servers on your home network, use the local IP address (e.g., <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">192.168.1.100</code>)</li>
          <li><strong className="text-foreground">Remote access</strong> — For access outside your network, use a VPN, reverse proxy, or the server&apos;s remote access features</li>
          <li><strong className="text-foreground">HTTPS</strong> — SV3 Player tries HTTPS first. For local servers without SSL, it will fall back to HTTP automatically.</li>
          <li><strong className="text-foreground">Test first</strong> — Always use the <strong>Test Connection</strong> button before saving to verify your settings</li>
        </ul>
      </section>
    </div>
  );
}
