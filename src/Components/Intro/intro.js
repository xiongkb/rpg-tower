import React from "react";
import "./intro.css"

const intro = props => {
    return (
        <div className="intro-scene">
            <h4>Welcome RPG Tower</h4>
            <h4>Story:</h4>
            <p>
                Wanting to create a name for yourself, you venture into the Raving Prestigious Ginormous Tower. Raging 
                inside are monsters on every floor and corner of the building. No one knows what lies at the top of 
                the tower, but rumours says there lies a treasure so powerful, it can change the world.
            </p>
            <p>
                Are you ready to challenge yourself? Be WARNED, once you enter, your life is in your hand. Monsters of 
                varying numbers will come at you with their full strength. If you get knocked out, you will be tossed 
                out of the tower, stripping everything on you. Do you think you can make it to the top?
            </p>
            <div onClick={() => props.onClick()} className="start-btn">Start</div>
        </div>
    )
}

export default intro;