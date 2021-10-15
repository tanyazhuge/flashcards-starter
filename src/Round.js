const Turn = require('../src/Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cardDeck[0];
  }

  takeTurn(userGuess) {
    this.turns++;
    var turn = new Turn(userGuess, this.returnCurrentCard());
    this.deck.cardDeck.shift()
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.returnCurrentCard().id)
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let correctGuesses = (this.turns - this.incorrectGuesses.length);
    return correctGuesses / this.turns * 100;
  }

  endRound() {
    if (this.deck.cardDeck.length === 0) {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
      return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
  }
}

module.exports = Round;
