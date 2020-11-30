import React, {useState, useEffect} from "react"
import './App.css';
import HeroCard from "./Components/Heroes/heroCard"
import heroData from "./Components/Heroes/heroesData";

function App() {

  const [currentParty, setCurrentParty] = useState(["warrior", "mage", "archer"]);
  

  return (
    <div className="App">
      <h1 className="title">RPG Tower</h1>
      <div className="dungeon-zone">
        <div className="display-heroes">
          {currentParty.map( hero => <HeroCard hero={heroData[hero]}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
