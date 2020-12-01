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
  const [currentEnemies, setCurrentEnemies] = useState(["bat", "carrotKing"]);


  return (
    <div className="App">
      <h1 className="title">RPG Tower</h1>
      <div>
        {currentEnemies.map( monster => <MonsterCard monster={monsterData[monster]}/>)}
      </div>
      <div className="display-heroes">
        {currentParty.map( hero => <HeroCard hero={heroData[hero]}/>)}
      </div>
    </div>
  );
}

export default App;
