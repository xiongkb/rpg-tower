import React from "react";
import "./heroCard.css"

const heroCard = (props) => {

    
    return (
        <div className="hero-card">
            <div className="display-coloumn">
                <div className="level"><span className="lvl-span">lvl</span>{props.hero.level}</div>
                <img className="hero-pic" alt={props.hero.alt} src={props.hero.img}></img>
            </div>
            <div className="display-coloumn">
                <div className="hero-name">{props.hero.name}</div>
                <div className="display-row">
                    <div className="stat-placement">
                        <div className="hero-health"><span className="stat-label">HP</span>{props.hero.stats.hp}</div>
                        <div className="hero-exp"><span className="stat-label">EXP</span>{props.hero.exp}</div>
                    </div>
                    <div className="stat-placement">
                        <div className="hero-tp"><span className="stat-label">TP</span>{props.hero.stats.tp}</div>
                        <div className="hero-mp"><span className="stat-label">MP</span>{props.hero.stats.mp}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default heroCard;