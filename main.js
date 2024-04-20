import './style.css';
import Board from "./src/Board.js";
import { generateCards } from "./src/generate.js";

const pairs = 3;
const covers = [
    `assets/images/1.jpg`,
    'assets/images/2.jpg',
    'assets/images/3.jpg',
    'assets/images/4.jpg',
    'assets/images/5.jpg',
    'assets/images/6.jpg',
    'assets/images/7.jpg',
];

const cards = generateCards(pairs, covers);
const board = new Board(cards);

const containerElement = document.getElementById('container');
containerElement.appendChild(board.element);
