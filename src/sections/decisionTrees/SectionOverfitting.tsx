import finalTree from '../../assets/images/tree3.png';

export default function SectionOverfitting() {
  return (
    <div className="section-wrapper">
      <div className="section-block">
        <h2>When More Isn’t Better: Overfitting</h2>
        <p>
          In the last section, we finished growing a decision tree. It kept splitting the data until every group was perfectly sorted.
          That sounds good, right? The tree gets everything correct!
        </p>

        <img src={finalTree} alt="Fully grown tree example" className="full-img" />

        <p>
          But here's the problem: this tree has learned to copy the training data exactly. It's not learning patterns, it's just memorizing.
        </p>

        <p>
          Why is that bad? Because in real life, we care about <strong>new</strong> data, customers we haven’t seen yet.
          A tree that memorizes old data won't know what to do when something slightly different shows up.
        </p>

        <p>
          This is called <strong>overfitting</strong>. The tree has become too specific. It creates rules that only work for the past, but not for the future. 
          The tree is making very specific rules that only work for the exact customers it saw before. But in the real world, new customers won’t follow those exact patterns. So instead of being helpful, the tree starts making wrong guesses because it’s trying to be too perfect.
        </p>

        <p>
          A better tree would stop growing earlier, once the groups are <em>mostly</em> correct so it can stay flexible and make better guesses on new data.
        </p>
      </div>

      <div className="section-note">
        A smart tree doesn’t just remember, it learns general patterns so it can make good predictions on new data.
      </div>
    </div>
  );
}
