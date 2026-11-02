interface ResearchChartProps {
  projectId: string;
}

export default function ResearchChart({ projectId }: ResearchChartProps) {
  if (projectId === 'polyp-segmentation') {
    return <PolypSegmentationChart />;
  }

  if (projectId === 'ctr-regression') {
    return <CtrRegressionChart />;
  }

  if (projectId === 'ecg-classification-design') {
    return <EcgDesignChart />;
  }

  if (projectId === 'ecg-classification-detail') {
    return <EcgDetailChart />;
  }

  return null;
}

function PolypSegmentationChart() {
  const models = [
    { name: 'ResUNet++ (Our Final Model)', score: 90.27, isOurs: true, desc: 'ResNet encoder + SE units + ASPP + Attention' },
    { name: 'DeepLabV3+ (Benchmark Ref)', score: 89.00, isOurs: false, desc: 'Atrous spatial pyramid pooling' },
    { name: 'AttentionU-Net (Benchmark Ref)', score: 88.40, isOurs: false, desc: 'Additive attention gates' },
    { name: 'TransFuse (Benchmark Ref)', score: 86.80, isOurs: false, desc: 'CNN + Transformer fusion' },
    { name: 'Mask R-CNN ResNet50 (Benchmark Ref)', score: 63.90, isOurs: false, desc: 'Instance segmentation adapted' },
  ];

  return (
    <div className="p-4 rounded-xl bg-navy-800/40 border border-white/10 space-y-3">
      <div className="flex items-center justify-between pb-2 border-b border-white/5">
        <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
          Validation IoU (%) Comparative Benchmark — CVC-ClinicDB
        </span>
        <span className="text-[11px] font-mono text-slate-muted/60">Verified Experimental Data</span>
      </div>

      <div className="space-y-3 pt-1">
        {models.map((m) => (
          <div key={m.name} className="space-y-1">
            <div className="flex items-baseline justify-between text-xs">
              <span className={`font-mono ${m.isOurs ? 'text-accent font-bold' : 'text-slate-text'}`}>
                {m.name}
              </span>
              <span className={`font-mono font-semibold ${m.isOurs ? 'text-accent' : 'text-slate-muted'}`}>
                {m.score.toFixed(2)}%
              </span>
            </div>
            <div className="h-2 w-full bg-navy-950/80 rounded-full overflow-hidden border border-white/5">
              <div
                className={`h-full rounded-full transition-all duration-700 ${
                  m.isOurs
                    ? 'bg-gradient-to-r from-accent to-sky-300'
                    : 'bg-slate-500/40'
                }`}
                style={{ width: `${m.score}%` }}
              />
            </div>
            <p className="text-[10px] text-slate-muted/50 font-mono">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CtrRegressionChart() {
  return (
    <div className="p-4 rounded-xl bg-navy-800/40 border border-white/10 space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-white/5">
        <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
          Cardiothoracic Ratio (CTR) Formulation & Anatomical Landmarks
        </span>
        <span className="text-[11px] font-mono text-slate-muted/60">6 Coordinate Pairs (12D Output)</span>
      </div>

      {/* Schematic SVG of Chest Radiograph CTR Calculation */}
      <div className="p-4 rounded-lg bg-navy-950/70 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <svg viewBox="0 0 340 160" className="w-full max-w-[320px] h-auto select-none" aria-label="CTR Landmark Diagram">
          {/* Thoracic Cavity Outline */}
          <path
            d="M 50 20 C 50 70, 40 120, 40 140 L 300 140 C 300 120, 290 70, 290 20"
            fill="none"
            stroke="rgba(160, 174, 192, 0.3)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {/* Heart Silhouette */}
          <path
            d="M 170 40 C 130 50, 110 80, 110 110 C 110 135, 150 140, 195 135 C 230 130, 245 105, 230 80 C 215 55, 190 40, 170 40 Z"
            fill="rgba(56, 189, 248, 0.08)"
            stroke="#38BDF8"
            strokeWidth="1.5"
          />

          {/* Midline */}
          <line x1="170" y1="15" x2="170" y2="145" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />

          {/* Dimension A: Midline to Right Atrial Border */}
          <line x1="110" y1="95" x2="170" y2="95" stroke="#38BDF8" strokeWidth="2" />
          <circle cx="110" cy="95" r="3" fill="#38BDF8" />
          <circle cx="170" cy="95" r="2" fill="#38BDF8" />
          <text x="135" y="90" fill="#38BDF8" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">A</text>

          {/* Dimension B: Midline to Left Ventricular Apex */}
          <line x1="170" y1="115" x2="235" y2="115" stroke="#38BDF8" strokeWidth="2" />
          <circle cx="235" cy="115" r="3" fill="#38BDF8" />
          <circle cx="170" cy="115" r="2" fill="#38BDF8" />
          <text x="205" y="110" fill="#38BDF8" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">B</text>

          {/* Dimension C: Transverse Thoracic Diameter */}
          <line x1="40" y1="140" x2="300" y2="140" stroke="#F1F5F9" strokeWidth="1.5" />
          <circle cx="40" cy="140" r="3" fill="#F1F5F9" />
          <circle cx="300" cy="140" r="3" fill="#F1F5F9" />
          <text x="170" y="154" fill="#F1F5F9" fontSize="10" fontFamily="JetBrains Mono" textAnchor="middle">C (Thoracic Width)</text>
        </svg>

        {/* Clinical Interpretation Card */}
        <div className="space-y-2 text-xs font-mono">
          <div className="p-2.5 rounded bg-navy-900 border border-white/5">
            <span className="text-slate-muted/60 block text-[10px]">CTR Formula</span>
            <span className="text-accent text-sm font-bold">CTR = [(A + B) / C] × 100%</span>
          </div>
          <div className="p-2.5 rounded bg-navy-900 border border-white/5">
            <span className="text-slate-muted/60 block text-[10px]">Diagnostic Threshold</span>
            <span className="text-rose-400 font-semibold">CTR &gt; 50%</span>
            <span className="text-slate-muted text-[11px] block">Indicates Cardiomegaly (Enlarged Heart)</span>
          </div>
          <p className="text-[10px] text-slate-muted/50 leading-relaxed">
            MobileNetV2 outputs the 12 continuous normalized coordinates directly, with Smooth L1 Loss minimizing outlier distortion.
          </p>
        </div>
      </div>
    </div>
  );
}

function EcgDesignChart() {
  const classes = [
    { name: 'Normal Sinus Rhythm (NORM/SR)', pct: 59.4, color: 'bg-emerald-400' },
    { name: 'Cardiac Arrhythmias (AFIB, AFL, SVT)', pct: 23.5, color: 'bg-accent' },
    { name: 'Conduction Disorders (LBBB, RBBB, AV Block)', pct: 17.1, color: 'bg-amber-400' },
  ];

  return (
    <div className="p-4 rounded-xl bg-navy-800/40 border border-white/10 space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-white/5">
        <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
          PTB-XL Dataset Class Distribution (21,799 Clinical Records)
        </span>
        <span className="text-[11px] font-mono text-slate-muted/60">PhysioNet Standard</span>
      </div>

      <div className="space-y-2">
        <div className="flex h-3 w-full rounded-full overflow-hidden bg-navy-950 border border-white/5">
          {classes.map((c) => (
            <div
              key={c.name}
              className={`h-full ${c.color} transition-all duration-500`}
              style={{ width: `${c.pct}%` }}
              title={`${c.name}: ${c.pct}%`}
            />
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-2 pt-2">
          {classes.map((c) => (
            <div key={c.name} className="p-2.5 rounded-lg bg-navy-900/60 border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${c.color}`} />
                <span className="text-xs font-mono font-bold text-white">{c.pct}%</span>
              </div>
              <p className="text-[10px] font-mono text-slate-muted/70 leading-snug">{c.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-3 rounded-lg bg-navy-950/70 border border-white/5 text-xs text-slate-muted space-y-1 font-mono">
        <span className="text-accent text-[11px] font-semibold block">Signal Preprocessing Pipeline:</span>
        <p className="text-[11px] leading-relaxed">
          500 Hz Resampling → 4th-Order Butterworth Filter (0.5–40 Hz) → Temporal Z-Score Normalization → Temporal Attention Pooling (+2.0% Macro F1 gain).
        </p>
      </div>
    </div>
  );
}

function EcgDetailChart() {
  const classes = [
    { label: 'Normal', precision: '90.63%', recall: '96.67%', f1: 93.55, color: '#34d399' },
    { label: 'LBBB', precision: '88.75%', recall: '94.67%', f1: 91.61, color: '#38bdf8' },
    { label: 'RBBB', precision: '88.89%', recall: '90.67%', f1: 89.77, color: '#818cf8' },
    { label: 'AFIB', precision: '66.86%', recall: '75.33%', f1: 70.85, color: '#fbbf24' },
    { label: 'AFL', precision: '72.22%', recall: '52.00%', f1: 60.47, color: '#f87171' },
  ];

  return (
    <div className="p-4 rounded-xl bg-navy-800/40 border border-white/10 space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-white/5">
        <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold">
          5-Class Test Set F1 Score & Confusion Analysis (750 Test Samples)
        </span>
        <span className="text-[11px] font-mono text-accent font-bold">Overall Macro F1: 81.25%</span>
      </div>

      {/* Classwise F1 Bar Comparison */}
      <div className="space-y-2.5">
        {classes.map((c) => (
          <div key={c.label} className="space-y-1">
            <div className="flex items-baseline justify-between text-xs font-mono">
              <span className="text-white font-medium">{c.label}</span>
              <div className="flex gap-3 text-[11px]">
                <span className="text-slate-muted/60">P: {c.precision}</span>
                <span className="text-slate-muted/60">R: {c.recall}</span>
                <span className="font-bold text-accent">{c.f1.toFixed(2)}% F1</span>
              </div>
            </div>
            <div className="h-2 w-full bg-navy-950/80 rounded-full overflow-hidden border border-white/5">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${c.f1}%`, backgroundColor: c.color }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Error Breakdown Card */}
      <div className="p-3 rounded-lg bg-navy-950/80 border border-white/5 space-y-2 text-xs font-mono">
        <span className="text-amber-400 font-semibold block text-[11px]">
          Clinical Confusion Matrix Finding:
        </span>
        <p className="text-slate-muted text-[11px] leading-relaxed">
          The primary error source was mutual misclassification between closely related atrial arrhythmias:
          <span className="text-white font-medium"> 54 AFL samples were mispredicted as AFIB</span>, while
          <span className="text-white font-medium"> 25 AFIB samples were mispredicted as AFL</span>.
          In contrast, conduction blocks (<span className="text-accent font-medium">LBBB 91.61%</span> and <span className="text-accent font-medium">RBBB 89.77%</span>) were identified with high accuracy due to distinct QRS morphological widening.
        </p>
      </div>
    </div>
  );
}
