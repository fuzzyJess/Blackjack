// import inquirer from 'inquirer';
const { createPlayer, stand, dealerPlay } = require('./player');
const { deal } = require('./deal');

const { checkScore } = require('./score');

function playGame(player, deck) {
    const gamePlayers = addPlayers(player);
    dealCards(gamePlayers, deck);
    hitExtraCards(gamePlayers, deck);
    evaluateGame(gamePlayers);
    
    return gamePlayers;
}

function addPlayers(player) {
    const gamePlayers = [];
    gamePlayers.push(createPlayer(player));
    gamePlayers.push(createPlayer("Dealer Dan"));
    return gamePlayers;
}

function dealCards(gamePlayers, deck) {
    gamePlayers.forEach(player => {
        player.hand = deal(deck);
        player.currentScore = checkScore(player.hand);
        console.log(`${player.playerName} was dealt a ${player.hand[0].name} and a ${player.hand[1].name}. ${player.playerName}'s current score is ${player.currentScore.score}.`)
    })
}

function hitExtraCards(gamePlayers, deck) {
    gamePlayers.forEach(player => {    
        while (player.currentScore.score < 17) {
            dealerPlay(player, deck);
        }; 
        
        if (player.currentScore.score >= 17 && player.currentScore.score < 22){
            console.log(`${player.playerName} stands with a final score of ${stand(player).score}`);
        }; 
    });
}

function evaluateGame(players) {
    let winner = "";
    if (players[0].currentScore.validHand === true) {
        if (players[0].currentScore.score > players[1].currentScore.score || players[1].currentScore.validHand === false) {
            winner = players[0].playerName;
        } 
    } 
    if (players[1].currentScore.validHand === true) {
        if (players[1].currentScore.score > players[0].currentScore.score || players[0].currentScore.validHand === false) {
            winner = players[1].playerName;
        } 
    }
    if (winner.length > 0) {
        console.log(`${winner} has won!`)
    } else {
        console.log("It was a tie!")
    }
    
}

exporting: module.exports = { playGame, addPlayers, dealCards, evaluateGame }