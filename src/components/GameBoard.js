import React from "react";
import CardElement from "./CardElement";

export default function GameBoard(props){

    return (
        <div id="game_board" >
            {props.cards.map((card, index) => <CardElement 
            key={index} card={card} onHandleFlip={props.handleFlip}></CardElement>)}
        </div>
    );
}