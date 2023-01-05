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
    };
}

exporting: module.exports = { createPlayer, stand, dealerPlay };