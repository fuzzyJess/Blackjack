const { checkScore } = require('./score')

function createPlayer(playerName) {
    const player = {};
    player.playerName = playerName;
    return player;
}

const dealer = createPlayer(dealer);
// dealer must hit at 16 or below otherwise must stand

function stand(player) {
    let finalScore = checkScore(player.hand);
    return finalScore;
}

exporting: module.exports = { createPlayer, stand };