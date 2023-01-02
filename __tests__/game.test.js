const { gamePlayers, newGame } = require('../game');

describe("newGame() function", () => {
    test("uses array of players passed in to create new players needed for game", () => {
        const players = ["Jessica", "Rich"];
        newGame(players);
        expect(gamePlayers.length).toBe(2);
    });
    test("each player is dealt an initial hand", () => {
        const players = ["Jessica", "Rich"];
        newGame(players);
        expect(gamePlayers[0].hand.length).toBe(2);
        expect(typeof gamePlayers[0].hand[0]).toBe("object");
    });
});