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
        do {
        hit(player.hand, deck);
        player.currentScore = checkScore(player.hand);
        } while (player.currentScore.score < 17);
    })
}

gamePlayers.forEach(player => {
    gamePlayers.pop();
})
// clears gamePlayers array once game is finished

exporting: module.exports = { gamePlayers, deck, startGame, playGame }