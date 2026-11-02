import { skills } from '../data/content';

const categories = [
  { key: 'programming' as const, label: 'Programming', note: 'Primary language and web tools' },
  { key: 'ml' as const, label: 'Machine Learning & Deep Learning', note: 'Models and architectures used in research' },
  { key: 'frameworks' as const, label: 'Frameworks & Libraries', note: 'Tools for building and training models' },
  { key: 'concepts' as const, label: 'Concepts & Techniques', note: 'Methods applied across projects' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-navy-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="section-label mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Technical Foundations
          </h2>
          <p className="mt-3 text-slate-muted max-w-xl text-sm">
            Skills developed through research projects and hands-on development. Presented honestly — no
            arbitrary proficiency bars.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map(({ key, label, note }) => (
            <div
              key={key}
              className="p-6 rounded-xl border border-white/5 bg-navy-800/30 hover:border-accent/15 transition-colors"
            >
              <h3 className="font-semibold text-white mb-1 text-sm">{label}</h3>
              <p className="text-xs text-slate-muted/50 mb-4 font-mono">{note}</p>
              <div className="space-y-3">
                {skills[key].map(({ name, note: skillNote }) => (
                  <div key={name} className="flex flex-col gap-0.5">
                    <span className="text-sm text-slate-text font-medium">{name}</span>
                    <span className="text-xs text-slate-muted/60">{skillNote}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-slate-muted/40 font-mono">
          * Skills list reflects genuine experience. I continue to learn and expand these foundations.
        </p>
      </div>
    </section>
  );
}
