import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import { GamePageLevel1 } from "./pages/GamePages/GamePageLevel1";
import { Routes, Route } from "react-router-dom";

function App() {
  //const wantToPlay = true;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/game" element={<GamePageLevel1 />} />
      </Routes>
      <p> тут будет стрелялка</p>
    </div>
  );
}

export default App;

// <Routes>
//         wantToPlay ? (
//         <Route path="/" element={<WelcomePage />} />
//         ) : (<Route path="/game" element={GamePageLevel1} /> )
//       </Routes>
