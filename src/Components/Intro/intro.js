import React from "react";
import "./intro.css"

const intro = props => {
    return (
        <div onClick={() => props.onClick()}>
            <h4>Welcome to RPG Tower</h4>
            <p>
                This will show you a quick tutorial on how to play.
            </p>
        </div>
    )
}

export default intro;