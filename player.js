const { checkScore } = require('./score')

function createPlayer(playerName) {
    const player = {};
    player.playerName = playerName;
    return player;
}

function stand(player) {
    let finalScore = checkScore(player.hand);
    return finalScore;
}

exporting: module.exports = { createPlayer, stand };