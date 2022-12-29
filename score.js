function checkScore(hand) {
    const handScore = {score: 0, validHand: false};
        for (let i = 0; i < hand.length; i++) {
            handScore.score += hand[i].value;
        }
        if (handScore.score <= 21) {
            handScore.validHand = true;
        }
        return handScore;
};

exporting: module.exports = { checkScore };