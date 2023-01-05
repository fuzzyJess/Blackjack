const { createDeck } = require('../deck');
const { shuffleDeck, getCardsFromDeck, deal, hit } = require('../deal');

describe("shuffleDeck() function", () => {
    test("returns an array containing full set of card objects", () => {
        let deck = createDeck();
        let shuffledDeck = shuffleDeck(deck);
        expect(shuffledDeck.length).toBe(52);
        expect(typeof shuffledDeck[0]).toBe("object");
        expect(typeof shuffledDeck[0].name).toBe("string");
        expect(typeof shuffledDeck[0].value).toBe("number");
    });
    test("returns an array that does not match the original deck", () => {
        let deck = createDeck();
        let shuffledDeck = shuffleDeck(deck);
        expect(shuffledDeck).not.toEqual(deck);
    });
});

describe("getCardsFromDeck() function", () => {
    test("returns card removed from end of deck", () => {
        let newDeck = createDeck();
        const card = getCardsFromDeck(newDeck);
        expect(typeof card).toBe("object");
    });     
    test("deck contains one less card after function", () => {
        let newDeck = createDeck();
        getCardsFromDeck(newDeck);
        expect(newDeck.length).toBe(51);
    });
});

describe("deal() function", () => {
    test("returns two cards from deck passed in", () => {
        let deck = [
            { name: 'Ace of Spades', value: 11 },
            { name: '5 of Diamonds', value: 5 }
        ];
        let newHand = deal(deck);
        expect(newHand.length).toBe(2);
        expect(newHand[0]).toEqual({ name: '5 of Diamonds', value: 5 });
    });
    test("removes two cards from deck passed in", () => {
        let deck = createDeck();
        deal(deck);
        expect(deck.length).toBe(50);
    });
});

describe("hit() function", () => {
    test("removes one card from deck passed in", () => {
        const newDeck = createDeck();
        let hand = [{ name: '5 of Diamonds', value: 5 }, { name: 'Ace of Spades', value: 11 }];
        hit(hand, newDeck);
        expect(newDeck.length).toBe(51);
    });
    test("adds one more card to hand when value of hand is below 21", () => {
        const newDeck = createDeck();
        let hand = [{ name: '5 of Diamonds', value: 5 }, { name: 'Ace of Spades', value: 11 }];
        hit(hand, newDeck);
        expect(hand.length).toBe(3);
    })

    test("no more cards are added to hand when value of hand is above 21", () => {
        const newDeck = createDeck();
        let hand = [{ name: '7 of Hearts', value: 7 }, { name: '9 of Clubs', value: 9 }, { name: 'King of Hearts', value: 10 }];
        hit(hand, newDeck);
        expect(hand.length).toBe(3);
    })
});