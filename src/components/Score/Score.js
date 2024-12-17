import { BsCoin } from "react-icons/bs";
import { GiHearts } from "react-icons/gi"
import "./Score.css"


const Score = () => {
return <div className="score"> 
<div className="leftLives"> 
<GiHearts className="heart"/> 
<p className="howManyLives"> осталось жизней </p>
</div>
<div className="coinDiv"> 
<BsCoin  className="coin"/> 
<p className="coinNumber"> число монет</p>
</div>

</div>
}
export default Score