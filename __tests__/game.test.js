const { gamePlayers, deck, startGame, playGame, finishGame } = require('../game');

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
});

describe("playGame() function", () => {
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
})

describe("finishGame() function", () => {
    test.only("if no players at end of game have a vaild hand then returns message: 'No one won!' and an array of the scores", () => {
        const players = ["Jessica", "Rich"];
        const deck1 = [
            { name: '4 of Diamonds', value: 4 },
            { name: 'Jack of Clubs', value: 10 },
            { name: '7 of Diamonds', value: 7 },
            { name: 'Queen of Hearts', value: 10 }
        ];
        startGame(players, deck1);
        const deck2 = [
            { name: '8 of Spades', value: 8 },
            { name: '10 of Hearts', value: 10 }
        ];
        playGame(deck2);
        let result = finishGame();
        console.log(result)
        expect(result.message).toBe("No one won!")
    })
})
