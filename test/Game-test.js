const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round.js');
const Deck = require('../src/Deck.js');
const Turn = require('../src/Turn.js');
const Card = require('../src/Card.js');

describe('Game', function() {
  it('should be a function', function() {
    const game = new Game();
    game.start()
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

})
