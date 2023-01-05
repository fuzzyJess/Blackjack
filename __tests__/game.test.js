const { createDeck } = require('../deck');
const { shuffleDeck } = require('../deal');
const { playGame, addPlayers, dealCards, hitExtraCards } = require('../game');

describe("addPlayers() function", () => {
    test("creates array containing new player and dealer objects", () => {
        newDeck = shuffleDeck(createDeck());
        let players = addPlayers("Jessica");
        expect(players[0]).toEqual({ playerName: "Jessica" });
    });
});

describe("dealCards() function", () => {
    test("deals initial hand to players", () => {
        newDeck = shuffleDeck(createDeck());
        let players = addPlayers("Jessica");
        dealCards(players, newDeck);
        console.log(players[0])
        console.log(players[1])
        expect(players[0].hand.length).toBe(2);
        expect(typeof players[0].hand[0]).toBe("object");
        expect(players[1].hand.length).toBe(2);
        expect(typeof players[1].hand[0]).toBe("object");
    })
})

describe("hitExtraCards", () => {
    test("only deals extra cards to players who's score is below 17", () => {
        newDeck = shuffleDeck(createDeck());
        let players = [{
            playerName: 'Jessica',
            hand: [
              { name: '7 of Hearts', value: 7 },
              { name: '4 of Diamonds', value: 4 }
            ],
            currentScore: { score: 11, validHand: true }
          }, 
          {
            playerName: 'Dealer Dan',
            hand: [
              { name: 'Queen of Spades', value: 10 },
              { name: 'King of Spades', value: 10 }
            ],
            currentScore: { score: 20, validHand: true }
          }];
        hitExtraCards(players, newDeck);
        expect(players[0].hand.length > 2).toBe(true);
        expect(players[1].hand.length).toBe(2);
    })
})
