import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Header from './components/Header';
import CezarPage from './pages/CezarPage';
import VigenerePage from './pages/VigenerePage';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cezar" element={<CezarPage />} />
          <Route path="/vigenere" element={<VigenerePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
