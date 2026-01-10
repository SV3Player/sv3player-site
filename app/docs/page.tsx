import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation - SV3 Player",
  description: "Complete documentation for setting up and using SV3 Player with your media servers.",
};

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">Documentation</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
        Welcome to the SV3 Player documentation. Here you&apos;ll find everything you need to get started and make the most of the app.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Quick Links</h2>
        <div className="grid gap-4">
          <Link
            href="/docs/getting-started/"
            className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <h3 className="font-semibold text-lg mb-1">Getting Started</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">First-time setup and your first server connection</p>
          </Link>

          <Link
            href="/docs/services/"
            className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <h3 className="font-semibold text-lg mb-1">Service Guides</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Detailed instructions for each supported service</p>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">Supported Services</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/docs/services/stash/" className="text-blue-600 dark:text-blue-400 hover:underline">Stash</Link>
          <Link href="/docs/services/plex/" className="text-blue-600 dark:text-blue-400 hover:underline">Plex</Link>
          <Link href="/docs/services/emby/" className="text-blue-600 dark:text-blue-400 hover:underline">Emby</Link>
          <Link href="/docs/services/jellyfin/" className="text-blue-600 dark:text-blue-400 hover:underline">Jellyfin</Link>
          <Link href="/docs/services/custom-graphql/" className="text-blue-600 dark:text-blue-400 hover:underline">Custom GraphQL</Link>
        </div>
      </section>
    </div>
  );
}
