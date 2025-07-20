import './SectionIntroTree.css';
import entropyImage from '../../assets/images/SectionIntroEntropy1.png';

export default function SectionIntroEntropy() {
  return (
    <div className="section-wrapper">
      <div className="section-block">
        <h2>How Does a Decision Tree Decide What to Ask?</h2>
        <p>
          So far, we’ve seen that a decision tree works by asking smart questions to narrow down possibilities.
          But how does it know what question to ask first? Or second?
        </p>

        <p>
          It turns out, the tree doesn’t guess, it uses math to choose the question that splits the data in the most useful way.
        </p>
      </div>

      <div className="section-block">
        <p>
          To do that, the tree needs a way to measure how "mixed" or "pure" a group of data is.
          That’s where a concept called <strong>entropy</strong> comes in.
        </p>

        <p>
          Entropy is a number that tells us how uncertain or disordered a group is.
          The more mixed the data (like a 50/50 mix of apples and bananas), the higher the entropy.
          The more pure it is (like 100% apples), the lower the entropy.
        </p>
      </div>

      <div className="section-block">
        <p>
          The entropy of a group is calculated using the formula:
        </p>
        <pre className="equation-block" style={{ fontFamily: 'monospace', fontSize: '0.95rem', backgroundColor: 'var(--bg-subtle)', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid var(--border-subtle)' }}>
          H(S) = -p₁ log₂(p₁) - p₂ log₂(p₂) - ...
        </pre>

        <p>
          Don’t worry too much about the math, you don’t need to calculate it by hand.
          Just know that this formula helps the tree figure out how mixed a group is.
        </p>
        <img src={entropyImage} alt="Entropy Example" className="full-img" />
      </div>

      <div className="section-note">
        A tree uses entropy to find the most useful question: the one that makes the cleanest split.
      </div>
    </div>
  );
}
