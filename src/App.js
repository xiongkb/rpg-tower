import React, {useState, useEffect} from "react"
import './App.css';
// components
import HeroCard from "./Components/Heroes/heroCard"
import heroData from "./Components/Heroes/heroesData";
import MonsterCard from "./Components/Enemies/monsterCard";
import monsterData from "./Components/Enemies/mobData";
import Intro from "./Components/Intro/intro"
import Menu from "./Components/Menu/menu"


function App() {
  // introduction to game
  const [displayIntro, setDisplayIntro] = useState(true);
  // playable characters
  const [currentParty, setCurrentParty] = useState(["warrior"]);
  // monster enemies
  const [currentEnemies, setCurrentEnemies] = useState([]);
  // current floor
  const [currentFloor, setCurrentFloor] = useState();

  // map objects
  let monsterArr = Object.keys(monsterData);
  let heroArr = Object.keys(heroData);

  // hero party generator variables
  let chosenHeroArr = [];
  let heroIndex = []
  let hPartySize = 0;

  // setting up floor level
  
  // determining monster party size upon reaching to a floor
  useEffect(() => {
    let mPartySize = Math.floor(Math.random() * 6);
    let chosenMonArr = [];
    // selecting monsters party
    for (let i=0; i < mPartySize; i++) {
      let ranMonsterIndex = Math.floor(Math.random() * 8);
      chosenMonArr.push(monsterArr[ranMonsterIndex])
      // console.log("monsterIndex: " + ranMonsterIndex);
    }
    setCurrentEnemies(chosenMonArr);

    // a hero can join is monster party is 0
    if (mPartySize === 0) { //  && hPartySize < 3
      console.log("A hero either joins the party or you recieve a blessing")
      // let ranHeroIndex = Math.floor(Math.random() * 3);
      // console.log("hero index: " + heroIndex);

      // if (!heroIndex.includes(ranHeroIndex)) {
      //   chosenHeroArr.push(heroArr[ranHeroIndex]);
      //   console.log("hero index: " + ranHeroIndex);
        
      // };
      // setCurrentParty(chosenHeroArr);
    };
    
    console.log("chosen hero: " + chosenHeroArr);

    // console.log("array of chosen mobs: " + chosenMonArr);
    console.log("enemy size: " + mPartySize);
    
  }, [])

  

  return (
    <div className="App">
      <h1 className="title">RPG Tower</h1>
      {displayIntro ? <Intro onClick={() => setDisplayIntro(false)}/> : 
        <div>
          <div>Current Floor: {currentFloor}</div>
          <div className="display-monsters">
            {currentEnemies.map( monster => <MonsterCard monster={monsterData[monster]}/>)}
          </div>
          <div className="display-heroes">
            {currentParty.map( hero => <HeroCard hero={heroData[hero]}/>)}
          </div>
          <Menu/>
        </div>
      }
    </div>
  );
}

export default App;