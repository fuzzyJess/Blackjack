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

// create player & dealer within playGame function... don't have a player array

function dealCards(gamePlayers, deck) {
    gamePlayers.forEach(player => {
        player.hand = deal(deck);
        player.currentScore = checkScore(player.hand);
        console.log(`${player.playerName} was dealt ${aOrAn(player.hand[0])} ${player.hand[0].name} and ${aOrAn(player.hand[1])} ${player.hand[1].name}. ${player.playerName}'s current score is ${player.currentScore.score}.`)
    })
}

function hitExtraCards(gamePlayers, deck) {
    gamePlayers.forEach(player => {    
        dealerPlay(player, deck);
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

function aOrAn(card) {
    if (card.value === 11) {
        return "an";
    } else {
        return "a";
    };
};
// inserts 'a' or 'an' into sentence as needed

exporting: module.exports = { playGame, addPlayers, dealCards, hitExtraCards, evaluateGame, aOrAn }