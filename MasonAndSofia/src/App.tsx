import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/navbar';
import Home from './pages/Home';
import Game from './pages/Game';

function App() {

  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
