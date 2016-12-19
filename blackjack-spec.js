/* global describe it */
var expect = require('chai').expect

describe('Blackjack', function () {
  it('should exist', function () {
    var Blackjack = require('./blackjack.js')
    expect(Blackjack).to.not.be.undefined
  })

  describe('Sorted Deck', function () {
    it('Sorted deck should contain 1 deck', function () {
      var createShoe = require('./blackjack.js').createShoe
      var generatedShoe = createShoe(1)
      var viewedShoe = {}
      const COUNT = 1
      var expectShoe = {
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

      generatedShoe.forEach(function (card) {
        if (viewedShoe[card]) {
          viewedShoe[card]++
        } else {
          viewedShoe[card] = 1
        }
      })

      expect(viewedShoe).to.deep.equal(expectShoe)
    })

    it('Sorted deck should contain 5 deck', function () {
      var createShoe = require('./blackjack.js').createShoe
      var generatedShoe = createShoe(5)
      var vie = {}
      const COUNT = 5
      var expectShoe = {
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

      generatedShoe.forEach(function (card) {
        if (vie[card]) {
          vie[card]++
        } else {
          vie[card] = 1
        }
      })

      expect(vie).to.deep.equal(expectShoe)
    })

    it('Sorted deck should contain 6 deck', function () {
      var createShoe = require('./blackjack.js').createShoe
      var generatedShoe = createShoe(6)
      var vie = {}
      const COUNT = 6
      var expectShoe = {
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

      generatedShoe.forEach(function (card) {
        if (vie[card]) {
          vie[card]++
        } else {
          vie[card] = 1
        }
      })

      expect(vie).to.deep.equal(expectShoe)
    })

    it('should shuffle shoe and return an array equal to input length', function () {
      var shuffleShoe = require('./blackjack.js').shuffleShoe
      var insertArray = [1, 2, 3, 4, 5]

      var tempSuffleShoe = shuffleShoe(insertArray)
      expect(tempSuffleShoe).to.be.a('array')
      expect(tempSuffleShoe.length).to.equal(insertArray.length)
    })
  })
})

