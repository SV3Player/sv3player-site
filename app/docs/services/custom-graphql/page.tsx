import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom GraphQL Setup Guide - SV3 Player",
  description: "Connect SV3 Player to any GraphQL media server with configurable queries and field mappings.",
};

export default function CustomGraphQLGuidePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-background)' }}>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav className="text-sm mb-6">
          <Link href="/docs/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Docs</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <Link href="/docs/services/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Services</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <span style={{ color: 'var(--theme-text-secondary)' }}>Custom GraphQL</span>
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
          Custom GraphQL
        </h1>
        <p className="mb-6 text-lg" style={{ color: 'var(--theme-text-secondary)' }}>
          Connect to any GraphQL media server by configuring custom queries and field mappings.
        </p>

        <div
          className="p-4 rounded-lg mb-8"
          style={{
            backgroundColor: 'var(--theme-surface)',
            border: '1px solid var(--theme-warning)',
          }}
        >
          <p className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
            <strong style={{ color: 'var(--theme-warning)' }}>Experimental:</strong> This feature is experimental and may not work with all GraphQL schemas.
            It&apos;s designed for advanced users who understand their server&apos;s API structure.
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
            Overview
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            The Custom GraphQL option lets you connect to any GraphQL server that provides video content. This is useful for:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Self-hosted media servers with GraphQL APIs</li>
            <li>Custom media management systems</li>
            <li>Servers with non-standard schemas</li>
            <li>Development and testing of new integrations</li>
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
            How It Works
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            SV3 Player expects certain fields to display your video library (title, stream URL, thumbnail, etc.).
            Since every GraphQL server structures its responses differently, Custom GraphQL lets you tell the app
            where to find each piece of data using JSON dot notation.
          </p>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            For example, if your server returns video titles at <code style={{ color: 'var(--theme-accent)' }}>data.videos.items[].name</code>,
            you would map the &quot;title&quot; field to the path <code style={{ color: 'var(--theme-accent)' }}>name</code>.
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
            Connection Setup
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            To connect a Custom GraphQL server:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Go to <strong style={{ color: 'var(--theme-text-primary)' }}>Settings</strong> → <strong style={{ color: 'var(--theme-text-primary)' }}>Service Connections</strong></li>
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Add Connection</strong></li>
            <li>Select <strong style={{ color: 'var(--theme-text-primary)' }}>Custom GraphQL</strong></li>
            <li>Enter your server URL and authentication details</li>
            <li>Configure field mappings</li>
          </ol>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-primary)' }}>Required Information</h3>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Server URL</strong> — Full URL to your GraphQL endpoint</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Config Name</strong> — A friendly name to identify this server</li>
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
            Authentication
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Choose how SV3 Player authenticates with your server:
          </p>
          <ul className="list-disc list-inside space-y-3" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Custom Header</strong> — Send authentication as a custom HTTP header with a configurable name and optional value prefix</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Bearer Token</strong> — Standard OAuth-style authentication using the Authorization header</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Query Parameter</strong> — Append authentication as a URL query parameter</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>None</strong> — No authentication required (for public or local servers)</li>
          </ul>
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
            Field Mapping
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            The Mapping Config screen lets you define where SV3 Player should look for each piece of data
            in your server&apos;s GraphQL responses. Use JSON dot notation to specify field locations.
          </p>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-primary)' }}>Response Structure</h3>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Root Path</strong> — Path to the array of videos in your response</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Count Path</strong> — Path to the total count for pagination</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-secondary)' }}>Required Fields</h3>
          <p className="mb-3" style={{ color: 'var(--theme-text-secondary)' }}>
            These must be mapped for basic functionality:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>id</strong> — Unique video identifier</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>title</strong> — Video display title</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>streamURL</strong> — Video stream URL</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-accent)' }}>Optional Fields</h3>
          <p className="mb-3" style={{ color: 'var(--theme-text-secondary)' }}>
            Map these for enhanced functionality:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>duration, thumbnailURL, previewURL</li>
            <li>description, date, rating, playCount</li>
            <li>width, height, fileSize</li>
          </ul>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-info)' }}>Nested Objects</h3>
          <p className="mb-3" style={{ color: 'var(--theme-text-secondary)' }}>
            Map relationships within each video:
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>performers</strong> — Array of performers/creators</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>tags</strong> — Array of tags</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>studio</strong> — Studio object</li>
          </ul>
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
            JSON Dot Notation
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            Use dot notation and array indexing to specify where data lives in your response:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><code style={{ color: 'var(--theme-accent)' }}>title</code> — Direct field access</li>
            <li><code style={{ color: 'var(--theme-accent)' }}>media.title</code> — Nested object access</li>
            <li><code style={{ color: 'var(--theme-accent)' }}>files[0].url</code> — First element of an array</li>
            <li><code style={{ color: 'var(--theme-accent)' }}>metadata.info.name</code> — Deeply nested access</li>
          </ul>
        </section>

        <section className="mb-10">
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
            Query Configuration
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            You&apos;ll need to provide the GraphQL query that fetches your video list. The query should:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Return a paginated list of videos</li>
            <li>Include all the fields you want to display</li>
            <li>Support pagination variables</li>
          </ul>
          <p style={{ color: 'var(--theme-text-secondary)' }}>
            Map SV3 Player&apos;s pagination variables (page, perPage) to your query&apos;s expected variable names using dot notation.
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
            Testing Your Configuration
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            The Mapping Config screen includes a built-in test tool:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Paste a sample JSON response from your server</li>
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Test Mappings</strong></li>
            <li>Review results — checkmarks indicate successful field extraction</li>
          </ol>
          <div
            className="p-4 rounded-lg"
            style={{
              backgroundColor: 'var(--theme-surface)',
              border: '1px solid var(--theme-info)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
              <strong style={{ color: 'var(--theme-info)' }}>Tip:</strong> Use your browser&apos;s developer tools or a GraphQL client
              to capture a sample response from your server, then paste it into the test tool to verify your mappings work correctly.
            </p>
          </div>
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
            <li>Verify the server URL includes the full path to the GraphQL endpoint</li>
            <li>Check authentication credentials</li>
            <li>Ensure the server is accessible from your device</li>
          </ul>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-secondary)' }}>
            No Videos Appearing
          </h3>
          <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Verify the root path points to the correct array in your response</li>
            <li>Test your mappings with a sample JSON response</li>
            <li>Check that required fields (id, title, streamURL) are correctly mapped</li>
          </ul>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-accent)' }}>
            Thumbnails Not Loading
          </h3>
          <ul className="list-disc list-inside space-y-1 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Check the thumbnailURL field mapping</li>
            <li>Verify image authentication is configured correctly</li>
            <li>Ensure image URLs are accessible from your device</li>
          </ul>

          <h3 className="text-lg font-medium mb-2 mt-6" style={{ color: 'var(--theme-info)' }}>
            Schema Not Compatible
          </h3>
          <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>This feature works best with schemas that return flat or moderately nested data</li>
            <li>Very complex or dynamic schemas may not be fully supported</li>
            <li>Consider reaching out via the support page if you need help with a specific schema</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
