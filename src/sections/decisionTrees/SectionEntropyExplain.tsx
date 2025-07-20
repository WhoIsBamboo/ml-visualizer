import './SectionIntroTree.css';

export default function SectionEntropyExplain() {
  return (
    <div className="section-wrapper">
      <div className="section-block">
        <h2>Why Does the Tree Care About Entropy?</h2>
        <p>
          Imagine playing the 20 Questions game. The key to winning is asking smart, focused questions that quickly narrow down the possibilities. Random questions don’t help, specific ones do.
        </p>

        <p>
          A decision tree faces the same challenge. It wants to ask the question that makes the biggest difference, the one that best splits the data into clear, simple groups.
        </p>

        <p>
          That’s where entropy comes in. After trying a question, the tree uses entropy to measure how mixed each resulting group is. If the groups are clean and mostly one type, that’s a win. If they’re still messy, the question wasn’t very helpful.
        </p>
      </div>

      <div className="section-block">
        <p>
          So the tree tests different questions and checks how much each one reduces entropy. The question that lowers it the most, the one that makes the biggest improvement is chosen.
        </p>

        <p>
          That improvement has a name: <strong>Information Gain</strong>. It tells the tree how useful a question is. We’ll explore that next.
        </p>
      </div>

      <div className="section-note">
        Lower entropy means clearer groups. Clearer groups make smarter trees.
      </div>
    </div>
  );
}