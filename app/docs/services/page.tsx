import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Guides - SV3 Player",
  description: "Learn how to connect SV3 Player to your media servers.",
};

const services = [
  { href: '/docs/services/custom-graphql/', name: 'Custom GraphQL', port: 'Varies', auth: 'Configurable', api: 'GraphQL', desc: 'Connect to any GraphQL endpoint that serves video content. Configure custom queries and field mappings for non-standard servers.' },
  { href: '/docs/services/emby-jellyfin/', name: 'Emby & Jellyfin', port: '7359', auth: 'Username/Password or API Key', api: 'REST', desc: 'Connect to your Emby or Jellyfin media server. Both use a unified setup process with username/password or API key authentication.' },
  { href: '/docs/services/plex/', name: 'Plex', port: '32400', auth: 'OAuth (Plex account)', api: 'REST', desc: "Connect to Plex Media Server using your Plex account. Sign in through Plex's secure OAuth flow — no API keys to manage." },
  { href: '/docs/services/stash/', name: 'Stash', port: '9999', auth: 'API Key', api: 'GraphQL', desc: 'Connect to your Stash media organizer. Full support for scenes, performers, tags, studios, and ratings. Requires an API key from your Stash settings.' },
];

export default function ServicesPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--theme-background)' }}
    >
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1
          className="text-4xl font-bold mb-4 inline-block"
          style={{
            background: 'linear-gradient(135deg, var(--theme-secondary) 0%, var(--theme-accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Service Guides
        </h1>
        <p style={{ color: 'var(--theme-text-secondary)' }} className="mb-8 text-lg">
          SV3 Player connects directly to your self-hosted media servers. Choose your server type below for step-by-step setup instructions.
        </p>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b"
            style={{
              color: 'var(--theme-text-primary)',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Quick Reference
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b" style={{ borderColor: 'var(--theme-control-background)' }}>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: 'var(--theme-text-primary)' }}>Service</th>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: 'var(--theme-text-primary)' }}>Default Port</th>
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: 'var(--theme-text-primary)' }}>Authentication</th>
                  <th className="text-left py-2 font-semibold" style={{ color: 'var(--theme-text-primary)' }}>API Type</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--theme-text-secondary)' }}>
                {services.map((service, i, arr) => (
                  <tr
                    key={service.name}
                    className={i < arr.length - 1 ? 'border-b' : ''}
                    style={{ borderColor: 'var(--theme-control-background)' }}
                  >
                    <td className="py-2 pr-4">
                      <Link href={service.href} className="hover:underline" style={{ color: 'var(--theme-accent)' }}>
                        {service.name}
                      </Link>
                    </td>
                    <td className="py-2 pr-4">{service.port}</td>
                    <td className="py-2 pr-4">{service.auth}</td>
                    <td className="py-2">{service.api}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

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
            Detailed Guides
          </h2>

          <div className="space-y-6">
            {services.map((service, i) => {
              const colors = ['var(--theme-primary)', 'var(--theme-secondary)', 'var(--theme-accent)', 'var(--theme-info)', 'var(--theme-warning)'];
              const color = colors[i % colors.length];
              return (
                <div key={service.name}>
                  <Link
                    href={service.href}
                    className="inline-block px-4 py-2 rounded-lg text-base font-semibold mb-2 transition-all hover:scale-105"
                    style={{
                      backgroundColor: 'var(--theme-control-background)',
                      color: color,
                      border: `1px solid ${color}`,
                    }}
                  >
                    {service.name}
                  </Link>
                  <p style={{ color: 'var(--theme-text-secondary)' }}>{service.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-10">
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
            You can connect multiple servers to SV3 Player — even different types. For example, you might have both a Stash server and a Plex server. Each appears as a separate connection in Settings, and you can switch between them at any time.
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
            Connection Tips
          </h2>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>
              <strong style={{ color: 'var(--theme-text-primary)' }}>Local network</strong> — For servers on your home network, use the local IP address (e.g.,{' '}
              <code className="px-1 rounded text-sm" style={{ backgroundColor: 'var(--theme-surface)', color: 'var(--theme-accent)' }}>
                192.168.1.100
              </code>
              )
            </li>
            <li>
              <strong style={{ color: 'var(--theme-text-primary)' }}>Remote access</strong> — For access outside your network, use a VPN, reverse proxy, or the server&apos;s remote access features
            </li>
            <li>
              <strong style={{ color: 'var(--theme-text-primary)' }}>HTTPS</strong> — SV3 Player tries HTTPS first. For local servers without SSL, it will fall back to HTTP automatically.
            </li>
            <li>
              <strong style={{ color: 'var(--theme-text-primary)' }}>Test first</strong> — Always use the <strong>Test Connection</strong> button before saving to verify your settings
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
