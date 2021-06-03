import React, {useState, useEffect} from "react";
import GameBoard from "./components/GameBoard";
import new_game from './game/game';
import GameOver from "./components/GameOver";


export default function GameInit(){
    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState(new_game.cards);

    useEffect(() => {
        setCards(new_game.generateCards());
    }, []);

    function handleFlip(card){

        // if(new_game.setCard(card.id)){
        //     card.flipped = true;
        //     if(new_game.secondCard){
        //         if(new_game.checkMatch()){
        //             if(new_game.checkGameOver()){
        //                 setGameOver(true);
        //             }
        //             new_game.clearCards();
        //         }else{

        //             setTimeout(() => {
        //                 new_game.unflipCards()
        //                 setCards([...new_game.cards]);
        //             }, 1000);
        //         }
        //     }
        // }
        console.log(card);
        new_game.flipCard(card,
             () => {setGameOver(true)},
             () => {setCards([...new_game.cards])});

        setCards([...new_game.cards]);
    }

    function restart(){
        new_game.clearCards();
        setCards(new_game.generateCards());
        setGameOver(false);
    }
    return (
        <div>
            <GameBoard cards={cards} handleFlip={handleFlip} />
            <GameOver  show={gameOver} restart={restart} />
        </div>
    );
}