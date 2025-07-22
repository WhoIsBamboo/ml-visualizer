import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DecisionTrees from './pages/DecisionTrees';
import Layout from './components/Layout';

//Need to check to fix the nest later https://www.w3schools.com/react/react_router.asp
export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ml-visualizer" element={<Home />} />
        <Route path="/decision-trees/*" element={<DecisionTrees />} />
        {/* More topics */}
      </Routes>
    </Layout>
  );
}
