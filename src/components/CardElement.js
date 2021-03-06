import React, {useContext} from "react";
import {HandleFlipCtx} from "../HandleFlipCtx";
export default function CardElement(props){
    const handleFlip = useContext(HandleFlipCtx);
    return (
            <div id={props.card.id} onClick={() => {handleFlip(props.card)}} className={`card ${props.card.flipped?"flip":""}`}>
                <div className="card_front">
                    <img className="icon" alt={props.card.icon} src={`./assets/img/${props.card.icon}.svg`}></img>
                </div>
                <div className="card_back">
                    <img className="icon" alt={props.card.icon} src="./assets/img/code.svg"></img>
                </div>
            </div>
        );
}