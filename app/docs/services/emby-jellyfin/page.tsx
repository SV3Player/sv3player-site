import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emby & Jellyfin Setup Guide - SV3 Player",
  description: "Connect SV3 Player to your Emby or Jellyfin media server.",
};

export default function EmbyJellyfinGuidePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-background)' }}>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav className="text-sm mb-6">
          <Link href="/docs/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Docs</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <Link href="/docs/services/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Services</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <span style={{ color: 'var(--theme-text-secondary)' }}>Emby & Jellyfin</span>
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
          Emby & Jellyfin
        </h1>
        <p className="mb-8 text-lg" style={{ color: 'var(--theme-text-secondary)' }}>
          Connect to your Emby or Jellyfin media server using username/password or API key authentication.
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
            Emby and Jellyfin share a similar API structure, so SV3 Player uses a unified setup process for both.
            Jellyfin is an open-source fork of Emby, which is why they work almost identically.
          </p>
          <p style={{ color: 'var(--theme-text-secondary)' }}>
            Both servers support two authentication methods: username/password (recommended for most users)
            or API key (useful for automation or when you don&apos;t want to use your account credentials).
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
            <li>Select <strong style={{ color: 'var(--theme-text-primary)' }}>Emby</strong> or <strong style={{ color: 'var(--theme-text-primary)' }}>Jellyfin</strong></li>
            <li>Enter your server URL</li>
            <li>Choose your authentication method and enter credentials</li>
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
            Server URL
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Enter your server&apos;s IP address or domain name. SV3 Player will automatically handle the URL format:
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-primary)' }}>Local IP Addresses</h3>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Uses HTTP by default</li>
            <li>Default port 7359 is added automatically if not specified</li>
            <li>Example: <code style={{ color: 'var(--theme-accent)' }}>192.168.1.100</code> → <code style={{ color: 'var(--theme-accent)' }}>http://192.168.1.100:7359</code></li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-secondary)' }}>Domain Names</h3>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Uses HTTPS by default (assumes you have a reverse proxy)</li>
            <li>No port added (assumes standard HTTPS port 443)</li>
            <li>Example: <code style={{ color: 'var(--theme-accent)' }}>media.example.com</code> → <code style={{ color: 'var(--theme-accent)' }}>https://media.example.com</code></li>
          </ul>
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
            Authentication Methods
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Choose between two authentication methods using the toggle in the app:
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-primary)' }}>Username & Password</h3>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Log in with your Emby or Jellyfin account credentials. This is the simplest method for most users.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Enter your username and password</li>
            <li>SV3 Player exchanges them for an access token</li>
            <li>Your password is not stored — only the token is saved</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-secondary)' }}>API Key</h3>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Use a server-generated API key for authentication. Useful if you prefer not to use your account credentials.
          </p>
          <p className="mb-3" style={{ color: 'var(--theme-text-secondary)' }}>
            To create an API key:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Emby:</strong> Settings → Advanced → API Keys</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Jellyfin:</strong> Dashboard → Advanced → API Keys</li>
          </ul>
          <div
            className="p-4 rounded-lg mt-4"
            style={{
              backgroundColor: 'var(--theme-surface)',
              border: '1px solid var(--theme-info)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
              <strong style={{ color: 'var(--theme-info)' }}>Tip:</strong> SV3 Player includes an &quot;Open Settings&quot; button
              that opens your server&apos;s API key settings page directly in a browser.
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
              <strong style={{ color: 'var(--theme-warning)' }}>Note:</strong> Mobile browsers may not allow copying API keys
              directly from the Emby or Jellyfin web interface. If you can&apos;t copy the key, try accessing your server&apos;s
              dashboard from a desktop browser, or manually type the key.
            </p>
          </div>
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
            Connection Test
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            When you tap <strong style={{ color: 'var(--theme-text-primary)' }}>Connect</strong>, SV3 Player tests the connection and displays:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Server Name</strong> — Your server&apos;s configured name</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Version</strong> — The Emby or Jellyfin version running</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Server ID</strong> — Unique identifier for your server</li>
          </ul>
          <p className="mt-4" style={{ color: 'var(--theme-text-secondary)' }}>
            If the test succeeds, tap <strong style={{ color: 'var(--theme-text-primary)' }}>Save & Connect</strong> to store your credentials and start browsing.
          </p>
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
            Supported Features
          </h2>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Browse video libraries</li>
            <li>Search content</li>
            <li>Stream with transcoding support</li>
            <li>View metadata (titles, descriptions, thumbnails)</li>
            <li>Access tags and genres</li>
          </ul>
        </section>

        <section>
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
            <li>Verify your server URL is correct</li>
            <li>Check that your server is running and accessible</li>
            <li>Ensure your device is on the same network (for local connections)</li>
            <li>Try specifying the port explicitly if using a non-standard port</li>
          </ul>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-secondary)' }}>
            Authentication Failed
          </h3>
          <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Double-check your username and password</li>
            <li>Verify the API key is valid and hasn&apos;t been revoked</li>
            <li>Ensure your user account has permission to access video libraries</li>
          </ul>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-accent)' }}>
            Videos Not Playing
          </h3>
          <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Check that transcoding is enabled on your server</li>
            <li>Verify the video format is supported</li>
            <li>Try a lower quality setting to test if it&apos;s a bandwidth issue</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
