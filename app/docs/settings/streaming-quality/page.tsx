import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Streaming Quality - SV3 Player",
  description: "Configure video streaming quality and transcoding settings in SV3 Player.",
};

export default function StreamingQualityPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-background)' }}>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav className="text-sm mb-6">
          <Link href="/docs/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Docs</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <Link href="/docs/settings/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Settings</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <span style={{ color: 'var(--theme-text-secondary)' }}>Streaming Quality</span>
        </nav>

        <h1
          className="text-4xl font-bold mb-4 inline-block"
          style={{
            background: 'linear-gradient(135deg, var(--theme-accent) 0%, var(--theme-info) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Streaming Quality
        </h1>
        <p className="mb-8 text-lg" style={{ color: 'var(--theme-text-secondary)' }}>
          Control video quality, transcoding preferences, and bandwidth usage for optimal playback.
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
            Quality Presets
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Choose a quality preset based on your network and preferences:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Original</strong> — Stream the source file directly without transcoding (best quality, highest bandwidth)</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>High (1080p)</strong> — Full HD quality, good for fast connections</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Medium (720p)</strong> — Balanced quality and bandwidth</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Low (480p)</strong> — Reduced quality for slower connections</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Auto</strong> — Automatically adjust based on network conditions</li>
          </ul>
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
            Transcoding
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Transcoding converts video on-the-fly to a format your device can play. This happens on your server, not your iOS device.
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-primary)' }}>When Transcoding Happens</h3>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Video codec isn&apos;t supported by iOS (e.g., some AVI, MKV containers)</li>
            <li>You&apos;ve selected a quality lower than the source</li>
            <li>The video bitrate exceeds your bandwidth setting</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-secondary)' }}>Transcoding Requirements</h3>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Your server handles transcoding. Make sure your server has:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Sufficient CPU/GPU for real-time transcoding</li>
            <li>FFmpeg installed and configured (for Stash, Jellyfin)</li>
            <li>Transcoding enabled in server settings</li>
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
            Wi-Fi vs Cellular
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Set different quality preferences for Wi-Fi and cellular connections:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Wi-Fi Quality</strong> — Higher quality for unlimited home networks</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Cellular Quality</strong> — Lower quality to conserve mobile data</li>
          </ul>
          <p className="mt-4" style={{ color: 'var(--theme-text-secondary)' }}>
            SV3 Player automatically switches quality when your connection type changes.
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
            Direct Play vs Direct Stream
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Understanding how your video is delivered:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Direct Play</strong> — The original file streams directly to your device. Best quality, no server load.</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Direct Stream</strong> — The container is remuxed but video/audio aren&apos;t re-encoded. Minimal server load.</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Transcode</strong> — Video is re-encoded to a compatible format. Uses server CPU/GPU.</li>
          </ul>
          <div
            className="p-4 rounded-lg mt-4"
            style={{
              backgroundColor: 'var(--theme-surface)',
              border: '1px solid var(--theme-info)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
              <strong style={{ color: 'var(--theme-info)' }}>Tip:</strong> For best quality and lowest server load, prefer Direct Play.
              Most MP4 and MOV files with H.264/H.265 video will direct play on iOS.
            </p>
          </div>
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
            Buffering or Stuttering
          </h3>
          <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Lower the quality setting</li>
            <li>Check your network speed to the server</li>
            <li>Ensure your server isn&apos;t overloaded with transcoding</li>
          </ul>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-secondary)' }}>
            Video Won&apos;t Play
          </h3>
          <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Try a lower quality setting to force transcoding</li>
            <li>Check if the file plays in your server&apos;s web interface</li>
            <li>Verify your server&apos;s transcoding is working</li>
          </ul>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-accent)' }}>
            Quality Lower Than Expected
          </h3>
          <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Check your quality setting isn&apos;t set to Auto or a lower preset</li>
            <li>Verify you&apos;re on Wi-Fi if you have different cellular settings</li>
            <li>The source file quality caps the maximum output</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
