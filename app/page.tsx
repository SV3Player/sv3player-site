import Link from "next/link";
import { AnimatedGlassBackground } from "./components/AnimatedGlassBackground";

export default function Home() {
  return (
    <div>
      {/* Hero section - animation is contained here */}
      <section className="relative h-[500px]">
        {/* Animated background (absolute, stays in hero) */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatedGlassBackground height="100%" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1
              className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text"
              style={{
                background: 'linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-accent) 50%, var(--theme-secondary) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 60px var(--theme-accent-glow)',
              }}
            >
              SV3 Player
            </h1>
            <p
              className="text-xl mb-8 max-w-2xl mx-auto"
              style={{ color: 'var(--theme-text-secondary)' }}
            >
              Swipe through your own content. No algorithms. No tracking. Just your media.
            </p>
            <Link
              href="/docs/"
              className="inline-block font-medium px-6 py-3 rounded-lg transition-all hover:scale-105 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-accent) 100%)',
                color: 'var(--theme-text-primary)',
                boxShadow: '0 4px 20px var(--theme-accent-glow)',
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Content with glass blur overlay */}
      <div className="relative z-20 -mt-8">
        {/* Glass card for content */}
        <div
          className="backdrop-blur-xl rounded-t-3xl shadow-2xl"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--theme-background) 85%, transparent)',
          }}
        >
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            {/* Your Content Your Control */}
            <section className="mb-12">
              <h2
                className="text-3xl font-semibold mb-4 inline-block"
                style={{
                  background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-primary) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Your Content. Your Control.
              </h2>
              <p style={{ color: 'var(--theme-text-secondary)' }} className="leading-relaxed">
                SV3 Player is a vertical-first video player designed for your self-hosted media libraries.
                Swipe through your collection the way you want — without algorithms deciding what you see next,
                without engagement metrics tracking your every move, and without depending on platforms that may not be there tomorrow.
              </p>
            </section>

            <hr style={{ borderColor: 'var(--theme-control-background)' }} className="my-12" />

            {/* Built for Privacy */}
            <section className="mb-12">
              <h2
                className="text-3xl font-semibold mb-6 inline-block"
                style={{
                  background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-success) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Built for Privacy
              </h2>
              <ul className="space-y-3">
                {[
                  { title: 'No Analytics', desc: "We don't collect usage data. Ever." },
                  { title: 'No Cloud Sync', desc: 'Your credentials stay on your device in the secure iOS Keychain.' },
                  { title: 'Direct Connection', desc: "Stream directly from your servers. We're not in the middle." },
                  { title: 'No Account Required', desc: 'Just install and connect to your media.' },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span style={{ color: 'var(--theme-success)' }} className="font-bold">✓</span>
                    <span style={{ color: 'var(--theme-text-secondary)' }}>
                      <strong style={{ color: 'var(--theme-text-primary)' }}>{item.title}</strong> — {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <hr style={{ borderColor: 'var(--theme-control-background)' }} className="my-12" />

            {/* Vertical First */}
            <section className="mb-12">
              <h2
                className="text-3xl font-semibold mb-4 inline-block"
                style={{
                  background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-secondary) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Vertical-First Experience
              </h2>
              <p style={{ color: 'var(--theme-text-secondary)' }} className="leading-relaxed">
                Designed around the natural way you hold your phone. Swipe up for the next video,
                swipe down to go back. Build queues, shuffle your library, and let it play — all optimized for portrait viewing.
              </p>
            </section>

            <hr style={{ borderColor: 'var(--theme-control-background)' }} className="my-12" />

            {/* Services */}
            <section className="mb-12">
              <h2
                className="text-3xl font-semibold mb-6 inline-block"
                style={{
                  background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-accent) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Connect Your Servers
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr style={{ borderColor: 'var(--theme-control-background)' }} className="border-b">
                      <th
                        className="text-left py-3 pr-4 font-semibold"
                        style={{ color: 'var(--theme-text-primary)' }}
                      >
                        Service
                      </th>
                      <th
                        className="text-left py-3 font-semibold"
                        style={{ color: 'var(--theme-text-primary)' }}
                      >
                        Integration
                      </th>
                    </tr>
                  </thead>
                  <tbody style={{ color: 'var(--theme-text-secondary)' }}>
                    {[
                      { name: 'Custom GraphQL', desc: 'Connect any compatible endpoint with configurable mappings' },
                      { name: 'Emby', desc: 'Complete library access with filtering and search' },
                      { name: 'Jellyfin', desc: 'Open-source server support with full feature parity' },
                      { name: 'Plex', desc: 'Browse libraries and stream from your Plex Media Server' },
                      { name: 'Stash', desc: 'Full GraphQL support with scenes, performers, tags, and studios' },
                    ].map((service, i, arr) => (
                      <tr
                        key={service.name}
                        style={{ borderColor: 'var(--theme-control-background)' }}
                        className={i < arr.length - 1 ? 'border-b' : ''}
                      >
                        <td
                          className="py-3 pr-4 font-medium"
                          style={{ color: 'var(--theme-text-primary)' }}
                        >
                          {service.name}
                        </td>
                        <td className="py-3">{service.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <hr style={{ borderColor: 'var(--theme-control-background)' }} className="my-12" />

            {/* Features */}
            <section className="mb-12">
              <h2
                className="text-3xl font-semibold mb-6 inline-block"
                style={{
                  background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-info) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Features
              </h2>
              <ul className="space-y-3" style={{ color: 'var(--theme-text-secondary)' }}>
                {[
                  { name: 'Smart Queue', desc: 'Build playlists across multiple servers with shuffle' },
                  { name: 'Powerful Filters', desc: 'Find exactly what you want by tags, performers, ratings, and more' },
                  { name: 'Customizable Themes', desc: 'Light, dark, and custom color schemes' },
                  { name: 'App Lock', desc: 'Optional biometric or PIN protection' },
                  { name: 'Offline-Ready', desc: 'Works entirely on your local network' },
                ].map((feature) => (
                  <li key={feature.name}>
                    <strong style={{ color: 'var(--theme-text-primary)' }}>{feature.name}</strong> — {feature.desc}
                  </li>
                ))}
              </ul>
            </section>

            <hr style={{ borderColor: 'var(--theme-control-background)' }} className="my-12" />

            {/* Get the App */}
            <section className="mb-12">
              <h2
                className="text-3xl font-semibold mb-4 inline-block"
                style={{
                  background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-warning) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Get the App
              </h2>
              <p style={{ color: 'var(--theme-text-secondary)' }} className="mb-4">
                SV3 Player is available for iPhone and iPad.
              </p>
              <p style={{ color: 'var(--theme-text-tertiary)' }} className="italic">
                Coming soon to the App Store.
              </p>
            </section>

            <hr style={{ borderColor: 'var(--theme-control-background)' }} className="my-12" />

            {/* Learn More */}
            <section>
              <h2
                className="text-3xl font-semibold mb-6 inline-block"
                style={{
                  background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-interactive-highlight) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Learn More
              </h2>
              <ul className="space-y-2">
                {[
                  { href: '/docs/', label: 'Getting Started', desc: 'Set up your first server connection' },
                  { href: '/docs/services/', label: 'Service Guides', desc: 'Detailed setup for each platform' },
                  { href: '/privacy/', label: 'Privacy Policy', desc: "How we handle your data (spoiler: we don't)" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:underline"
                      style={{ color: 'var(--theme-primary)' }}
                    >
                      {link.label}
                    </Link>
                    <span style={{ color: 'var(--theme-text-secondary)' }}> — {link.desc}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
