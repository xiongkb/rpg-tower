import React, {useState, useEffect} from "react"
import './App.css';
import HeroCard from "./Components/Heroes/heroCard"
import heroData from "./Components/Heroes/heroesData";
import MonsterCard from "./Components/Enemies/monsterCard";
import monsterData from "./Components/Enemies/mobData";

function App() {

  // playable characters
  const [currentParty, setCurrentParty] = useState(["warrior"]);


  // monster enemies
  const [currentEnemies, setCurrentEnemies] = useState([]);
  let monsterArr = Object.keys(monsterData);
  

  useEffect(() => {
    let ranNum = Math.floor(Math.random() * 2);
    let arr = [];
    if (ranNum === 0 && arr.length === 0) {
      ranNum = Math.floor(Math.random() * 1);
    } else if ( ranNum === 1) {
      arr.push("bat")
    }
    setCurrentEnemies(arr);
    console.log(monsterArr[ranNum]);
    console.log(ranNum);
  }, [])

  console.log(monsterArr);
  

  return (
    <div className="App">
      <h1 className="title">RPG Tower</h1>
      <div className="display-monsters">
        {currentEnemies.map( monster => <MonsterCard monster={monsterData[monster]}/>)}
      </div>
      <div className="display-heroes">
        {currentParty.map( hero => <HeroCard hero={heroData[hero]}/>)}
      </div>
    </div>
  );
}

export default App;
