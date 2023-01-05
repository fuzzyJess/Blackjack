const { createPlayer, stand, dealerPlay } = require('../player');

describe("createPlayer() function", () => {
    test("returns a new player object", () => {
        let newPlayer = createPlayer("Jessica");
        expect(typeof newPlayer).toBe("object");
        expect(newPlayer.playerName).toBe("Jessica");
    })
})

describe("stand() function", () => {
    test("returns score of player hand", () => {
        let newPlayer = { playerName: "Jessica", hand: [{ name: '10 of Spades', value: 10 }, { name: '6 of Hearts', value: 6 }]};
        expect(stand(newPlayer)).toEqual({score: 16, validHand: true});
    })
})

describe("dealerPlay() function", () => {
    test("if dealer has a score of less than 17 they will get a new card", () => {
        const dealer = {playerName: "Dealer Dan", hand: [
            { name: '4 of Diamonds', value: 4 },
            { name: 'Jack of Clubs', value: 10 }
        ], currentScore: {score: 14, validHand: true}};
        const deck = [
            { name: '5 of Hearts', value: 4 }
        ]
        dealerPlay(dealer, deck);
        expect(dealer.hand.length > 2).toBe(true);
    })
})
