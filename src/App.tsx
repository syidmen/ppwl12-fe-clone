import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Open from './pages/Open';
import AlbumPage from './pages/Album';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Open />} />
        <Route path="/album" element={<AlbumPage />} />
      </Routes>
    </Router>
  );
}

export default App;
