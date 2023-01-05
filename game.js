// import inquirer from 'inquirer';
const { createPlayer, stand, dealerPlay } = require('./player');
const { shuffleDeck, deal, hit } = require('./deal');
const { createDeck } = require('./deck');
const { checkScore } = require('./score');

// only allow one player game against a dealer
// new player gets hand dealt first and to start with plays with dealerPlay rules
// player object is returned

// message to say score of player at end of hand

// dealer gets hand dealt and plays with dealerPlay rules
// dealer is returned

// message to say score of dealer

// evaluate two scores and message to say who won/was it a tie


const deck = shuffleDeck(createDeck());

function playGame(player, deck) {
    const gamePlayers = [];
    gamePlayers.push(createPlayer(player));
    gamePlayers.push(createPlayer("Dealer Dan"));
        
    gamePlayers.forEach(player => {
        player.hand = deal(deck);
        player.currentScore = checkScore(player.hand);
        console.log(`${player.playerName} was dealt a ${player.hand[0].name} and a ${player.hand[1].name}. ${player.playerName}'s card total is ${player.currentScore.score}.`)
                
        while (player.currentScore.score < 17) {
            dealerPlay(player, deck)
        } 
        
        if (player.currentScore.score >= 17 && player.currentScore.score < 22){
            console.log(`${player.playerName} stands and has a final score of ${stand(player).score}`)
        } 
    })

        return gamePlayers;
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

// clears gamePlayers array once game is finished

exporting: module.exports = { deck, playGame, finishGame }