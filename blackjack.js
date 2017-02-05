// Game of blackjack
class Blackjack {
  constructor (startingBalance, defaultBet, numOfDecks = 6,playLimit = 100) {
    // starts the game with a shuffle deck
    this.shoe = this.shuffleShoe(this.createShoe(numOfDecks))
    this.shoeIndex = 0 // position of next card drawn from show
    this.dealerHand = []
    this.dealerCount = 0
    this.playerHand = []
    this.playerCount = 0
    this.balance = startingBalance
    this.maxBalance = startingBalance
    this.defaultBet = defaultBet
    this.bet
    this.playLimit = playLimit
  }

  // creates a deck(s) with an input of how many decks to use
  createShoe (numOfDecks) {
    const STANDARD_DECK = [['2C', 2], ['3C', 3], ['4C', 4], ['5C', 5], ['6C', 6], ['7C', 7], ['8C', 8], ['9C', 9], ['10C', 10], ['JC', 10], ['QC', 10], ['KC', 10], ['AC', 11], ['2S', 2], ['3S', 3], ['4S', 4], ['5S', 5], ['6S', 6], ['7S', 7], ['8S', 8], ['9S', 9], ['10S', 10], ['JS', 10], ['QS', 10], ['KS', 10], ['AS', 11], ['2H', 2], ['3H', 3], ['4H', 4], ['5H', 5], ['6H', 6], ['7H', 7], ['8H', 8], ['9H', 9], ['10H', 10], ['JH', 10], ['QH', 10], ['KH', 10], ['AH', 11], ['2D', 2], ['3D', 3], ['4D', 4], ['5D', 5], ['6D', 6], ['7D', 7], ['8D', 8], ['9D', 9], ['10D', 10], ['JD', 10], ['QD', 10], ['KD', 10], ['AD', 11]]

    let generatedShoe = []

    for (let i = 0; i < numOfDecks; i++) {
      generatedShoe = generatedShoe.concat(STANDARD_DECK)
    }

    return generatedShoe
  }

  // returns a shuffled deck
  shuffleShoe (decks) {
    var shoeCopy = decks.slice()

    for (var i = shoeCopy.length; i > 0; i--) {
      var randomPoint = Math.floor((Math.random() * i))
      var temp = shoeCopy[randomPoint]
      shoeCopy[randomPoint] = shoeCopy[i - 1]
      shoeCopy[i - 1] = temp
    }

    return shoeCopy
  }

  // deal cards when starting a new hand
  dealCards () {
    // resets players hands
    this.playerHand = []
    this.playerCount = 0
    this.dealerHand = []
    this.dealerCount = 0

    // check it shoe needs to be reshuffled
    if (this.shoeIndex >= 0.7 * this.shoe.length) {
      // if reshuffle is required then reshuffle and reset the show index
      this.shoe = this.shuffleShoe(this.shoe)
      this.shoeIndex = 0
    }

    // deal cards one at a time starting at the player
    this.playerHand.push(this.shoe[this.shoeIndex])
    this.playerCount += this.shoe[this.shoeIndex][1]
    this.shoeIndex++
    this.dealerHand.push(this.shoe[this.shoeIndex])
    this.dealerCount += this.shoe[this.shoeIndex][1]
    this.shoeIndex++
    this.playerHand.push(this.shoe[this.shoeIndex])
    this.playerCount += this.shoe[this.shoeIndex][1]
    this.shoeIndex++
    this.dealerHand.push(this.shoe[this.shoeIndex])
    this.dealerCount += this.shoe[this.shoeIndex][1]
    this.shoeIndex++
  }

  // play black jack
  playGame () {
    // if balance is remaining play hand
    while (this.balance > 0 && this.playLimit > 0) {
      this.playLimit--

      // deal cards
      this.dealCards()

      this.playRound()
    }
  }

  playRound () {
    // / bet will be the difference between maximum and current balance
      // plus an additional default bet
    if (this.balance > this.maxBalance) {
      this.maxBalance = this.balance
    }
    var bet = this.maxBalance - this.balance + this.defaultBet

      // deal cards


      // check if player has a blackjack
    if (this.isBlackjack(this.playerHand)) {
        // if the dealer also has a blackjack it's a tie
      if (this.isBlackjack(this.dealerHand)) {
        return
      } else {
          // but if dealer doesn't have a blackjack, then the player wins
        this.balance += (bet * 1.5)
        return
      }
    }

      // if the dealer has a blackjack

      // check if dealer has a black jack
        // player loses

      // have player play hand based on dealers hand
  }

  isBlackjack (hand) {
    // hand would contain 2 cards that total 21 to be a blackjack
    if (hand.length !== 2) {
      return false
    }

    if (hand[0][1] + hand[1][1] === 21) {
      return true
    } else {
      return false
    }
  }

}

exports.Blackjack = Blackjack
