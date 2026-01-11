import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom GraphQL Setup Guide - SV3 Player",
  description: "Learn how to connect SV3 Player to a custom GraphQL endpoint.",
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
        <p className="mb-8 text-lg" style={{ color: 'var(--theme-text-secondary)' }}>
          Connect to any GraphQL endpoint that serves video content. Configure custom queries and field mappings for non-standard servers.
        </p>

        <div
          className="rounded-lg p-4 mb-8"
          style={{
            backgroundColor: 'color-mix(in srgb, var(--theme-warning) 15%, transparent)',
            border: '1px solid color-mix(in srgb, var(--theme-warning) 40%, transparent)',
          }}
        >
          <p style={{ color: 'var(--theme-warning)' }}>
            Documentation coming soon. Check back for detailed Custom GraphQL setup instructions.
          </p>
        </div>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b"
            style={{
              color: 'var(--theme-text-primary)',
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
            <li>Development and testing of new integrations</li>
          </ul>
        </section>

        <section>
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b"
            style={{
              color: 'var(--theme-text-primary)',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Key Details
          </h2>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Default port:</strong> Varies by server</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Authentication:</strong> Configurable (API key, bearer token, etc.)</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Requirements:</strong> GraphQL endpoint with video content schema</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
