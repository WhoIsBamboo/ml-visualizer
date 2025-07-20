import { useState } from 'react';
import './SectionHowWork.css';

import step1Graph from '../../assets/images/treegrowdiagram1.png';
import step2Graph from '../../assets/images/treegrowdiagram2.png';
import step3Graph from '../../assets/images/treegrowdiagram3.png';
import step4Graph from '../../assets/images/treegrowdiagram4.png';

import step0Tree from '../../assets/images/tree0.png';
import step1Tree from '../../assets/images/tree1.png';
import step2Tree from '../../assets/images/tree2.png';
import step3Tree from '../../assets/images/tree3.png';

const steps = [
  {
    graph: step1Graph,
    tree: step0Tree,
    description: (
      <>
        Suppose you're running a shop and want to predict whether a customer will make a purchase.  
        You’ve collected data about your customers, specifically their <strong>age</strong> and <strong>income</strong>.  
        Let’s grow a decision tree from this data.
      </>
    )
  },
  {
    graph: step2Graph,
    tree: step1Tree,
    description: (
      <>
        The first split asks: <strong>Is age greater than 36? </strong>  
        This separates the data into two clearer groups, customers older than 36 are more likely to purchase.
      </>
    )
  },
  {
    graph: step3Graph,
    tree: step2Tree,
    description: (
      <>
        Our first split is not bad for predictions, but we can do better. Each group is then split again. The tree is growing by finding the best question for each subgroup separately.
      </>
    )
  },
  {
    graph: step4Graph,
    tree: step3Tree,
    description: (
      <>
        We can even go further and make one more split. Now, our decision tree has completely separated the data using questions about income and age.
      </>
    )
  }
];

export default function SectionTreeGrow() {
  const [index, setIndex] = useState(0);
  const step = steps[index];

  return (
    <div className="section-wrapper">
      <div className="section-block">
        <h2>How Does the Tree Grow?</h2>
        <p>{step.description}</p>
      </div>

      <div className="section-block centered">
        <div className="button-row">
          {index < steps.length - 1 ? (
            <button onClick={() => setIndex((i) => i + 1)}>Grow Next Split →</button>
          ) : (
            <button onClick={() => setIndex(0)}>Reset Tree</button>
          )}
        </div>

        <div className="row-layout">
          <img src={step.graph} style={{ width: '400px' }} className="grow-graph" alt="Graph view" />
          {step.tree && <img src={step.tree} style={{ width: '440px' }} className="grow-tree" alt="Tree view" />}
        </div>
      </div>

      <div className="section-note">
        A decision tree grows by finding the best question for each group until the data is simple enough to make a prediction.
      </div>
    </div>
  );
}
