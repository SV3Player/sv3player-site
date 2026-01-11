import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Appearance - SV3 Player",
  description: "Customize how SV3 Player looks with themes, colors, and visual effects.",
};

export default function AppearancePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-background)' }}>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav className="text-sm mb-6">
          <Link href="/docs/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Docs</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <Link href="/docs/settings/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Settings</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <span style={{ color: 'var(--theme-text-secondary)' }}>Appearance</span>
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
          Appearance
        </h1>
        <p className="mb-8 text-lg" style={{ color: 'var(--theme-text-secondary)' }}>
          Make SV3 Player your own with customizable themes, colors, and visual effects.
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
            Built-in Themes
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            SV3 Player includes several carefully crafted themes:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Ocean Depth</strong> — Deep teal and cyan tones</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Midnight</strong> — Classic dark mode with purple accents</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Sunset</strong> — Warm oranges and reds</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Forest</strong> — Natural greens and earth tones</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Neon</strong> — Vibrant cyberpunk colors</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Minimal Light</strong> — Clean, bright interface</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Minimal Dark</strong> — Sleek dark interface</li>
          </ul>
          <p style={{ color: 'var(--theme-text-secondary)' }}>
            To change themes: <strong style={{ color: 'var(--theme-text-primary)' }}>Settings</strong> → <strong style={{ color: 'var(--theme-text-primary)' }}>Appearance</strong> → <strong style={{ color: 'var(--theme-text-primary)' }}>Theme</strong>
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
            Custom Themes
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Create your own theme or import one from the web:
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-primary)' }}>Using the Theme Creator</h3>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Use our{' '}
            <Link href="/theme-creator/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Theme Creator</Link>
            {' '}to design your own theme with a live preview. When you&apos;re done:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Export your theme as a JSON file</li>
            <li>Transfer the file to your iOS device (AirDrop, Files, etc.)</li>
            <li>Open the file with SV3 Player, or use <strong style={{ color: 'var(--theme-text-primary)' }}>Settings</strong> → <strong style={{ color: 'var(--theme-text-primary)' }}>Appearance</strong> → <strong style={{ color: 'var(--theme-text-primary)' }}>Import Theme</strong></li>
          </ol>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-secondary)' }}>Theme Properties</h3>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Custom themes can customize:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Primary colors</strong> — Main brand colors (primary, secondary, accent)</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Background colors</strong> — App background and surface colors</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Text colors</strong> — Primary, secondary, and tertiary text</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Status colors</strong> — Success, warning, error, info indicators</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Glass effects</strong> — Blur, tint, and opacity for glass elements</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Gradients</strong> — Background gradient colors</li>
          </ul>
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
            Glass Effects
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            SV3 Player uses glass morphism for overlays and controls. You can customize:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Glass tint</strong> — The color tint applied to glass surfaces</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Fill opacity</strong> — How opaque the glass background is</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Border opacity</strong> — Visibility of glass borders</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Background noise</strong> — Subtle texture on backgrounds</li>
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
            Managing Themes
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>In Settings → Appearance, you can:</p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Switch themes</strong> — Tap any theme to apply it instantly</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Import themes</strong> — Load custom theme JSON files</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Delete custom themes</strong> — Swipe left on imported themes to remove them</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Reset to default</strong> — Restore the original theme</li>
          </ul>
        </section>

        <section>
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b inline-block w-full"
            style={{
              background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-interactive-highlight) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Theme File Format
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Theme files are JSON with a flat structure. See the{' '}
            <Link href="/theme-creator/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Theme Creator</Link>
            {' '}for the complete list of customizable properties.
          </p>
          <p style={{ color: 'var(--theme-text-secondary)' }}>
            Required fields: <code className="px-1 rounded text-sm" style={{ backgroundColor: 'var(--theme-surface)', color: 'var(--theme-accent)' }}>id</code>,{' '}
            <code className="px-1 rounded text-sm" style={{ backgroundColor: 'var(--theme-surface)', color: 'var(--theme-accent)' }}>name</code>, and all color properties.
          </p>
        </section>
      </div>
    </div>
  );
}
