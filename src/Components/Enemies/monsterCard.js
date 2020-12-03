import React from "react";
import "./monsters.css"

const monsterCard = (props) => {
    return (
        <div className="monster-card">
            <div className="monster-name">{props.monster.name}</div>
            <div className="monster-hp"><span className="hp">HP</span>{props.monster.hp}</div>
            <img className="monster-img" src={props.monster.img} alt={props.monster}></img>
        </div>
    )
}

export default monsterCard;