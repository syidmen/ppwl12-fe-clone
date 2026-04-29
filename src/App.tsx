import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Open from './pages/Open';
import AlbumPage from './pages/Album';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Open />} />
        <Route path="/album" element={<AlbumPage />} />
      </Routes>
    </Router>
  );
}

export default App;
