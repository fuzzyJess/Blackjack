const { gamePlayers, deck, startGame } = require('../game');

describe("startGame() function", () => {
    test("uses array of players passed in to create new players needed for game", () => {
        const players = ["Jessica", "Rich"];
        startGame(players, deck);
        expect(gamePlayers.length).toBe(2);
    });
    test("each player is dealt an initial hand", () => {
        const players = ["Jessica", "Rich"];
        startGame(players, deck);
        expect(gamePlayers[0].hand.length).toBe(2);
        expect(typeof gamePlayers[0].hand[0]).toBe("object");
    });
    test("each player gets an initial score", () => {
        const players = ["Jessica", "Rich"];
        startGame(players, deck);
        expect(typeof gamePlayers[0].currentScore).toBe("object");
    })
    // test("if player has a score of less than 17 they will get a new card", () => {
    //     const players = ["Jessica"];
    //     const deck1 = [
    //         { name: '8 of Spades', value: 8 },
    //         { name: '4 of Diamonds', value: 4 },
    //         { name: 'Jack of Clubs', value: 10 }
    //     ];
    //     newGame(players, deck1);
    //     expect(gamePlayers[4].hand.length).toBe(3);
    // })
});
