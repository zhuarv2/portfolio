import { useState, useEffect } from 'react';
import { FileText, Tag, BookOpen, ArrowRight } from 'lucide-react';
import { research, ResearchProject } from '../data/content';
import ResearchModal from './ResearchModal';

export default function Research() {
  const [selectedProject, setSelectedProject] = useState<ResearchProject | null>(null);

  // Sync with URL hash for direct deep-linking (e.g. #research/polyp-segmentation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#research/')) {
        const id = hash.replace('#research/', '');
        const found = research.find((r) => r.id === id);
        if (found) {
          setSelectedProject(found);
          return;
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenProject = (project: ResearchProject) => {
    setSelectedProject(project);
    window.history.pushState(null, '', `#research/${project.id}`);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#research/')) {
      window.history.pushState(null, '', '#research');
    }
  };

  return (
    <section id="research" className="py-24 bg-navy-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="section-label mb-3">Research</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Machine Learning Research Projects
          </h2>
          <p className="mt-3 text-slate-muted max-w-2xl leading-relaxed text-sm sm:text-base">
            Hands-on biomedical deep learning investigations developed for the TEKNOFEST AI in Health competitions.
            Click any study to review the complete research brief including verified methodology, metrics, and individual contributions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {research.map((r) => (
            <ResearchCard
              key={r.id}
              data={r}
              onOpenDetails={() => handleOpenProject(r)}
            />
          ))}
        </div>
      </div>

      {/* Dedicated Detail Modal with all 11 scientific sections & verified charts */}
      <ResearchModal
        project={selectedProject}
        onClose={handleCloseProject}
      />
    </section>
  );
}

function ResearchCard({
  data,
  onOpenDetails,
}: {
  data: ResearchProject;
  onOpenDetails: () => void;
}) {
  return (
    <article className="group flex flex-col rounded-xl border border-white/5 bg-navy-800/50 hover:border-accent/30 transition-all duration-300 overflow-hidden shadow-lg">
      {/* Top accent gradient bar */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Header line: number + competition team */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2 py-0.5 rounded bg-accent/10 text-accent border border-accent/20">
              {data.number}
            </span>
            <span className="text-xs text-slate-muted/60 font-mono">Team: {data.team}</span>
          </div>
          <span className="text-[11px] font-mono text-slate-muted/50">ID: {data.applicationId}</span>
        </div>

        {/* Title */}
        <h3
          onClick={onOpenDetails}
          className="font-semibold text-white text-lg sm:text-xl leading-snug mb-2 cursor-pointer group-hover:text-accent transition-colors"
        >
          {data.title}
        </h3>

        {/* Field badge */}
        <div className="flex items-center gap-1.5 mb-4">
          <Tag size={11} className="text-accent/60" />
          <span className="text-xs font-mono text-slate-muted/70">{data.field}</span>
        </div>

        {/* Summary */}
        <p className="text-sm text-slate-muted leading-relaxed mb-5 flex-1">
          {data.summary}
        </p>

        {/* Key Result Highlight Badge */}
        <div className="mb-5 p-3 rounded-lg bg-navy-900/70 border border-white/5 text-xs font-mono">
          <span className="text-accent/70 block text-[10px] uppercase tracking-wider mb-0.5">Verified Result</span>
          <span className="text-slate-text">{data.results.highlight}</span>
        </div>

        {/* Technical specs */}
        <div className="space-y-1.5 mb-5 text-xs font-mono">
          <div className="flex items-start gap-2">
            <span className="text-accent/50 shrink-0">Dataset:</span>
            <span className="text-slate-muted/90 truncate">{data.dataset}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-accent/50 shrink-0">Model:</span>
            <span className="text-slate-muted/90 truncate">{data.model}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {data.tags.map((tag) => (
            <span key={tag} className="tag text-[10px]">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5 gap-3">
          <button
            onClick={onOpenDetails}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-white transition-colors py-1 focus-visible:ring-1"
          >
            <BookOpen size={13} />
            <span>Read Research Brief</span>
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          {data.pdfFile && (
            <a
              href={data.pdfFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-slate-muted hover:text-white transition-colors py-1"
              title="View original competition report PDF"
            >
              <FileText size={12} />
              <span>PDF</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
