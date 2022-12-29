function checkScore(hand) {
    const handScore = { score: 0, validHand: false };
    hand.forEach(card => {
        handScore.score += card.value;
    });
    if (handScore.score <= 21) {
        handScore.validHand = true;
    } else if (handScore.score > 21) {
        convertAces(hand, handScore);
    }
    return handScore;
};

function convertAces(hand, handScore) {
    hand.forEach(card => {
        if (handScore.score > 21) {
            if (card.value === 11) {
                handScore.score -= 10;
                card.value -= 10;
                // removes 10 from overall score 
                // and 10 from value of each ace as needed
            };
        };
        if (handScore.score <= 21) {
            handScore.validHand = true;
        };
    });
};

exporting: module.exports = { checkScore };