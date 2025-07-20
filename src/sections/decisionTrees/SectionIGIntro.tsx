import './SectionIntroTree.css';

export default function SectionIGIntro() {
  return (
    <div className="section-wrapper">
      <div className="section-block">
        <h2>What Is Information Gain?</h2>
        <p>
          Let’s say the tree is choosing between two possible questions. Both of them split the data in different ways.
          But one split creates clearer, more consistent groups, while the other still leaves things mixed.
        </p>

        <p>
          <strong>Information Gain</strong> is how the tree measures which question is more useful. It compares how "uncertain"
          the data was before the split versus how clean the groups are after. The bigger the drop in uncertainty,
          the more the tree has learned, and the better the question.
        </p>
      </div>

      <div className="section-block">
        <p>
          Mathematically, this is what the tree does:
        </p>
        <p style={{ fontFamily: 'monospace', fontSize: '0.95rem', backgroundColor: 'var(--bg-subtle)', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
          Information Gain = Entropy(before split) − Weighted Average Entropy(after split)
        </p>

        <p>
          You don’t need to worry about the exact formula, just know that it rewards questions that split the data
          into more certain, more predictable groups.
        </p>
      </div>

      <div className="section-note">
        The tree picks the question with the highest information gain, it’s the one that creates the cleanest split.
      </div>
    </div>
  );
}
