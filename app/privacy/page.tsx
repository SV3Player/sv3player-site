import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - SV3 Player",
  description: "SV3 Player privacy policy - learn how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--theme-background)' }}
    >
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1
          className="text-4xl font-bold mb-2 inline-block"
          style={{
            background: 'linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Privacy Policy
        </h1>
        <p className="mb-8" style={{ color: 'var(--theme-text-tertiary)' }}>Last updated: January 11, 2025</p>

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
            The Short Version
          </h2>
          <p style={{ color: 'var(--theme-text-secondary)' }}>
            SV3 Player has no servers. We don&apos;t collect any data. Everything stays on your device or goes directly to your own media servers.
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
            What&apos;s Stored on Your Device
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            The app stores some information locally to function:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Server credentials</strong> — URLs and authentication tokens for your media servers, stored in the iOS Keychain</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>App settings</strong> — Theme, display preferences, and configuration options</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Thumbnail cache</strong> — Optional cached images to improve browsing performance</li>
          </ul>
          <p className="mt-4" style={{ color: 'var(--theme-text-secondary)' }}>
            None of this leaves your device. You can clear all stored data by deleting the app.
          </p>
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
            Network Communication
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            SV3 Player only communicates with:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Your media servers</strong> — Stash, Plex, Emby, Jellyfin, or custom GraphQL endpoints you configure</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Apple</strong> — App Store for updates and optional tips</li>
          </ul>
          <p className="mt-4" style={{ color: 'var(--theme-text-secondary)' }}>
            All communication with your servers happens directly from your device. We have no visibility into what you watch, browse, or stream.
          </p>
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
            What We Don&apos;t Have
          </h2>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Servers</li>
            <li>Analytics</li>
            <li>User accounts</li>
            <li>Tracking</li>
            <li>Ads</li>
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
            Changes to This Policy
          </h2>
          <p style={{ color: 'var(--theme-text-secondary)' }}>
            If this policy changes, updates will be posted here with a new date.
          </p>
        </section>

        <section>
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b"
            style={{
              color: 'var(--theme-text-primary)',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Contact
          </h2>
          <p style={{ color: 'var(--theme-text-secondary)' }}>
            Questions? Visit our{' '}
            <a href="/support/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>support page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
