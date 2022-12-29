const { createDeck } = require('./deck');

function shuffleDeck(deck) {
    const deckCopy = [...deck]
    let shuffledDeck = deckCopy.sort(function () {
        return Math.random() - 0.5;
    });
    return shuffledDeck;
};

exporting: module.exports = { shuffleDeck };