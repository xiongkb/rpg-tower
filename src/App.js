import React, {useState, useEffect} from "react"
import './App.css';
import HeroCard from "./Components/Heroes/heroCard"
import heroData from "./Components/Heroes/heroesData";

function App() {

  const [currentParty, setCurrentParty] = useState(["warrior"]);
  

  return (
    <div className="App">
      <h1>RPG Tower</h1>
      <div>
        {currentParty.map( hero => <HeroCard hero={heroData[hero]}/>)}
      </div>
    </div>
  );
}

export default App;
