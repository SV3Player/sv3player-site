'use client';

import { useState, useCallback } from 'react';
import { Theme, themes, createBlankTheme, themeToiOSFormat } from '../lib/themes';
import { IOSSimulator } from './iOSSimulator';

interface ColorSection {
  title: string;
  description: string;
  colors: { key: keyof Theme['colors']; label: string }[];
}

const colorSections: ColorSection[] = [
  {
    title: 'Primary Colors',
    description: 'Main visual identity',
    colors: [
      { key: 'primary', label: 'Primary' },
      { key: 'secondary', label: 'Secondary' },
      { key: 'accent', label: 'Accent' },
    ],
  },
  {
    title: 'Background',
    description: 'App surfaces',
    colors: [
      { key: 'background', label: 'Background' },
      { key: 'surface', label: 'Surface' },
      { key: 'gradientStart', label: 'Gradient Start' },
      { key: 'gradientEnd', label: 'Gradient End' },
    ],
  },
  {
    title: 'Text Colors',
    description: 'Different emphasis levels',
    colors: [
      { key: 'textPrimary', label: 'Primary Text' },
      { key: 'textSecondary', label: 'Secondary Text' },
      { key: 'textTertiary', label: 'Tertiary Text' },
    ],
  },
  {
    title: 'UI Controls',
    description: 'Interactive elements',
    colors: [
      { key: 'controlBackground', label: 'Control Background' },
      { key: 'controlForeground', label: 'Control Foreground' },
      { key: 'glassEffectTint', label: 'Glass Tint' },
    ],
  },
  {
    title: 'Status Colors',
    description: 'Semantic states',
    colors: [
      { key: 'success', label: 'Success' },
      { key: 'warning', label: 'Warning' },
      { key: 'error', label: 'Error' },
      { key: 'info', label: 'Info' },
    ],
  },
  {
    title: 'Accents & Effects',
    description: 'Special effect colors',
    colors: [
      { key: 'accentGlow', label: 'Accent Glow' },
      { key: 'interactiveHighlight', label: 'Interactive Highlight' },
    ],
  },
];

export function ThemeCreator() {
  const [theme, setTheme] = useState<Theme>(createBlankTheme);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['Primary Colors'])
  );

  // Update theme info
  const updateThemeInfo = useCallback((field: 'name' | 'description', value: string) => {
    setTheme((prev) => ({ ...prev, [field]: value }));
  }, []);

  // Update a single color
  const updateColor = useCallback((key: keyof Theme['colors'], value: string) => {
    setTheme((prev) => ({
      ...prev,
      colors: { ...prev.colors, [key]: value },
    }));
  }, []);

  // Update an effect value
  const updateEffect = useCallback((key: keyof Theme['effects'], value: number) => {
    setTheme((prev) => ({
      ...prev,
      effects: { ...prev.effects, [key]: value },
    }));
  }, []);

  // Load from template
  const loadTemplate = useCallback((templateId: string) => {
    const template = themes.find((t) => t.id === templateId);
    if (template) {
      setTheme({
        ...template,
        id: `custom-${Date.now()}`,
        name: `${template.name} (Custom)`,
      });
    }
  }, []);

  // Toggle section expansion
  const toggleSection = useCallback((title: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  }, []);

  // Export theme as JSON
  const exportTheme = useCallback(() => {
    const iosFormat = themeToiOSFormat(theme);
    const json = JSON.stringify(iosFormat, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${theme.name.toLowerCase().replace(/\s+/g, '-')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [theme]);

  // Convert any color to hex for input value
  const colorToInputHex = (color: string): string => {
    if (color.startsWith('#')) {
      return color.length === 4
        ? `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`
        : color;
    }
    // Parse rgba
    const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
      const r = parseInt(match[1]).toString(16).padStart(2, '0');
      const g = parseInt(match[2]).toString(16).padStart(2, '0');
      const b = parseInt(match[3]).toString(16).padStart(2, '0');
      return `#${r}${g}${b}`;
    }
    return color;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left: Controls */}
      <div className="flex-1 space-y-6">
        {/* Theme Info */}
        <div
          className="p-4 rounded-xl"
          style={{
            backgroundColor: 'var(--theme-surface)',
            border: '1px solid var(--theme-control-background)',
          }}
        >
          <h2
            className="text-lg font-semibold mb-4"
            style={{ color: 'var(--theme-text-primary)' }}
          >
            Theme Info
          </h2>

          <div className="space-y-4">
            <div>
              <label
                className="block text-sm mb-1"
                style={{ color: 'var(--theme-text-secondary)' }}
              >
                Name
              </label>
              <input
                type="text"
                value={theme.name}
                onChange={(e) => updateThemeInfo('name', e.target.value)}
                className="w-full px-3 py-2 rounded-lg text-sm"
                style={{
                  backgroundColor: 'var(--theme-control-background)',
                  color: 'var(--theme-text-primary)',
                  border: '1px solid var(--theme-control-background)',
                }}
              />
            </div>

            <div>
              <label
                className="block text-sm mb-1"
                style={{ color: 'var(--theme-text-secondary)' }}
              >
                Description
              </label>
              <input
                type="text"
                value={theme.description}
                onChange={(e) => updateThemeInfo('description', e.target.value)}
                className="w-full px-3 py-2 rounded-lg text-sm"
                style={{
                  backgroundColor: 'var(--theme-control-background)',
                  color: 'var(--theme-text-primary)',
                  border: '1px solid var(--theme-control-background)',
                }}
              />
            </div>

            <div>
              <label
                className="block text-sm mb-1"
                style={{ color: 'var(--theme-text-secondary)' }}
              >
                Start from Template
              </label>
              <select
                onChange={(e) => loadTemplate(e.target.value)}
                className="w-full px-3 py-2 rounded-lg text-sm"
                style={{
                  backgroundColor: 'var(--theme-control-background)',
                  color: 'var(--theme-text-primary)',
                  border: '1px solid var(--theme-control-background)',
                }}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a template...
                </option>
                {themes.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Color Sections */}
        <div className="space-y-3">
          {colorSections.map((section) => (
            <div
              key={section.title}
              className="rounded-xl overflow-hidden"
              style={{
                backgroundColor: 'var(--theme-surface)',
                border: '1px solid var(--theme-control-background)',
              }}
            >
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full px-4 py-3 flex items-center justify-between"
                style={{ color: 'var(--theme-text-primary)' }}
              >
                <div>
                  <span className="font-medium">{section.title}</span>
                  <span
                    className="text-xs ml-2"
                    style={{ color: 'var(--theme-text-tertiary)' }}
                  >
                    {section.description}
                  </span>
                </div>
                <ChevronIcon expanded={expandedSections.has(section.title)} />
              </button>

              {/* Section Content */}
              {expandedSections.has(section.title) && (
                <div
                  className="px-4 pb-4 grid grid-cols-2 gap-3"
                  style={{ borderTop: '1px solid var(--theme-control-background)' }}
                >
                  {section.colors.map(({ key, label }) => (
                    <div key={key}>
                      <label
                        className="block text-xs mb-1"
                        style={{ color: 'var(--theme-text-secondary)' }}
                      >
                        {label}
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={colorToInputHex(theme.colors[key])}
                          onChange={(e) => updateColor(key, e.target.value)}
                          className="w-10 h-8 rounded cursor-pointer"
                          style={{ border: 'none', padding: 0 }}
                        />
                        <input
                          type="text"
                          value={colorToInputHex(theme.colors[key]).toUpperCase()}
                          onChange={(e) => updateColor(key, e.target.value)}
                          className="flex-1 px-2 py-1 rounded text-xs font-mono"
                          style={{
                            backgroundColor: 'var(--theme-control-background)',
                            color: 'var(--theme-text-primary)',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Effect Sliders */}
        <div
          className="p-4 rounded-xl"
          style={{
            backgroundColor: 'var(--theme-surface)',
            border: '1px solid var(--theme-control-background)',
          }}
        >
          <h2
            className="text-lg font-semibold mb-4"
            style={{ color: 'var(--theme-text-primary)' }}
          >
            Glass Effects
          </h2>

          <div className="space-y-4">
            <SliderInput
              label="Glass Fill Opacity"
              value={theme.effects.glassFillOpacity}
              onChange={(v) => updateEffect('glassFillOpacity', v)}
              min={0}
              max={0.5}
              step={0.01}
            />
            <SliderInput
              label="Glass Border Opacity"
              value={theme.effects.glassBorderOpacity}
              onChange={(v) => updateEffect('glassBorderOpacity', v)}
              min={0}
              max={0.8}
              step={0.01}
            />
            <SliderInput
              label="Background Noise"
              value={theme.effects.backgroundNoiseOpacity}
              onChange={(v) => updateEffect('backgroundNoiseOpacity', v)}
              min={0}
              max={0.15}
              step={0.005}
            />
          </div>
        </div>

        {/* Export Button */}
        <button
          onClick={exportTheme}
          className="w-full py-3 rounded-xl font-semibold text-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: `linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-accent) 100%)`,
            color: 'var(--theme-background)',
          }}
        >
          Export Theme JSON
        </button>

        <p
          className="text-xs text-center"
          style={{ color: 'var(--theme-text-tertiary)' }}
        >
          Download the JSON file and import it into SV3 Player via Settings → Theme → Import
        </p>
      </div>

      {/* Right: Preview */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <IOSSimulator theme={theme} />
      </div>
    </div>
  );
}

// === Helper Components ===

function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
}) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <label className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
          {label}
        </label>
        <span className="text-sm font-mono" style={{ color: 'var(--theme-text-tertiary)' }}>
          {value.toFixed(2)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{
          backgroundColor: 'var(--theme-control-background)',
          accentColor: 'var(--theme-accent)',
        }}
      />
    </div>
  );
}

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{
        transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.2s ease',
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
