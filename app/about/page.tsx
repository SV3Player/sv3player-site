import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - SV3 Player",
  description: "Meet the team behind SV3 Player.",
};

const team = [
  {
    name: "Nick",
    role: "Developer",
    bio: "Writes the code, fixes the bugs, writes more bugs, fixes those too.",
  },
  {
    name: "Professor Otto Von Schnitzelpusskrankengeschitmeyer",
    role: "Project Lead (Cat)",
    bio: "Oversees all operations from a sunny windowsill. Ensures code reviews happen at 3 AM by walking across the keyboard. Firm believer that every function could use more naps.",
  },
  {
    name: "Tism",
    role: "HR & Break Enforcement (Cat)",
    bio: "Demands breaks at regular intervals. Specializes in loud, insistent reminders that lunch is overdue. Has never once approved a crunch period.",
  },
];

export default function AboutPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--theme-background)' }}
    >
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1
          className="text-4xl font-bold mb-4 inline-block"
          style={{
            background: 'linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          About
        </h1>
        <p className="mb-10 text-lg" style={{ color: 'var(--theme-text-secondary)' }}>
          SV3 Player is an indie project built by a small team with strong opinions about media playback and even stronger opinions about nap schedules.
        </p>

        <section className="mb-10">
          <h2
            className="text-2xl font-semibold mb-6 pb-2 border-b inline-block w-full"
            style={{
              background: 'linear-gradient(90deg, var(--theme-text-primary) 0%, var(--theme-primary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              borderColor: 'var(--theme-control-background)',
            }}
          >
            The Team
          </h2>

          <div className="space-y-6">
            {team.map((member, i) => {
              const colors = ['var(--theme-primary)', 'var(--theme-secondary)', 'var(--theme-accent)'];
              const color = colors[i % colors.length];
              return (
                <div
                  key={member.name}
                  className="p-4 rounded-xl"
                  style={{
                    backgroundColor: 'var(--theme-surface)',
                    border: `1px solid var(--theme-control-background)`,
                  }}
                >
                  <h3
                    className="text-lg font-semibold mb-1"
                    style={{ color: color }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-sm font-medium mb-2"
                    style={{ color: 'var(--theme-text-tertiary)' }}
                  >
                    {member.role}
                  </p>
                  <p style={{ color: 'var(--theme-text-secondary)' }}>
                    {member.bio}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section>
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
            Support the Project
          </h2>
          <p className="mb-4" style={{ color: 'var(--theme-text-secondary)' }}>
            SV3 Player is independently developed. If you find it useful, consider supporting development (and the snack budget for HR).
          </p>
          <a
            href="https://ko-fi.com/sv3player"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-transform hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, var(--theme-primary) 0%, var(--theme-accent) 100%)',
              color: 'var(--theme-background)',
            }}
          >
            <KofiIcon />
            Support on Ko-fi
          </a>
        </section>
      </div>
    </div>
  );
}

function KofiIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z" />
    </svg>
  );
}
