import {Brick} from "./Brick"
import "./Bricks.css"



const Bricks = () => {

const bricks = []

for(let i=0;i<48;i++) {
    bricks.push(i)
}
console.log(bricks)
return (<div className="bricks"> 
{
    
    bricks.map((item) =>  {
        console.log('from map',item)
        bricks.push(item)
       
        console.log(bricks)
       return  <Brick  key={item}
       /> })
     
} 

</div>)
}

export default Bricks