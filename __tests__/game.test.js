const { gamePlayers, deck, startGame, playGame } = require('../game');

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
    test("if player has a score of less than 17 they will get a new card", () => {
        const players = ["Jessica"];
        const deck1 = [
            { name: '4 of Diamonds', value: 4 },
            { name: 'Jack of Clubs', value: 10 }
        ];
        const deck2 = [
            { name: '5 of Hearts', value: 4 }
        ]
        startGame(players, deck1);
        playGame(deck);
        expect(gamePlayers[0].hand.length).toBe(3);
    })
});
