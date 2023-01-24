const { checkScore } = require('./score')
const { hit } = require('./deal')

function createPlayer (playerName) {
  const player = {}
  player.playerName = playerName
  return player
};

function stand (player) {
  const finalScore = checkScore(player.hand)
  return finalScore
};

function dealerHit (player, deck) {
  while (player.currentScore.validHand === true && player.currentScore.score < 17) {
    const card = hit(deck)
    player.hand.push(card)
    player.currentScore = checkScore(player.hand)
    console.log(`${player.playerName} receives the ${player.hand[player.hand.length - 1].name} and now has a score of ${player.currentScore.score}.`)
    if (player.currentScore.score > 21) {
      console.log(`${player.playerName} is bust.`)
    }
  };
  if (player.currentScore.score >= 17 && player.currentScore.score < 22) {
    console.log(`${player.playerName} stands with a final score of ${stand(player).score}`)
  };
}

function playerHit (player, deck) {
  let chooseHit = Math.round(Math.random())
  while (chooseHit === 0 && player.currentScore.score < 21) {
    const card = hit(deck)
    player.hand.push(card)
    player.currentScore = checkScore(player.hand)
    console.log(`${player.playerName} receives the ${player.hand[player.hand.length - 1].name} and now has a score of ${player.currentScore.score}.`)
    chooseHit = Math.round(Math.random())
  }
  if (player.currentScore.score > 21) {
    console.log(`${player.playerName} is bust.`)
  } else {
    console.log(`${player.playerName} stands with a final score of ${stand(player).score}`)
  }
}

module.exports = { createPlayer, stand, dealerHit, playerHit }
