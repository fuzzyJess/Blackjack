const { createDeck } = require('../deck');
const { shuffleDeck } = require('../deal');
const { playGame, addPlayers, dealCards } = require('../game');

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
        expect(players[0].hand.length).toBe(2);
        expect(typeof players[0].hand[0]).toBe("object");
        expect(players[1].hand.length).toBe(2);
        expect(typeof players[1].hand[0]).toBe("object");
    })
})
