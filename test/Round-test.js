const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Round', function() {
  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card being played', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    // console.log('Helloturn', round)
    // console.log('deck1', deck)
    // console.log('round', round)

    expect(round.returnCurrentCard()).to.deep.equal(
        {
        id: 1,
        question: "What allows you to define a set of related information using key-value pairs?",
        answers: ["object", "array", "function"],
        correctAnswer: "object"
      });

  });

  it('should update turns count', function(){
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
    round.takeTurn('function');
    round.takeTurn('array');
    expect(round.turns).to.equal(2);
  });

  it('should calculate percentage of correct guesses', function() {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    // console.log(round.takeTurn('object'))
    // console.log(round.turns)
    round.takeTurn('object');
    // console.log(round.calculatePercentCorrect())
    expect(round.calculatePercentCorrect()).to.equal(100);
  });

  it('should be able to end and return percentage of correct answers', function(){
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card3 = new Card(3, 'What type of prototype method directly modifies the existing array?', ['mutator method', 'accessor method', 'iteration method'], 'mutator method');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('object');
    expect(round.endRound()).to.equal( '** Round over! ** You answered 100% of the questions correctly!' );

});


})
