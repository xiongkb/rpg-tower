import React from "react";


const HeroCard = (props) => {

    
    return (
        <div>
            <div className="level">{props.hero.level}</div>
            <img alt={props.hero.alt} src={props.hero.img}></img>
            <div className="hero-name">{props.hero.name}</div>
            <div className="hero-health">{props.hero.stats.hp}</div>
            <div className="hero-exp">{props.hero.exp}</div>
            <div>
                <div className="hero-tp">{props.hero.stats.tp}</div>
                <div className="hero-mp">{props.hero.stats.mp}</div>
            </div>
        </div>
    )
}

export default HeroCard