import { skills } from '../data/content';

const categories = [
  { key: 'programming' as const, label: 'Programming Languages' },
  { key: 'ml' as const, label: 'Machine Learning & Deep Learning' },
  { key: 'frameworks' as const, label: 'Frameworks & Libraries' },
  { key: 'concepts' as const, label: 'Concepts & Techniques' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-navy-800/35 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="section-label mb-3">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Technical Foundations
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map(({ key, label }) => (
            <div
              key={key}
              className="p-6 rounded-xl border border-white/5 bg-navy-800/30 hover:border-accent/15 transition-colors"
            >
              <h3 className="font-semibold text-white mb-4 text-base">{label}</h3>
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
      </div>
    </section>
  );
}
