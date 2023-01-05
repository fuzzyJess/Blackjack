const { checkScore } = require('./score')
const { hit } = require('./deal')

function createPlayer(playerName) {
    const player = {};
    player.playerName = playerName;
    return player;
}

function stand(player) {
    let finalScore = checkScore(player.hand);
    return finalScore;
}

function dealerPlay(player, deck) {
    while (player.currentScore.score < 17) {
        hit(player.hand, deck);
        player.currentScore = checkScore(player.hand);
        console.log(`${player.playerName} recieves a ${player.hand[player.hand.length - 1].name} and now has a score of ${player.currentScore.score}.`)
        if (player.currentScore.score > 21) {
            console.log(`${player.playerName} is bust.`)
        }
    };
}

exporting: module.exports = { createPlayer, stand, dealerPlay };