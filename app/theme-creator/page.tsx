import type { Metadata } from 'next';
import { ThemeCreator } from '../components/ThemeCreator';

export const metadata: Metadata = {
  title: 'Theme Creator - SV3 Player',
  description: 'Create custom themes for SV3 Player. Design your own color scheme and export it for use in the iOS app.',
};

export default function ThemeCreatorPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-background)' }}>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1
            className="text-4xl font-bold mb-3 inline-block"
            style={{
              background: 'linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-accent) 50%, var(--theme-secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Theme Creator
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto mb-3"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
            Design your own color scheme for SV3 Player. Customize every color, preview in real-time, and export for import into the iOS app.
          </p>
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ color: 'var(--theme-text-tertiary)' }}
          >
            Note: The preview is an approximation. You can further tweak your theme in-app after importing.
          </p>
        </div>

        {/* Theme Creator Component */}
        <ThemeCreator />
      </div>
    </div>
  );
}
