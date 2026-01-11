import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Header } from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SV3 Player - Private Vertical Video Player for iOS",
  description: "A vertical-first video player for self-hosted media. Connect to Stash, Plex, Emby, Jellyfin. No tracking, no algorithms, complete privacy.",
};

function Footer() {
  return (
    <footer
      className="border-t py-8 mt-auto"
      style={{
        borderColor: 'var(--theme-control-background)',
        backgroundColor: 'var(--theme-background)',
      }}
    >
      <div
        className="container mx-auto px-4 text-center text-sm"
        style={{ color: 'var(--theme-text-tertiary)' }}
      >
        <p>SV3 Player - Your content. Your control.</p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        style={{ backgroundColor: 'var(--theme-background)' }}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
