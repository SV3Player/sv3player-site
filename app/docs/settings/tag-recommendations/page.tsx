import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tag Recommendations - SV3 Player",
  description: "AI-powered frame analysis using MobileCLIP to automatically suggest relevant tags during video playback.",
};

export default function TagRecommendationsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-background)' }}>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav className="text-sm mb-6">
          <Link href="/docs/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Docs</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <Link href="/docs/settings/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Settings</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <span style={{ color: 'var(--theme-text-secondary)' }}>Tag Recommendations</span>
        </nav>

        <h1
          className="text-4xl font-bold mb-4 inline-block"
          style={{
            background: 'linear-gradient(135deg, var(--theme-warning) 0%, var(--theme-accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Tag Recommendations
        </h1>
        <p className="mb-8 text-lg" style={{ color: 'var(--theme-text-secondary)' }}>
          AI-powered frame analysis that automatically suggests relevant tags from your Stash library during video playback.
        </p>

        <div
          className="p-4 rounded-lg mb-8"
          style={{
            backgroundColor: 'var(--theme-surface)',
            border: '1px solid var(--theme-warning)',
          }}
        >
          <p className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
            <strong style={{ color: 'var(--theme-warning)' }}>Stash Only:</strong> Tag Recommendations requires a Stash server connection.
            This feature uses your Stash tag library to match against video content.
          </p>
        </div>

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
            Tag Recommendations uses <strong style={{ color: 'var(--theme-text-primary)' }}>MobileCLIP</strong>, Apple&apos;s on-device AI model, to analyze video frames and suggest matching tags:
          </p>
          <ol className="list-decimal list-inside space-y-3" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Frame Capture</strong> — During playback, SV3 Player captures frames at regular intervals (default: every 5 seconds)</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Image Analysis</strong> — MobileCLIP generates a 512-dimensional embedding that represents the visual content of each frame</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Tag Matching</strong> — The frame embedding is compared against pre-computed embeddings of your Stash tags using cosine similarity</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Suggestions Display</strong> — Tags that exceed the similarity threshold appear as recommendations in the player</li>
          </ol>
          <div
            className="p-4 rounded-lg mt-4"
            style={{
              backgroundColor: 'var(--theme-surface)',
              border: '1px solid var(--theme-success)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
              <strong style={{ color: 'var(--theme-success)' }}>Privacy:</strong> All AI processing happens entirely on your device using Apple&apos;s Neural Engine.
              No frames or analysis data ever leave your device.
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
            Model Setup
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Before using Tag Recommendations, you need to download the MobileCLIP model:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Go to <strong style={{ color: 'var(--theme-text-primary)' }}>Settings</strong> → <strong style={{ color: 'var(--theme-text-primary)' }}>Tag Recommendations</strong></li>
            <li>Select a model variant (see below)</li>
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Download Model</strong></li>
            <li>Wait for download and compilation to complete</li>
          </ol>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-primary)' }}>Model Variants</h3>
          <p className="mb-3" style={{ color: 'var(--theme-text-secondary)' }}>
            Choose a model based on your device capabilities and accuracy needs:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>S0</strong> — Smallest and fastest, good for older devices</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>S1</strong> — Balanced speed and accuracy (recommended)</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>S2</strong> — Highest accuracy, requires more processing power</li>
          </ul>
          <p className="mt-4 italic" style={{ color: 'var(--theme-text-tertiary)' }}>
            Models are downloaded from Apple&apos;s MobileCLIP repository and compiled for the Neural Engine on first use.
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
            Settings
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Fine-tune the recommendation behavior:
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-primary)' }}>Similarity Threshold</h3>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Controls how closely a frame must match a tag to trigger a recommendation (10–50%). Lower values show more suggestions but may be less accurate. Higher values are more precise but may miss some matches.
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-secondary)' }}>Max Recommendations</h3>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Maximum number of tag suggestions to display at once (1–10). Keeps the interface clean while still showing relevant matches.
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-accent)' }}>Analysis Interval</h3>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            How often to analyze frames during playback (2–15 seconds). Shorter intervals provide more responsive suggestions but use more processing power.
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-info)' }}>Display Duration</h3>
          <p style={{ color: 'var(--theme-text-secondary)' }}>
            How long recommended tags stay visible on screen (10–60 seconds). Adjust based on how quickly you want suggestions to cycle.
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
            Tag Library
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            The system matches against your existing Stash tag taxonomy:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Tags are loaded from your connected Stash server</li>
            <li>Each tag name is converted to a text embedding using the same MobileCLIP model</li>
            <li>Tag embeddings are cached locally for fast matching</li>
            <li>Refresh the tag library after adding new tags in Stash</li>
          </ul>
          <div
            className="p-4 rounded-lg mt-4"
            style={{
              backgroundColor: 'var(--theme-surface)',
              border: '1px solid var(--theme-info)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
              <strong style={{ color: 'var(--theme-info)' }}>Tip:</strong> Descriptive tag names work better for matching.
              &quot;Red dress&quot; will match more accurately than &quot;RD&quot; or abbreviations.
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
            Storage Management
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Manage model files and cached data:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Model Cache</strong> — Downloaded and compiled models are stored locally</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Tag Embeddings</strong> — Pre-computed tag vectors for fast matching</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Clear Cache</strong> — Remove all downloaded models to free space (will need to re-download)</li>
          </ul>
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
            Troubleshooting
          </h2>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-primary)' }}>
            No recommendations appearing
          </h3>
          <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Ensure a MobileCLIP model is downloaded and ready</li>
            <li>Check that you have a Stash server connected</li>
            <li>Verify your Stash server has tags defined</li>
            <li>Try lowering the similarity threshold</li>
          </ul>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-secondary)' }}>
            Inaccurate recommendations
          </h3>
          <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Increase the similarity threshold for stricter matching</li>
            <li>Use more descriptive tag names in Stash</li>
            <li>Try a larger model variant (S1 or S2)</li>
          </ul>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-accent)' }}>
            Performance issues
          </h3>
          <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Increase the analysis interval to reduce processing frequency</li>
            <li>Use a smaller model variant (S0)</li>
            <li>Close other apps to free up Neural Engine resources</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
