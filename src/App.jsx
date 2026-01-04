import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrewQuestPage from './pages/BrewQuestPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/brewquest" element={<BrewQuestPage />} />
      </Routes>
    </Router>
  );
}

export default App;