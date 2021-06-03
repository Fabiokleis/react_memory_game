import React, {createContext, useContext} from "react";
import {CardCtx} from "./CardCtx";
import {GameOverCtx} from "./GameOverCtx";
import new_game from "./game/game";

export const HandleFlipCtx = createContext();

export function HandleFlipProvider(props) {
    const [, setCards] = useContext(CardCtx);
    const [, setGameOver] = useContext(GameOverCtx);
    function handleFlip(card){

        new_game.flipCard(card,
             () => {setGameOver(true)},
             () => {setCards([...new_game.cards])});

        setCards([...new_game.cards]);
    }
    

    return (
        <HandleFlipCtx.Provider value={handleFlip}>
            {props.children}
        </HandleFlipCtx.Provider>
    )
}
