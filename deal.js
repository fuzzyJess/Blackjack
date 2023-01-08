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
  hand = []
  for (let i = 0; i <= 1; i++) {
    const card = hit(deck)
    hand.push(card)
  }
  return hand
}

exporting: module.exports = { shuffleDeck, deal, hit }
