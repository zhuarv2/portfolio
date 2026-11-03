export default function NeuralViz() {
  const layers = [
    { x: 55, nodes: 3, label: 'Input' },
    { x: 150, nodes: 5, label: 'Conv2D' },
    { x: 245, nodes: 5, label: 'ResBlock' },
    { x: 340, nodes: 4, label: 'Attention' },
    { x: 435, nodes: 2, label: 'Output' },
  ];

  const nodeRadius = 7;
  const svgHeight = 250;

  // Compute node positions
  const nodePositions = layers.map((layer) => {
    const positions = [];
    const spread = (layer.nodes - 1) * 36;
    const startY = (svgHeight - spread) / 2;
    for (let i = 0; i < layer.nodes; i++) {
      positions.push({ x: layer.x, y: startY + i * 36 });
    }
    return positions;
  });

  // Connections between consecutive layers
  const connections: { x1: number; y1: number; x2: number; y2: number }[] = [];
  for (let l = 0; l < nodePositions.length - 1; l++) {
    for (const a of nodePositions[l]) {
      for (const b of nodePositions[l + 1]) {
        connections.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y });
      }
    }
  }

  // Active signal path through the network
  const activePath = [
    { layer: 0, node: 1 },
    { layer: 1, node: 2 },
    { layer: 2, node: 2 },
    { layer: 3, node: 1 },
    { layer: 4, node: 0 },
  ];

  return (
    <div className="relative w-full max-w-[500px] select-none">
      {/* Outer editor frame */}
      <div className="rounded-2xl border border-white/10 bg-navy-800/80 p-5 sm:p-6 backdrop-blur-md shadow-2xl transition-colors">
        {/* IDE Header bar */}
        <div className="text-xs font-mono mb-4 flex items-center justify-between pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-1.5 text-slate-muted font-medium">resunet_model.py</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-accent/10 border border-accent/25 text-accent font-semibold text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              forward pass
            </span>
          </div>
        </div>

        {/* Neural Network SVG Diagram */}
        <svg
          viewBox="0 0 490 250"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full overflow-visible"
          aria-label="Interactive neural network architecture diagram"
          role="img"
        >
          {/* Base connection lines */}
          <g className="stroke-slate-muted/20" strokeWidth="0.8">
            {connections.map((c, i) => (
              <line key={i} x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2} />
            ))}
          </g>

          {/* Active forward-pass signal connections */}
          {activePath.slice(0, -1).map((step, idx) => {
            const next = activePath[idx + 1];
            const a = nodePositions[step.layer][step.node];
            const b = nodePositions[next.layer][next.node];
            return (
              <line
                key={`active-${idx}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                className="stroke-accent"
                strokeWidth="1.8"
                strokeOpacity="0.85"
              />
            );
          })}

          {/* Nodes */}
          {nodePositions.map((layer, li) =>
            layer.map((node, ni) => {
              const isActive = activePath.some((p) => p.layer === li && p.node === ni);

              return (
                <g key={`${li}-${ni}`}>
                  {/* Outer glow ring for active nodes */}
                  {isActive && (
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={nodeRadius + 4}
                      className="fill-accent/20 animate-pulse"
                    />
                  )}

                  {/* Core node */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={nodeRadius}
                    className={
                      isActive
                        ? 'fill-accent stroke-accent'
                        : 'fill-navy-900 stroke-accent/40'
                    }
                    strokeWidth={isActive ? '1.5' : '1.2'}
                  />
                </g>
              );
            })
          )}

          {/* Layer labels at bottom */}
          {layers.map((layer, i) => (
            <text
              key={layer.label + i}
              x={layer.x}
              y={svgHeight - 4}
              textAnchor="middle"
              className="fill-slate-muted font-mono text-[10px] font-medium"
            >
              {layer.label}
            </text>
          ))}
        </svg>

        {/* Code Snippet Box */}
        <div className="mt-4 p-3 rounded-xl bg-navy-950/70 border border-white/5 text-xs font-mono space-y-1">
          <div className="flex items-center justify-between text-[11px]">
            <p>
              <span className="text-accent font-semibold">y_pred</span>{' '}
              <span className="text-slate-muted">=</span>{' '}
              <span className="text-slate-text">model(x_batch)</span>
            </p>
            <span className="text-[10px] text-accent font-mono font-semibold">IoU: 90.27%</span>
          </div>
          <p className="text-[11px]">
            <span className="text-accent font-semibold">loss</span>{' '}
            <span className="text-slate-muted">=</span>{' '}
            <span className="text-slate-muted">criterion(y_pred, y_true)</span>
          </p>
          <p className="text-[11px] text-slate-muted/70">
            optimizer.step()
          </p>
        </div>
      </div>

      {/* Floating top badge */}
      <div className="absolute -top-3 -right-3 text-xs font-mono px-2.5 py-1 bg-accent/15 text-accent border border-accent/30 rounded-lg font-semibold shadow-lg backdrop-blur-sm">
        PyTorch · ResUNet++
      </div>
    </div>
  );
}
