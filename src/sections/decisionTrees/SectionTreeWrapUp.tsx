import './SectionIntroTree.css';

export default function SectionTreeWrapUp() {
  return (
    <div className="section-wrapper">
      <div className="section-block">
        <h2>Summary: When Should You Use a Decision Tree?</h2>
        <p>
          Decision trees are simple, powerful models that work well when you want your predictions to be easy to understand. They’re great for breaking down decisions into clear steps, like asking “yes or no” questions, and don’t need much data preparation.
        </p>
      </div>

      <div className="section-block">
        <h3>Real-world Uses</h3>
        <ul>
          <li><strong>Deciding if a customer will buy something</strong>: based on age, location, or past behavior</li>
          <li><strong>Helping doctors make decisions</strong>: like checking symptoms to choose a treatment</li>
          <li><strong>Approving or rejecting a loan</strong>: based on income, debt, and credit history</li>
          <li><strong>Predicting if a student will pass or fail</strong>: using attendance and test scores</li>
        </ul>
      </div>

      <div className="section-block">
        <h3>Pros</h3>
        <ul>
          <li>Easy to understand and explain</li>
          <li>Works with numbers and categories</li>
          <li>No need for scaling or normalization</li>
          <li>Can find patterns that aren’t straight lines</li>
        </ul>
      </div>

      <div className="section-block">
        <h3>Cons</h3>
        <ul>
          <li>Can overfit if the tree is too deep</li>
          <li>Small changes in data can change the tree</li>
          <li>Doesn't always give the best accuracy</li>
        </ul>
      </div>

      <div className="section-note">
        Decision trees are a great place to start. And once you understand them, you're ready to explore more powerful models.
      </div>
    </div>
  );
}
