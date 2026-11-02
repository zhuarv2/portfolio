import { Search, Wrench, BookOpen } from 'lucide-react';
import { personal } from '../data/content';

const pillars = [
  {
    icon: Search,
    title: 'Research',
    body: 'Investigating machine learning problems by studying existing approaches, comparing architectures, running experiments, and carefully analyzing results.',
  },
  {
    icon: Wrench,
    title: 'Engineering',
    body: 'Translating ideas into working software — from training loops and preprocessing pipelines to deployed web applications.',
  },
  {
    icon: BookOpen,
    title: 'Learning',
    body: 'Developing stronger foundations in mathematics, programming, and AI through self-study, project work, and research collaboration.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Bio & Profile */}
          <div>
            <p className="section-label mb-4">About</p>

            <div className="flex flex-col sm:flex-row items-start gap-5 mb-6">
              <div className="relative group shrink-0">
                <div className="absolute -inset-0.5 bg-accent/20 rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition duration-300" />
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-white/10 shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 leading-snug">
                  A student, researcher in progress, and builder.
                </h2>
                <p className="text-xs font-mono text-accent">
                  {personal.location} · {personal.scholarship}
                </p>
              </div>
            </div>

            <div className="space-y-3.5 text-slate-muted leading-relaxed text-sm sm:text-base">
              <p>
                I'm <span className="text-white font-medium">{personal.name}</span>, a high school student at{' '}
                <span className="text-white">{personal.school}</span>. Supported by the{' '}
                <span className="text-white">{personal.scholarship}</span>, I pursue machine learning alongside my studies.
              </p>
              <p>
                My work centers on biomedical deep learning through TEKNOFEST AI competitions and building practical software like Trainer App. I aim to develop deeper mathematical foundations and contribute meaningfully to AI research.
              </p>
            </div>
          </div>

          {/* Right: Pillars */}
          <div className="space-y-4">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="p-5 rounded-xl border border-white/5 bg-navy-800/40 hover:border-accent/20 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/15 transition-colors">
                    <Icon size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{title}</h3>
                    <p className="text-sm text-slate-muted leading-relaxed">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
