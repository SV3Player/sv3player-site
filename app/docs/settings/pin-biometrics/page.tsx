import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PIN & Biometrics - SV3 Player",
  description: "Protect SV3 Player with a PIN code and Face ID or Touch ID authentication.",
};

export default function PinBiometricsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--theme-background)' }}>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav className="text-sm mb-6">
          <Link href="/docs/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Docs</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <Link href="/docs/settings/" className="hover:underline" style={{ color: 'var(--theme-accent)' }}>Settings</Link>
          <span className="mx-2" style={{ color: 'var(--theme-text-tertiary)' }}>/</span>
          <span style={{ color: 'var(--theme-text-secondary)' }}>PIN & Biometrics</span>
        </nav>

        <h1
          className="text-4xl font-bold mb-4 inline-block"
          style={{
            background: 'linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-success) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          PIN & Biometrics
        </h1>
        <p className="mb-8 text-lg" style={{ color: 'var(--theme-text-secondary)' }}>
          Add a layer of privacy to SV3 Player with app lock. Require a PIN code or biometric authentication every time the app is opened.
        </p>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b inline-block w-full"
            style={{
              background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-primary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Overview
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            App Lock protects your SV3 Player content from unauthorized access. When enabled, you&apos;ll need to authenticate each time you open the app.
          </p>
          <ul className="list-disc list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>PIN Code</strong> — A 4-digit code you choose</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Face ID</strong> — Unlock with facial recognition (iPhone X and later)</li>
            <li><strong style={{ color: 'var(--theme-text-primary)' }}>Touch ID</strong> — Unlock with fingerprint (supported devices)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b inline-block w-full"
            style={{
              background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Setting Up a PIN
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>You can set up a PIN during onboarding or later in Settings:</p>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-primary)' }}>During Onboarding</h3>
          <ol className="list-decimal list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>On the Security step, tap <strong style={{ color: 'var(--theme-text-primary)' }}>Set Up PIN</strong></li>
            <li>Enter a 4-digit code</li>
            <li>Confirm your code by entering it again</li>
            <li>Optionally enable biometric unlock when prompted</li>
          </ol>

          <h3 className="text-xl font-medium mb-3 mt-6" style={{ color: 'var(--theme-secondary)' }}>In Settings</h3>
          <ol className="list-decimal list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Go to <strong style={{ color: 'var(--theme-text-primary)' }}>Settings</strong> → <strong style={{ color: 'var(--theme-text-primary)' }}>PIN & Biometrics</strong></li>
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Set PIN</strong></li>
            <li>Enter and confirm your 4-digit code</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b inline-block w-full"
            style={{
              background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Enabling Biometrics
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            After setting a PIN, you can enable Face ID or Touch ID for faster unlocking:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Go to <strong style={{ color: 'var(--theme-text-primary)' }}>Settings</strong> → <strong style={{ color: 'var(--theme-text-primary)' }}>PIN & Biometrics</strong></li>
            <li>Toggle <strong style={{ color: 'var(--theme-text-primary)' }}>Use Face ID</strong> or <strong style={{ color: 'var(--theme-text-primary)' }}>Use Touch ID</strong> on</li>
            <li>Authenticate with your biometric when prompted</li>
          </ol>
          <div
            className="p-4 rounded-lg"
            style={{
              backgroundColor: 'var(--theme-surface)',
              border: '1px solid var(--theme-info)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
              <strong style={{ color: 'var(--theme-info)' }}>Note:</strong> A PIN is required before you can enable biometric unlock.
              The PIN serves as a fallback if biometric authentication fails.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b inline-block w-full"
            style={{
              background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-info) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Changing Your PIN
          </h2>
          <ol className="list-decimal list-inside space-y-2" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Go to <strong style={{ color: 'var(--theme-text-primary)' }}>Settings</strong> → <strong style={{ color: 'var(--theme-text-primary)' }}>PIN & Biometrics</strong></li>
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Change PIN</strong></li>
            <li>Enter your current PIN</li>
            <li>Enter and confirm your new PIN</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b inline-block w-full"
            style={{
              background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-warning) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Disabling App Lock
          </h2>
          <ol className="list-decimal list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Go to <strong style={{ color: 'var(--theme-text-primary)' }}>Settings</strong> → <strong style={{ color: 'var(--theme-text-primary)' }}>PIN & Biometrics</strong></li>
            <li>Tap <strong style={{ color: 'var(--theme-text-primary)' }}>Remove PIN</strong></li>
            <li>Enter your current PIN to confirm</li>
          </ol>
          <p style={{ color: 'var(--theme-text-secondary)' }}>
            This will also disable biometric unlock since it requires a PIN as a fallback.
          </p>
        </section>

        <section>
          <h2
            className="text-2xl font-semibold mb-4 pb-2 border-b inline-block w-full"
            style={{
              background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-error) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            Forgot Your PIN?
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            If you forget your PIN and can&apos;t use biometric authentication, you&apos;ll need to reset the app:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            <li>Delete and reinstall SV3 Player from the App Store</li>
            <li>Set up the app again and reconnect your servers</li>
          </ol>
          <div
            className="p-4 rounded-lg"
            style={{
              backgroundColor: 'var(--theme-surface)',
              border: '1px solid var(--theme-warning)',
            }}
          >
            <p className="text-sm" style={{ color: 'var(--theme-text-secondary)' }}>
              <strong style={{ color: 'var(--theme-warning)' }}>Important:</strong> We cannot recover your PIN.
              Your PIN is stored securely on your device and is never sent to any server.
              This is by design for your privacy.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
