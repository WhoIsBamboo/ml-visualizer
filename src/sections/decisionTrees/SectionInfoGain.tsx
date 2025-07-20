import { useState } from 'react';
import './SectionInfoGain.css';

type Point = {
  x: number;
  y: number;
  label: 'red' | 'blue';
};

function generatePoints(): Point[] {
  const points: Point[] = [];
  for (let i = 0; i < 10; i++) {
    const bias = Math.random();
    const isRed = bias < 0.5;
    const x = isRed
      ? 40 + Math.random() * 260 // red biased toward left
      : 140 + Math.random() * 300; // blue biased toward right
    const y = 40 + Math.random() * 200;
    points.push({ x, y, label: isRed ? 'red' : 'blue' });
  }
  return points;
}

export default function SectionInfoGain() {
  const [splitX, setSplitX] = useState(240);
  const [points, setPoints] = useState<Point[]>(generatePoints());

  function regenerate() {
    setPoints(generatePoints());
  }

  function entropy(group: Point[]): number {
    const counts = group.reduce(
      (acc, pt) => {
        acc[pt.label]++;
        return acc;
      },
      { red: 0, blue: 0 }
    );

    const total = counts.red + counts.blue;
    const pRed = counts.red / total || 0;
    const pBlue = counts.blue / total || 0;
    const e = (p: number) => (p === 0 ? 0 : -p * Math.log2(p));
    return e(pRed) + e(pBlue);
  }

  const leftGroup = points.filter((pt) => pt.x < splitX);
  const rightGroup = points.filter((pt) => pt.x >= splitX);

  const originalEntropy = entropy(points);
  const leftEntropy = entropy(leftGroup);
  const rightEntropy = entropy(rightGroup);
  const leftWeight = leftGroup.length / points.length;
  const rightWeight = rightGroup.length / points.length;
  const weightedEntropy = leftWeight * leftEntropy + rightWeight * rightEntropy;
  const infoGain = originalEntropy - weightedEntropy;

  return (
    <div className="section-wrapper">
      <div className="section-block">
        <h2>Interactive Demo: Information Gain</h2>
        <p>
          Try dragging the vertical line to split the dots. The more similar dots you group together,
          the lower the weighted entropy, and the higher the information gain.
        </p>
      </div>

      <div className="section-block centered">
        <div className="canvas-wrapper">
          <svg width={500} height={300} className="dtree-canvas">
            {/* Points */}
            {points.map((pt, i) => (
              <circle
                key={i}
                cx={pt.x}
                cy={pt.y}
                r={10}
                fill={pt.label === 'red' ? '#ff4d5a' : '#4d79ff'}
              />
            ))}

            <g>
              {/* Invisible */}
              <line
                x1={splitX}
                y1={0}
                x2={splitX}
                y2={300}
                stroke="transparent"
                strokeWidth={20}
                style={{ cursor: 'ew-resize' }}
                onMouseDown={() => {
                  const move = (ev: MouseEvent) => {
                    setSplitX(Math.max(40, Math.min(460, ev.offsetX)));
                  };
                  const up = () => {
                    window.removeEventListener('mousemove', move);
                    window.removeEventListener('mouseup', up);
                  };
                  window.addEventListener('mousemove', move);
                  window.addEventListener('mouseup', up);
                }}
              />

              {/* Visible */}
              <line
                x1={splitX}
                y1={0}
                x2={splitX}
                y2={300}
                stroke="#444"
                strokeWidth={4}
                strokeDasharray="6 4"
                style={{ pointerEvents: 'none' }} 
              />
            </g>


            {/* Entropy */}
            <text x={splitX - 12} y={20} fontSize="0.85rem" fill="#111" textAnchor="end">
              Left entropy: {leftEntropy.toFixed(2)}
            </text>
            <text x={splitX + 12} y={20} fontSize="0.85rem" fill="#111" textAnchor="start">
              Right entropy: {rightEntropy.toFixed(2)}
            </text>
          </svg>
        </div>

        <div className="button-row">
          <button onClick={regenerate}>Regenerate Points</button>
        </div>

        <div className="entropy-stats">
          <p>Original Entropy: {originalEntropy.toFixed(2)}</p>
          <p>
            Weighted Entropy: {leftWeight.toFixed(2)} × {leftEntropy.toFixed(2)} +{' '}
            {rightWeight.toFixed(2)} × {rightEntropy.toFixed(2)} = {weightedEntropy.toFixed(2)}
          </p>
          <p>
            Information Gain: <strong>{infoGain.toFixed(2)}</strong>
          </p>
        </div>
      </div>

      <div className="section-note">
        Sometimes a perfect split is not possible, so we only look for the highest information gain rather than a perfect one.
      </div>
    </div>
  );
}
