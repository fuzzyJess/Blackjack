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
        newPlayer = createPlayer(player);
        newPlayer.hand = deal(deck);
        newPlayer.currentScore = checkScore(newPlayer.hand);
        console.log(`${newPlayer.playerName} was dealt a ${newPlayer.hand[0].name} and a ${newPlayer.hand[1].name}. ${newPlayer.playerName}'s card total is ${newPlayer.currentScore.score}.`)
        
        
        if (newPlayer.currentScore.score < 17) {
            dealerPlay(newPlayer, deck)
        } else if (newPlayer.currentScore.score >= 17 && newPlayer.currentScore.score < 22){
            console.log(`${newPlayer.playerName} stands and has a final score of ${stand(newPlayer).score}`)
        }
        
        dealer = createPlayer("dealer Dan");
        dealer.hand = deal(deck);
        dealer.currentScore = checkScore(dealer.hand);
        console.log(`${dealer.playerName} was dealt a ${dealer.hand[0].name} and a ${dealer.hand[1].name}. ${dealer.playerName}'s card total is ${dealer.currentScore.score}.`)
        if (dealer.currentScore.score < 17) {
            dealerPlay(dealer, deck)
        } else if (dealer.currentScore.score >= 17 && dealer.currentScore.score < 22){
            console.log(`${dealer.playerName} stands and has a final score of ${stand(dealer).score}`)
        }

        gamePlayers.push(newPlayer);
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