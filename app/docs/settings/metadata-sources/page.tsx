import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metadata Sources - SV3 Player",
  description: "Configure how SV3 Player maps metadata fields from different media servers.",
};

export default function MetadataSourcesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-background)' }}>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav className="text-sm mb-6">
          <Link href="/docs/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Docs</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <Link href="/docs/settings/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Settings</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <span style={{ color: 'var(--theme-text-secondary)' }}>Metadata Sources</span>
        </nav>

        <h1
          className="text-4xl font-bold mb-4 inline-block"
          style={{
            background: 'linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-info) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Metadata Sources
        </h1>
        <p className="mb-8 text-lg" style={{ color: 'var(--theme-text-secondary)' }}>
          Configure how SV3 Player maps metadata fields from your media servers. Different servers store tags and creator information in different fields — these settings let you choose which fields to use.
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
            Why Field Mapping?
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            SV3 Player displays tags and creators in a unified way, but different media servers store this information differently:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Stash</strong> has dedicated fields for tags, performers, and studios</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Jellyfin/Emby</strong> have both Tags and Genres — which one should appear as &quot;tags&quot;?</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Plex</strong> doesn&apos;t have a performers field — but you might want to use Writers or Producers instead</li>
          </ul>
          <p className="mt-4" style={{ color: 'var(--theme-text-secondary)' }}>
            These settings let you choose how your server&apos;s metadata maps to SV3 Player&apos;s display.
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
            Jellyfin Settings
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Choose which Jellyfin field to use as tags:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>
              <strong style={{ color: 'var(--theme-text-primary)' }}>Tags</strong> (default) — User-defined tags you&apos;ve added to items
            </li>
            <li>
              <strong style={{ color: 'var(--theme-text-primary)' }}>Genres</strong> — Library genre categories
            </li>
          </ul>
          <p className="mt-4 italic" style={{ color: 'var(--theme-text-tertiary)' }}>
            Choose based on how you&apos;ve organized your Jellyfin library.
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
            Emby Settings
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Choose which Emby field to use as tags:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>
              <strong style={{ color: 'var(--theme-text-primary)' }}>Tags</strong> (default) — User-defined tags you&apos;ve added to items
            </li>
            <li>
              <strong style={{ color: 'var(--theme-text-primary)' }}>Genres</strong> — Library genre categories
            </li>
          </ul>
          <p className="mt-4 italic" style={{ color: 'var(--theme-text-tertiary)' }}>
            Same options as Jellyfin since both servers have similar metadata structures.
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
            Plex Settings
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Plex doesn&apos;t have a dedicated performers/creators field. Choose which field to use instead:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>
              <strong style={{ color: 'var(--theme-text-primary)' }}>None</strong> (default) — Don&apos;t map any field to creators
            </li>
            <li>
              <strong style={{ color: 'var(--theme-text-primary)' }}>Writers</strong> — Use the Writers field as creators
            </li>
            <li>
              <strong style={{ color: 'var(--theme-text-primary)' }}>Producers</strong> — Use the Producers field as creators
            </li>
          </ul>
          <div
            className="p-4 rounded-lg"
            style={{
              backgroundColor: 'var(--theme-surface)',
              border: '1px solid var(--theme-info)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
              <strong style={{ color: 'var(--theme-info)' }}>Note:</strong> Plex tags always come from the Genre field.
              This setting only controls the creator/performer mapping.
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
            Stash Settings
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Stash has dedicated fields for all metadata types, so no configuration is needed:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Tags</strong> → Tags</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Performers</strong> → Creators</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Studios</strong> → Studios</li>
          </ul>
          <p className="mt-4 italic" style={{ color: 'var(--theme-text-tertiary)' }}>
            Stash&apos;s rich metadata model maps directly to SV3 Player with no additional configuration.
          </p>
        </section>

        <section>
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
            Accessing Settings
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            To configure metadata sources:
          </p>
          <ol className="list-decimal list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Open <strong style={{ color: 'var(--theme-text-primary)' }}>Settings</strong></li>
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Metadata Sources</strong></li>
            <li>Select your preferred field mappings for each server type</li>
          </ol>
          <p className="mt-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Changes take effect immediately. You may need to refresh your library to see updated metadata.
          </p>
        </section>
      </div>
    </div>
  );
}
