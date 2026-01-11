import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Settings - SV3 Player",
  description: "Learn about SV3 Player settings and configuration options.",
};

const settingsPages = [
  {
    href: '/docs/settings/appearance/',
    name: 'Appearance',
    desc: 'Customize themes, colors, and visual effects.',
  },
  {
    href: '/docs/settings/content-analysis/',
    name: 'Content Analysis',
    desc: 'Automatic thumbnail blurring using Apple\'s on-device Sensitive Content Analysis.',
  },
  {
    href: '/docs/settings/metadata-sources/',
    name: 'Metadata Sources',
    desc: 'Configure how titles, tags, and thumbnails are fetched from your servers.',
  },
  {
    href: '/docs/settings/pin-biometrics/',
    name: 'PIN & Biometrics',
    desc: 'Protect app access with a PIN code, Face ID, or Touch ID.',
  },
  {
    href: '/docs/settings/storage-cache/',
    name: 'Storage & Cache',
    desc: 'Manage cached thumbnails, metadata, and device storage usage.',
  },
  {
    href: '/docs/settings/streaming-quality/',
    name: 'Streaming Quality',
    desc: 'Configure video quality, transcoding, and bandwidth settings.',
  },
  {
    href: '/docs/settings/tag-recommendations/',
    name: 'Tag Recommendations',
    desc: 'AI-powered frame analysis using MobileCLIP to suggest relevant tags during playback (Stash only).',
  },
];

export default function SettingsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-background)' }}>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav className="text-sm mb-6">
          <Link href="/docs/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Docs</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <span style={{ color: 'var(--theme-text-secondary)' }}>Settings</span>
        </nav>

        <h1
          className="text-4xl font-bold mb-4 inline-block"
          style={{
            background: 'linear-gradient(135deg, var(--theme-secondary) 0%, var(--theme-accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Settings
        </h1>
        <p className="mb-6 text-lg" style={{ color: 'var(--theme-text-secondary)' }}>
          Configure SV3 Player to work the way you want. These guides explain the various settings and features available in the app.
        </p>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-2 mb-10">
          {settingsPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
              style={{
                backgroundColor: 'var(--theme-control-background)',
                color: 'var(--theme-accent)',
                border: '1px solid var(--theme-accent)',
              }}
            >
              {page.name}
            </Link>
          ))}
        </div>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-6 pb-2 border-b inline-block w-full"
            style={{
              background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-primary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Settings Guides
          </h2>

          <div className="space-y-6">
            {settingsPages.map((page, i) => {
              const colors = ['var(--theme-primary)', 'var(--theme-secondary)', 'var(--theme-accent)', 'var(--theme-info)', 'var(--theme-success)', 'var(--theme-warning)', 'var(--theme-interactive-highlight)'];
              const color = colors[i % colors.length];
              return (
                <div key={page.name}>
                  <Link
                    href={page.href}
                    className="inline-block px-4 py-2 rounded-lg text-base font-semibold mb-2 transition-all hover:scale-105"
                    style={{
                      backgroundColor: 'var(--theme-control-background)',
                      color: color,
                      border: `1px solid ${color}`,
                    }}
                  >
                    {page.name}
                  </Link>
                  <p style={{ color: 'var(--theme-text-secondary)' }}>{page.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
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
            Server Connections
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Manage your media server connections in Settings:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Add/Remove Servers</strong> — Connect to new servers or remove existing ones</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Edit Credentials</strong> — Update server URLs, API keys, or passwords</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Test Connection</strong> — Verify your server is reachable before saving</li>
          </ul>
          <p className="mt-4" style={{ color: 'var(--theme-text-secondary)' }}>
            See the{' '}
            <Link href="/docs/services/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Service Guides</Link>
            {' '}for detailed setup instructions for each server type.
          </p>
        </section>
      </div>
    </div>
  );
}
