// deck array to hold 52 cards
// object to hold their values? { "KingS" : 10 } (S-spades, H-hearts, D-diamonds, C-clubs) - what would I do about the aces having two potential values of 1/11?
// perhaps value of Aces could be a string of "chose 1/10" which triggers an if statement allowing the player to chose which value that card has?

// score variable to hold total score
// hand array to contain cards held by a single player

// deal() { deals two different cards } will need to add cards dealt to array storing cards in use
//          returns total score

// hit() { if hand is dealt then allow another card to be drawn from the deck } 
            // returns total score 
            
// stand() { receive no further cards & score is evaluated as being bust or a valid hand }

//  ** extension ** need to allow multiple players

// try this by trying to write using Classes - each player would be an 
// instance of a player and would have their own hand variable and score 
// variable

// - each player would have a 'hand' array to hold their hand
// - each player would have a score array to hold their score

const { deck } = require('./deck')

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.hand = [];
    }
}

function deal() {

}

function hit() {

}

exporting: module.exports = { deal };

