const { createDeck } = require('./deck');

function shuffleDeck(deck) {
    const deckCopy = [...deck]
    let shuffledDeck = deckCopy.sort(function () {
        return Math.random() - 0.5;
    });
    return shuffledDeck;
};

function getCardsFromDeck(deck) {
    let card = deck.pop();
    return card;
}
// returns a card from the end of a deck removing it from the deck


exporting: module.exports = { shuffleDeck, getCardsFromDeck };