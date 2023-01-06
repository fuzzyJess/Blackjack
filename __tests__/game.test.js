const { createDeck } = require('../deck');
const { shuffleDeck } = require('../deal');
const { dealCards, hitExtraCards, evaluateGame } = require('../game');
const { createPlayer } = require('../player');

describe("dealCards() function", () => {
    test("deals initial hand to players", () => {
        newDeck = shuffleDeck(createDeck());
        let player = createPlayer("Jessica");
        dealCards(player, newDeck);
        expect(player.hand.length).toBe(2);
        expect(typeof player.hand[0]).toBe("object");
    });
});

describe("hitExtraCards", () => {
    test("only deals extra cards to players who's score is below 17", () => {
        newDeck = shuffleDeck(createDeck());
        let player = {
            playerName: 'Jessica',
            hand: [
              { name: '7 of Hearts', value: 7 },
              { name: '4 of Diamonds', value: 4 }
            ],
            currentScore: { score: 11, validHand: true }
          };
          let dealer = {
            playerName: 'Dealer Dan',
            hand: [
              { name: 'Queen of Spades', value: 10 },
              { name: 'King of Spades', value: 10 }
            ],
            currentScore: { score: 20, validHand: true }
          };
        hitExtraCards(player, newDeck);
        expect(player.hand.length > 2).toBe(true);
        hitExtraCards(dealer, newDeck);
        expect(dealer.hand.length).toBe(2);
    });
});

describe("evaluateGame", () => {
    test("Console.log should have been called with correct end game message", () => {
        let player = {
            playerName: 'Jessica',
            hand: [
                { name: 'King of Spades', value: 10 },
                { name: '4 of Spades', value: 4 },
                { name: '7 of Hearts', value: 7 }
            ],
            currentScore: { score: 21, validHand: true }
            };
            let dealer = {
            playerName: 'Dealer Dan',
            hand: [
                { name: '8 of Clubs', value: 8 },
                { name: '4 of Diamonds', value: 4 },
                { name: '8 of Spades', value: 8 }
            ],
            currentScore: { score: 20, validHand: true }
            };
        const logSpy = jest.spyOn(global.console, 'log');
        evaluateGame(dealer, player);
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith('Jessica has won!');
        logSpy.mockRestore();
    });
});
