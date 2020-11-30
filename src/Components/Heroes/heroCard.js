import React from "react";
import "./heroCard.css"

const HeroCard = (props) => {

    
    return (
        <div className="hero-card">
            <div className="level"><span className="lvl-span">lvl</span>{props.hero.level}</div>
            <img className="hero-pic" alt={props.hero.alt} src={props.hero.img}></img>
            <div className="hero-name">{props.hero.name}</div>
            <div className="hero-health"><span>HP</span>{props.hero.stats.hp}</div>
            <div className="hero-exp"><span>EXP</span>{props.hero.exp}</div>
            <div>
                <div className="hero-tp"><span>TP</span>{props.hero.stats.tp}</div>
                <div className="hero-mp"><span>MP</span>{props.hero.stats.mp}</div>
            </div>
        </div>
    )
}

export default HeroCard;