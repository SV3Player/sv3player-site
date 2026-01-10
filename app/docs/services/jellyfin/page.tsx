import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jellyfin Setup Guide - SV3 Player",
  description: "Learn how to connect SV3 Player to your Jellyfin server.",
};

export default function JellyfinGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <nav className="text-sm mb-6">
        <Link href="/docs/" className="text-blue-600 dark:text-blue-400 hover:underline">Docs</Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/docs/services/" className="text-blue-600 dark:text-blue-400 hover:underline">Services</Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-600 dark:text-gray-400">Jellyfin</span>
      </nav>

      <h1 className="text-4xl font-bold mb-4">Jellyfin</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
        Connect to the open-source Jellyfin media server. Similar to Emby with username/password or API key authentication.
      </p>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8">
        <p className="text-yellow-800 dark:text-yellow-200">
          Documentation coming soon. Check back for detailed Jellyfin setup instructions.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Quick Start</h2>
        <ol className="list-decimal list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li>Open SV3 Player and go to <strong className="text-foreground">Settings</strong> → <strong className="text-foreground">Service Connections</strong></li>
          <li>Tap <strong className="text-foreground">Add Service</strong> and select <strong className="text-foreground">Jellyfin</strong></li>
          <li>Enter your server URL (e.g., <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-sm">192.168.1.100:8096</code>)</li>
          <li>Enter your username and password, or use an API key</li>
          <li>Tap <strong className="text-foreground">Test Connection</strong> and then <strong className="text-foreground">Save</strong></li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">Key Details</h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li><strong className="text-foreground">Default port:</strong> 8096</li>
          <li><strong className="text-foreground">Authentication:</strong> Username/password or API key</li>
          <li><strong className="text-foreground">API prefix:</strong> None (unlike Emby)</li>
        </ul>
      </section>
    </div>
  );
}
