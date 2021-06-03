import React, {useState, createContext, useEffect} from 'react'
import new_game from "./game/game";

export const CardCtx = createContext();

export function CardProvider(props) {
    const [cards, setCards] = useState(new_game.cards);
    

    useEffect(() => {
        setCards(new_game.generateCards());
    }, []);

    return (
        <CardCtx.Provider value={[cards, setCards]}>
            {props.children}
        </CardCtx.Provider>
    );
}
