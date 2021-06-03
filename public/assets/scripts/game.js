const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";
const FLIP = "flip";

const game = {

    initializeCards: function(cards){
        let gameBoard = document.getElementById("game_board");

        cards.forEach(card => {
            let cardElement = document.createElement("div");
            cardElement.id = card.id;
            cardElement.classList.add(CARD);
            cardElement.dataset.icon = card.icon;
            this.createCardContent(card, cardElement);
            cardElement.addEventListener("click", this.flipCard);
            gameBoard.appendChild(cardElement);
        })
    },

    createCardContent: function(card, cardElement){

        this.createCardFace(FRONT, card, cardElement);
        this.createCardFace(BACK, card, cardElement);
    },

    createCardFace: function(face, card, cardElement){

        let cardElementFace = document.createElement("div");
        cardElementFace.classList.add(face);

        if(face == FRONT){
            let iconElement = document.createElement("img");
            iconElement.src = `./assets/img/${card.icon}.svg`
            iconElement.classList.add(ICON);
            cardElementFace.appendChild(iconElement);
        }else{
            const img = document.createElement("img");
            img.src = "./assets/img/code.svg";
            img.classList.add(ICON);
            cardElementFace.appendChild(img);

        }
        cardElement.appendChild(cardElementFace);
    },

    flipCard: function(){

        if(new_game.setCard(this.id)){
            this.classList.add(FLIP);
            if(new_game.secondCard){
                if(new_game.checkMatch()){
                    new_game.firstCard.flipped = true;
                    new_game.secondCard.flipped = true;
                    if(new_game.checkGameOver()){
                        let gameOverLayer = document.getElementById("game_over");
                        gameOverLayer.style.display = "flex";
                    }
                    new_game.clearCards();
                }else{
                    setTimeout(() => {
                        let firstCardView = document.getElementById(new_game.firstCard.id);
                        let secondCardView = document.getElementById(new_game.secondCard.id);

                        firstCardView.classList.remove(FLIP);
                        secondCardView.classList.remove(FLIP);
                        new_game.unflipCards()
                    }, 1000);
                }
            }
        }
    }
}

