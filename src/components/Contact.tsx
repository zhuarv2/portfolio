import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { personal } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-navy-800/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="section-label mb-4">Contact & Connect</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8 text-white">
            Get in Touch
          </h2>

          <div className="flex flex-col gap-4">
            {/* Email (Real mailto link) */}
            <a
              href={`mailto:${personal.email}`}
              className="group flex items-center justify-between p-5 rounded-xl border border-white/5 bg-navy-800/40 hover:border-accent/30 hover:bg-navy-800/70 transition-all shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-muted/60 uppercase">Direct Email</p>
                  <p className="text-sm sm:text-base font-medium text-white group-hover:text-accent transition-colors">
                    {personal.email}
                  </p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-slate-muted group-hover:text-accent transition-colors" />
            </a>

            {/* GitHub */}
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 rounded-xl border border-white/5 bg-navy-800/40 hover:border-accent/30 hover:bg-navy-800/70 transition-all shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                  <Github size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-muted/60 uppercase">GitHub Profile</p>
                  <p className="text-sm sm:text-base font-medium text-white group-hover:text-accent transition-colors">
                    github.com/zhuarv2
                  </p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-slate-muted group-hover:text-accent transition-colors" />
            </a>

            {/* LinkedIn */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 rounded-xl border border-white/5 bg-navy-800/40 hover:border-accent/30 hover:bg-navy-800/70 transition-all shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-muted/60 uppercase">LinkedIn</p>
                  <p className="text-sm sm:text-base font-medium text-white group-hover:text-accent transition-colors">
                    farouq-hafizhuddin
                  </p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-slate-muted group-hover:text-accent transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
