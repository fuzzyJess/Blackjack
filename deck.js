function createDeck () {
  const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
  const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']

  const deck = []

  suits.forEach(suit => {
    cards.forEach(card => {
      let name
      let value
      switch (card) {
        case 'A':
          name = `Ace of ${suit}`
          value = 11
          break
        case 'J':
          name = `Jack of ${suit}`
          value = 10
          break
        case 'Q':
          name = `Queen of ${suit}`
          value = 10
          break
        case 'K':
          name = `King of ${suit}`
          value = 10
          break
        default:
          name = `${card} of ${suit}`
          value = card
      }
      deck.push({ name, value })
    })
  })

  return deck
}

module.exports = { createDeck }
