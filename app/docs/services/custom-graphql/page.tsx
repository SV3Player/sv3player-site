import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Custom GraphQL Setup Guide - SV3 Player",
  description: "Learn how to connect SV3 Player to a custom GraphQL endpoint.",
};

export default function CustomGraphQLGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <nav className="text-sm mb-6">
        <Link href="/docs/" className="text-blue-600 dark:text-blue-400 hover:underline">Docs</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/docs/services/" className="text-blue-600 dark:text-blue-400 hover:underline">Services</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600 dark:text-gray-400">Custom GraphQL</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">Custom GraphQL</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
        Connect to any GraphQL endpoint that serves video content. Configure custom queries and field mappings for non-standard servers.
      </p>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8">
        <p className="text-yellow-800 dark:text-yellow-200">
          Documentation coming soon. Check back for detailed Custom GraphQL setup instructions.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Overview</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The Custom GraphQL option lets you connect to any GraphQL server that provides video content. This is useful for:
        </p>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li>Self-hosted media servers with GraphQL APIs</li>
          <li>Custom media management systems</li>
          <li>Development and testing of new integrations</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Key Details</h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong className="text-foreground">Default port:</strong> Varies by server</li>
          <li><strong className="text-foreground">Authentication:</strong> Configurable (API key, bearer token, etc.)</li>
          <li><strong className="text-foreground">Requirements:</strong> GraphQL endpoint with video content schema</li>
        </ul>
      </section>
    </div>
  );
}
