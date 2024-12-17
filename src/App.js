import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import { GamePage } from "./pages/GamePage";
import { Routes, Route } from "react-router-dom";

function App() {
  //const wantToPlay = true;
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;

// <Routes>
//         wantToPlay ? (
//         <Route path="/" element={<WelcomePage />} />
//         ) : (<Route path="/game" element={GamePageLevel1} /> )
//       </Routes>
