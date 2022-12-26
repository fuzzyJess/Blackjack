const { shuffleDeck, getCardsFromDeck, deal} = require('./blackjack');
const { deck } = require('./deck');


describe("shuffleDeck() function", () => {
    test("returns a new array", () => {
        const returnDeck = shuffleDeck(deck);
        expect(deck).not.toEqual(returnDeck);
    })
    test("does not mutate the input array", () => {
        const newDeck = [...deck];
        // creates new deck array which is a copy of the original deck
        shuffleDeck(newDeck);
        expect(newDeck).toEqual(deck);
        // the new deck array still matches the original deck array
    });
    test("array returned is shuffled version of array passed in", () => {
        const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const returnArray = shuffleDeck(newArray);
        expect(returnArray).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
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
