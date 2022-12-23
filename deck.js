const deck = [];

for (let j = 0; j < 4; j++) {
    let suit = "";
    let card = "";
    let cardValue = 0;
    if (j === 0) {
            suit = "Spades";
        }
        if (j === 1) {
            suit = "Hearts";
        }
        if (j === 2) {
            suit = "Diamonds";
        }
        if (j === 3) {
            suit = "Clubs";
        }
    for (let i = 0; i < 13; i++) {
        if (i === 0) {
            card = "Ace of " + suit;
            cardValue = 11;
        }
        else if (i === 10) {
            card = "Jack of " + suit;
            cardValue = 10;
        }
        else if (i === 11) {
            card = "Queen of " + suit;
            cardValue = 10;
        }
        else if (i === 12) {
            card = "King of " + suit;
            cardValue = 10
        }
        else {
            card = `${i + 1} of ${suit}`;
            cardValue = i + 1;
        }

        deck.push({name: card, value: cardValue})
    } 
}

exporting: module.exports = { deck };