import React, {useContext} from "react";
import {GameOverCtx} from "../GameOverCtx";
export default function GameOver(props){
    const [gameOver, ,restart] = useContext(GameOverCtx);
    return (gameOver?
        <div id="game_over">
            Play again!
            <button onClick={restart} id="restart">
                <span>Restart</span>
            </button>
        </div>:<div></div>
    );
}