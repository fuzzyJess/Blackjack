const { createDeck } = require('../deck');
const { shuffleDeck } = require('../deal');
const { playGame, addPlayers } = require('../game');

describe("addPlayers() function", () => {
    test("creates array containing new player and dealer objects", () => {
        newDeck = shuffleDeck(createDeck());
        let players = addPlayers("Jessica");
        expect(players[0]).toEqual({ playerName: "Jessica" });
        
    });
});


