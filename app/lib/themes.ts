// Theme definitions matching SV3 Player iOS app themes

export interface Theme {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    controlBackground: string;
    controlForeground: string;
    glassEffectTint: string;
    success: string;
    warning: string;
    error: string;
    info: string;
    gradientStart: string;
    gradientEnd: string;
    accentGlow: string;
    interactiveHighlight: string;
  };
  effects: {
    glassFillOpacity: number;
    glassBorderOpacity: number;
    backgroundNoiseOpacity: number;
  };
}

// Helper to convert RGB 0-1 to hex
const rgb = (r: number, g: number, b: number): string => {
  const toHex = (v: number) => Math.round(v * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

// Helper to convert RGB 0-1 with alpha to rgba
const rgba = (r: number, g: number, b: number, a: number): string => {
  return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
};

export const themes: Theme[] = [
  // Ocean Depths Theme (Default)
  {
    id: 'ocean-depths',
    name: 'Ocean Depths',
    description: 'Deep teals with aqua highlights',
    colors: {
      primary: rgb(0.0, 0.7, 0.7),
      secondary: rgb(0.2, 0.8, 0.8),
      accent: rgb(0.0, 0.9, 0.9),
      background: rgb(0.02, 0.1, 0.12),
      surface: rgb(0.05, 0.2, 0.25),
      textPrimary: '#ffffff',
      textSecondary: rgba(1, 1, 1, 0.9),
      textTertiary: rgba(1, 1, 1, 0.7),
      controlBackground: rgba(0.1, 0.3, 0.35, 0.4),
      controlForeground: rgb(0.8, 0.95, 1.0),
      glassEffectTint: rgb(0.0, 0.7, 0.7),
      success: rgb(0.0, 0.8, 0.6),
      warning: rgb(1.0, 0.7, 0.0),
      error: rgb(0.9, 0.3, 0.3),
      info: rgb(0.0, 0.7, 0.7),
      gradientStart: rgb(0.08, 0.35, 0.40),
      gradientEnd: rgb(0.01, 0.06, 0.08),
      accentGlow: rgba(0.0, 0.9, 0.9, 0.6),
      interactiveHighlight: rgb(0.2, 0.8, 0.8),
    },
    effects: {
      glassFillOpacity: 0.15,
      glassBorderOpacity: 0.35,
      backgroundNoiseOpacity: 0.02,
    },
  },

  // Midnight Blue Theme
  {
    id: 'midnight',
    name: 'Midnight Blue',
    description: 'Deep blues with cyan highlights',
    colors: {
      primary: rgb(0.2, 0.6, 0.9),
      secondary: rgb(0.3, 0.7, 1.0),
      accent: rgb(0.0, 0.8, 1.0),
      background: rgb(0.05, 0.08, 0.15),
      surface: rgb(0.1, 0.15, 0.25),
      textPrimary: '#ffffff',
      textSecondary: rgba(1, 1, 1, 0.8),
      textTertiary: rgba(1, 1, 1, 0.6),
      controlBackground: rgba(0.15, 0.25, 0.35, 0.4),
      controlForeground: rgb(0.85, 0.95, 1.0),
      glassEffectTint: rgb(0.0, 0.8, 1.0),
      success: rgb(0.0, 0.8, 0.4),
      warning: rgb(1.0, 0.6, 0.0),
      error: rgb(0.9, 0.2, 0.3),
      info: rgb(0.2, 0.6, 0.9),
      gradientStart: rgb(0.15, 0.25, 0.45),
      gradientEnd: rgb(0.02, 0.04, 0.10),
      accentGlow: rgba(0.0, 0.8, 1.0, 0.6),
      interactiveHighlight: rgb(0.2, 0.7, 1.0),
    },
    effects: {
      glassFillOpacity: 0.14,
      glassBorderOpacity: 0.30,
      backgroundNoiseOpacity: 0.02,
    },
  },

  // Deep Space Theme
  {
    id: 'deep-space',
    name: 'Deep Space',
    description: 'Dark purples with cosmic highlights',
    colors: {
      primary: rgb(0.6, 0.4, 0.9),
      secondary: rgb(0.5, 0.3, 0.8),
      accent: rgb(0.8, 0.3, 0.9),
      background: rgb(0.05, 0.02, 0.1),
      surface: rgb(0.1, 0.05, 0.2),
      textPrimary: '#ffffff',
      textSecondary: rgba(1, 1, 1, 0.9),
      textTertiary: rgba(1, 1, 1, 0.7),
      controlBackground: rgba(0.2, 0.1, 0.3, 0.4),
      controlForeground: rgb(0.95, 0.9, 1.0),
      glassEffectTint: rgb(0.6, 0.4, 0.9),
      success: rgb(0.4, 0.8, 0.6),
      warning: rgb(1.0, 0.7, 0.2),
      error: rgb(0.9, 0.2, 0.4),
      info: rgb(0.6, 0.4, 0.9),
      gradientStart: rgb(0.20, 0.10, 0.40),
      gradientEnd: rgb(0.03, 0.01, 0.08),
      accentGlow: rgba(0.8, 0.3, 0.9, 0.6),
      interactiveHighlight: rgb(0.7, 0.4, 0.95),
    },
    effects: {
      glassFillOpacity: 0.16,
      glassBorderOpacity: 0.38,
      backgroundNoiseOpacity: 0.02,
    },
  },

  // Neon Cyberpunk Theme
  {
    id: 'neon-cyberpunk',
    name: 'Neon Cyberpunk',
    description: 'Electric pinks and cyber blues',
    colors: {
      primary: rgb(1.0, 0.2, 0.6),
      secondary: rgb(0.2, 0.8, 1.0),
      accent: rgb(0.0, 1.0, 0.8),
      background: rgb(0.02, 0.02, 0.1),
      surface: rgb(0.08, 0.08, 0.2),
      textPrimary: '#ffffff',
      textSecondary: rgba(1, 1, 1, 0.9),
      textTertiary: rgba(1, 1, 1, 0.7),
      controlBackground: rgba(0.15, 0.15, 0.3, 0.4),
      controlForeground: rgb(0.9, 1.0, 1.0),
      glassEffectTint: rgb(1.0, 0.2, 0.6),
      success: rgb(0.0, 1.0, 0.6),
      warning: rgb(1.0, 0.8, 0.0),
      error: rgb(1.0, 0.2, 0.4),
      info: rgb(0.2, 0.8, 1.0),
      gradientStart: rgb(0.18, 0.08, 0.35),
      gradientEnd: rgb(0.01, 0.01, 0.06),
      accentGlow: rgba(0.0, 1.0, 0.8, 0.8),
      interactiveHighlight: rgb(1.0, 0.3, 0.7),
    },
    effects: {
      glassFillOpacity: 0.18,
      glassBorderOpacity: 0.45,
      backgroundNoiseOpacity: 0.05,
    },
  },

  // Forest Twilight Theme
  {
    id: 'forest-twilight',
    name: 'Forest Twilight',
    description: 'Deep greens with mystical purples',
    colors: {
      primary: rgb(0.3, 0.7, 0.4),
      secondary: rgb(0.4, 0.6, 0.7),
      accent: rgb(0.6, 0.3, 0.8),
      background: rgb(0.05, 0.1, 0.05),
      surface: rgb(0.1, 0.2, 0.15),
      textPrimary: '#ffffff',
      textSecondary: rgba(1, 1, 1, 0.9),
      textTertiary: rgba(1, 1, 1, 0.7),
      controlBackground: rgba(0.15, 0.3, 0.2, 0.4),
      controlForeground: rgb(0.85, 0.95, 0.9),
      glassEffectTint: rgb(0.3, 0.7, 0.4),
      success: rgb(0.2, 0.8, 0.3),
      warning: rgb(0.9, 0.7, 0.2),
      error: rgb(0.9, 0.3, 0.3),
      info: rgb(0.4, 0.6, 0.7),
      gradientStart: rgb(0.12, 0.30, 0.18),
      gradientEnd: rgb(0.02, 0.06, 0.03),
      accentGlow: rgba(0.6, 0.3, 0.8, 0.6),
      interactiveHighlight: rgb(0.4, 0.8, 0.5),
    },
    effects: {
      glassFillOpacity: 0.14,
      glassBorderOpacity: 0.32,
      backgroundNoiseOpacity: 0.02,
    },
  },

  // Sunset Glow Theme
  {
    id: 'sunset',
    name: 'Sunset Glow',
    description: 'Warm oranges and deep purples',
    colors: {
      primary: rgb(1.0, 0.5, 0.2),
      secondary: rgb(1.0, 0.6, 0.3),
      accent: rgb(0.9, 0.3, 0.6),
      background: rgb(0.15, 0.05, 0.1),
      surface: rgb(0.25, 0.1, 0.2),
      textPrimary: '#ffffff',
      textSecondary: rgba(1, 1, 1, 0.9),
      textTertiary: rgba(1, 1, 1, 0.7),
      controlBackground: rgba(0.35, 0.15, 0.25, 0.4),
      controlForeground: rgb(1.0, 0.8, 0.7),
      glassEffectTint: rgb(1.0, 0.5, 0.2),
      success: rgb(0.2, 0.8, 0.4),
      warning: rgb(1.0, 0.7, 0.2),
      error: rgb(0.9, 0.2, 0.3),
      info: rgb(0.9, 0.3, 0.6),
      gradientStart: rgb(0.40, 0.15, 0.25),
      gradientEnd: rgb(0.10, 0.03, 0.06),
      accentGlow: rgba(1.0, 0.5, 0.2, 0.7),
      interactiveHighlight: rgb(0.9, 0.4, 0.7),
    },
    effects: {
      glassFillOpacity: 0.15,
      glassBorderOpacity: 0.35,
      backgroundNoiseOpacity: 0.02,
    },
  },

  // Golden Hour Theme
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    description: 'Warm golds with amber tones',
    colors: {
      primary: rgb(1.0, 0.8, 0.2),
      secondary: rgb(1.0, 0.7, 0.0),
      accent: rgb(0.9, 0.5, 0.1),
      background: rgb(0.12, 0.08, 0.02),
      surface: rgb(0.25, 0.15, 0.05),
      textPrimary: '#ffffff',
      textSecondary: rgba(1, 1, 1, 0.9),
      textTertiary: rgba(1, 1, 1, 0.7),
      controlBackground: rgba(0.35, 0.25, 0.1, 0.4),
      controlForeground: rgb(1.0, 0.95, 0.7),
      glassEffectTint: rgb(1.0, 0.8, 0.2),
      success: rgb(0.6, 0.8, 0.2),
      warning: rgb(1.0, 0.6, 0.0),
      error: rgb(0.9, 0.2, 0.2),
      info: rgb(1.0, 0.8, 0.2),
      gradientStart: rgb(0.40, 0.25, 0.08),
      gradientEnd: rgb(0.08, 0.05, 0.01),
      accentGlow: rgba(1.0, 0.8, 0.2, 0.7),
      interactiveHighlight: rgb(1.0, 0.75, 0.1),
    },
    effects: {
      glassFillOpacity: 0.12,
      glassBorderOpacity: 0.28,
      backgroundNoiseOpacity: 0.02,
    },
  },

  // Cherry Blossom Theme
  {
    id: 'cherry-blossom',
    name: 'Cherry Blossom',
    description: 'Soft pinks with floral elegance',
    colors: {
      primary: rgb(1.0, 0.75, 0.8),
      secondary: rgb(1.0, 0.6, 0.7),
      accent: rgb(0.9, 0.4, 0.6),
      background: rgb(0.1, 0.05, 0.08),
      surface: rgb(0.2, 0.1, 0.15),
      textPrimary: '#ffffff',
      textSecondary: rgba(1, 1, 1, 0.9),
      textTertiary: rgba(1, 1, 1, 0.7),
      controlBackground: rgba(0.3, 0.15, 0.2, 0.4),
      controlForeground: rgb(1.0, 0.85, 0.9),
      glassEffectTint: rgb(0.9, 0.4, 0.6),
      success: rgb(0.2, 0.8, 0.4),
      warning: rgb(1.0, 0.7, 0.2),
      error: rgb(0.9, 0.2, 0.3),
      info: rgb(0.9, 0.4, 0.6),
      gradientStart: rgb(0.35, 0.15, 0.22),
      gradientEnd: rgb(0.06, 0.02, 0.04),
      accentGlow: rgba(1.0, 0.75, 0.8, 0.6),
      interactiveHighlight: rgb(1.0, 0.65, 0.75),
    },
    effects: {
      glassFillOpacity: 0.14,
      glassBorderOpacity: 0.32,
      backgroundNoiseOpacity: 0.02,
    },
  },

  // Monochrome Theme
  {
    id: 'monochrome',
    name: 'Monochrome',
    description: 'Classic black, white, and grays',
    colors: {
      primary: '#ffffff',
      secondary: rgb(0.8, 0.8, 0.8),
      accent: rgb(0.6, 0.6, 0.6),
      background: '#000000',
      surface: rgb(0.1, 0.1, 0.1),
      textPrimary: '#ffffff',
      textSecondary: rgba(1, 1, 1, 0.8),
      textTertiary: rgba(1, 1, 1, 0.6),
      controlBackground: rgba(1, 1, 1, 0.1),
      controlForeground: rgb(0.9, 0.9, 0.9),
      glassEffectTint: '#ffffff',
      success: rgb(0.8, 0.8, 0.8),
      warning: rgb(0.6, 0.6, 0.6),
      error: rgb(0.4, 0.4, 0.4),
      info: rgb(0.7, 0.7, 0.7),
      gradientStart: rgb(0.22, 0.22, 0.22),
      gradientEnd: rgb(0.03, 0.03, 0.03),
      accentGlow: rgba(1, 1, 1, 0.4),
      interactiveHighlight: rgb(0.9, 0.9, 0.9),
    },
    effects: {
      glassFillOpacity: 0.12,
      glassBorderOpacity: 0.25,
      backgroundNoiseOpacity: 0.03,
    },
  },
];

export const defaultTheme = themes[0]; // Ocean Depths

export function getThemeById(id: string): Theme | undefined {
  return themes.find((t) => t.id === id);
}

// === iOS Theme Export/Import Helpers ===

// Convert any color format (rgba, rgb, hex) to #RRGGBB hex
export function colorToHex(color: string): string {
  // Already hex format
  if (color.startsWith('#')) {
    // Ensure 6 digits
    const hex = color.slice(1);
    if (hex.length === 3) {
      return `#${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`.toUpperCase();
    }
    return color.toUpperCase();
  }

  // Parse rgba or rgb
  const rgbaMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (rgbaMatch) {
    const r = parseInt(rgbaMatch[1]).toString(16).padStart(2, '0');
    const g = parseInt(rgbaMatch[2]).toString(16).padStart(2, '0');
    const b = parseInt(rgbaMatch[3]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`.toUpperCase();
  }

  return color.toUpperCase();
}

// iOS theme export format interface
export interface iOSThemeFormat {
  id: string;
  name: string;
  description: string;
  _comment_primary?: string;
  primary: string;
  secondary: string;
  accent: string;
  _comment_background?: string;
  background: string;
  surface: string;
  gradientStart: string;
  gradientEnd: string;
  _comment_text?: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  _comment_glass?: string;
  glassEffectTint: string;
  glassFillOpacity: number;
  glassBorderOpacity: number;
  backgroundNoiseOpacity: number;
  _comment_controls?: string;
  controlBackground: string;
  controlForeground: string;
  _comment_status?: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  _comment_accents?: string;
  accentGlow: string;
  interactiveHighlight: string;
}

// Convert web Theme to iOS flat JSON format
export function themeToiOSFormat(theme: Theme): iOSThemeFormat {
  return {
    id: theme.id,
    name: theme.name,
    description: theme.description,

    _comment_primary: 'Primary colors define the main visual identity',
    primary: colorToHex(theme.colors.primary),
    secondary: colorToHex(theme.colors.secondary),
    accent: colorToHex(theme.colors.accent),

    _comment_background: 'Background colors for app surfaces',
    background: colorToHex(theme.colors.background),
    surface: colorToHex(theme.colors.surface),
    gradientStart: colorToHex(theme.colors.gradientStart),
    gradientEnd: colorToHex(theme.colors.gradientEnd),

    _comment_text: 'Text colors for different emphasis levels',
    textPrimary: colorToHex(theme.colors.textPrimary),
    textSecondary: colorToHex(theme.colors.textSecondary),
    textTertiary: colorToHex(theme.colors.textTertiary),

    _comment_glass: 'Glass effect customization',
    glassEffectTint: colorToHex(theme.colors.glassEffectTint),
    glassFillOpacity: theme.effects.glassFillOpacity,
    glassBorderOpacity: theme.effects.glassBorderOpacity,
    backgroundNoiseOpacity: theme.effects.backgroundNoiseOpacity,

    _comment_controls: 'Interactive element colors',
    controlBackground: colorToHex(theme.colors.controlBackground),
    controlForeground: colorToHex(theme.colors.controlForeground),

    _comment_status: 'Semantic colors for states',
    success: colorToHex(theme.colors.success),
    warning: colorToHex(theme.colors.warning),
    error: colorToHex(theme.colors.error),
    info: colorToHex(theme.colors.info),

    _comment_accents: 'Special effect colors',
    accentGlow: colorToHex(theme.colors.accentGlow),
    interactiveHighlight: colorToHex(theme.colors.interactiveHighlight),
  };
}

// Convert iOS flat format to web Theme
export function iOSFormatToTheme(ios: iOSThemeFormat): Theme {
  return {
    id: ios.id,
    name: ios.name,
    description: ios.description,
    colors: {
      primary: ios.primary,
      secondary: ios.secondary,
      accent: ios.accent,
      background: ios.background,
      surface: ios.surface,
      textPrimary: ios.textPrimary,
      textSecondary: ios.textSecondary,
      textTertiary: ios.textTertiary,
      controlBackground: ios.controlBackground,
      controlForeground: ios.controlForeground,
      glassEffectTint: ios.glassEffectTint,
      success: ios.success,
      warning: ios.warning,
      error: ios.error,
      info: ios.info,
      gradientStart: ios.gradientStart,
      gradientEnd: ios.gradientEnd,
      accentGlow: ios.accentGlow,
      interactiveHighlight: ios.interactiveHighlight,
    },
    effects: {
      glassFillOpacity: ios.glassFillOpacity,
      glassBorderOpacity: ios.glassBorderOpacity,
      backgroundNoiseOpacity: ios.backgroundNoiseOpacity,
    },
  };
}

// Create a blank/default theme for the creator
export function createBlankTheme(): Theme {
  return {
    id: `custom-${Date.now()}`,
    name: 'My Custom Theme',
    description: 'A custom theme created with Theme Creator',
    colors: {
      primary: '#00B3B3',
      secondary: '#33CCCC',
      accent: '#00E6E6',
      background: '#051F1F',
      surface: '#0D3340',
      textPrimary: '#FFFFFF',
      textSecondary: '#E6E6E6',
      textTertiary: '#B3B3B3',
      controlBackground: '#1A4D59',
      controlForeground: '#CCF2FF',
      glassEffectTint: '#00B3B3',
      success: '#00CC99',
      warning: '#FFB300',
      error: '#E64D4D',
      info: '#00B3B3',
      gradientStart: '#0D3340',
      gradientEnd: '#051F1F',
      accentGlow: '#00E6E6',
      interactiveHighlight: '#33CCCC',
    },
    effects: {
      glassFillOpacity: 0.15,
      glassBorderOpacity: 0.35,
      backgroundNoiseOpacity: 0.04,
    },
  };
}
