import React from "react";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import {CardProvider} from "./CardCtx";
import {GameOverProvider} from "./GameOverCtx";
import {HandleFlipProvider} from './HandleFlipCtx';


export default function GameInit(){
    return (
        <div>
            <CardProvider>
                <GameOverProvider>
                    <HandleFlipProvider>
                        <GameBoard />
                            <GameOver  />
                    </HandleFlipProvider>
                </GameOverProvider>
            </CardProvider>
        </div>
    );
}