import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DecisionTrees from './pages/DecisionTrees';
import Layout from './components/Layout';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ml-visualizer" element={<Home />} />
        <Route path="/decision-trees/*" element={<DecisionTrees />} />
        {/* More topics HERE!!!! */}
      </Routes>
    </Layout>
  );
}
