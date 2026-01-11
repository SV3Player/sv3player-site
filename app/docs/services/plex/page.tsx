import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plex Setup Guide - SV3 Player",
  description: "Learn how to connect SV3 Player to your Plex Media Server.",
};

export default function PlexGuidePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-background)' }}>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav className="text-sm mb-6">
          <Link href="/docs/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Docs</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <Link href="/docs/services/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Services</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <span style={{ color: 'var(--theme-text-secondary)' }}>Plex</span>
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
          Plex
        </h1>
        <p className="mb-8 text-lg" style={{ color: 'var(--theme-text-secondary)' }}>
          Connect to Plex Media Server using your Plex account. Sign in through Plex&apos;s secure OAuth flow — no API keys to manage.
        </p>

        <div
          className="rounded-lg p-4 mb-8"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--theme-warning) 15%, transparent)',
            border: '1px solid color-mix(in srgb, var(--theme-warning) 40%, transparent)',
          }}
        >
          <p style={{ color: 'var(--theme-warning)' }}>
            Documentation coming soon. Check back for detailed Plex setup instructions.
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
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Add Service</strong> and select <strong style={{ color: 'var(--theme-text-primary)' }}>Plex</strong></li>
            <li>Sign in with your Plex account when prompted</li>
            <li>Select the server you want to connect to</li>
            <li>Done! Your Plex libraries are now available in SV3 Player</li>
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
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Default port:</strong> 32400</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Authentication:</strong> OAuth via Plex account</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>HTTPS:</strong> Required</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
