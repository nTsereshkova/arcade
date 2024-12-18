import "./App.css";
import { WelcomePage } from "./pages/WelcomePage";
import { GamePage } from "./pages/GamePage";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

function App() {
  //const wantToPlay = true;
  return (
    <div className="app">
     <Suspense fallback={<h1> ...</h1>}>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;

// <Routes>
//         wantToPlay ? (
//         <Route path="/" element={<WelcomePage />} />
//         ) : (<Route path="/game" element={GamePageLevel1} /> )
//       </Routes>
