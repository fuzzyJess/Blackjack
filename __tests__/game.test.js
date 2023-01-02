const { gamePlayers, newGame } = require('../game');

describe("newGame() function", () => {
    test("uses array of players passed in to create new players needed for game", () => {
        const players = ["Jessica", "Rich"];
        newGame(players);
        console.log(gamePlayers);
        expect(gamePlayers.length).toBe(2);
    })
})