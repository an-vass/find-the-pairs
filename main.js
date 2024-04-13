import './style.css';
import Board from "./src/Board.js";
import { generateCards } from "./src/generate.js";

const pairs = 5;
const covers = ['aaa', 'bbb', 'xxx', 'ccc', 'vvv', 'sss', 'qqq'];

const cards = generateCards(pairs, covers);
const board = new Board(cards);

const containerElement = document.getElementById('container');
containerElement.appendChild(board.element);
