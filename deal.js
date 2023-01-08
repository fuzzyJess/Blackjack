function shuffleDeck (deck) {
  const deckCopy = [...deck]
  const shuffledDeck = deckCopy.sort(function () {
    return Math.random() - 0.5
  })
  return shuffledDeck
};

function hit (deck) {
  const card = deck.pop()
  return card
}

function deal (deck) {
  const hand = []
  for (let i = 0; i <= 1; i++) {
    const card = hit(deck)
    hand.push(card)
  }
  return hand
}

module.exports = { shuffleDeck, deal, hit }
