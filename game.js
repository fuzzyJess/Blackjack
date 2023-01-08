const { createDeck } = require('./deck')
const { createPlayer, dealerHit, playerHit } = require('./player')
const { deal, shuffleDeck } = require('./deal')

const { checkScore } = require('./score')

function playGame (newPlayer) {
  const deck = shuffleDeck(createDeck())
  const dealer = createPlayer('Dealer Dan')
  const player = createPlayer(newPlayer)
  dealCards(player, deck)
  dealCards(dealer, deck)
  playerHit(player, deck)
  dealerHit(dealer, deck)
  evaluateGame(dealer, player)
};

function dealCards (player, deck) {
  player.hand = deal(deck)
  player.currentScore = checkScore(player.hand)
  console.log(`${player.playerName} was dealt the ${player.hand[0].name} and the ${player.hand[1].name}. ${player.playerName}'s current score is ${player.currentScore.score}.`)
};

function evaluateGame (dealer, player) {
  let winner = ''
  if (player.currentScore.validHand === true) {
    if (player.currentScore.score > dealer.currentScore.score || dealer.currentScore.validHand === false) {
      winner = player.playerName
    };
  };
  if (dealer.currentScore.validHand === true) {
    if (dealer.currentScore.score > player.currentScore.score || player.currentScore.validHand === false) {
      winner = dealer.playerName
    };
  };
  if (winner.length > 0) {
    console.log(`${winner} has won!`)
  } else {
    console.log('It was a tie!')
  };
};

module.exports = { playGame, dealCards, evaluateGame }
