import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrewQuestPage from './pages/BrewQuestPage';
import AnimindPage from './pages/AnimindPage';
import VerityPage from './pages/VerityPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/brewquest" element={<BrewQuestPage />} />
        <Route path="/work/animind" element={<AnimindPage />} />
        <Route path="/work/verity" element={<VerityPage />} />
      </Routes>
    </Router>
  );
}

export default App;