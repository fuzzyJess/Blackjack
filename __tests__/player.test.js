const { createPlayer } = require('../player');

describe("createPlayer() function", () => {
    test ("returns a new player object", () => {
        let newPlayer = createPlayer("Jessica");
        expect(typeof newPlayer).toBe("object");
        expect(newPlayer.playerName).toBe("Jessica");
    })
})