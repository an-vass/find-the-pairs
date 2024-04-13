import Card from "./Card.js";

function shuffleArray(arr) {
    let currentIndex = arr.length;

    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        const currentValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = currentValue;
    }
}

export function generateCards(pairs, covers) {
    const coversCopy = covers.slice(0, pairs);
    const coversPairs = coversCopy.concat(coversCopy);

    shuffleArray(coversPairs);

    return coversPairs.map(cover => new Card(cover));
}