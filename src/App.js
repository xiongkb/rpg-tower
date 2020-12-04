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
    let mPartySize = Math.floor(Math.random() * 6);
    let arr = [];

    for (let i=0; i < mPartySize; i++) {
      let ranMonsterIndex = Math.floor(Math.random() * 8);
      arr.push(monsterArr[ranMonsterIndex])
      console.log("monsterIndex: " + ranMonsterIndex);
    }
    setCurrentEnemies(arr);
    console.log("array of chosen mobs: " + arr);
    console.log("enemy size: " + mPartySize);
    
  }, [])

  

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
