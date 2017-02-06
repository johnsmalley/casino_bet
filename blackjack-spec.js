/* eslint-env mocha */
var expect = require('chai').expect
var sinon = require('sinon')

describe('Blackjack', function () {
  it('should exist', function () {
    var Blackjack = require('./blackjack.js')
    expect(Blackjack).to.not.be.undefined
  })

  describe('Shoe', function () {
    it('should contain 1 deck', function () {
      var Blackjack = require('./blackjack.js').Blackjack
      var startingBalance = 100
      var bet = 10
      var decks = 1
      var game = new Blackjack(startingBalance, bet, decks)
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

      game.shoe.forEach(function (card) {
        if (viewedShoe[card[0]]) {
          viewedShoe[card[0]]++
        } else {
          viewedShoe[card[0]] = 1
        }
      })

      expect(viewedShoe).to.deep.equal(expectShoe)
    })

    it('shoe should contain 5 deck', function () {
      var Blackjack = require('./blackjack.js').Blackjack
      var startingBalance = 100
      var bet = 10
      var decks = 5
      var game = new Blackjack(startingBalance, bet, decks)
      var viewedShoe = {}
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

      game.shoe.forEach(function (card) {
        if (viewedShoe[card[0]]) {
          viewedShoe[card[0]]++
        } else {
          viewedShoe[card[0]] = 1
        }
      })

      expect(viewedShoe).to.deep.equal(expectShoe)
    })

    it('shoe should contain 6 deck', function () {
      var Blackjack = require('./blackjack.js').Blackjack
      var startingBalance = 100
      var bet = 10
      var decks = 6
      var game = new Blackjack(startingBalance, bet, decks)
      var viewedShoe = {}
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

      game.shoe.forEach(function (card) {
        if (viewedShoe[card[0]]) {
          viewedShoe[card[0]]++
        } else {
          viewedShoe[card[0]] = 1
        }
      })

      expect(viewedShoe).to.deep.equal(expectShoe)
    })
  })

  describe('Shuffle Shoe', function () {
    // need to explore being able to test the randomness of the shuffle with stats
    // TODO come up with a better test method
    it('should shuffle shoe and return an array equal to input length', function () {
      var Blackjack = require('./blackjack.js').Blackjack
      var game = new Blackjack(1)
      var insertArray = [1, 2, 3, 4, 5]

      var tempSuffleShoe = game.shuffleShoe(insertArray)
      expect(tempSuffleShoe).to.be.a('array')
      expect(tempSuffleShoe.length).to.equal(insertArray.length)
    })
  })

  describe('Deal Cards', function () {
    // test that cards are dealt correctly
    it('should deal the cards from the shoe', function () {
      var Blackjack = require('./blackjack.js').Blackjack
      var game = new Blackjack(1)

      // before deal, lets pretend both dealer and player hands have 3 cards
      // each so we are confident that there hands are cleared before the
      // next deal. Also, only 20 cards have been dealt so far
      game.dealerHand.length = 3
      game.playerHand.length = 3
      game.shoeIndex = 20

      // when deal is executed
      game.dealCards()

      // then the player and dealer should both have 2 cards
      expect(game.playerHand).to.have.length(2)
      expect(game.dealerHand).to.have.length(2)

      // then shuffleShoe

      // shoe index should now be at 4
      expect(game.shoeIndex).to.be.equal(24)
    })

    // If more than 70% of the deck has been dealt, then reshuffle
    it('should reshuffle if more than 70% of deck is used', function () {
      var Blackjack = require('./blackjack.js').Blackjack
      var game = new Blackjack(1)
      var shuffleShoeSpy = sinon.spy(game, 'shuffleShoe')
      var shoeBeforeDeal = game.shoe.slice()

      // before deal, let's pretend that over 70% of the deck has already been
      // shuffled
      game.shoeIndex = Math.ceil(game.shoe.length * 0.71)

      // when deal is executed
      game.dealCards()

      // then shuffleShoe should be called on the shoe
      expect(shuffleShoeSpy.calledWith(shoeBeforeDeal)).to.be.true
    })
  })

  describe('Is Blackjack', function () {
    // test isBlackJack can determine if a hand contains a blackjack
    it('should determine if a hand contains a blackjack', function () {
      var Blackjack = require('./blackjack.js').Blackjack
      var game = new Blackjack()

      // when a hand contains a blackjack
      var blackjackHand = [['JC', 10], ['AC', 11]]

      // then isBlackJack should return true for hand
      expect(game.isBlackjack(blackjackHand)).to.be.true

      // when a hand does not contain a blackjack
      var nonBlackjackHand = [['JC', 10], ['QC', 10]]

      // then isBlackJack should return false for hand
      expect(game.isBlackjack(nonBlackjackHand)).to.be.false
    })
  })

  describe('Play Round', function () {
    var game

    beforeEach(function () {
      var Blackjack = require('./blackjack.js').Blackjack
      var startingBalance = 100
      var defaultBet = 10
      game = new Blackjack(startingBalance, defaultBet)
    })

    it('should payout 1.5 times for blackjack', function () {
      // when the player has a blackjack
      game.playerHand = [['JC', 10], ['AC', 11]]

      // when the dealer does not have a blackjack
      game.dealerHand = [['JC', 10], ['QC', 10]]

      // when playRound is called
      game.playRound()

      // then player balance should increase by
      expect(game.balance).to.equal(game.maxBalance += game.defaultBet * 1.5)
    })

    it('should tie if both player and dealer have blackjack', function () {
      // when the player has a blackjack
      game.playerHand = [['JC', 10], ['AC', 11]]

      // when the dealer has a blackjack
      game.dealerHand = [['JS', 10], ['AS', 11]]

      // when playRound is called
      game.playRound()

      // then player balance should remain the same
      expect(game.balance).to.equal(game.maxBalance)
    })

    it('should player lose if dealer has blackjack', function () {
      // when the player does not have a blackjack
      game.playerHand = [['JC', 10], ['KC', 10]]

      // when the dealer has a blackjack
      game.dealerHand = [['JS', 10], ['AS', 11]]

      // when playRound is called
      game.playRound()

      // then player balance should decrease by bet amount
      expect(game.balance).to.equal(game.maxBalance - game.defaultBet)
    })

    it('should calculate bet amout', function () {
      // when the hands were dealt so player would lose
      game.playerHand = [['JC', 10], ['KC', 10]]
      game.dealerHand = [['JS', 10], ['AS', 11]]

      // when a playRound is called
      game.playRound()

      // then player balance should decrease by bet amount
      expect(game.maxBalance - game.balance).to.equal(game.defaultBet)

      // previous lost is captured
      var previousLost = game.maxBalance - game.balance

      // balance before round captured
      var balanceBeforeRound = game.balance

      // when the next round is dealt so the player would lose
      game.playerHand = [['JC', 10], ['KC', 10]]
      game.dealerHand = [['JS', 10], ['AS', 11]]

      // when a playRound is called
      game.playRound()

      // the player balance should be down by the first bet amount plus a bet
      // amount equal to the difference between maxBalance and current balance
      // plus the default bet amount
      expect(game.maxBalance - game.balance).to.equal(
        previousLost + game.maxBalance - balanceBeforeRound + game.defaultBet
      )
    })

    it('should recalculate max balance', function () {
      // before playing grab starting balance
      var startingBalance = game.balance

      // when the hands were dealt so player would win a blackjack
      game.playerHand = [['JC', 10], ['AC', 11]]
      game.dealerHand = [['JS', 10], ['KS', 10]]

      // before the round is played the maxBalance should equal the start amount
      expect(game.maxBalance).to.equal(game.balance)

      // when a playRound is called
      game.playRound()

      // the balance should increase as the player won
      expect(game.balance).to.equal(startingBalance + (game.defaultBet * 1.5))

      // when the hands were dealt so player would lose
      game.playerHand = [['JC', 10], ['KC', 10]]
      game.dealerHand = [['JS', 10], ['AS', 11]]

      // when a playRound is called
      game.playRound()

      // the maxBlance should be recalculated
      expect(game.maxBalance).to.equal(
        startingBalance + (game.defaultBet * 1.5)
      )

      // when the hands were dealt so the player would tie
      game.playerHand = [['JC', 10], ['AC', 11]]
      game.dealerHand = [['JS', 10], ['AS', 11]]

      // when a playRound is called
      game.playRound()

      // should remain the same
      expect(game.maxBalance).to.equal(
        startingBalance + (game.defaultBet * 1.5)
      )

      // and the actual balance should be below the max balance
      expect(game.balance).to.be.below(game.maxBalance)
    })
  })
})

