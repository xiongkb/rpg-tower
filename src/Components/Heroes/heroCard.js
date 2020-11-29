import React from "react";
import hero from "./heroesData";

const HeroCard = () => {

    

    return (
        <div>
            <img alt={hero.warrior.alt} src={hero.warrior.img}></img>
            <div>Name</div>
            <div>Hp</div>
            <div>
                <div>TP</div>
                <div>MP</div>
            </div>
        </div>
    )
}

export default HeroCard