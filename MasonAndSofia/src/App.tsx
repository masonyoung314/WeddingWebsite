import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Home from './pages/Home';
import Game from './pages/Game';
import Registry from './pages/Registry';

function App() {

  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/registry" element={<Registry />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
