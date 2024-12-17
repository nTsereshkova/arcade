import "./GamePage.css"
import { Score } from "../../components/Score";
import { Level1 } from "../../components/Level1";

const GamePage = () => {
  return <div className="gamePage"> 
  <Score/> 
  <Level1/>
  </div>
};

export default GamePage
