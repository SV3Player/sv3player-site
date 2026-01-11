import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Storage & Cache - SV3 Player",
  description: "Manage storage, clear caches, and control how SV3 Player uses device space.",
};

export default function StorageCachePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-background)' }}>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav className="text-sm mb-6">
          <Link href="/docs/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Docs</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <Link href="/docs/settings/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Settings</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <span style={{ color: 'var(--theme-text-secondary)' }}>Storage & Cache</span>
        </nav>

        <h1
          className="text-4xl font-bold mb-4 inline-block"
          style={{
            background: 'linear-gradient(135deg, var(--theme-info) 0%, var(--theme-secondary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Storage & Cache
        </h1>
        <p className="mb-8 text-lg" style={{ color: 'var(--theme-text-secondary)' }}>
          Manage how SV3 Player uses your device&apos;s storage for thumbnails, metadata, and temporary files.
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
            What Gets Cached
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            SV3 Player caches data locally to improve performance:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Thumbnails</strong> — Preview images from your library</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Metadata</strong> — Titles, descriptions, tags, performers</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Library index</strong> — List of videos and their organization</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Search history</strong> — Recent searches (optional)</li>
          </ul>
          <div
            className="p-4 rounded-lg mt-4"
            style={{
              backgroundColor: 'var(--theme-surface)',
              border: '1px solid var(--theme-info)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
              <strong style={{ color: 'var(--theme-info)' }}>Note:</strong> SV3 Player does not download or cache video files.
              All video streaming happens in real-time from your server.
            </p>
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
            Viewing Storage Usage
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            To see how much space SV3 Player is using:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Go to <strong style={{ color: 'var(--theme-text-primary)' }}>Settings</strong> → <strong style={{ color: 'var(--theme-text-primary)' }}>Storage & Cache</strong></li>
            <li>View the breakdown by category:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li>Thumbnail cache size</li>
                <li>Metadata cache size</li>
                <li>Total app storage</li>
              </ul>
            </li>
          </ol>
          <p style={{ color: 'var(--theme-text-secondary)' }}>
            You can also check in iOS Settings → General → iPhone Storage → SV3 Player.
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
            Clearing Caches
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Free up space or force a refresh by clearing caches:
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-primary)' }}>Clear Thumbnail Cache</h3>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Removes all cached thumbnail images. They&apos;ll be re-downloaded as you browse.
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-secondary)' }}>Clear Metadata Cache</h3>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Removes cached titles, tags, and other metadata. Use this if your library isn&apos;t reflecting recent server changes.
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-accent)' }}>Clear All Caches</h3>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Removes all cached data. The app will fetch everything fresh from your servers.
          </p>

          <div
            className="p-4 rounded-lg"
            style={{
              backgroundColor: 'var(--theme-surface)',
              border: '1px solid var(--theme-warning)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
              <strong style={{ color: 'var(--theme-warning)' }}>Note:</strong> Clearing caches does not delete your server connections, settings, or PIN.
              Only cached data from your servers is removed.
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
            Cache Limits
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Configure maximum cache sizes:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Thumbnail cache limit</strong> — Maximum space for thumbnail images (default: 500 MB)</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Auto-clear old data</strong> — Automatically remove least recently used items when limit is reached</li>
          </ul>
          <p className="mt-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Larger caches mean faster browsing but use more device storage.
          </p>
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
            Reset App Data
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            To completely reset SV3 Player:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Go to <strong style={{ color: 'var(--theme-text-primary)' }}>Settings</strong> → <strong style={{ color: 'var(--theme-text-primary)' }}>Storage & Cache</strong></li>
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Reset All Data</strong></li>
            <li>Confirm the action</li>
          </ol>
          <div
            className="p-4 rounded-lg"
            style={{
              backgroundColor: 'var(--theme-surface)',
              border: '1px solid var(--theme-error)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
              <strong style={{ color: 'var(--theme-error)' }}>Warning:</strong> This removes everything — server connections, PIN, custom themes, and all cached data.
              You&apos;ll need to set up the app again from scratch. This cannot be undone.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
