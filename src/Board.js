export default class Board {
    constructor(cards) {
        this.cards = cards;
        this.selectedCards = [];
        this.element = this.createElement();
        this.appendCardsElements();
        this.createEventListeners();
    }

    createElement() {
        const element = document.createElement('div');
        element.className = 'board';
        return element; 
    }

    appendCardsElements() {
        this.cards.forEach((card) => {
            this.element.appendChild(card.element);
        });
    }

    createEventListeners() {
        this.element.addEventListener('click', this.handleElementClick)
    }

    processSelectedCards = () => {
        if (this.selectedCards.length !== 2) {
            return;
        }

        const cardsAreTheSame = this.selectedCards[0].content === this.selectedCards[1].content;
    
        if (cardsAreTheSame) {
            const isGameOver = this.cards.every(card => card.isShown());
    
            if (isGameOver) {
                alert('you win');
            }
        } else {
            this.selectedCards.forEach(card => card.hide());
        }
    
        this.selectedCards = [];
    }

    handleElementClick = (e) => {
        const cardElement = e.target.closest('[data-card]');
    
        if (!cardElement) {
            return;
        }

        const card = this.cards.find(card => {
            return card.element === cardElement;
        });

        if (!card) {
            return;
        }

        if (card.isShown()) {
            return;
        }

        const hasSelectedCard = this.selectedCards.includes(card);
    
        if (hasSelectedCard) {
            return;
        }
        
        if (this.selectedCards.length === 0) {
            this.selectedCards = [card];
            card.show();
            return;
        } 

        if (this.selectedCards.length === 1) {
            this.selectedCards.push(card);
            card.show();

            this.timerId = setTimeout(() => {
                this.processSelectedCards();
            }, 1_000);
            return;
        }

        if (this.selectedCards.length === 2) {
            this.processSelectedCards();
            clearTimeout(this.timerId);

            this.selectedCards = [card];
            card.show();
            return;
        }
    }

}