var Letter = require("./letter");

var Word = function(word) {
  this.wordArray = [];
  for (let i = 0; i < word.length; i++) {
    this.wordArray.push(new Letter(word[i]));
  }

  this.wordStatus = function() {
    var string = "";
    for (let i = 0; i < this.wordArray.length; i++) {
      string = string + this.wordArray[i].display() + " ";
    }
    return string.trim();
  };

  this.check = function(letter) {
    for (let i = 0; i < this.wordArray.length; i++) {
      this.wordArray[i].update(letter);
    }
  };
};

module.exports = Word;

