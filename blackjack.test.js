const { shuffleDeck, getCardsFromDeck, deal, hit, convertAces } = require('./blackjack');
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
        const newPlayer = {hand: [], score: 0, acesHeld: 0};
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
        const newPlayer = {hand: [], score: 0, acesHeld: 0};
        deal(newPlayer, newDeck);
        const valueOfCards = newPlayer.hand[0].value + newPlayer.hand[1].value;
        expect(newPlayer.score).toBe(valueOfCards);
    })
    test("updates acesHeld variable when aces added to hand", () => {
        const newDeck1 = [
            { name: 'Ace of Spades', value: 11 },
            { name: '2 of Spades', value: 2 }
        ];
        const newPlayer1 = {hand: [], score: 0, acesHeld: 0};
        deal(newPlayer1, newDeck1);
        expect(newPlayer1.acesHeld).toBe(1);
        const newDeck2 = [
            { name: '2 of Spades', value: 2 },
            { name: '6 of Hearts', value: 6 }
        ]
        const newPlayer2 = {hand: [], score: 0, acesHeld: 0};
        deal(newPlayer2, newDeck2);
        expect(newPlayer2.acesHeld).toBe(0);
    })
    test("returns player object with properties updated correctly", () => {
        const newDeck1 = [
            { name: 'Ace of Spades', value: 11 },
            { name: '5 of Diamonds', value: 5 }
        ];
        const newPlayer1 = {hand: [], score: 0, acesHeld: 0};
        deal(newPlayer1, newDeck1);
        expect(newPlayer1.hand.length).toBe(2);
        expect(newPlayer1.score).toBe(16);
        expect(newPlayer1.acesHeld).toBe(1);
        const newDeck2 = [
            { name: '2 of Spades', value: 2 },
            { name: '6 of Hearts', value: 6 }
        ]
        const newPlayer2 = {hand: [], score: 0, acesHeld: 0};
        deal(newPlayer2, newDeck2);
        expect(newPlayer2.hand.length).toBe(2);
        expect(newPlayer2.score).toBe(8);
        expect(newPlayer2.acesHeld).toBe(0);
    })
})
describe("hit() function", () => {
    test("removes one card from deck passed in", () => {
        const newDeck = shuffleDeck(deck);
        const newPlayer = {hand: [], score: 0, acesHeld: 0};
        hit(newPlayer, newDeck);
        expect(newDeck.length).toBe(51);
    })
    test("add new card to player.hand array", () => {
        const newDeck = shuffleDeck(deck);
        const newPlayer = {hand: [], score: 0, acesHeld: 0};
        hit(newPlayer, newDeck);
        expect(newPlayer.hand.length).toBe(1);
    })
    test("updates player.score checking if player hand is still valid", () => {
        const newDeck = [{ name: 'King of Hearts', value: 10 }];
        const newPlayer = {hand: [{ name: '10 of Spades', value: 10 }, { name: '6 of Hearts', value: 6 }], score: 16, acesHeld: 0, validHand: true};
        hit(newPlayer, newDeck);
        expect(newPlayer.score).toBe(26);
        expect(newPlayer.validHand).toBe(false);
    })
    test("returns player object with properties updated correctly", () => {
        const newDeck = [{ name: '7 of Clubs', value: 7 }];
        const newPlayer1 = {hand: [{ name: 'Ace of Spades', value: 1 }, { name: '6 of Hearts', value: 6 }], score: 7, acesHeld: 1, validHand: true};
        let returnedPlayer = hit(newPlayer1, newDeck);
        expect(returnedPlayer.hand.length).toBe(3);
        expect(returnedPlayer.score).toBe(14);
        expect(returnedPlayer.acesHeld).toBe(1);
        expect(returnedPlayer.validHand).toBe(true);
        const newDeck2 = [{ name: '7 of Clubs', value: 7 }];
        const newPlayer2 = {hand: [{ name: '8 of Spades', value: 8 }, { name: '9 of Hearts', value: 9 }], score: 17, acesHeld: 0, validHand: true};
        let returnedPlayer2 = hit(newPlayer2, newDeck2);
        expect(returnedPlayer2.hand.length).toBe(3);
        expect(returnedPlayer2.score).toBe(24);
        expect(returnedPlayer2.acesHeld).toBe(0);
        expect(returnedPlayer2.validHand).toBe(false);
    })
    test("if player.score exceeds 21 and acesHeld is over 1 then recalculates score with Aces having a value of 1", () => {
        const newDeck = [{ name: 'Jack of Hearts', value: 10}];
        const newPlayer = {hand: [{name: 'Ace of Diamonds', value: 11}, {name: '6 of Spades', value: 6}], score: 16, acesHeld: 1, validHand: true};
        let returnedPlayer = hit(newPlayer, newDeck);
        expect(returnedPlayer.validHand).toBe(true);
        expect(returnedPlayer.score).toBe(16);
    })
    test("if player.score exceeds 21 and there are no acesHeld then does not recalculate score", () => {
        const newDeck = [{ name: 'Jack of Hearts', value: 10}];
        const newPlayer = {hand: [{name: '6 of Diamonds', value: 6}, {name: '6 of Spades', value: 6}], score: 12, acesHeld: 0, validHand: true};
        let returnedPlayer = hit(newPlayer, newDeck);
        expect(returnedPlayer.validHand).toBe(false);
        expect(returnedPlayer.score).toBe(22);
    })
})
describe("convertAces() function", () => {
    test("changes player score by -10 when bust and holding an ace", () => {
        const newPlayer = {hand: [{name: 'Ace of Diamonds', value: 11}, {name: '6 of Spades', value: 6}, { name: 'Jack of Hearts', value: 10}], score: 27, acesHeld: 1, validHand: true};
        convertAces(newPlayer);
        expect(newPlayer.score).toBe(17);
    })
})