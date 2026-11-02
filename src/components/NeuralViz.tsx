export default function NeuralViz() {
  const layers = [
    { x: 60, nodes: 3 },
    { x: 160, nodes: 5 },
    { x: 260, nodes: 5 },
    { x: 360, nodes: 4 },
    { x: 440, nodes: 2 },
  ];

  const nodeRadius = 7;
  const svgHeight = 280;
  const accentColor = '#38BDF8';
  const dimColor = 'rgba(56,189,248,0.18)';
  const lineColor = 'rgba(56,189,248,0.10)';

  // Compute node positions
  const nodePositions = layers.map((layer) => {
    const positions = [];
    const spread = (layer.nodes - 1) * 40;
    const startY = (svgHeight - spread) / 2;
    for (let i = 0; i < layer.nodes; i++) {
      positions.push({ x: layer.x, y: startY + i * 40 });
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

  // Highlight a few connections
  const highlightedLayerPairs = [[1, 1], [2, 2], [3, 1]];

  return (
    <div className="relative w-full max-w-[500px] select-none">
      {/* Outer frame */}
      <div className="rounded-2xl border border-white/5 bg-navy-800/50 p-6 backdrop-blur-sm">
        <div className="text-xs font-mono text-slate-muted/50 mb-4 flex justify-between">
          <span>neural_network.py</span>
          <span className="text-accent/50">▶ training</span>
        </div>
        <svg
          viewBox="0 0 500 280"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          aria-label="Abstract neural network diagram"
          role="img"
        >
          {/* Background lines */}
          {connections.map((c, i) => (
            <line
              key={i}
              x1={c.x1}
              y1={c.y1}
              x2={c.x2}
              y2={c.y2}
              stroke={lineColor}
              strokeWidth="0.8"
            />
          ))}
          {/* Highlighted connections */}
          {highlightedLayerPairs.map(([li, ni], idx) => {
            if (!nodePositions[li] || !nodePositions[li][ni] || !nodePositions[li + 1] || !nodePositions[li + 1][ni]) return null;
            const a = nodePositions[li][ni];
            const b = nodePositions[li + 1][ni];
            return (
              <line
                key={`h${idx}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={accentColor}
                strokeWidth="1.2"
                opacity="0.4"
              />
            );
          })}
          {/* Nodes */}
          {nodePositions.map((layer, li) =>
            layer.map((node, ni) => {
              const isAccent = li === 2 && ni === 2;
              return (
                <g key={`${li}-${ni}`}>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={nodeRadius + 3}
                    fill={isAccent ? 'rgba(56,189,248,0.12)' : 'transparent'}
                  />
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={nodeRadius}
                    fill={isAccent ? accentColor : dimColor}
                    stroke={isAccent ? accentColor : 'rgba(56,189,248,0.3)'}
                    strokeWidth="1"
                  />
                </g>
              );
            })
          )}
          {/* Layer labels */}
          {['Input', 'Hidden', 'Hidden', 'Hidden', 'Output'].map((label, i) => (
            <text
              key={label + i}
              x={layers[i].x}
              y={svgHeight - 8}
              textAnchor="middle"
              fontSize="9"
              fill="rgba(160,174,192,0.4)"
              fontFamily="JetBrains Mono, monospace"
            >
              {label}
            </text>
          ))}
        </svg>

        {/* Inline code snippet */}
        <div className="mt-4 text-xs font-mono space-y-1">
          <p>
            <span className="text-accent/60">loss</span>{' '}
            <span className="text-white/30">=</span>{' '}
            <span className="text-slate-muted/60">criterion(output, target)</span>
          </p>
          <p>
            <span className="text-accent/60">loss</span>
            <span className="text-white/30">.backward()</span>
          </p>
          <p>
            <span className="text-slate-muted/40">optimizer.step()</span>
          </p>
        </div>
      </div>
      {/* Floating label */}
      <div className="absolute -top-3 -right-3 text-xs font-mono px-2 py-1 bg-accent/10 text-accent border border-accent/20 rounded-md">
        PyTorch · CNN
      </div>
    </div>
  );
}
