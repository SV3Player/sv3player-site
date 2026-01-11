import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Content Analysis - SV3 Player",
  description: "Learn about SV3 Player's on-device content analysis feature for automatic thumbnail blurring.",
};

export default function ContentAnalysisPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-background)' }}>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav className="text-sm mb-6">
          <Link href="/docs/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Docs</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <Link href="/docs/settings/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Settings</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <span style={{ color: 'var(--theme-text-secondary)' }}>Content Analysis</span>
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
          Content Analysis
        </h1>
        <p className="mb-8 text-lg" style={{ color: 'var(--theme-text-secondary)' }}>
          Content Analysis is an optional privacy feature that automatically blurs potentially sensitive thumbnails.
          It uses Apple&apos;s on-device Sensitive Content Analysis framework to detect and blur content before it&apos;s displayed.
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
            How It Works
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            When Content Analysis is enabled, SV3 Player uses Apple&apos;s built-in Sensitive Content Analysis framework to scan thumbnails as they load:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Thumbnails are analyzed <strong style={{ color: 'var(--theme-text-primary)' }}>entirely on your device</strong></li>
            <li>If sensitive content is detected, the thumbnail is automatically blurred</li>
            <li>Tap a blurred thumbnail to reveal it temporarily</li>
            <li>The blur reapplies when you navigate away and return</li>
          </ol>
          <div
            className="p-4 rounded-lg"
            style={{
              backgroundColor: 'var(--theme-surface)',
              border: '1px solid var(--theme-success)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
              <strong style={{ color: 'var(--theme-success)' }}>Privacy First:</strong> All analysis happens locally on your device using Apple&apos;s framework.
              No images are ever sent to any server for analysis — not to Apple, not to us, not to anyone.
            </p>
          </div>
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
            Requirements
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>iOS 17.0 or later</strong> — The Sensitive Content Analysis framework requires iOS 17+</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Sensitive Content Warning enabled in iOS Settings</strong> — This system-level setting must be turned on</li>
          </ul>

          <div
            className="p-4 rounded-lg mb-4"
            style={{
              backgroundColor: 'var(--theme-surface)',
              border: '1px solid var(--theme-warning)',
            }}
          >
            <p className="text-sm font-semibold mb-2" style={{ color: 'var(--theme-warning)' }}>
              Important: Enable in iOS Settings First
            </p>
            <p className="text-sm mb-3" style={{ color: 'var(--theme-text-secondary)' }}>
              Before using Content Analysis in SV3 Player, you must enable it at the system level:
            </p>
            <ol className="list-decimal list-inside space-y-1 text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
              <li>Open the <strong style={{ color: 'var(--theme-text-primary)' }}>Settings</strong> app on your iPhone/iPad</li>
              <li>Go to <strong style={{ color: 'var(--theme-text-primary)' }}>Privacy &amp; Security</strong></li>
              <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Sensitive Content Warning</strong></li>
              <li>Toggle it <strong style={{ color: 'var(--theme-text-primary)' }}>On</strong></li>
            </ol>
            <p className="text-sm mt-3" style={{ color: 'var(--theme-text-tertiary)' }}>
              If this setting is not enabled, Content Analysis in SV3 Player will not work correctly and may treat all content as sensitive.
            </p>
          </div>

          <p className="italic" style={{ color: 'var(--theme-text-tertiary)' }}>
            On devices running iOS 16 or earlier, this feature is not available.
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
            When to Use It
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>Content Analysis is useful when:</p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Browsing in public</strong> — Prevent accidental exposure of sensitive thumbnails</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Shared devices</strong> — Add a layer of discretion when others might see your screen</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Screen sharing</strong> — Avoid surprises during presentations or calls</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>General privacy</strong> — Keep your library discreet by default</li>
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
            Enabling Content Analysis
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>You can enable Content Analysis during onboarding or later in Settings:</p>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-primary)' }}>During Onboarding</h3>
          <ol className="list-decimal list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>On the Content Analysis step, tap <strong style={{ color: 'var(--theme-text-primary)' }}>Enable</strong></li>
            <li>If prompted by iOS, allow the app to analyze sensitive content</li>
            <li>Continue with setup</li>
          </ol>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-secondary)' }}>In Settings</h3>
          <ol className="list-decimal list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Open SV3 Player and go to <strong style={{ color: 'var(--theme-text-primary)' }}>Settings</strong></li>
            <li>Find <strong style={{ color: 'var(--theme-text-primary)' }}>Content Analysis</strong> under Privacy</li>
            <li>Toggle the switch to enable or disable</li>
          </ol>
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
            Revealing Blurred Content
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            When a thumbnail is blurred, you can reveal it temporarily:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Tap once</strong> on a blurred thumbnail to reveal it</li>
            <li>The thumbnail remains visible while you&apos;re on that screen</li>
            <li>When you navigate away and return, the blur is reapplied</li>
          </ul>
          <p className="mt-4" style={{ color: 'var(--theme-text-secondary)' }}>
            This ensures you always have control over what&apos;s visible, while maintaining privacy by default.
          </p>
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
            Technical Details
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            SV3 Player uses Apple&apos;s <code className="px-1 rounded text-sm" style={{ backgroundColor: 'var(--theme-surface)', color: 'var(--theme-accent)' }}>SensitiveContentAnalysis</code> framework,
            the same technology used in Messages and AirDrop to detect sensitive images.
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>On-device ML</strong> — Uses Apple&apos;s Core ML models running locally</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>No network calls</strong> — Analysis never leaves your device</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Low overhead</strong> — Optimized for minimal battery and performance impact</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Apple managed</strong> — Detection models are maintained and updated by Apple</li>
          </ul>
        </section>

        <section className="mb-10">
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
            Limitations
          </h2>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Detection accuracy</strong> — The framework uses Apple&apos;s detection criteria, which may not match your expectations in all cases</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Thumbnails only</strong> — Analysis applies to thumbnails in the library view, not full video playback</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>iOS 17+ required</strong> — Not available on older iOS versions</li>
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
            FAQ
          </h2>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-primary)' }}>
            Does this send my images anywhere?
          </h3>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            No. All analysis is performed entirely on your device using Apple&apos;s built-in framework. No images or analysis results are ever transmitted.
          </p>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-secondary)' }}>
            Can I disable it for specific content?
          </h3>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            The feature applies to all thumbnails when enabled. You can tap any blurred thumbnail to reveal it, or disable the feature entirely in Settings.
          </p>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-accent)' }}>
            Why isn&apos;t some content being detected?
          </h3>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Detection is handled by Apple&apos;s framework and uses their criteria. SV3 Player has no control over what is or isn&apos;t detected.
          </p>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-info)' }}>
            Does this affect performance?
          </h3>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            The impact is minimal. Apple&apos;s framework is optimized for mobile devices and runs efficiently in the background as thumbnails load.
          </p>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-warning)' }}>
            Why is everything showing as sensitive / blurred?
          </h3>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            This usually means the <strong style={{ color: 'var(--theme-text-primary)' }}>Sensitive Content Warning</strong> setting is not enabled in iOS Settings.
            When the system-level permission isn&apos;t granted, the analysis framework cannot access Apple&apos;s detection models and defaults to treating all content as sensitive.
          </p>
          <p style={{ color: 'var(--theme-text-secondary)' }}>
            To fix this: Open <strong style={{ color: 'var(--theme-text-primary)' }}>Settings</strong> → <strong style={{ color: 'var(--theme-text-primary)' }}>Privacy &amp; Security</strong> → <strong style={{ color: 'var(--theme-text-primary)' }}>Sensitive Content Warning</strong> and toggle it on.
          </p>
        </section>
      </div>
    </div>
  );
}
