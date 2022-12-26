const { shuffleDeck, getCardsFromDeck, deal} = require('./blackjack');
const { deck } = require('./deck');

describe("getCardsFromDeck() function", () => {
    test("returns card removed from end of deck", () => {
        const shuffledDeck = shuffleDeck(deck);
        const card = getCardsFromDeck(shuffledDeck);
        expect(typeof card).toBe("object");
    })
})