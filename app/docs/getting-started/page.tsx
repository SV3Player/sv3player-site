import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Getting Started - SV3 Player",
  description: "Learn how to install SV3 Player and connect to your media servers.",
};

export default function GettingStartedPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--theme-background)' }}
    >
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1
          className="text-4xl font-bold mb-4 inline-block"
          style={{
            background: 'linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-secondary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Getting Started
        </h1>
        <p style={{ color: 'var(--theme-text-secondary)' }} className="mb-8 text-lg">
          Get up and running with SV3 Player in just a few minutes.
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
          <p style={{ color: 'var(--theme-text-secondary)' }} className="mb-4">
            Before you begin, you&apos;ll need:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>
              <strong style={{ color: 'var(--theme-text-primary)' }}>iPhone or iPad</strong> running iOS 17.0 or later
            </li>
            <li>
              <strong style={{ color: 'var(--theme-text-primary)' }}>A compatible media server</strong> already set up and accessible:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Emby or Jellyfin</li>
                <li>Plex Media Server</li>
                <li>Stash</li>
                <li>Any GraphQL endpoint with video content</li>
              </ul>
            </li>
          </ul>
          <p style={{ color: 'var(--theme-text-secondary)' }}>
            SV3 Player is a client app — it connects to your existing servers but doesn&apos;t provide or host any content itself.
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
            Installation
          </h2>
          <ol className="list-decimal list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Download SV3 Player from the App Store</li>
            <li>Open the app to begin the onboarding process</li>
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
            Onboarding Walkthrough
          </h2>
          <p style={{ color: 'var(--theme-text-secondary)' }} className="mb-6">
            When you first launch SV3 Player, you&apos;ll be guided through a quick setup process.
          </p>

          <h3 className="text-xl font-medium mb-3" style={{ color: 'var(--theme-primary)' }}>
            Step 1: Welcome
          </h3>
          <p style={{ color: 'var(--theme-text-secondary)' }} className="mb-4">
            The welcome screen introduces SV3 Player and confirms that you understand the app requires your own media servers. This isn&apos;t a streaming service — it&apos;s a player for content you already have access to.
          </p>
          <p style={{ color: 'var(--theme-text-secondary)' }} className="mb-6">
            Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Get Started</strong> to continue.
          </p>

          <h3 className="text-xl font-medium mb-3" style={{ color: 'var(--theme-secondary)' }}>
            Step 2: Security (Optional)
          </h3>
          <p style={{ color: 'var(--theme-text-secondary)' }} className="mb-3">
            You can protect your app with a 4-digit PIN. This adds a layer of privacy, requiring the PIN each time you open SV3 Player.
          </p>
          <p style={{ color: 'var(--theme-text-secondary)' }} className="mb-2">
            <strong style={{ color: 'var(--theme-text-primary)' }}>Setting up a PIN:</strong>
          </p>
          <ol className="list-decimal list-inside space-y-1 mb-3 ml-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Set Up PIN</strong></li>
            <li>Enter a 4-digit code</li>
            <li>Confirm your code</li>
          </ol>
          <p style={{ color: 'var(--theme-text-secondary)' }} className="mb-3">
            <strong style={{ color: 'var(--theme-text-primary)' }}>Biometric unlock:</strong> If your device supports Face ID or Touch ID, you can enable biometric unlock after setting a PIN.
          </p>
          <p style={{ color: 'var(--theme-text-secondary)' }} className="mb-6">
            You can skip this step and enable security later in Settings.
          </p>

          <h3 className="text-xl font-medium mb-3" style={{ color: 'var(--theme-accent)' }}>
            Step 3: Content Analysis (Optional)
          </h3>
          <p style={{ color: 'var(--theme-text-secondary)' }} className="mb-3">
            Content Analysis is an optional feature that automatically blurs potentially sensitive thumbnails. This is useful when browsing in public or shared spaces.
          </p>
          <p style={{ color: 'var(--theme-text-secondary)' }} className="mb-2">
            <strong style={{ color: 'var(--theme-text-primary)' }}>How it works:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 mb-3 ml-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Uses Apple&apos;s on-device Sensitive Content Analysis framework</li>
            <li>All processing happens locally on your device — nothing is sent anywhere</li>
            <li>Detected content is blurred until you tap to reveal it</li>
          </ul>
          <p style={{ color: 'var(--theme-text-secondary)' }} className="mb-6">
            <strong style={{ color: 'var(--theme-text-primary)' }}>Requirements:</strong> iOS 17 or later
          </p>

          <h3 className="text-xl font-medium mb-3" style={{ color: 'var(--theme-info)' }}>
            Step 4: Connect Your Servers
          </h3>
          <p style={{ color: 'var(--theme-text-secondary)' }} className="mb-4">
            The final step is adding your media servers. SV3 Player supports:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr
                  className="border-b"
                  style={{ borderColor: 'var(--theme-control-background)' }}
                >
                  <th className="text-left py-2 pr-4 font-semibold" style={{ color: 'var(--theme-text-primary)' }}>
                    Service
                  </th>
                  <th className="text-left py-2 font-semibold" style={{ color: 'var(--theme-text-primary)' }}>
                    Connection Type
                  </th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--theme-text-secondary)' }}>
                {[
                  { service: 'Custom GraphQL', type: 'Configurable endpoint' },
                  { service: 'Emby & Jellyfin', type: 'Username/password or API key' },
                  { service: 'Plex', type: 'OAuth authentication' },
                  { service: 'Stash', type: 'GraphQL with API key' },
                ].map((row, i, arr) => (
                  <tr
                    key={row.service}
                    className={i < arr.length - 1 ? 'border-b' : ''}
                    style={{ borderColor: 'var(--theme-control-background)' }}
                  >
                    <td className="py-2 pr-4">{row.service}</td>
                    <td className="py-2">{row.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            Adding Your First Server
          </h2>
          <ol className="list-decimal list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>
              Go to <strong style={{ color: 'var(--theme-text-primary)' }}>Settings</strong> → <strong style={{ color: 'var(--theme-text-primary)' }}>Service Connections</strong>
            </li>
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Add Service</strong></li>
            <li>Select your server type</li>
            <li>
              Enter your server details:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>
                  <strong style={{ color: 'var(--theme-text-primary)' }}>Server URL</strong> — Your server&apos;s address (e.g.,{' '}
                  <code
                    className="px-1 rounded text-sm"
                    style={{ backgroundColor: 'var(--theme-surface)', color: 'var(--theme-accent)' }}
                  >
                    192.168.1.100:9999
                  </code>
                  )
                </li>
                <li>
                  <strong style={{ color: 'var(--theme-text-primary)' }}>Authentication</strong> — API key, username/password, or OAuth depending on the service
                </li>
              </ul>
            </li>
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Test Connection</strong> to verify everything works</li>
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Save</strong></li>
          </ol>
          <div className="mt-4">
            <p className="mb-3" style={{ color: 'var(--theme-text-secondary)' }}>
              For detailed setup instructions, see the guide for your service:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { href: '/docs/services/custom-graphql/', name: 'Custom GraphQL' },
                { href: '/docs/services/emby-jellyfin/', name: 'Emby & Jellyfin' },
                { href: '/docs/services/plex/', name: 'Plex' },
                { href: '/docs/services/stash/', name: 'Stash' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-105"
                  style={{
                    backgroundColor: 'var(--theme-control-background)',
                    color: 'var(--theme-accent)',
                    border: '1px solid var(--theme-accent)',
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
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
            Basic Navigation
          </h2>
          <p style={{ color: 'var(--theme-text-secondary)' }} className="mb-4">
            Once connected, here&apos;s how to get around:
          </p>

          <h3 className="text-xl font-medium mb-2" style={{ color: 'var(--theme-primary)' }}>
            Feed View
          </h3>
          <p style={{ color: 'var(--theme-text-secondary)' }} className="mb-4">
            The main screen shows your video library in a vertical feed. Swipe up and down to browse content. Tap a video to start playback.
          </p>

          <h3 className="text-xl font-medium mb-2" style={{ color: 'var(--theme-secondary)' }}>
            Player Controls
          </h3>
          <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Swipe up/down</strong> — Next/previous video</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Double-tap</strong> — Play/pause</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Tap</strong> — Show/hide controls overlay</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Swipe from left edge</strong> — Return to feed</li>
          </ul>

          <h3 className="text-xl font-medium mb-2" style={{ color: 'var(--theme-accent)' }}>
            Filters
          </h3>
          <p style={{ color: 'var(--theme-text-secondary)' }}>
            Narrow down your library using filters. Filter by tags, performers, studios, ratings, duration, and more depending on your server&apos;s metadata.
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
            Next Steps
          </h2>
          <div className="space-y-4">
            <div>
              <p className="mb-3" style={{ color: 'var(--theme-text-primary)' }}>
                <strong>Service Guides:</strong>
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { href: '/docs/services/custom-graphql/', name: 'Custom GraphQL' },
                  { href: '/docs/services/emby-jellyfin/', name: 'Emby & Jellyfin' },
                  { href: '/docs/services/plex/', name: 'Plex' },
                  { href: '/docs/services/stash/', name: 'Stash' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-105"
                    style={{
                      backgroundColor: 'var(--theme-control-background)',
                      color: 'var(--theme-accent)',
                      border: '1px solid var(--theme-accent)',
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <p style={{ color: 'var(--theme-text-secondary)' }}>
              <Link href="/privacy/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>
                Privacy Policy
              </Link>
              {' — How SV3 Player handles your data'}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
