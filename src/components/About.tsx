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
          {/* Left */}
          <div>
            <p className="section-label mb-4">About</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-snug">
              A student, a researcher in progress, and a builder.
            </h2>
            <div className="space-y-4 text-slate-muted leading-relaxed">
              <p>
                I'm {personal.name}, a high school student at{' '}
                <span className="text-white">{personal.school}</span> in {personal.location}. As a{' '}
                <span className="text-white">{personal.scholarship}</span>, I've had the support to
                pursue serious learning alongside my studies.
              </p>
              <p>
                My interest in machine learning started with curiosity about how computers could learn
                to recognize patterns and make decisions. That curiosity has grown into hands-on
                research: I've participated in two TEKNOFEST AI competition projects focused on
                medical imaging and clinical signal analysis, working in small teams on real datasets
                and real evaluation metrics.
              </p>
              <p>
                Beyond research, I build software to practice turning ideas into working products.
                Trainer App is my most complete example of that — a web application I built and
                deployed, accessible to anyone on the web.
              </p>
              <p>
                I am still early in this journey. My goal is to develop deeper mathematical
                understanding of the models I work with and to contribute meaningfully to AI research
                over time.
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
