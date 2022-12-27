// deck array to hold 52 cards
// object to hold their values? { "KingS" : 10 } (S-spades, H-hearts, D-diamonds, C-clubs) - what would I do about the aces having two potential values of 1/11?
// perhaps value of Aces could be a string of "chose 1/10" which triggers an if statement allowing the player to chose which value that card has?

// Within each player object:
// hand array to contain cards held
// score variable to hold total score
// acesHeld variable to say how many of cards held are aces

// deal() { deals two different cards }
//          returns updated player

// hit() { if hand is dealt then allow another card to be drawn from the deck } 
            // returns total score 
            
// stand() { receive no further cards & score is evaluated as being bust or a valid hand }

//  ** extension ** need to allow multiple players

// players array hold player objects - each player would have their own 
// hand variable and score variable

// - each player would have a 'hand' array to hold their hand
// - each player would have a score array to hold their score

const { deck } = require('./deck')
// array of 52 cards in a deck


function shuffleDeck(deck) {
    const deckCopy = [...deck]
    let shuffledDeck = deckCopy.sort(function () {
        return Math.random() - 0.5;
    });
    return shuffledDeck;
}
// method to shuffle the deck of cards - takes an array of cards and returns a 
// copy of that array shuffled.

const players = [];
// array to contain player objects 

function getCardsFromDeck(deck) {
    let card = deck.pop();
    return card;
}
// returns a card from the end of a deck removing it from the deck

function deal(player, deck) {
    
    for (let i = 0; i <= 1; i++) {
        let card = getCardsFromDeck(deck);
        if (card.value === 1) {
            player.acesHeld += 1;
        }
        player.score += card.value;
        player.hand.push(card);
    }

    // loops through twice each time removing a card from the deck passed in
    // checks if the card is an ace and if so increases player.acesHeld
    // then adds the score from card dealt to player.score
    // then adds the card returned from getCardsFromDeck() into player.hand array
    
    return player;


    // how do I deal with if an ace allow player to chose the value?
    // to fulfill scenarios just need to work out score so not bust... could 
    // always start with aces as 1 and then change up to 11 if that helps 
    // get total of 21?
}
    
function hit(player, deck) {
    let card = getCardsFromDeck(deck);
        if (card.value === 1) {
            player.acesHeld += 1;
        }
        player.score += card.value;
        player.hand.push(card);
}

exporting: module.exports = { shuffleDeck, getCardsFromDeck, deal, hit };

