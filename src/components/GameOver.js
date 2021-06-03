import React from "react";

export default function GameOver(props){
    
    return (props.show?
        <div id="game_over">
            Play again!
            <button onClick={props.restart} id="restart">
                <span>Restart</span>
            </button>
        </div>:<div></div>
    );
}