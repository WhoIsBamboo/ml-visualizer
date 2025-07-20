import './DecisionTrees.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import SectionIntroTree from '../sections/decisionTrees/SectionIntroTree';
import SectionIntroEntropy from '../sections/decisionTrees/SectionIntroEntropy';
import SectionEntropyCup from '../sections/decisionTrees/SectionEntropyCup';
import SectionEntropyExplain from '../sections/decisionTrees/SectionEntropyExplain';
import SectionIGIntro from '../sections/decisionTrees/SectionIGIntro';
import SectionInfoGain from '../sections/decisionTrees/SectionInfoGain';
import SectionSplitMeaning from '../sections/decisionTrees/SectionSplitLine';
import SectionTreeGrow from '../sections/decisionTrees/SectionHowWork';
import SectionOverfitting from '../sections/decisionTrees/SectionOverfitting';
import SectionAccuracyDepthDemo from '../sections/decisionTrees/SectionAccuracyDepthDemo';
import SectionTreeWrapUp from '../sections/decisionTrees/SectionTreeWrapUp';

const sectionComponents = [
  { id: '1', component: <SectionIntroTree /> },
  { id: '2', component: <SectionIntroEntropy /> },
  { id: '3', component: <SectionEntropyCup /> },
  { id: '4', component: <SectionEntropyExplain /> },
  { id: '5', component: <SectionIGIntro /> },
  { id: '6', component: <SectionInfoGain /> },
  { id: '7', component: <SectionSplitMeaning /> },
  { id: '8', component: <SectionTreeGrow /> },
  { id: '9', component: <SectionOverfitting /> },
  { id: '10', component: <SectionAccuracyDepthDemo /> },
  { id: '11', component: <SectionTreeWrapUp /> },
];

export default function DecisionTrees() {
  const navigate = useNavigate();
  const location = useLocation();

  const [pendingScroll, setPendingScroll] = useState<'top' | 'bottom' | null>(null);

  const currentId = location.pathname.split('/').pop() || '1';
  const currentIndex = sectionComponents.findIndex(sec => sec.id === currentId);

  const goToSection = (index: number, scrollPosition: 'top' | 'bottom') => {
    const newId = sectionComponents[index].id;
    setPendingScroll(scrollPosition);
    navigate(`/decision-trees/${newId}`);
  };

  useEffect(() => {
    if (pendingScroll === 'top') {
      window.scrollTo({ top: 0 });
      setPendingScroll(null);
    } else if (pendingScroll === 'bottom') {
      window.scrollTo({ top: document.body.scrollHeight });
      setPendingScroll(null);
    }
  }, [pendingScroll]);

  const canGoBack = currentIndex > 0;
  const canGoNext = currentIndex < sectionComponents.length - 1;

  return (
    <main className="dtree-wrapper">
      <div className="dtree-breadcrumb">Home / Decision Trees</div>
      <h1 className="dtree-title">Decision Trees</h1>
      <p className="dtree-description">
        A decision tree learns by asking smart questions to split data step-by-step. Explore how it works below.
      </p>

      <div className="dtree-section">
        {sectionComponents[currentIndex]?.component || <p>Section not found</p>}
      </div>

      <div className="dtree-nav">
        <button
          onClick={() => goToSection(currentIndex - 1, 'bottom')}
          disabled={!canGoBack}
        >
          ← Back
        </button>
        <button
          onClick={() => goToSection(currentIndex + 1, 'top')}
          disabled={!canGoNext}
        >
          Next →
        </button>
      </div>
    </main>
  );
}
