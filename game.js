// import inquirer from 'inquirer';
const { createPlayer } = require('./player');
const { shuffleDeck, deal, hit } = require('./dealer');
const { createDeck } = require('./deck');
const { checkScore } = require('./score');

// need to add new players to game using createPlayer for each new player
// each player gets a hand dealt to them in turn
// each player gets to chose to either stand or hit until either bust or standing...
    // could try to do this with a react app and promises...
// each player gets a message with their final score/whether they are bust
// dealer plays last - stands at 17 or above otherwise choosing hit
// message at end to say who won that hand

const gamePlayers = [];
const deck = shuffleDeck(createDeck());

function startGame(players, deck) {
    players.forEach(player => {
        newPlayer = createPlayer(player);
        newPlayer.hand = deal(deck);
        newPlayer.currentScore = checkScore(newPlayer.hand);
        gamePlayers.push(newPlayer);
    });
}

function playGame(deck) {
    gamePlayers.forEach(player => {
        while (player.currentScore.score < 17) {
            hit(player.hand, deck);
            player.currentScore = checkScore(player.hand);
        };
    })
}

function finishGame() {
    let gameResult = {};
    console.log(gamePlayers[0].playerName, gamePlayers[0].hand, "< in finishGame")
    console.log(gamePlayers[1].playerName, gamePlayers[1].hand, "< in finishGame")
    if (!gamePlayers.find(player => player.hand.score <= 21)) {
        // if there is no player with a score of less than 21
        gameResult.message = "No one won!"
    }
    return gameResult;
}
gamePlayers.forEach(player => {
    gamePlayers.pop();
})
// clears gamePlayers array once game is finished

exporting: module.exports = { gamePlayers, deck, startGame, playGame, finishGame }