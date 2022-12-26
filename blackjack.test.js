const { shuffleDeck, getCardsFromDeck, deal} = require('./blackjack');
const { deck } = require('./deck');


describe("shuffleDeck() function", () => {
    test("returns a new array", () => {
        const returnDeck = shuffleDeck(deck);
        console.table(deck);
        console.table(returnDeck);
        expect(deck).not.toEqual(returnDeck);
    })
})
describe("getCardsFromDeck() function", () => {
    test("returns card removed from end of deck", () => {
        let newDeck = [...deck];
        const card = getCardsFromDeck(newDeck);
        expect(typeof card).toBe("object");
    })     
    test("deck contains one less card after function", () => {
        let newDeck = [...deck];
        getCardsFromDeck(newDeck);
        expect(newDeck.length).toBe(51);
    })
})
