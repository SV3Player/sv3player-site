'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/docs/', label: 'Docs' },
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
        <nav className="flex items-center gap-4">
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
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
}
