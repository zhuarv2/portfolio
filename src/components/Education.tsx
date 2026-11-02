import { GraduationCap, Award } from 'lucide-react';
import { personal } from '../data/content';

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <p className="section-label mb-8">Education</p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          {/* School */}
          <div className="p-5 rounded-xl border border-white/5 bg-navy-800/30">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-accent/10 text-accent mt-0.5">
                <GraduationCap size={15} />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm leading-snug mb-1">
                  {personal.school}
                </h3>
                <p className="text-xs text-slate-muted/70">{personal.location}</p>
                <p className="text-xs text-slate-muted/40 mt-1 font-mono">
                  Anadolu İHL — High school level
                </p>
              </div>
            </div>
          </div>

          {/* Scholarship */}
          <div className="p-5 rounded-xl border border-white/5 bg-navy-800/30">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-accent/10 text-accent mt-0.5">
                <Award size={15} />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1">
                  {personal.scholarship}
                </h3>
                <p className="text-xs text-slate-muted/70">Türkiye Diyanet Vakfı (TDV)</p>
                <p className="text-xs text-slate-muted/40 mt-1">
                  Academic scholarship supporting continued education
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
