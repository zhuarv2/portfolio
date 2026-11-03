export default function BackgroundOverlay() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Precision micro dot-grid spanning the full page height */}
      <div className="absolute inset-0 ambient-dot-pattern opacity-100" />

      {/* Ambient Orb 1: Upper Left (Hero & About introduction) */}
      <div
        className="ambient-glow-orb w-[650px] h-[650px] top-12 -left-32 opacity-90"
        style={{
          background: 'radial-gradient(circle, var(--ambient-orb-1) 0%, transparent 70%)',
        }}
      />

      {/* Ambient Orb 2: Middle Right (Research & Projects) */}
      <div
        className="ambient-glow-orb w-[750px] h-[750px] top-[1400px] -right-48 opacity-85"
        style={{
          background: 'radial-gradient(circle, var(--ambient-orb-2) 0%, transparent 70%)',
        }}
      />

      {/* Ambient Orb 3: Lower Section (Skills, Education & Contact) */}
      <div
        className="ambient-glow-orb w-[700px] h-[700px] top-[2800px] left-1/2 -translate-x-1/2 opacity-90"
        style={{
          background: 'radial-gradient(circle, var(--ambient-orb-3) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}

