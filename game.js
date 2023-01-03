// import inquirer from 'inquirer';
const { createPlayer } = require('./player');
const { shuffleDeck, deal, hit } = require('./dealer');
const { createDeck } = require('./deck');
const { checkScore } = require('./score');

// need to add new players to game using createPlayer for each new player
// each player gets a hand dealt to them in turn
// each player gets to chose to either stand or hit until either bust or standing
// each player gets a message with their final score/whether they bust
// dealer plays last - stands at 17 or above otherwise choosing hit
// message at end to say who won that hand

const gamePlayers = [];
const deck = shuffleDeck(createDeck());

function newGame(players, deck) {
    players.forEach(player => {
        newPlayer = createPlayer(player);
        newPlayer.hand = deal(deck);
        newPlayer.currentScore = checkScore(newPlayer.hand);

        do {
            hit(newPlayer.hand, deck);
            newPlayer.currentScore = checkScore(newPlayer.hand);
        } while (newPlayer.currentScore.score < 17);
        
        gamePlayers.push(newPlayer);
                
    });
       
}

exporting: module.exports = { gamePlayers, deck, newGame }