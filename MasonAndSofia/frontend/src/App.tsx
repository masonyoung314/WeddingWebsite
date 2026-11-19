import './styles/App.css';
import { Routes, Route } from "react-router-dom";
// import NavBar from './components/NavBar';
import Home from './pages/Home';
import Game from './pages/Game';
import Registry from './pages/Registry';
import Information from './pages/Information';
import Attendance from './pages/Attendance';
import TravelTips from './pages/TravelTips';

function App() {

  return (
    <>
      {/* <NavBar /> */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/info" element={<Information />} />
          <Route path ="/attendance" element={<Attendance />} />
          <Route path="/travel" element={<TravelTips />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
