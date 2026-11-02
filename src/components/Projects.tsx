import { useState } from 'react';
import { ExternalLink, Star, Smartphone, ShieldCheck, CheckCircle2, Calendar, Clock, Dumbbell } from 'lucide-react';
import { projects } from '../data/content';

export default function Projects() {
  const p = projects[0];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <p className="section-label mb-3">Software Development</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Software Engineering Project</h2>
        </div>

        {/* Featured card — full width editorial layout */}
        <div className="rounded-2xl border border-white/10 bg-navy-800/40 overflow-hidden hover:border-accent/25 transition-all shadow-xl">
          <div className="grid lg:grid-cols-12 gap-0">
            {/* Interactive / Representative Mockup */}
            <div className="lg:col-span-5 bg-navy-950/90 p-5 sm:p-7 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/5">
              <InteractiveAppMockup />
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Star size={13} className="text-[#ff7a14]" />
                  <span className="text-xs font-mono text-[#ff7a14] tracking-wider uppercase font-semibold">
                    PRODUCTION CASE STUDY
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm font-mono text-accent mb-4">{p.subtitle}</p>

                <p className="text-slate-muted leading-relaxed mb-6 text-sm sm:text-base">
                  {p.description}
                </p>

                {/* Verified Key Features */}
                <div className="mb-6 space-y-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-muted/70 block">
                    Verified Application Features:
                  </span>
                  <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-muted">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-accent shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What I learned */}
                <div className="p-4 rounded-xl bg-navy-900/80 border border-white/5 mb-6 space-y-1.5">
                  <p className="text-xs font-mono text-accent flex items-center gap-1.5 font-medium">
                    <ShieldCheck size={13} />
                    Engineering Takeaway & Growth
                  </p>
                  <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
                    {p.learned}
                  </p>
                </div>

                {/* Verified Tech Stack */}
                <div className="space-y-2 mb-8">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-muted/60 block">
                    Verified Production Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="tag text-xs font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-navy-900 rounded-lg text-sm font-semibold hover:bg-white transition-colors shadow-md"
                >
                  Visit Live Application
                  <ExternalLink size={14} />
                </a>
                <span className="text-xs font-mono text-slate-muted/50 flex items-center gap-1.5">
                  <Smartphone size={13} />
                  Live PWA at trainerapp.driveme.id
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InteractiveAppMockup() {
  const [activeTab, setActiveTab] = useState<'today' | 'planner' | 'history'>('today');

  return (
    <div className="w-full max-w-sm select-none">
      {/* Browser Chrome Header */}
      <div className="rounded-t-xl bg-navy-800 border border-white/10 border-b-0 px-4 py-2.5 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="flex-1 mx-3 bg-navy-950/80 rounded-md px-3 py-1 text-[11px] font-mono text-slate-muted/60 text-center truncate border border-white/5">
          https://trainerapp.driveme.id
        </div>
        <div className="w-2 h-2 rounded-full bg-emerald-400" title="Online" />
      </div>

      {/* App Interface Canvas */}
      <div className="rounded-b-xl border border-white/10 bg-[#0d1424] p-4 sm:p-5 space-y-4 text-slate-text shadow-2xl min-h-[360px] flex flex-col justify-between">
        <div className="space-y-3.5">
          {/* Navigation Bar inside App */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff7a14]" />
              <span className="font-bold text-sm text-white tracking-tight">TrainerApp</span>
            </div>
            {/* Interactive Tab Buttons */}
            <div className="flex items-center gap-1 text-[11px] font-mono">
              <button
                onClick={() => setActiveTab('today')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  activeTab === 'today'
                    ? 'text-[#ff7a14] bg-[#ff7a14]/15 font-semibold'
                    : 'text-slate-muted/60 hover:text-white'
                }`}
              >
                Today
              </button>
              <button
                onClick={() => setActiveTab('planner')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  activeTab === 'planner'
                    ? 'text-[#ff7a14] bg-[#ff7a14]/15 font-semibold'
                    : 'text-slate-muted/60 hover:text-white'
                }`}
              >
                Planner
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  activeTab === 'history'
                    ? 'text-[#ff7a14] bg-[#ff7a14]/15 font-semibold'
                    : 'text-slate-muted/60 hover:text-white'
                }`}
              >
                History
              </button>
            </div>
          </div>

          {/* TAB 1: TODAY'S SESSION */}
          {activeTab === 'today' && (
            <div className="space-y-3 animate-fade-in">
              <div className="flex items-baseline justify-between">
                <h4 className="text-sm font-semibold text-white">
                  Today &mdash; <span className="text-[#ff7a14] font-mono">Monday</span>
                </h4>
                <span className="text-[10px] font-mono text-slate-muted/50">Week 44</span>
              </div>

              <div className="p-3 rounded-xl bg-navy-800/80 border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-white tracking-wide uppercase font-mono flex items-center gap-1.5">
                    <Dumbbell size={12} className="text-[#ff7a14]" />
                    Upper Body Strength
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Active
                  </span>
                </div>

                <ol className="space-y-1.5 text-xs text-slate-muted/90">
                  <li className="flex items-center gap-2 p-1.5 rounded-lg bg-navy-900/60 border border-white/5">
                    <span className="w-4 h-4 rounded-full bg-[#ff7a14]/20 text-[#ff7a14] text-[10px] font-mono flex items-center justify-center font-bold">1</span>
                    <span className="text-[11px]">Barbell Bench Press (4 × 8)</span>
                  </li>
                  <li className="flex items-center gap-2 p-1.5 rounded-lg bg-navy-900/60 border border-white/5">
                    <span className="w-4 h-4 rounded-full bg-[#ff7a14]/20 text-[#ff7a14] text-[10px] font-mono flex items-center justify-center font-bold">2</span>
                    <span className="text-[11px]">Incline Dumbbell Flyes (3 × 12)</span>
                  </li>
                  <li className="flex items-center gap-2 p-1.5 rounded-lg bg-navy-900/60 border border-white/5">
                    <span className="w-4 h-4 rounded-full bg-[#ff7a14]/20 text-[#ff7a14] text-[10px] font-mono flex items-center justify-center font-bold">3</span>
                    <span className="text-[11px]">Standing Overhead Press (4 × 10)</span>
                  </li>
                </ol>

                <div className="pt-1.5 flex items-center justify-between">
                  <div className="h-6 px-2.5 rounded-md bg-[#ff7a14] text-white text-[11px] font-semibold flex items-center gap-1 shadow-sm">
                    <CheckCircle2 size={11} />
                    <span>Complete Session</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-muted/40">3 Exercises</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: WEEKLY PLANNER */}
          {activeTab === 'planner' && (
            <div className="space-y-2.5 animate-fade-in">
              <div className="flex items-baseline justify-between">
                <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <Calendar size={13} className="text-[#ff7a14]" />
                  Weekly Schedule
                </h4>
                <span className="text-[10px] font-mono text-[#ff7a14]">7 Days</span>
              </div>

              <div className="space-y-1 text-xs font-mono">
                {[
                  { day: 'Monday', plan: 'Upper Body Strength', tag: 'Workout' },
                  { day: 'Tuesday', plan: 'Lower Body & Core', tag: 'Workout' },
                  { day: 'Wednesday', plan: 'Rest & Mobility', tag: 'Rest' },
                  { day: 'Thursday', plan: 'Push Hypertrophy', tag: 'Workout' },
                  { day: 'Friday', plan: 'Pull & Core', tag: 'Workout' },
                ].map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between p-1.5 rounded-lg bg-navy-800/60 border border-white/5 text-[11px]"
                  >
                    <span className="text-white font-medium">{item.day}</span>
                    <span className="text-slate-muted/80">{item.plan}</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded ${
                        item.tag === 'Rest'
                          ? 'bg-slate-500/10 text-slate-400'
                          : 'bg-[#ff7a14]/10 text-[#ff7a14]'
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SESSION HISTORY */}
          {activeTab === 'history' && (
            <div className="space-y-2.5 animate-fade-in">
              <div className="flex items-baseline justify-between">
                <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <Clock size={13} className="text-[#ff7a14]" />
                  Completed Logs
                </h4>
                <span className="text-[10px] font-mono text-emerald-400">All Logged</span>
              </div>

              <div className="space-y-1.5 text-xs font-mono">
                {[
                  { date: 'Yesterday', title: 'Lower Body & Core', note: 'Heavy squats 4x6, felt strong' },
                  { date: '3 days ago', title: 'Upper Body Push', note: 'Completed all target reps' },
                  { date: '5 days ago', title: 'Pull Day & Back', note: 'Weighted pullups completed' },
                ].map((log) => (
                  <div key={log.date} className="p-2 rounded-lg bg-navy-800/60 border border-white/5 space-y-0.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-white font-semibold flex items-center gap-1">
                        <CheckCircle2 size={10} className="text-emerald-400" />
                        {log.title}
                      </span>
                      <span className="text-[10px] text-slate-muted/60">{log.date}</span>
                    </div>
                    <p className="text-[10px] text-slate-muted/70 italic truncate font-sans">"{log.note}"</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info inside app */}
        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-muted/40">
          <span>PWA Standalone Engine</span>
          <span>© Farouq Hafizhuddin</span>
        </div>
      </div>
    </div>
  );
}
