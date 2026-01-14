'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from './ThemeSwitcher';
import { config } from '../lib/config';

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/about/', label: 'About' },
    { href: '/docs/', label: 'Docs' },
    { href: '/theme-creator/', label: 'Theme Creator' },
    { href: '/support/', label: 'Support' },
    { href: '/privacy/', label: 'Privacy' },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-md"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--theme-background) 80%, transparent)',
        borderColor: 'var(--theme-control-background)',
      }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold transition-colors"
          style={{
            color: pathname === '/' ? 'var(--theme-primary)' : 'var(--theme-text-primary)',
          }}
        >
          SV3 Player
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors relative py-1"
                style={{
                  color: isActive ? 'var(--theme-accent)' : 'var(--theme-text-secondary)',
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: 'var(--theme-accent)' }}
                  />
                )}
              </Link>
            );
          })}
          <a
            href={config.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-3 py-1.5 text-sm font-medium rounded-lg transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-accent) 100%)',
              color: 'var(--theme-text-primary)',
              boxShadow: '0 2px 8px var(--theme-accent-glow)',
            }}
          >
            Download
          </a>
          <ThemeSwitcher />
        </nav>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeSwitcher />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg transition-colors"
            style={{
              color: 'var(--theme-text-primary)',
              backgroundColor: menuOpen ? 'var(--theme-control-background)' : 'transparent',
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          className="md:hidden border-t"
          style={{
            backgroundColor: 'var(--theme-background)',
            borderColor: 'var(--theme-control-background)',
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm transition-colors border-b"
                style={{
                  color: isActive ? 'var(--theme-accent)' : 'var(--theme-text-secondary)',
                  borderColor: 'var(--theme-control-background)',
                  backgroundColor: isActive ? 'var(--theme-surface)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={config.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-3 text-sm font-medium"
            style={{
              background: 'linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-accent) 100%)',
              color: 'var(--theme-text-primary)',
            }}
          >
            ⬇ Download on App Store
          </a>
        </nav>
      )}
    </header>
  );
}

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
