
class Card {
    constructor(id, icon, flipped){
        this.id = id;
        this.icon = icon;
        this.flipped = flipped;
    }
}

class StartGame {
    constructor(){
        this.flag = false;
        this.firstCard = null;
        this.secondCard = null;
        this.cards = [];
    }
    imgs = [
        'anchor',
        'award',
        'coffee',
        'compass',
        'cpu',
        'database',
        'github',
        'package',
        'server',
        'star',
        'umbrella',
        'wind'
    ];
    generateCards(){
        const cardsFront = [];
        const cardsBack = [];
        this.cards = [];
        for(let i = 0; i < this.imgs.length; i++){
            cardsFront.push(new Card(i, this.imgs[i], false));
        }
        let i = this.imgs.length;
        for(let j = cardsFront.length; j < cardsFront.length*2; j++){
            i--;
            cardsBack.push(new Card(j, cardsFront[i].icon, false));
        }
        this.cards.push(cardsFront);
        this.cards.push(cardsBack);
        let new_array = this.cards.flatMap(arr => arr);
        new_array = this.shuffleCards(new_array);
        this.cards = new_array;
        return this.cards;
    }

    shuffleCards(cards){
        let currentIndex = cards.length;
        let randomIndex = 0;

        while(currentIndex !== 0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // swaping values
            [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex],
             cards[randomIndex]];
        }
        return cards;

    }

    setCard(id){

        const card = this.cards.filter(cd => cd.id === id)[0];
        if(card.flipped || this.flag) return false;
        if(!this.firstCard){
            this.firstCard = card;
            return true;
        }else{
            this.secondCard = card;
            this.flag = true;
            return true;
        }
    }

    checkMatch(){
        if(this.firstCard && this.secondCard){
            return this.firstCard.icon === this.secondCard.icon;
        }
        return false;
    }

    clearCards(){
        this.firstCard = null;
        this.secondCard = null;
        this.flag = false;
    }

    flipCard(card, gameOverCb, noMatchCb){
        if(this.setCard(card.id)){
            card.flipped = true;
            if(new_game.secondCard){
                if(new_game.checkMatch()){
                    
                    if(new_game.checkGameOver()){
                        gameOverCb();
                    }
                    this.clearCards();
                }else{

                    setTimeout(() => {
                        this.unflipCards()
                        noMatchCb();
                    }, 1000);
                }
            }
        }
    }

    unflipCards(){
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    }

    checkGameOver(){
        return this.cards.filter(card => !card.flipped).length === 0;
    }

}

const new_game = new StartGame();

export default new_game;