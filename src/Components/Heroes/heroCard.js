import React from "react";
import "./heroCard.css"

const HeroCard = (props) => {

    
    return (
        <div className="hero-card">
            <div className="level"><span className="lvl-span">lvl</span>{props.hero.level}</div>
            <img className="hero-pic" alt={props.hero.alt} src={props.hero.img}></img>
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