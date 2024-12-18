
import {Platform} from "./Platform"
import {Ball} from "./Ball"
import {Bricks} from "./Bricks"
import "./Level1.css"

const Level1 = () => {
return <div className="level1">
<Bricks/>
<Ball/>
<Platform/>
</div>

}

export default Level1