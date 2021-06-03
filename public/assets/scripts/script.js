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
        const cards = [];
        for(let i = 0; i < this.imgs.length; i++){
            cardsFront.push(new Card(i, this.imgs[i], false));
        }
        let i = this.imgs.length;
        for(let j = cardsFront.length; j < cardsFront.length*2; j++){
            i--;
            cardsBack.push(new Card(j, cardsFront[i].icon, false));
        }
        cards.push(cardsFront);
        cards.push(cardsBack);
        return cards.flatMap(arr => arr);
    }

    shuffleCards(){
        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while(currentIndex != 0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // swaping values
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex],
             this.cards[randomIndex]];
        }

    }

    setCard(id){
        const card = this.cards.filter(cd => cd.id == id)[0];
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

    unflipCards(){
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    }

    checkGameOver(){
        return this.cards.filter(card => !card.flipped).length == 0;
    }

    init(){
        this.cards = this.generateCards();
        this.shuffleCards();
        game.initializeCards(this.cards);
    }

    restart(){
        let gameOverLayer = document.getElementById("game_over");
        gameOverLayer.style.display = "none";
        let gameBoard = document.getElementById("game_board");
        gameBoard.innerHTML = '';
        this.clearCards();
        this.init(this.imgs);
    }

}

const new_game = new StartGame();
new_game.init();
