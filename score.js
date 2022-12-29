function checkScore(hand) {
    const handScore = { score: 0, validHand: false };
    for (let i = 0; i < hand.length; i++) {
        handScore.score += hand[i].value;
    }
    if (handScore.score <= 21) {
        handScore.validHand = true;
    } else if (handScore.score > 21) {
        convertAces(hand, handScore);
    }
    return handScore;
};

function convertAces(hand, handScore) {
    for (let i = 0; i < hand.length; i++) {
        if (handScore.score > 21) {
            if (hand[i].value === 11) {
                handScore.score -= 10;
                hand[i].value -= 10;
                // removes 10 from overall score and 10 from value 
                // of ace
            }
        }
        if (handScore.score <= 21) {
            handScore.validHand = true;
        }
    }
}

exporting: module.exports = { checkScore };