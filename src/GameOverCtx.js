import React, {createContext, useState, useContext} from "react";
import {CardCtx} from "./CardCtx";
import new_game from "./game/game";

export const GameOverCtx = createContext();

export function GameOverProvider(props){
    const [, setCards] = useContext(CardCtx);
    const [gameOver, setGameOver] = useState(false);

    function restart(){
        new_game.clearCards();
        setCards(new_game.generateCards());
        setGameOver(false);

    }
    return (
        <GameOverCtx.Provider value={[gameOver, setGameOver, restart]}>
            {props.children}
        </GameOverCtx.Provider>
    );

}