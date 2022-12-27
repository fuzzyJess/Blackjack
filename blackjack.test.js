const { shuffleDeck, getCardsFromDeck, deal } = require('./blackjack');
const { players } = require('./blackjack');
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
describe("deal() function", () => {
    test("removes two cards from deck passed in", () => {
        const newDeck = shuffleDeck(deck);
        const newPlayer = {hand: [], score: 0, acesHeld: 0}
        deal(newPlayer, newDeck);
        expect(newDeck.length).toBe(50);
    })
    test("adds two cards to player.hand array", () => {
        const newDeck = shuffleDeck(deck);
        const newPlayer = {hand: [], score: 0, acesHeld: 0}
        deal(newPlayer, newDeck);
        expect(newPlayer.hand.length).toBe(2);
    })
    test("updates score increasing with value of cards dealt", () => {
        const newDeck = shuffleDeck(deck);
        const newPlayer = {hand: [], score: 0, acesHeld: 0}
        deal(newPlayer, newDeck);
        const valueOfCards = newPlayer.hand[0].value + newPlayer.hand[1].value;
        expect(newPlayer.score).toBe(valueOfCards);
    })
    test("updates acesHeld variable when aces added to hand", () => {
        const newDeck1 = [
            { name: 'Ace of Spades', value: 1 },
            { name: '2 of Spades', value: 2 }
        ];
        const newPlayer1 = {hand: [], score: 0, acesHeld: 0}
        deal(newPlayer1, newDeck1);
        expect(newPlayer1.acesHeld).toBe(1);
        const newDeck2 = [
            { name: '2 of Spades', value: 2 },
            { name: '6 of Hearts', value: 6 }
        ]
        const newPlayer2 = {hand: [], score: 0, acesHeld: 0}
        deal(newPlayer2, newDeck2);
        expect(newPlayer2.acesHeld).toBe(0);
    })
    test("returns player object with properties updated correctly", () => {
        const newDeck1 = [
            { name: 'Ace of Spades', value: 1 },
            { name: '5 of Diamonds', value: 5 }
        ];
        const newPlayer1 = {hand: [], score: 0, acesHeld: 0}
        deal(newPlayer1, newDeck1);
        expect(newPlayer1.hand.length).toBe(2);
        expect(newPlayer1.score).toBe(6);
        expect(newPlayer1.acesHeld).toBe(1);
        const newDeck2 = [
            { name: '2 of Spades', value: 2 },
            { name: '6 of Hearts', value: 6 }
        ]
        const newPlayer2 = {hand: [], score: 0, acesHeld: 0}
        deal(newPlayer2, newDeck2);
        expect(newPlayer2.hand.length).toBe(2);
        expect(newPlayer2.score).toBe(8);
        expect(newPlayer2.acesHeld).toBe(0);

    })
})