import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stash Setup Guide - SV3 Player",
  description: "Learn how to connect SV3 Player to your Stash media server.",
};

export default function StashGuidePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-background)' }}>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav className="text-sm mb-6">
          <Link href="/docs/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Docs</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <Link href="/docs/services/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Services</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <span style={{ color: 'var(--theme-text-secondary)' }}>Stash</span>
        </nav>

        <h1
          className="text-4xl font-bold mb-4 inline-block"
          style={{
            background: 'linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Stash
        </h1>
        <p className="mb-8 text-lg" style={{ color: 'var(--theme-text-secondary)' }}>
          Stash is a self-hosted media organizer with a powerful GraphQL API. SV3 Player provides full integration with Stash servers, letting you browse and play your entire library from your iOS device.
        </p>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b"
            style={{
              color: 'var(--theme-text-primary)',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Requirements
          </h2>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Stash server running and accessible from your iOS device</li>
            <li>API key generated in Stash settings</li>
            <li>Network access to your server (local network, VPN, or exposed endpoint)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b"
            style={{
              color: 'var(--theme-text-primary)',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Getting Your API Key
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>Before connecting, you&apos;ll need an API key from your Stash server:</p>
          <ol className="list-decimal list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Open your Stash web interface in a browser</li>
            <li>Click the <strong style={{ color: 'var(--theme-text-primary)' }}>gear icon</strong> to open Settings</li>
            <li>Navigate to <strong style={{ color: 'var(--theme-text-primary)' }}>Security</strong></li>
            <li>Under <strong style={{ color: 'var(--theme-text-primary)' }}>Authentication</strong>, find the API Keys section</li>
            <li>Click <strong style={{ color: 'var(--theme-text-primary)' }}>Generate</strong> to create a new key, or copy an existing one</li>
            <li>Save this key — you&apos;ll need it for SV3 Player</li>
          </ol>
          <p className="italic" style={{ color: 'var(--theme-text-tertiary)' }}>
            Tip: Give your API key a descriptive name like &quot;SV3 Player&quot; so you can identify it later.
          </p>
        </section>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b"
            style={{
              color: 'var(--theme-text-primary)',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Connection Steps
          </h2>
          <ol className="list-decimal list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Open SV3 Player and go to <strong style={{ color: 'var(--theme-text-primary)' }}>Settings</strong> → <strong style={{ color: 'var(--theme-text-primary)' }}>Service Connections</strong></li>
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Add Service</strong></li>
            <li>Select <strong style={{ color: 'var(--theme-text-primary)' }}>Stash</strong> from the service list</li>
            <li>Enter your server details:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li><strong style={{ color: 'var(--theme-text-primary)' }}>Server URL</strong> — Your Stash server address (e.g., <code className="px-1 rounded text-sm" style={{ backgroundColor: 'var(--theme-surface)', color: 'var(--theme-accent)' }}>192.168.1.100:9999</code> or <code className="px-1 rounded text-sm" style={{ backgroundColor: 'var(--theme-surface)', color: 'var(--theme-accent)' }}>stash.yourdomain.com</code>)</li>
                <li><strong style={{ color: 'var(--theme-text-primary)' }}>API Key</strong> — The key you generated above</li>
              </ul>
            </li>
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Test Connection</strong> to verify</li>
            <li>If successful, tap <strong style={{ color: 'var(--theme-text-primary)' }}>Save</strong></li>
          </ol>
          <p style={{ color: 'var(--theme-text-secondary)' }}>
            The default Stash port is <strong style={{ color: 'var(--theme-text-primary)' }}>9999</strong>. Include the port in your URL unless you&apos;ve configured a reverse proxy.
          </p>
        </section>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b"
            style={{
              color: 'var(--theme-text-primary)',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            What You Can Do
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>With Stash connected, SV3 Player gives you access to:</p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Scenes</strong> — Browse all your videos with thumbnails, titles, and metadata</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Performers</strong> — Filter content by performer</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Tags</strong> — Organize and filter by your tag system</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Studios</strong> — Filter by studio/source</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Ratings</strong> — See and filter by your ratings</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Favorites</strong> — Quick access to favorited content</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b"
            style={{
              color: 'var(--theme-text-primary)',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            URL Formats
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>SV3 Player accepts various URL formats:</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: 'var(--theme-control-background)' }}>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: 'var(--theme-text-primary)' }}>Format</th>
                  <th className="text-left py-2 font-semibold" style={{ color: 'var(--theme-text-primary)' }}>Example</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--theme-text-secondary)' }}>
                <tr className="border-b" style={{ borderColor: 'var(--theme-control-background)' }}>
                  <td className="py-2 pr-4">IP with port</td>
                  <td className="py-2"><code className="px-1 rounded" style={{ backgroundColor: 'var(--theme-surface)', color: 'var(--theme-accent)' }}>192.168.1.100:9999</code></td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--theme-control-background)' }}>
                  <td className="py-2 pr-4">Hostname with port</td>
                  <td className="py-2"><code className="px-1 rounded" style={{ backgroundColor: 'var(--theme-surface)', color: 'var(--theme-accent)' }}>stash.local:9999</code></td>
                </tr>
                <tr className="border-b" style={{ borderColor: 'var(--theme-control-background)' }}>
                  <td className="py-2 pr-4">Domain (with proxy)</td>
                  <td className="py-2"><code className="px-1 rounded" style={{ backgroundColor: 'var(--theme-surface)', color: 'var(--theme-accent)' }}>stash.yourdomain.com</code></td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">HTTPS</td>
                  <td className="py-2"><code className="px-1 rounded" style={{ backgroundColor: 'var(--theme-surface)', color: 'var(--theme-accent)' }}>https://stash.yourdomain.com</code></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4" style={{ color: 'var(--theme-text-secondary)' }}>
            If you don&apos;t specify a protocol, SV3 Player will try HTTPS first, then fall back to HTTP.
          </p>
        </section>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b"
            style={{
              color: 'var(--theme-text-primary)',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Troubleshooting
          </h2>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-primary)' }}>Connection Failed</h3>
          <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Check the URL</strong> — Make sure you&apos;ve included the port (default: 9999)</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Verify network access</strong> — Your iOS device must be able to reach the server. Try accessing the Stash URL in Safari first.</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Check the API key</strong> — Regenerate it if you&apos;re unsure it&apos;s correct</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Firewall issues</strong> — Ensure port 9999 (or your custom port) is open</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-primary)' }}>Videos Won&apos;t Play</h3>
          <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Check stream URL</strong> — Stash needs to serve video files. Verify playback works in the Stash web interface.</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Transcoding</strong> — If videos are in unusual formats, ensure Stash&apos;s transcoding is configured</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>File permissions</strong> — Stash must have read access to your video files</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-primary)' }}>Slow Loading</h3>
          <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Thumbnail generation</strong> — If Stash is still generating thumbnails, browsing may be slow initially</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Network speed</strong> — Large thumbnail grids require decent bandwidth. Consider enabling thumbnail caching in Stash.</li>
          </ul>
        </section>

        <section>
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b"
            style={{
              color: 'var(--theme-text-primary)',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Multiple Stash Servers
          </h2>
          <p style={{ color: 'var(--theme-text-secondary)' }}>
            You can connect multiple Stash servers to SV3 Player. Each server appears as a separate connection in Settings. Switch between them by tapping the server name in the app.
          </p>
        </section>
      </div>
    </div>
  );
}
