import React, {useState, useEffect} from "react"
import './App.css';
import HeroCard from "./Components/Heroes/heroCard"
import heroData from "./Components/Heroes/heroesData";
import MonsterCard from "./Components/Enemies/monsterCard";
import monsterData from "./Components/Enemies/mobData";

function App() {
  // playable characters
  const [currentParty, setCurrentParty] = useState([]);
  // monster enemies
  const [currentEnemies, setCurrentEnemies] = useState([]);
  let monsterArr = Object.keys(monsterData);
  let heroArr = Object.keys(heroData);


  let chosenHeroArr = [];
  let heroIndex = []

  useEffect(() => {
    let mPartySize = Math.floor(Math.random() * 6);
    let hPartySize = 0;
    let chosenMonArr = [];
    // selecting monsters party
    for (let i=0; i < mPartySize; i++) {
      let ranMonsterIndex = Math.floor(Math.random() * 8);
      chosenMonArr.push(monsterArr[ranMonsterIndex])
      // console.log("monsterIndex: " + ranMonsterIndex);
    }
    setCurrentEnemies(chosenMonArr);

    // a hero can join is monster party is 0
    if (mPartySize === 0 && hPartySize < 3) {
      let ranHeroIndex = Math.floor(Math.random() * 3);
      console.log("hero index: " + heroIndex);

      if (!heroIndex.includes(ranHeroIndex)) {
        chosenHeroArr.push(heroArr[ranHeroIndex]);
        console.log("random hero: " + ranHeroIndex);
        
      };
      setCurrentParty(chosenHeroArr);
    };
    
    console.log("chosen hero: " + chosenHeroArr);

    // console.log("array of chosen mobs: " + chosenMonArr);
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
