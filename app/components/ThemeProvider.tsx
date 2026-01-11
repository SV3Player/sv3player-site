'use client';

import { createContext, useContext, useEffect, useState, useCallback, ReactNode } from 'react';
import { Theme, themes, defaultTheme, getThemeById } from '../lib/themes';

const STORAGE_KEY = 'sv3-theme';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (themeId: string) => void;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyThemeToDocument(theme: Theme) {
  const root = document.documentElement;
  const { colors, effects } = theme;

  // Set CSS custom properties
  root.style.setProperty('--theme-primary', colors.primary);
  root.style.setProperty('--theme-secondary', colors.secondary);
  root.style.setProperty('--theme-accent', colors.accent);
  root.style.setProperty('--theme-background', colors.background);
  root.style.setProperty('--theme-surface', colors.surface);
  root.style.setProperty('--theme-text-primary', colors.textPrimary);
  root.style.setProperty('--theme-text-secondary', colors.textSecondary);
  root.style.setProperty('--theme-text-tertiary', colors.textTertiary);
  root.style.setProperty('--theme-control-background', colors.controlBackground);
  root.style.setProperty('--theme-control-foreground', colors.controlForeground);
  root.style.setProperty('--theme-glass-tint', colors.glassEffectTint);
  root.style.setProperty('--theme-success', colors.success);
  root.style.setProperty('--theme-warning', colors.warning);
  root.style.setProperty('--theme-error', colors.error);
  root.style.setProperty('--theme-info', colors.info);
  root.style.setProperty('--theme-gradient-start', colors.gradientStart);
  root.style.setProperty('--theme-gradient-end', colors.gradientEnd);
  root.style.setProperty('--theme-accent-glow', colors.accentGlow);
  root.style.setProperty('--theme-interactive-highlight', colors.interactiveHighlight);

  // Effects
  root.style.setProperty('--theme-glass-fill-opacity', String(effects.glassFillOpacity));
  root.style.setProperty('--theme-glass-border-opacity', String(effects.glassBorderOpacity));
  root.style.setProperty('--theme-noise-opacity', String(effects.backgroundNoiseOpacity));
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const savedTheme = getThemeById(stored);
      if (savedTheme) {
        setThemeState(savedTheme);
        applyThemeToDocument(savedTheme);
      } else {
        applyThemeToDocument(defaultTheme);
      }
    } else {
      applyThemeToDocument(defaultTheme);
    }
  }, []);

  // Apply theme changes
  const setTheme = useCallback((themeId: string) => {
    const newTheme = getThemeById(themeId);
    if (newTheme) {
      setThemeState(newTheme);
      localStorage.setItem(STORAGE_KEY, themeId);
      applyThemeToDocument(newTheme);
    }
  }, []);

  // Prevent flash of unstyled content
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  // During SSR or before hydration, return default values
  if (!context) {
    return {
      theme: defaultTheme,
      setTheme: () => {},
      themes,
    };
  }
  return context;
}
