import { personal } from '../data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-semibold text-accent">FH</span>
          <span className="text-xs text-slate-muted/40">·</span>
          <span className="text-xs text-slate-muted/50 font-mono">{personal.name}</span>
        </div>

        <p className="text-xs text-slate-muted/40 font-mono">
          © {year} — Built with React, TypeScript & Tailwind CSS
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-muted/50 hover:text-white transition-colors font-mono"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-muted/50 hover:text-white transition-colors font-mono"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-xs text-slate-muted/50 hover:text-white transition-colors font-mono"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
