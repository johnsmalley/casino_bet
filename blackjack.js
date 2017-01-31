// Game of blackjack
class Blackjack {
  constructor (numOfDecks = 6, startingMoney, defaultBet) {
    // starts the game with a shuffle deck
    this.shoe = this.shuffleShoe(this.createShoe(numOfDecks))
    this.shoeIndex = 0 // position of next card drawn from show
    this.dealerHand = []
    this.playerHand = []
    this.playerMoney = startingMoney
    this.defaultBet = defaultBet
  }

  // creates a deck(s) with an input of how many decks to use
  createShoe (numOfDecks) {
    const STANDARD_DECK = ['2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD']

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
    this.dealerHand = []

    // check it shoe needs to be reshuffled
    if (this.shoeIndex >= 0.7 * this.shoe.length) {
      // if reshuffle is required then reshuffle and reset the show index
      this.shoe = this.shuffleShoe(this.shoe)
      this.shoeIndex = 0
    }

    // deal cards one at a time starting at the player
    this.playerHand.push(this.shoe[this.shoeIndex])
    this.shoeIndex++
    this.dealerHand.push(this.shoe[this.shoeIndex])
    this.shoeIndex++
    this.playerHand.push(this.shoe[this.shoeIndex])
    this.shoeIndex++
    this.dealerHand.push(this.shoe[this.shoeIndex])
    this.shoeIndex++
  }

  // play black jack
  playGame () {
    // if balance is remaining play hand
      // if first game or last game was won, then do default bet, else double
      // the last lost

      // check if player has a black jack
        // if dealer has a black jack, then it's a tie
        // else player wins

      // check if dealer has a black jack
        // player loses

      // have player play hand based on dealers hand

  }

  isBlackJack (hand) {
    
  }
  
  
}

exports.Blackjack = Blackjack
