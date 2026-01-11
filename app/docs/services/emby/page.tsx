import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emby Setup Guide - SV3 Player",
  description: "Learn how to connect SV3 Player to your Emby server.",
};

export default function EmbyGuidePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-background)' }}>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav className="text-sm mb-6">
          <Link href="/docs/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Docs</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <Link href="/docs/services/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Services</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <span style={{ color: 'var(--theme-text-secondary)' }}>Emby</span>
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
          Emby
        </h1>
        <p className="mb-8 text-lg" style={{ color: 'var(--theme-text-secondary)' }}>
          Connect to your Emby server with username/password or API key authentication. Browse libraries, search content, and stream with transcoding support.
        </p>

        <div
          className="rounded-lg p-4 mb-8"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--theme-warning) 15%, transparent)',
            border: '1px solid color-mix(in srgb, var(--theme-warning) 40%, transparent)',
          }}
        >
          <p style={{ color: 'var(--theme-warning)' }}>
            Documentation coming soon. Check back for detailed Emby setup instructions.
          </p>
        </div>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b"
            style={{
              color: 'var(--theme-text-primary)',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Quick Start
          </h2>
          <ol className="list-decimal list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Open SV3 Player and go to <strong style={{ color: 'var(--theme-text-primary)' }}>Settings</strong> → <strong style={{ color: 'var(--theme-text-primary)' }}>Service Connections</strong></li>
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Add Service</strong> and select <strong style={{ color: 'var(--theme-text-primary)' }}>Emby</strong></li>
            <li>Enter your server URL (e.g., <code className="px-1 rounded text-sm" style={{ backgroundColor: 'var(--theme-surface)', color: 'var(--theme-accent)' }}>192.168.1.100:8096</code>)</li>
            <li>Enter your username and password, or use an API key</li>
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Test Connection</strong> and then <strong style={{ color: 'var(--theme-text-primary)' }}>Save</strong></li>
          </ol>
        </section>

        <section>
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
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Default port:</strong> 8096</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Authentication:</strong> Username/password or API key</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>API prefix:</strong> <code className="px-1 rounded text-sm" style={{ backgroundColor: 'var(--theme-surface)', color: 'var(--theme-accent)' }}>/emby/</code></li>
          </ul>
        </section>
      </div>
    </div>
  );
}
