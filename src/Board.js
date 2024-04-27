export default class Board {
    constructor(cards) {
        this.cards = cards;
        this.attempts = 0;
        this.selectedCards = [];
        this.element = this.createElement();
        this.appendCardsElements();
        this.createEventListeners();
        this.showAndHideElements();
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

    showAndHideElements() {
        this.cards.forEach((card) => {
            card.show();
        });

        setTimeout(() => {
            this.cards.forEach((card) => {
                card.hide();
            });
        }, 3_000);
    }

    processSelectedCards = () => {
        if (this.selectedCards.length !== 2) {
            return;
        }

        this.attempts++;

        const cardsAreTheSame = this.selectedCards[0].content === this.selectedCards[1].content;
    
        if (cardsAreTheSame) {

            this.selectedCards.forEach(card => card.remove());

            this.cards = this.cards.filter(card => {
                return !this.selectedCards.find(selectedCard => card === selectedCard);
            });


            const isGameOver = this.cards.every(card => card.isShown());
    
            if (isGameOver) {
                alert(`You WIN after ${this.attempts} attempts!`);
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