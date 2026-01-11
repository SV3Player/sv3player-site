import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation - SV3 Player",
  description: "Complete documentation for setting up and using SV3 Player with your media servers.",
};

export default function DocsPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--theme-background)' }}
    >
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1
          className="text-4xl font-bold mb-4 inline-block"
          style={{
            background: 'linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Documentation
        </h1>
        <p style={{ color: 'var(--theme-text-secondary)' }} className="mb-8 text-lg">
          Welcome to the SV3 Player documentation. Here you&apos;ll find everything you need to get started and make the most of the app.
        </p>

        <section className="mb-12">
          <h2
            className="text-2xl font-semibold mb-6 pb-2 border-b"
            style={{
              color: 'var(--theme-text-primary)',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Quick Links
          </h2>
          <div className="grid gap-4">
            <Link
              href="/docs/getting-started/"
              className="block p-4 rounded-lg transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: 'var(--theme-surface)',
                border: '1px solid var(--theme-control-background)',
              }}
            >
              <h3
                className="font-semibold text-lg mb-1"
                style={{ color: 'var(--theme-primary)' }}
              >
                Getting Started
              </h3>
              <p style={{ color: 'var(--theme-text-secondary)' }} className="text-sm">
                First-time setup and your first server connection
              </p>
            </Link>

            <Link
              href="/docs/services/"
              className="block p-4 rounded-lg transition-all hover:scale-[1.02]"
              style={{
                backgroundColor: 'var(--theme-surface)',
                border: '1px solid var(--theme-control-background)',
              }}
            >
              <h3
                className="font-semibold text-lg mb-1"
                style={{ color: 'var(--theme-secondary)' }}
              >
                Service Guides
              </h3>
              <p style={{ color: 'var(--theme-text-secondary)' }} className="text-sm">
                Detailed instructions for each supported service
              </p>
            </Link>
          </div>
        </section>

        <section>
          <h2
            className="text-2xl font-semibold mb-6 pb-2 border-b"
            style={{
              color: 'var(--theme-text-primary)',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Supported Services
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: '/docs/services/stash/', name: 'Stash' },
              { href: '/docs/services/plex/', name: 'Plex' },
              { href: '/docs/services/emby/', name: 'Emby' },
              { href: '/docs/services/jellyfin/', name: 'Jellyfin' },
              { href: '/docs/services/custom-graphql/', name: 'Custom GraphQL' },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="hover:underline transition-colors"
                style={{ color: 'var(--theme-accent)' }}
              >
                {service.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
