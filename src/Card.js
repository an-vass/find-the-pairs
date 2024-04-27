export default class Card {

    status; // 'hidded', 'shown'

    constructor(content) {
        this.content = content;
        this.element = this.createElement();

        this.hide();
    }

    createElement() {
        const parentElement = document.createElement('div');
        const childElement = document.createElement('div');
    
        parentElement.className = 'card';
        parentElement.dataset.card = '';
        childElement.style.background = `url(${this.content}) no-repeat center`;
        childElement.style.width = '100%';
        childElement.style.height = '100%';

        parentElement.appendChild(childElement);
    
        return parentElement;   
    }

    remove() {
        this.element.remove();
    }

    isShown() {
        return this.status === 'shown';
    }

    hide() {
        this.status = 'hidden';
        this.element.classList.add('card--hidden');
    }

    show() {
        this.status = 'shown';
        this.element.classList.remove('card--hidden');
    }
}