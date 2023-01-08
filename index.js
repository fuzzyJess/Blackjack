const inquirer = require('inquirer')
const { dealCards, evaluateGame } = require('./game')
const { createDeck } = require('./deck')
const { shuffleDeck, hit } = require('./deal')
const { createPlayer, dealerHit } = require('./player')
const { checkScore } = require('./score')

const enterPlayerName = {
  type: 'input',
  name: 'name',
  message: 'Enter your player name'
}

const choice = {
  type: 'list',
  choices: ['hit', 'stand'],
  message: 'Would you like to?',
  name: 'choice'
};

(async function () {
  console.log('Can you beat Dealer Dan without going bust?')
  deck = shuffleDeck(createDeck())
  console.log('Shuffling the deck...')
  const dealer = createPlayer('Dealer Dan')
  const playerName = await inquirer.prompt([enterPlayerName])
  const player = createPlayer(playerName.name)

  dealCards(player, deck)
  dealCards(dealer, deck)

  let keepAsking = true
  while (keepAsking) {
    const decision = await inquirer.prompt([choice])
    if (decision.choice === 'stand') {
      console.log(`${player.playerName} stands with a final score of ${player.currentScore.score}`)
      keepAsking = false
    } else {
      if (player.currentScore.score < 21) {
        const card = hit(deck)
        player.hand.push(card)
        player.currentScore = checkScore(player.hand)
        console.log(`${player.playerName} recieves the ${player.hand[player.hand.length - 1].name} and now has a score of ${player.currentScore.score}.`)
      }
      if (player.currentScore.score === 21) {
        console.log(`${player.playerName} stands with a final score of ${player.currentScore.score}`)
        keepAsking = false
      }
      if (player.currentScore.score > 21) {
        console.log(`${player.playerName} is bust.`)
        keepAsking = false
      }
    };
  }
  dealerHit(dealer, deck)
  evaluateGame(dealer, player)
})()
