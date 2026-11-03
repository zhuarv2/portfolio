import { ArrowDown, ExternalLink, Mail } from 'lucide-react';
import { personal } from '../data/content';
import NeuralViz from './NeuralViz';
import { scrollToSection } from '../utils/scroll';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-35 pointer-events-none" />
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 50%, rgb(var(--color-accent) / 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="animate-slide-up">
            <p className="section-label mb-5">STUDENT · ML RESEARCH · SOFTWARE DEVELOPMENT</p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              Curious about{' '}
              <span className="text-accent">intelligence.</span>
              <br />
              Building to understand it.
            </h1>

            <p className="text-slate-muted text-base sm:text-lg leading-relaxed max-w-lg mb-8">
              I'm a high school student in Kayseri, Türkiye, interested in machine learning and
              deep learning. Through research projects and hands-on software development, I'm
              exploring how intelligent systems work and how technology can solve practical
              problems.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#research"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('research');
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-navy-900 rounded-lg font-semibold text-sm hover:bg-white transition-colors"
              >
                Explore My Work
                <ArrowDown size={14} />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/15 text-slate-text rounded-lg font-semibold text-sm hover:border-accent/40 hover:text-accent transition-colors"
              >
                Get in Touch
                <Mail size={14} />
              </a>
              <a
                href="https://trainerapp.driveme.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-slate-muted text-sm hover:text-white transition-colors"
              >
                Trainer App
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Identity line */}
            <div className="flex items-center gap-3 text-xs text-slate-muted/60 font-mono">
              <span className="w-8 h-px bg-white/10" />
              <span>{personal.name}</span>
              <span>·</span>
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Right: Neural viz */}
          <div className="hidden md:flex items-center justify-center">
            <NeuralViz />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-muted/40">
        <span className="text-xs font-mono tracking-wider">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/10 to-transparent" />
      </div>
    </section>
  );
}
