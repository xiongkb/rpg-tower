import React from "react";
import "./intro.css"

const intro = props => {
    return (
        <div>
            <h4>Welcome to RPG Tower</h4>
            <p>
                This will show you a quick tutorial on how to play.
            </p>
            <div onClick={() => props.onClick()}>Start</div>
        </div>
    )
}

export default intro;