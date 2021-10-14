const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js')

describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have a guess', function() {
    const turn1 = new Turn('object')
    const turn2 = new Turn('array');
    expect(turn1.guess).to.deep.equal('object');
    expect(turn2.guess).to.deep.equal('array');
  });

  it('should have a Card object', function(){
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
  //   {
  //   id: 1,
  //   question: "What allows you to define a set of related information using key-value pairs?",
  //   answers: ["object", "array", "function"],
  //   correctAnswer: "object"
  // }
    // console.log(card.question)
    expect(turn.cardInfo).to.be.an('object');
  });

  it('should be able to display guess of user', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    //  {
    //   id: 1,
    //   question: "What allows you to define a set of related information using key-value pairs?",
    //   answers: ["object", "array", "function"],
    //   correctAnswer: "object"
    // });

    expect(turn.returnGuess()).to.deep.equal('array');
  });

  it('should be able to return the card', function(){
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    //  {
    //     id: 1,
    //     question: "What allows you to define a set of related information using key-value pairs?",
    //     answers: ["object", "array", "function"],
    //     correctAnswer: "object"
    // });
    expect(turn.returnCard()).to.deep.equal(card);
      // {
      //   id: 1,
      //   question: "What allows you to define a set of related information using key-value pairs?",
      //   answers: ["object", "array", "function"],
      //   correctAnswer: "object"
      // });
});
  it('should know if guess is correct or not', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('array', card);
    const turn2 = new Turn('object', card);
    expect(turn1.evaluateGuess()).to.deep.equal(false);
    expect(turn2.evaluateGuess()).to.deep.equal(true);
});

  it('should let user know if answer is correct or not', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn1 = new Turn('array', card);
    const turn2 = new Turn('object', card);
    expect(turn1.giveFeedback()).to.deep.equal('incorrect!');
    expect(turn2.giveFeedback()).to.deep.equal('correct!');
});

})
