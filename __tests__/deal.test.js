const { createDeck } = require('../deck')
const { shuffleDeck, deal, hit } = require('../deal')

describe('shuffleDeck() function', () => {
  test('returns an array containing full set of card objects', () => {
    const deck = createDeck()
    const shuffledDeck = shuffleDeck(deck)
    expect(shuffledDeck.length).toBe(52)
    expect(typeof shuffledDeck[0]).toBe('object')
    expect(typeof shuffledDeck[0].name).toBe('string')
    expect(typeof shuffledDeck[0].value).toBe('number')
  })
  test('returns an array that does not match the original deck', () => {
    const deck = createDeck()
    const shuffledDeck = shuffleDeck(deck)
    expect(shuffledDeck).not.toEqual(deck)
  })
})

describe('deal() function', () => {
  test('returns two cards from deck passed in', () => {
    const deck = [
      { name: 'Ace of Spades', value: 11 },
      { name: '5 of Diamonds', value: 5 }
    ]
    const newHand = deal(deck)
    expect(newHand.length).toBe(2)
    expect(newHand[0]).toEqual({ name: '5 of Diamonds', value: 5 })
  })
  test('removes two cards from deck passed in', () => {
    const deck = createDeck()
    deal(deck)
    expect(deck.length).toBe(50)
  })
})

describe('hit() function', () => {
  test('removes one card from deck passed in', () => {
    const newDeck = createDeck()
    hit(newDeck)
    expect(newDeck.length).toBe(51)
  })
  test('returns the card removed from the deck', () => {
    const testCard = [{ name: '7 of Hearts', value: 7 }]
    const cardRemoved = hit(testCard)
    expect(cardRemoved).toEqual({ name: '7 of Hearts', value: 7 })
  })
})
