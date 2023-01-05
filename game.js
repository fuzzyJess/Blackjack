// import inquirer from 'inquirer';
const { createPlayer } = require('./player');
const { shuffleDeck, deal, hit } = require('./deal');
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
    let areBust = gamePlayers.every(player => player.currentScore.validHand === false);
        if (areBust === true) {
            // if there is no player with a score of less than 22
            gameResult.message = "No one won!"
        } 
    let noneBust = gamePlayers.every(player => player.currentScore.validHand === true);
        if (noneBust === true) {
            // if none of the players are bust
            const scores = [];
            gamePlayers.forEach(player => {
                scores.push(player.currentScore.score);
            })
            let highestScore = Math.max(...scores);
            let highestScoreIndex = scores.findIndex((score) => score === highestScore);
            gameResult.message = `${gamePlayers[highestScoreIndex].playerName} won!`

            // working when all scores are different... 
            // pretty sure won't work if more than one player has the same score...
            // may need an if to check whether more than one has the highest score and return a
            // different result message.
        }

    return gameResult;
}
function clearGamePlayers() {
    while (gamePlayers.length > 0) {
        gamePlayers.pop();
    }
}

// clears gamePlayers array once game is finished

exporting: module.exports = { gamePlayers, deck, startGame, playGame, finishGame, clearGamePlayers }