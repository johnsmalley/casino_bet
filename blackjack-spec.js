/* global describe it */
var expect = require('chai').expect

describe('Blackjack', function () {
  it('should exist', function () {
    var Blackjack = require('./blackjack.js')
    expect(Blackjack).to.not.be.undefined
  })

  describe('Sorted Deck', function () {
    it('Sorted deck should contain 1 deck', function () {
      var createDecks = require('./blackjack.js').createDecks
      var generatedDeck = createDecks(1)
      var viewedDeck = {}
      const COUNT = 1
      var expectDeck = {
        '2C': COUNT,
        '3C': COUNT,
        '4C': COUNT,
        '5C': COUNT,
        '6C': COUNT,
        '7C': COUNT,
        '8C': COUNT,
        '9C': COUNT,
        '10C': COUNT,
        'JC': COUNT,
        'QC': COUNT,
        'KC': COUNT,
        'AC': COUNT,
        '2S': COUNT,
        '3S': COUNT,
        '4S': COUNT,
        '5S': COUNT,
        '6S': COUNT,
        '7S': COUNT,
        '8S': COUNT,
        '9S': COUNT,
        '10S': COUNT,
        'JS': COUNT,
        'QS': COUNT,
        'KS': COUNT,
        'AS': COUNT,
        '2D': COUNT,
        '3D': COUNT,
        '4D': COUNT,
        '5D': COUNT,
        '6D': COUNT,
        '7D': COUNT,
        '8D': COUNT,
        '9D': COUNT,
        '10D': COUNT,
        'JD': COUNT,
        'QD': COUNT,
        'KD': COUNT,
        'AD': COUNT,
        '2H': COUNT,
        '3H': COUNT,
        '4H': COUNT,
        '5H': COUNT,
        '6H': COUNT,
        '7H': COUNT,
        '8H': COUNT,
        '9H': COUNT,
        '10H': COUNT,
        'JH': COUNT,
        'QH': COUNT,
        'KH': COUNT,
        'AH': COUNT
      }

      generatedDeck.forEach(function (card) {
        if (viewedDeck[card]) {
          viewedDeck[card]++
        } else {
          viewedDeck[card] = 1
        }
      })

      expect(viewedDeck).to.deep.equal(expectDeck)
    })

    it('Sorted deck should contain 5 deck', function () {
      var createDecks = require('./blackjack.js').createDecks
      var generatedDeck = createDecks(5)
      var viewedDeck = {}
      const COUNT = 5
      var expectDeck = {
        '2C': COUNT,
        '3C': COUNT,
        '4C': COUNT,
        '5C': COUNT,
        '6C': COUNT,
        '7C': COUNT,
        '8C': COUNT,
        '9C': COUNT,
        '10C': COUNT,
        'JC': COUNT,
        'QC': COUNT,
        'KC': COUNT,
        'AC': COUNT,
        '2S': COUNT,
        '3S': COUNT,
        '4S': COUNT,
        '5S': COUNT,
        '6S': COUNT,
        '7S': COUNT,
        '8S': COUNT,
        '9S': COUNT,
        '10S': COUNT,
        'JS': COUNT,
        'QS': COUNT,
        'KS': COUNT,
        'AS': COUNT,
        '2D': COUNT,
        '3D': COUNT,
        '4D': COUNT,
        '5D': COUNT,
        '6D': COUNT,
        '7D': COUNT,
        '8D': COUNT,
        '9D': COUNT,
        '10D': COUNT,
        'JD': COUNT,
        'QD': COUNT,
        'KD': COUNT,
        'AD': COUNT,
        '2H': COUNT,
        '3H': COUNT,
        '4H': COUNT,
        '5H': COUNT,
        '6H': COUNT,
        '7H': COUNT,
        '8H': COUNT,
        '9H': COUNT,
        '10H': COUNT,
        'JH': COUNT,
        'QH': COUNT,
        'KH': COUNT,
        'AH': COUNT
      }

      generatedDeck.forEach(function (card) {
        if (viewedDeck[card]) {
          viewedDeck[card]++
        } else {
          viewedDeck[card] = 1
        }
      })

      expect(viewedDeck).to.deep.equal(expectDeck)
    })

    it('Sorted deck should contain 6 deck', function () {
      var createDecks = require('./blackjack.js').createDecks
      var generatedDeck = createDecks(6)
      var viewedDeck = {}
      const COUNT = 6
      var expectDeck = {
        '2C': COUNT,
        '3C': COUNT,
        '4C': COUNT,
        '5C': COUNT,
        '6C': COUNT,
        '7C': COUNT,
        '8C': COUNT,
        '9C': COUNT,
        '10C': COUNT,
        'JC': COUNT,
        'QC': COUNT,
        'KC': COUNT,
        'AC': COUNT,
        '2S': COUNT,
        '3S': COUNT,
        '4S': COUNT,
        '5S': COUNT,
        '6S': COUNT,
        '7S': COUNT,
        '8S': COUNT,
        '9S': COUNT,
        '10S': COUNT,
        'JS': COUNT,
        'QS': COUNT,
        'KS': COUNT,
        'AS': COUNT,
        '2D': COUNT,
        '3D': COUNT,
        '4D': COUNT,
        '5D': COUNT,
        '6D': COUNT,
        '7D': COUNT,
        '8D': COUNT,
        '9D': COUNT,
        '10D': COUNT,
        'JD': COUNT,
        'QD': COUNT,
        'KD': COUNT,
        'AD': COUNT,
        '2H': COUNT,
        '3H': COUNT,
        '4H': COUNT,
        '5H': COUNT,
        '6H': COUNT,
        '7H': COUNT,
        '8H': COUNT,
        '9H': COUNT,
        '10H': COUNT,
        'JH': COUNT,
        'QH': COUNT,
        'KH': COUNT,
        'AH': COUNT
      }

      generatedDeck.forEach(function (card) {
        if (viewedDeck[card]) {
          viewedDeck[card]++
        } else {
          viewedDeck[card] = 1
        }
      })

      expect(viewedDeck).to.deep.equal(expectDeck)
    })

    it('should shuffle deck and return an array equal to input length', function () {
      var shuffleDecks = require('./blackjack.js').shuffleDecks
      var insertArray = [1, 2, 3, 4, 5]

      var tempSuffleDecks = shuffleDecks(insertArray)
      expect(tempSuffleDecks).to.be.a('array')
      expect(tempSuffleDecks.length).to.equal(insertArray.length)
    })
  })
})

