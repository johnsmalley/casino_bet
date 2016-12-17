var expect = require('chai').expect

describe('Blackjack', function () {
  it('should exist', function () {
    var Blackjack = require('./blackjack.js')
    expect(Blackjack).to.not.be.undefined
  })

  describe('Sorted Deck', function() {
    it('Sorted deck should have 52 cards', function() {
      var SORTED_DECK = require('./blackjack.js').SORTED_DECK
      expect(SORTED_DECK.length).to.equal(52)
    })

    it('Sorted deck should have 4 suits', function() {
      var SORTED_DECK = require('./blackjack.js').SORTED_DECK
      var suitHolder = {}
      SORTED_DECK.forEach(function(card) {
        if (!suitHolder[card[card.length - 1]]) {
          suitHolder[card[card.length - 1]] = true
        }
      })
      expect(suitHolder).to.deep.equal({
        C: true,
        S: true,
        H: true,
        D: true
      })
    })
  })
})

