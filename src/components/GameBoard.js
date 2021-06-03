import React, {useContext} from "react";
import CardElement from "./CardElement";
import {CardCtx} from "../CardCtx";

export default function GameBoard(props){
    const [cards] = useContext(CardCtx);
    return (
        <div id="game_board" >
            {cards.map((card, index) => <CardElement 
            key={index} card={card}></CardElement>)}
        </div>
    );
}