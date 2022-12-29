const { createDeck } = require('../deck');
const { shuffleDeck } = require('../dealer');

describe("shuffleDeck() function", () => {
    test("returns an array containing full set of card objects", () => {
        let deck = createDeck();
        let shuffledDeck = shuffleDeck(deck);
        expect(shuffledDeck.length).toBe(52);
        expect(typeof shuffledDeck[0]).toBe("object");
        expect(typeof shuffledDeck[0].name).toBe("string");
        expect(typeof shuffledDeck[0].value).toBe("number");
    })
    test("returns an array that does not match the original deck", () => {
        let deck = createDeck();
        let shuffledDeck = shuffleDeck(deck);
        expect(shuffledDeck).not.toEqual(deck);
    })
})