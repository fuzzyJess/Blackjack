const { createPlayer, stand } = require('../player');

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