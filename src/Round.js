const Turn = require('../src/Turn.js');

class Round {
  constructor(deck){
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

returnCurrentCard(){
  if (this.turns!==0) {
    return this.deck.cardDeck[this.turns-1];
  }
  return this.deck.cardDeck[this.turns];
}

takeTurn(userGuess){
  this.turns++;
  var turn = new Turn(userGuess,this.returnCurrentCard());
  // console.log(this.returnCurrentCard());
  // console.log(turn)
  // console.log(turn.guess)
  // console.log(turn.cardInfo)
  // console.log("atleast", turn.guess);
  // console.log("hello", turn.cardInfo.correctAnswer);
  if(turn.evaluateGuess() === false){
    this.incorrectGuesses.push(this.returnCurrentCard().id)
    return turn.giveFeedback();
  }
  return turn.giveFeedback();
}

calculatePercentCorrect(){
  let correctGuesses = (this.turns- this.incorrectGuesses.length);
    return correctGuesses/this.turns * 100;
}

endRound(){
  return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
}

}

module.exports = Round;
