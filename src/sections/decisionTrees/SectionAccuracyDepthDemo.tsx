import { useState } from 'react';
import './SectionAccuracyDepthDemo.css';

export default function SectionAccuracyDepthDemo() {
  const [depth, setDepth] = useState(1);

  // Accuracy logic
  const trainingAcc = 0.5 + 0.3 * Math.log(depth + 1);
  const testAcc = depth < 4 ? 0.1 + 0.2 * Math.sqrt(depth) : Math.max(0.3, 1 - 0.2 * (depth - 4));

  return (
    <div className="section-wrapper">
      <div className="section-block">
        <h2>Interactive Demo: Model Complexity and Accuracy</h2>
        <p>
          Use the slider to increase the tree depth. Notice how the training accuracy always increases.
          But the test accuracy, how well it does on <strong>new</strong> data peaks, then drops.
        </p>
        <p>
          This is the danger of <strong>overfitting</strong>: the model becomes too specific to the training set,
          and fails to generalize.
        </p>
      </div>

      <div className="section-block centered">
        <div className="accuracy-graph">
          <svg width={300} height={200}>
            <text
                x="150"
                y="20"
                textAnchor="middle"

            >
                Accuracy
            </text>
            <line x1={30} y1={20} x2={30} y2={160} stroke="#ccc" strokeWidth={2} />
            <line x1={30} y1={160} x2={270} y2={160} stroke="#ccc" strokeWidth={2} />

            {/* Training Accuracy */}
            <line
              x1={100}
              x2={100}
              y1={160}
              y2={160 - trainingAcc * 90}
              stroke="#4d79ff"
              strokeWidth={11}
              strokeLinecap="butt"
            />
            <circle
              cx={100}
              cy={160 - trainingAcc * 90}
              r={11/2}
              fill="#4d79ff"
            />
            <text x={100} y={180} textAnchor="middle">Training</text>

            {/* Test Accuracy */}
            <line
              x1={190}
              x2={190}
              y1={160}
              y2={160 - testAcc * 120}
              stroke="#ff4d5a"
              strokeWidth={11}
              strokeLinecap="butt"
            />
            <circle
              cx={190}
              cy={160 - testAcc * 120}
              r={11/2}
              fill="#ff4d5a"
            />
            <text x={190} y={180} textAnchor="middle">Test</text>
          </svg>
        </div>

        <div className="slider-row">
          <label htmlFor="depth">Tree Depth: {depth}</label>
          <input
            id="depth"
            type="range"
            min={1}
            max={8}
            value={depth}
            onChange={(e) => setDepth(parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="section-note">
        <strong>Training accuracy</strong> is how well the model fits the known data. <strong>Test accuracy</strong> shows how well it performs on unseen data.
        A good model has high test accuracy, even if training accuracy isn't perfect.
      </div>
    </div>
  );
}
