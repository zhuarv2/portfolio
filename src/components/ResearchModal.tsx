import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  FileText,
  CheckCircle2,
  AlertCircle,
  Database,
  Layers,
  ArrowUpRight,
  Cpu,
  Share2,
  Download,
  Check,
} from 'lucide-react';
import { ResearchProject } from '../data/content';
import ResearchChart from './ResearchChart';

interface ResearchModalProps {
  project: ResearchProject | null;
  onClose: () => void;
}

export default function ResearchModal({ project, onClose }: ResearchModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const handleCopyLink = () => {
    if (!project) return;
    const url = `${window.location.origin}${window.location.pathname}#research/${project.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/85 backdrop-blur-md overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-research-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-navy-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-navy-900/95 backdrop-blur border-b border-white/10 px-5 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2.5 py-1 bg-accent/10 text-accent border border-accent/20 rounded-md font-semibold">
              PROJECT {project.number}
            </span>
            <span className="text-xs font-mono text-slate-muted hidden sm:inline-block">
              {project.team} · ID: {project.applicationId}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Share Case Study Link */}
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-muted hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              title="Copy shareable link to this case study"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-400" />
                  <span className="text-emerald-400">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 size={13} />
                  <span className="hidden sm:inline">Share</span>
                </>
              )}
            </button>

            {/* Direct Open PDF */}
            {project.pdfFile && (
              <>
                <a
                  href={project.pdfFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-accent hover:bg-accent/10 border border-accent/30 transition-colors"
                  title="View original competition report PDF"
                >
                  <FileText size={13} />
                  <span className="hidden sm:inline">Open PDF</span>
                  <ArrowUpRight size={12} />
                </a>
                <a
                  href={project.pdfFile}
                  download
                  className="p-1.5 rounded-lg text-slate-muted hover:text-white hover:bg-white/5 border border-white/5 transition-colors hidden sm:inline-flex"
                  title="Download paper PDF"
                >
                  <Download size={14} />
                </a>
              </>
            )}

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-muted hover:text-white hover:bg-white/5 transition-colors ml-1"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto text-slate-text">
          {/* Header Title Section */}
          <div className="border-b border-white/5 pb-6">
            <p className="text-xs font-mono text-accent uppercase tracking-wider mb-2">
              {project.field}
            </p>
            <h2 id="modal-research-title" className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {project.title}
            </h2>
            <p className="text-xs text-slate-muted/80 font-mono">
              {project.competition}
            </p>
          </div>

          {/* Section 1: Abstract / Overview */}
          <section className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-accent flex items-center gap-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              1. Abstract & Research Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-muted leading-relaxed bg-navy-800/40 p-4 rounded-xl border border-white/5">
              {project.abstract}
            </p>
          </section>

          {/* Section 2 & 3: Problem Statement & Research Question */}
          <div className="grid md:grid-cols-2 gap-4">
            <section className="p-4 rounded-xl bg-navy-800/30 border border-white/5 space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-muted flex items-center gap-1.5 font-semibold">
                <AlertCircle size={13} className="text-amber-400" />
                2. Problem Statement
              </h3>
              <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
                {project.problemStatement}
              </p>
            </section>

            <section className="p-4 rounded-xl bg-navy-800/30 border border-white/5 space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-accent flex items-center gap-1.5 font-semibold">
                <CheckCircle2 size={13} className="text-accent" />
                3. Research Question
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-mono">
                "{project.question}"
              </p>
            </section>
          </div>

          {/* Section 4: Dataset and Preprocessing */}
          <section className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-accent flex items-center gap-2 font-semibold">
              <Database size={15} />
              4. Dataset & Preprocessing Pipeline
            </h3>
            <div className="p-4 rounded-xl bg-navy-800/40 border border-white/5 space-y-3 text-sm">
              <div className="grid sm:grid-cols-3 gap-2 pb-3 border-b border-white/5 text-xs font-mono">
                <div>
                  <span className="text-slate-muted/60 block">Dataset</span>
                  <span className="text-white font-medium">{project.datasetDetails.name}</span>
                </div>
                <div>
                  <span className="text-slate-muted/60 block">Volume</span>
                  <span className="text-white font-medium">{project.datasetDetails.size}</span>
                </div>
                <div>
                  <span className="text-slate-muted/60 block">Partitioning</span>
                  <span className="text-white font-medium">{project.datasetDetails.split}</span>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-muted/80 block mb-2 font-medium">Preprocessing & Data Augmentation:</span>
                <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-muted">
                  {project.preprocessing.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Methods & Model Architecture */}
          <section className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-accent flex items-center gap-2 font-semibold">
              <Layers size={15} />
              5. Methods & Model Architecture
            </h3>
            <div className="p-4 rounded-xl bg-navy-800/40 border border-white/5 space-y-3">
              <p className="text-sm font-medium text-white">{project.model}</p>
              <ul className="space-y-2 text-xs text-slate-muted">
                {project.modelArchitectureDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">›</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 6: Experimental Setup & Hyperparameters */}
          <section className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-accent flex items-center gap-2 font-semibold">
              <Cpu size={15} />
              6. Experimental Setup & Hyperparameters
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.entries(project.hyperparameters).map(([key, val]) => (
                <div key={key} className="p-3 rounded-lg bg-navy-800/30 border border-white/5">
                  <span className="text-[11px] font-mono text-slate-muted/60 block">{key}</span>
                  <span className="text-xs font-mono text-white font-medium">{val}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Results, Verified Scientific Charts & Evaluation */}
          <section className="space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-accent flex items-center gap-2 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              7. Verified Results & Scientific Visualizations
            </h3>

            {/* Scientific Chart Component */}
            <ResearchChart projectId={project.id} />

            <div className="p-4 rounded-xl bg-navy-800/50 border border-white/10 space-y-4">
              <div className="p-3 rounded-lg bg-accent/10 border border-accent/20 text-xs font-mono text-accent">
                {project.results.highlight}
              </div>

              {project.results.table && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 text-slate-muted/60">
                        <th className="py-2 px-3">Class / Model</th>
                        {project.results.table[0].precision && <th className="py-2 px-3">Precision</th>}
                        {project.results.table[0].recall && <th className="py-2 px-3">Recall</th>}
                        <th className="py-2 px-3">Score (IoU / F1)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-text">
                      {project.results.table.map((row, idx) => (
                        <tr key={idx} className="hover:bg-white/[0.02]">
                          <td className="py-2 px-3 font-sans text-white/90">{row.label}</td>
                          {row.precision && <td className="py-2 px-3 text-slate-muted">{row.precision}</td>}
                          {row.recall && <td className="py-2 px-3 text-slate-muted">{row.recall}</td>}
                          <td className="py-2 px-3 text-accent font-semibold">{row.f1OrIou}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <p className="text-xs text-slate-muted leading-relaxed">
                {project.results.summary}
              </p>
            </div>
          </section>

          {/* Section 8: Discussion & Limitations */}
          <section className="space-y-3">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-muted flex items-center gap-2 font-semibold">
              8. Discussion & Limitations
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-muted">
              {project.discussionAndLimitations.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">―</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 9: Individual Contribution */}
          <section className="p-4 rounded-xl bg-navy-800/60 border border-accent/20 space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-accent flex items-center gap-1.5 font-semibold">
              9. Individual Contribution (Farouq Hafizhuddin)
            </h3>
            <p className="text-xs sm:text-sm text-slate-text leading-relaxed">
              {project.contribution}
            </p>
          </section>

          {/* Section 10: Future Work */}
          <section className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-muted font-semibold">
              10. Future Work
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-muted">
              {project.futureWork.map((fw, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent">›</span>
                  <span>{fw}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 11: References & Formal Document */}
          <section className="border-t border-white/5 pt-4 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-muted font-semibold">
              11. Document & References
            </h3>
            <div className="p-3 rounded-lg bg-navy-800/30 text-xs text-slate-muted/70 font-mono space-y-1">
              <p className="text-slate-muted/90 font-medium">Original Submission Document:</p>
              <p>{project.status} (Application ID: {project.applicationId})</p>
            </div>
            <ul className="space-y-1 text-[11px] font-mono text-slate-muted/50">
              {project.references.map((ref, idx) => (
                <li key={idx}>[{idx + 1}] {ref}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-navy-900 border-t border-white/10 px-5 sm:px-6 py-3 flex items-center justify-between text-xs">
          <span className="font-mono text-slate-muted/50 text-[11px]">
            Farouq Hafizhuddin · High School Student & ML Researcher
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 text-white font-medium hover:bg-white/15 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
