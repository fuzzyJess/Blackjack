const { createDeck } = require('./deck');
const { checkScore } = require('./score');

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

function deal(deck) {
    hand = [];
    for (let i = 0; i <= 1; i++) {
        let card = getCardsFromDeck(deck);
        hand.push(card);
    }
    return hand;
}

function hit(hand, deck) {
    let card = getCardsFromDeck(deck);
    let handScore = checkScore(hand);
    if (handScore.validHand === true) {
        hand.push(card);
    }
    return hand;
}

exporting: module.exports = { shuffleDeck, getCardsFromDeck, deal, hit };