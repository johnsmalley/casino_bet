
// creates a deck(s) with an input of how many decks to use
var createDecks = function (numOfDecks) {
  const STANDARD_DECK = ['2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 'AC', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS', 'AS', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 'AH', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 'AD']

  var generatedDeck = []

  for (var i = 0; i < numOfDecks; i++) {
    generatedDeck = generatedDeck.concat(STANDARD_DECK)
  }

  return generatedDeck
}

// returns a shuffled deck
var shuffleDecks = function (decks) {
  var decksCopy = decks.slice()

  for (var i = decksCopy.length; i > 0; i--) {
    var randomPoint = Math.floor((Math.random() * i))
    var temp = decksCopy[randomPoint]
    decksCopy[randomPoint] = decksCopy[i - 1]
    decksCopy[i - 1] = temp
  }

  return decksCopy
}

exports.createDecks = createDecks
exports.shuffleDecks = shuffleDecks
