import './SectionSplitLine.css';
import ageIncomeImg from '../../assets/images/SectionSplitLine.png';

export default function SectionSplitMeaning() {
  return (
    <div className="section-wrapper">
      <div className="section-block">
        <h2>What Does the Split Line Represent?</h2>
        <p>
          In the interactive demo, you dragged a vertical line to split dots. That line represents a threshold in a <strong>numerical feature</strong>, like <em>age</em> or <em>price</em>.
        </p>
        <p>
          For example, in the chart below, the x-axis shows a customer’s <strong>age</strong>, and the y-axis shows their <strong>annual income</strong> (in $1000s).
          Each point represents a customer:
        </p>
        <ul>
          <li><span style={{ color: '#ff4d5a', fontWeight: 'bold' }}>Red</span>: did <strong>not</strong> purchase</li>
          <li><span style={{ color: '#4d79ff', fontWeight: 'bold' }}>Blue</span>: <strong>did</strong> purchase</li>
        </ul>
      </div>

      <div className="section-block">
        <img
          src={ageIncomeImg}
          alt="Scatterplot of age vs income with a decision tree split"
          className="split-figure"
        />

        <p>
          The best question to ask here is <strong>“Is age greater than 36?”</strong> to split the data.
          This split makes the data easier to work with, we can now predict that people aged 36 or younger 
          are less likely to buy the product, while those older than 36 are more likely to make a purchase.
        </p>
      </div>
        <div className="section-block">
        <h2>Not all splits are numerical!</h2>
        <p>
            While some features like age or price are numerical and can be split with a threshold, not all data works that way.
            If a feature is <strong>categorical</strong> — like <em>fruit type</em>, <em>color</em>, or <em>day of the week</em> — 
            the decision tree can split based on category values instead.
        </p>
        <p>
            For example, a tree might ask <strong>"Is the color red?"</strong> or <strong>"Is the product type a phone?"</strong>.
            These questions still help divide the data into more consistent groups, just like numerical splits do.
        </p>
        </div>

      <div className="section-note">
         Remember: the goal of a Decision Tree is to create a clear set of rules that help it make accurate predictions.
      </div>
    </div>
  );
}
