const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round.js');
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');

class Game {
  constructor() {
    this.currentRound;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  start(){
    const dataCards = prototypeQuestions.map((element) => {
      const card = new Card(element.id, element.question, element.answers, element.correctAnswer)
      return card;
    })
    const deck = new Deck(dataCards);
    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
