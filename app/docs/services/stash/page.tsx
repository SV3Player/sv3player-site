import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stash Setup Guide - SV3 Player",
  description: "Connect SV3 Player to your Stash media organizer with full GraphQL integration.",
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
          Stash is a self-hosted media organizer with a powerful GraphQL API. SV3 Player connects to your Stash server and supports write-back for tags, performers, and ratings.
        </p>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b inline-block w-full"
            style={{
              background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-primary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Overview
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Stash uses a GraphQL API that gives SV3 Player rich access to your media library. Unlike other services,
            Stash supports bi-directional sync — you can browse and edit your library directly from the app.
          </p>
          <p style={{ color: 'var(--theme-text-secondary)' }}>
            Authentication uses API keys generated in your Stash server settings. No username or password required.
          </p>
        </section>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b inline-block w-full"
            style={{
              background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Quick Start
          </h2>
          <ol className="list-decimal list-inside space-y-3" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Open SV3 Player and go to <strong style={{ color: 'var(--theme-text-primary)' }}>Settings</strong> → <strong style={{ color: 'var(--theme-text-primary)' }}>Service Connections</strong></li>
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Add Connection</strong></li>
            <li>Select <strong style={{ color: 'var(--theme-text-primary)' }}>Stash</strong></li>
            <li>Enter your server URL (e.g., <code className="px-1 rounded text-sm" style={{ backgroundColor: 'var(--theme-surface)', color: 'var(--theme-accent)' }}>192.168.1.100:9999</code>)</li>
            <li>Enter your API key</li>
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Connect</strong> to test, then <strong style={{ color: 'var(--theme-text-primary)' }}>Save</strong></li>
          </ol>
        </section>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b inline-block w-full"
            style={{
              background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Getting Your API Key
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Before connecting, generate an API key from your Stash server:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Open your Stash web interface</li>
            <li>Click the <strong style={{ color: 'var(--theme-text-primary)' }}>gear icon</strong> to open Settings</li>
            <li>Navigate to the <strong style={{ color: 'var(--theme-text-primary)' }}>Security</strong> tab</li>
            <li>Under <strong style={{ color: 'var(--theme-text-primary)' }}>Authentication</strong>, find the API Keys section</li>
            <li>Click <strong style={{ color: 'var(--theme-text-primary)' }}>Generate</strong> to create a new key</li>
            <li>Copy the key — you&apos;ll need it for SV3 Player</li>
          </ol>
          <div
            className="p-4 rounded-lg mt-4"
            style={{
              backgroundColor: 'var(--theme-surface)',
              border: '1px solid var(--theme-info)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
              <strong style={{ color: 'var(--theme-info)' }}>Tip:</strong> Give your API key a descriptive name like &quot;SV3 Player&quot; so you can identify it later. SV3 Player includes an &quot;Open Settings&quot; button that opens your Stash security settings directly.
            </p>
          </div>
          <div
            className="p-4 rounded-lg mt-4"
            style={{
              backgroundColor: 'var(--theme-surface)',
              border: '1px solid var(--theme-warning)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
              <strong style={{ color: 'var(--theme-warning)' }}>Note:</strong> Mobile browsers may not allow copying API keys directly from the Stash web interface. If you can&apos;t copy the key, try accessing Stash from a desktop browser, or manually type the key.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b inline-block w-full"
            style={{
              background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-info) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Server URL
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Enter your server&apos;s IP address or domain name. SV3 Player will automatically handle the URL format:
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-primary)' }}>Local IP Addresses</h3>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Uses HTTP by default</li>
            <li>Default port 9999 is added automatically if not specified</li>
            <li>Example: <code style={{ color: 'var(--theme-accent)' }}>192.168.1.100</code> → <code style={{ color: 'var(--theme-accent)' }}>http://192.168.1.100:9999</code></li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-secondary)' }}>Domain Names</h3>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Uses HTTPS by default (assumes you have a reverse proxy)</li>
            <li>No port added (assumes standard HTTPS port 443)</li>
            <li>Example: <code style={{ color: 'var(--theme-accent)' }}>stash.example.com</code> → <code style={{ color: 'var(--theme-accent)' }}>https://stash.example.com</code></li>
          </ul>
        </section>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b inline-block w-full"
            style={{
              background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-success) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Supported Features
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            With Stash connected, you can:
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-primary)' }}>Browse & Play</h3>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Scenes</strong> — Browse all videos with thumbnails, titles, and metadata</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Performers</strong> — View performer profiles and filter by performer</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Tags</strong> — Access your tag system for organization and filtering</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Studios</strong> — Filter content by studio or source</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Ratings</strong> — See your ratings (1-5 stars)</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-secondary)' }}>Write-Back Support</h3>
          <p className="mb-3" style={{ color: 'var(--theme-text-secondary)' }}>
            Unlike other services, SV3 Player can modify your Stash library:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Edit tags</strong> — Add or remove tags from scenes while watching</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Edit performers</strong> — Add or remove performers from scenes</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Set ratings</strong> — Rate scenes directly from the player</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Track playback</strong> — Play count and duration sync back to Stash</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-accent)' }}>Sorting Options</h3>
          <p className="mb-3" style={{ color: 'var(--theme-text-secondary)' }}>
            Available sorting options:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Random</strong> — Server-side random order (refreshes each time)</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Date Added</strong> — Newest first</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Alphabetical</strong> — By title</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Rating</strong> — Highest rated first</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Duration</strong> — Longest first</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Play Count</strong> — Most played first</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Last Played</strong> — Recently watched first</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b inline-block w-full"
            style={{
              background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-warning) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Advanced Filtering
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Filter your library by:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Tags</strong> — Include or exclude specific tags</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Performers</strong> — Include or exclude performers</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Studios</strong> — Include or exclude studios</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Rating</strong> — Minimum star rating</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Resolution</strong> — Minimum quality (SD, 720p, 1080p, 1440p, 4K)</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Duration</strong> — Maximum length</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Play Count</strong> — Minimum or maximum plays</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Orientation</strong> — Landscape or portrait</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Presence</strong> — Has tags/performers/studios or not</li>
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
            Key Details
          </h2>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Default port:</strong> 9999</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Authentication:</strong> API key</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>API Type:</strong> GraphQL</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Write support:</strong> Yes (tags, performers, ratings, playback)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b inline-block w-full"
            style={{
              background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-error) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Troubleshooting
          </h2>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-primary)' }}>
            Connection Failed
          </h3>
          <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Verify your server URL includes the port (default: 9999)</li>
            <li>Check that Stash is running and accessible</li>
            <li>Try accessing the Stash URL in Safari first to verify network access</li>
            <li>Regenerate your API key if you&apos;re unsure it&apos;s correct</li>
            <li>Ensure port 9999 (or your custom port) is open in your firewall</li>
          </ul>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-secondary)' }}>
            Videos Won&apos;t Play
          </h3>
          <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Verify playback works in the Stash web interface first</li>
            <li>Check that Stash&apos;s transcoding is configured for unusual formats</li>
            <li>Ensure Stash has read access to your video files</li>
          </ul>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-accent)' }}>
            Slow Loading
          </h3>
          <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>If Stash is still generating thumbnails, browsing may be slow initially</li>
            <li>Enable thumbnail caching in Stash for better performance</li>
            <li>Large libraries with many tags may take longer to load filters</li>
          </ul>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-info)' }}>
            Changes Not Syncing
          </h3>
          <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Verify your API key has write permissions</li>
            <li>Check your network connection</li>
            <li>Try refreshing the scene in the Stash web interface</li>
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
            Multiple Servers
          </h2>
          <p style={{ color: 'var(--theme-text-secondary)' }}>
            You can connect multiple Stash servers to SV3 Player. Each server appears as a separate connection
            in Settings. Switch between them by selecting the server from the connections list.
          </p>
        </section>
      </div>
    </div>
  );
}
