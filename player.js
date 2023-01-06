const { checkScore } = require('./score');
const { hit } = require('./deal');
const { aOrAn } = require('./game');

function createPlayer(playerName) {
    const player = {};
    player.playerName = playerName;
    return player;
};

function stand(player) {
    let finalScore = checkScore(player.hand);
    return finalScore;
};

function dealerPlay(player, deck) {
    console.log(player)
    while (player.currentScore.validHand === true && player.currentScore.score < 17) {
        let card = hit(deck);
        player.hand.push(card);
        player.currentScore = checkScore(player.hand);
        console.log(`${player.playerName} recieves a ${player.hand[player.hand.length - 1].name} and now has a score of ${player.currentScore.score}.`)
        if (player.currentScore.score > 21) {
            console.log(`${player.playerName} is bust.`);
        }
    };
    if (player.currentScore.score >= 17 && player.currentScore.score < 22){
        console.log(`${player.playerName} stands with a final score of ${stand(player).score}`);
    }; 
}

exporting: module.exports = { createPlayer, stand, dealerPlay };