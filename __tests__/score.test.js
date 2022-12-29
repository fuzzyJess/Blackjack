const { checkScore } = require('../score');

describe("checkScore() function", () => {
    test("when passed a hand with a score of 21 or less returns correct score & validHand: true", () => {
        const hand1 = [
            { name: '6 of Hearts', value: 6 },
            { name: '8 of Diamonds', value: 8 }
        ];
        expect(checkScore(hand1)).toEqual({score: 14, validHand: true});
    })
    test("when passed a hand with a score of over 21 returns correct score and validHand: false", () => {
        const hand1 = [
            { name: '6 of Hearts', value: 6 },
            { name: '8 of Diamonds', value: 8 },
            { name: 'King of Spades', value: 10 }
        ];
        expect(checkScore(hand1)).toEqual({score: 24, validHand: false});
    
    })
})