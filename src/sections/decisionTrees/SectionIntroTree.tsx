import './SectionIntroTree.css';
import treeImage from '../../assets/images/SectionIntroTree2.png';
import blackBoxImage from '../../assets/images/SectionIntroTree1.png';

export default function SectionIntroTree() {
  return (
    <div className="section-wrapper">
      <div className="section-block">
        <h2>What is a Decision Tree?</h2>
        <p>
          Imagine you have a mystery box containing either an <strong>apple</strong>, a <strong>banana</strong>, or a <strong>strawberry</strong>. You're trying to guess which fruit is inside.
          You might ask: <em>Is it red? Is it round? Does it have a peel? </em>
          Each question helps narrow down the options.
        </p>
        <img src={blackBoxImage} alt="Black Box Analogy" className="inline-img" />
      </div>

      <div className="section-block">
        <p>
          A <strong>Decision Tree</strong> works the same way. It asks smart questions step-by-step
          to divide data into smaller, more understandable parts, until it can make a confident guess.
        </p>
      </div>

      <div className="section-block">
        <p>
          Here's a simple example of a Decision Tree in action:
        </p>
        <img src={treeImage} alt="Decision Tree Example" className="full-img" />
      </div>

      <div className="section-block">
        <p>
        In our fruit guessing game, each question you ask splits the possibilities into smaller groups.
        If you ask, "Is it red?" and the answer is yes, you can rule out bananas.
        Then you might ask "Is it round?", and just like that, you're narrowing it down to strawberries.
        </p>

        <p>
        This step-by-step process of asking the most useful question first is exactly what a decision tree does with real data.
        It builds a flowchart of decisions, where each branch splits the data based on a specific condition (like "<em>price &gt; 30</em>" or "<em>is color = red?</em>"),
        and each leaf ends with a prediction or outcome.
        </p>
      </div>

      <div className="section-note">
        Think of it like a smart flowchart that keeps choosing the best next question.
      </div>

    </div>
  );
}
