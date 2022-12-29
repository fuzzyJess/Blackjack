const { checkScore } = require('../score');

describe("checkScore() function", () => {
    test("when passed a hand with a score of 21 or less returns correct score and validHand: true", () => {
        const hand = [
            { name: '6 of Hearts', value: 6 },
            { name: '8 of Diamonds', value: 8 }
        ];
        expect(checkScore(hand)).toEqual({score: 14, validHand: true});
    })
    test("when passed a hand with a score of over 21 returns correct score and validHand: false", () => {
        const hand = [
            { name: '6 of Hearts', value: 6 },
            { name: '8 of Diamonds', value: 8 },
            { name: 'King of Spades', value: 10 }
        ];
        expect(checkScore(hand)).toEqual({score: 24, validHand: false});
    })
    test("when passed Blackjack returns correct score and vaildHand: true", () => {
        const hand = [
            { name: 'King of Spades', value: 10 },
            { name: 'Ace of Diamonds', value: 11 }
        ];
        expect(checkScore(hand)).toEqual({score: 21, validHand: true});
    })
    test("when passed a hand with a score of over 21 but containing aces returns score with aces value reduced to 1", () => {
        const hand1 = [
            { name: 'King of Clubs', value: 10 },
            { name: 'Queen of Diamonds', value: 10 },
            { name: 'Ace of Hearts', value: 11 }
        ];
        expect(checkScore(hand1)).toEqual({score: 21, validHand: true});
        const hand2 = [
            { name: 'Nine of Hearts', value: 9 },
            { name: 'Ace of Diamonds', value: 11 },
            { name: 'Ace of Spades', value: 11 }
        ];
        expect(checkScore(hand2)).toEqual({score: 21, validHand: true});
    })
})