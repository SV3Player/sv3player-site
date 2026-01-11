'use client';

import { useState, useCallback } from 'react';
import { config } from '../lib/config';

type IssueType = 'bug' | 'feature' | 'question';

interface IssueTypeConfig {
  id: IssueType;
  label: string;
  icon: React.ReactNode;
  description: string;
  subjectPrefix: string;
  template: string;
}

const issueTypes: IssueTypeConfig[] = [
  {
    id: 'bug',
    label: 'Bug Report',
    description: 'Something is broken or not working correctly',
    subjectPrefix: '[Bug]',
    template: `**What happened?**
Describe what went wrong.

**What did you expect?**
Describe what you expected to happen.

**Steps to reproduce:**
1.
2.
3.

**Device & iOS version:**
(e.g., iPhone 15 Pro, iOS 17.2)

**SV3 Player version:**
(Found in Settings > About)

**Server type:**
(Stash / Plex / Emby / Jellyfin)`,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    id: 'feature',
    label: 'Feature Request',
    description: 'Suggest a new feature or improvement',
    subjectPrefix: '[Feature]',
    template: `**What would you like?**
Describe the feature or improvement.

**Why would this be useful?**
Explain how this would help you or others.

**Any examples?**
(Optional) Link to similar features in other apps or describe how it might work.`,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: 'question',
    label: 'Question',
    description: 'Ask about setup, usage, or troubleshooting',
    subjectPrefix: '[Question]',
    template: `**What do you need help with?**
Describe your question or issue.

**What have you tried?**
(Optional) List any steps you've already taken.

**Server type:**
(Stash / Plex / Emby / Jellyfin)`,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

const SUPPORT_EMAIL = config.supportEmail;

export function SupportForm() {
  const [selectedType, setSelectedType] = useState<IssueType | null>(null);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [copied, setCopied] = useState(false);

  const selectedConfig = issueTypes.find((t) => t.id === selectedType);

  // When type changes, update the template
  const handleTypeSelect = useCallback((type: IssueType) => {
    const config = issueTypes.find((t) => t.id === type);
    setSelectedType(type);
    if (config) {
      setBody(config.template);
    }
  }, []);

  // Build mailto link
  const buildMailtoUrl = useCallback(() => {
    const fullSubject = selectedConfig
      ? `${selectedConfig.subjectPrefix} ${subject}`
      : subject;
    const encodedSubject = encodeURIComponent(fullSubject);
    const encodedBody = encodeURIComponent(body);
    return `mailto:${SUPPORT_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;
  }, [selectedConfig, subject, body]);

  // Copy email details to clipboard
  const copyToClipboard = useCallback(async () => {
    const fullSubject = selectedConfig
      ? `${selectedConfig.subjectPrefix} ${subject}`
      : subject;
    const text = `To: ${SUPPORT_EMAIL}\nSubject: ${fullSubject}\n\n${body}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [selectedConfig, subject, body]);

  return (
    <div className="space-y-6">
      {/* Issue Type Selection */}
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
          What can we help with?
        </h2>

        <div className="grid gap-3">
          {issueTypes.map((type) => {
            const isSelected = selectedType === type.id;
            return (
              <button
                key={type.id}
                onClick={() => handleTypeSelect(type.id)}
                className="flex items-start gap-4 p-4 rounded-xl text-left transition-all"
                style={{
                  backgroundColor: isSelected
                    ? 'var(--theme-control-background)'
                    : 'transparent',
                  border: `2px solid ${isSelected ? 'var(--theme-accent)' : 'var(--theme-control-background)'}`,
                }}
              >
                <div
                  className="flex-shrink-0 p-2 rounded-lg"
                  style={{
                    backgroundColor: isSelected
                      ? 'var(--theme-accent)'
                      : 'var(--theme-control-background)',
                    color: isSelected
                      ? 'var(--theme-background)'
                      : 'var(--theme-text-secondary)',
                  }}
                >
                  {type.icon}
                </div>
                <div>
                  <h3
                    className="font-medium"
                    style={{
                      color: isSelected
                        ? 'var(--theme-accent)'
                        : 'var(--theme-text-primary)',
                    }}
                  >
                    {type.label}
                  </h3>
                  <p
                    className="text-sm mt-0.5"
                    style={{ color: 'var(--theme-text-tertiary)' }}
                  >
                    {type.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Form Fields - Show after type selection */}
      {selectedType && (
        <div
          className="p-4 rounded-xl space-y-4"
          style={{
            backgroundColor: 'var(--theme-surface)',
            border: '1px solid var(--theme-control-background)',
          }}
        >
          <h2
            className="text-lg font-semibold"
            style={{ color: 'var(--theme-text-primary)' }}
          >
            Describe the {selectedConfig?.label.toLowerCase()}
          </h2>

          {/* Subject */}
          <div>
            <label
              className="block text-sm mb-1"
              style={{ color: 'var(--theme-text-secondary)' }}
            >
              Subject
            </label>
            <div className="flex items-center gap-2">
              <span
                className="px-2 py-2 rounded-lg text-sm font-medium"
                style={{
                  backgroundColor: 'var(--theme-control-background)',
                  color: 'var(--theme-text-tertiary)',
                }}
              >
                {selectedConfig?.subjectPrefix}
              </span>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Brief summary..."
                className="flex-1 px-3 py-2 rounded-lg text-sm"
                style={{
                  backgroundColor: 'var(--theme-control-background)',
                  color: 'var(--theme-text-primary)',
                  border: '1px solid var(--theme-control-background)',
                }}
              />
            </div>
          </div>

          {/* Body */}
          <div>
            <label
              className="block text-sm mb-1"
              style={{ color: 'var(--theme-text-secondary)' }}
            >
              Details
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={12}
              className="w-full px-3 py-2 rounded-lg text-sm font-mono"
              style={{
                backgroundColor: 'var(--theme-control-background)',
                color: 'var(--theme-text-primary)',
                border: '1px solid var(--theme-control-background)',
                resize: 'vertical',
              }}
            />
            <p
              className="text-xs mt-1"
              style={{ color: 'var(--theme-text-tertiary)' }}
            >
              Fill in the template above. The more detail you provide, the faster we can help.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={buildMailtoUrl()}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-accent) 100%)',
                color: 'var(--theme-background)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7l-10 6L2 7" />
              </svg>
              Open in Email App
            </a>
            <button
              onClick={copyToClipboard}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{
                backgroundColor: 'var(--theme-control-background)',
                color: 'var(--theme-text-primary)',
              }}
            >
              {copied ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  Copy to Clipboard
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* How It Works */}
      <div
        className="p-4 rounded-xl"
        style={{
          backgroundColor: 'var(--theme-surface)',
          border: '1px solid var(--theme-control-background)',
        }}
      >
        <h2
          className="text-lg font-semibold mb-3"
          style={{ color: 'var(--theme-text-primary)' }}
        >
          How It Works
        </h2>
        <ol
          className="space-y-2 text-sm"
          style={{ color: 'var(--theme-text-secondary)' }}
        >
          <li className="flex items-start gap-3">
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                backgroundColor: 'var(--theme-accent)',
                color: 'var(--theme-background)',
              }}
            >
              1
            </span>
            <span>Select an issue type and fill in the details above</span>
          </li>
          <li className="flex items-start gap-3">
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                backgroundColor: 'var(--theme-accent)',
                color: 'var(--theme-background)',
              }}
            >
              2
            </span>
            <span>Click &quot;Open in Email App&quot; to send your request</span>
          </li>
          <li className="flex items-start gap-3">
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                backgroundColor: 'var(--theme-accent)',
                color: 'var(--theme-background)',
              }}
            >
              3
            </span>
            <span>We&apos;ll review your message and respond as soon as possible</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
