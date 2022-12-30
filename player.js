function createPlayer(playerName) {
    const player = {};
    player.playerName = playerName;
    return player;
}

exporting: module.exports = { createPlayer };