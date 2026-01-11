import type { Metadata } from 'next';
import { SupportForm } from '../components/SupportForm';
import { config } from '../lib/config';

export const metadata: Metadata = {
  title: 'Support - SV3 Player',
  description: 'Get help with SV3 Player. Report bugs, request features, or ask questions.',
};

export default function SupportPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--theme-background)' }}
    >
      <div className="container mx-auto px-4 py-12 max-w-3xl">
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
            Support
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
            Need help? Report a bug, request a feature, or ask a question.
          </p>
        </div>

        {/* Support Form */}
        <SupportForm />

        {/* Direct Contact */}
        <div
          className="mt-10 p-6 rounded-xl text-center"
          style={{
            backgroundColor: 'var(--theme-surface)',
            border: '1px solid var(--theme-control-background)',
          }}
        >
          <h2
            className="text-lg font-semibold mb-3"
            style={{ color: 'var(--theme-text-primary)' }}
          >
            Direct Contact
          </h2>
          <p
            className="text-sm mb-4"
            style={{ color: 'var(--theme-text-secondary)' }}
          >
            Or reach us directly via email:
          </p>
          <a
            href={`mailto:${config.supportEmail}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: 'var(--theme-control-background)',
              color: 'var(--theme-accent)',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 7l-10 6L2 7" />
            </svg>
            {config.supportEmail}
          </a>
        </div>

        {/* FAQ Hint */}
        <div className="mt-8 text-center">
          <p
            className="text-sm"
            style={{ color: 'var(--theme-text-tertiary)' }}
          >
            Check out the{' '}
            <a
              href="/docs/"
              className="hover:underline"
              style={{ color: 'var(--theme-accent)' }}
            >
              documentation
            </a>
            {' '}for answers to common questions.
          </p>
        </div>
      </div>
    </div>
  );
}
