import './Home.css';
import { Link } from 'react-router-dom';
import DecisionTreeImage from '../assets/images/decisiontree.png';

const topics = [
  { title: 'Decision Trees', path: '/decision-trees', status: 'ready', image: DecisionTreeImage},
  { title: 'K-Nearest Neighbours', path: '/knn', status: 'soon' },
  { title: 'Support Vector Machine', path: '/svm', status: 'soon' },
  { title: 'Regression', path: '/regression', status: 'soon' },
  { title: 'Naive Bayes', path: '/bayes', status: 'soon' },
  { title: 'Ensemble Methods', path: '/ensemble', status: 'soon' },
  { title: 'DBSCAN Clustering', path: '/clustering', status: 'soon' },
  { title: 'Neural Networks', path: '/neural-network', status: 'soon' },
];

export default function Home() {
  return (
    <main className="home-container">
      <div className="home-breadcrumb">Home</div>
      <h1 className="home-title">Machine Learning in a Nutshell</h1>
      <p className="home-description">
        Many core ideas in machine learning are intuitive once you strip away the complicated and abstract mathematical aspects.
        This site helps you build intuition through simple explanations and interactive visuals.
      </p>

      <div className="topics-grid">
        {topics.map((topic) => (
          topic.status === 'ready' ? ( //if ready: 
            <Link to="/decision-trees/1" className="topic-card" key={topic.title}> {/* Most likely React will need key for proper rendering, make it a good habit */}
              <div className="card-box" style={{ backgroundImage: `url(${topic.image})` }} /> {/* React: {{...}} as outside = JS mode, inside = JS object literal for style */}
              <div className="card-label">{topic.title}</div>
            </Link>
          ) : ( //if not ready:
            <div className="topic-card disabled" key={topic.title}>
              <div className="card-box" />
              <div className="card-label">{topic.title}</div>
              <div className="card-status">Coming Soon</div>
            </div>
          )
        ))}
      </div>
    </main>
  );
}
