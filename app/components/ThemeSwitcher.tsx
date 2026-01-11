'use client';

import { useState, useRef, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

export function ThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Only render after mounting to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!mounted) return;

    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mounted]);

  // Return placeholder before mounting
  if (!mounted) {
    return (
      <div
        className="w-24 h-8 rounded-lg animate-pulse"
        style={{ backgroundColor: 'var(--theme-control-background)' }}
      />
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg transition-colors hover:bg-white/10"
        style={{
          backgroundColor: 'var(--theme-control-background)',
          color: 'var(--theme-control-foreground)',
        }}
        aria-label="Select theme"
      >
        {/* Theme color preview */}
        <div className="flex -space-x-1">
          <div
            className="w-3 h-3 rounded-full border border-white/20"
            style={{ backgroundColor: theme.colors.primary }}
          />
          <div
            className="w-3 h-3 rounded-full border border-white/20"
            style={{ backgroundColor: theme.colors.accent }}
          />
        </div>
        <span className="hidden sm:inline">{theme.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-64 rounded-xl shadow-2xl overflow-hidden z-50 border"
          style={{
            backgroundColor: 'var(--theme-surface)',
            borderColor: 'var(--theme-control-background)',
          }}
        >
          <div className="p-2 max-h-80 overflow-y-auto">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all hover:bg-white/5"
                style={{
                  backgroundColor: theme.id === t.id ? 'var(--theme-control-background)' : undefined,
                  outline: theme.id === t.id ? '2px solid var(--theme-accent)' : undefined,
                  outlineOffset: theme.id === t.id ? '2px' : undefined,
                }}
              >
                {/* Theme color swatches */}
                <div className="flex -space-x-1 flex-shrink-0">
                  <div
                    className="w-5 h-5 rounded-full border-2"
                    style={{
                      backgroundColor: t.colors.background,
                      borderColor: t.colors.primary,
                    }}
                  />
                  <div
                    className="w-5 h-5 rounded-full border-2"
                    style={{
                      backgroundColor: t.colors.primary,
                      borderColor: t.colors.surface,
                    }}
                  />
                  <div
                    className="w-5 h-5 rounded-full border-2"
                    style={{
                      backgroundColor: t.colors.accent,
                      borderColor: t.colors.surface,
                    }}
                  />
                </div>

                {/* Theme info */}
                <div className="text-left flex-1 min-w-0">
                  <div
                    className="font-medium text-sm truncate"
                    style={{ color: 'var(--theme-text-primary)' }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs truncate"
                    style={{ color: 'var(--theme-text-tertiary)' }}
                  >
                    {t.description}
                  </div>
                </div>

                {/* Selected indicator */}
                {theme.id === t.id && (
                  <svg
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: 'var(--theme-accent)' }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
