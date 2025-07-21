import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const isDecisionTreePage = location.pathname.startsWith('/decision-trees');

  const decisionTreeSections = [
  { title: 'What is a Decision Tree?', path: '/decision-trees/1' },
  { title: 'How Does It Decide?', path: '/decision-trees/2' },
  { title: 'Entropy Demo', path: '/decision-trees/3' },
  { title: 'Why Entropy Matters', path: '/decision-trees/4' },
  { title: 'What Is Info Gain?', path: '/decision-trees/5' },
  { title: 'Info Gain Demo', path: '/decision-trees/6' },
  { title: 'What’s the Split Line?', path: '/decision-trees/7' },
  { title: 'How the Tree Grows', path: '/decision-trees/8' },
  { title: 'Overfitting Explained', path: '/decision-trees/9' },
  { title: 'Depth vs Accuracy Demo', path: '/decision-trees/10' },
  { title: 'Summary', path: '/decision-trees/11' },
];


  return (
    <div className="layout-container">
      <header className="layout-header">
        <div className="layout-title">Machine Learning Visualizer</div>
        <nav className="layout-nav">
          <Link to="/">Home</Link>
          <div className="dropdown">
            <span className="dropdown-trigger">Topics ▾</span>
            <div className="dropdown-menu">
              <Link to="/decision-trees/1">Decision Trees</Link>
              {/* More topics here */}
            </div>
          </div>
        </nav>
      </header>

      <div className="layout-body">
        {isDecisionTreePage && (
          <aside className="layout-sidebar">
            <ul>
              {decisionTreeSections.map((section) => (
                <li key={section.path}>
                  <Link to={section.path}>{section.title}</Link>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <main className="layout-main">{children}</main>
      </div>
    </div>
  );
}
