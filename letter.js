var Letter = function(letter) {
  this.letter = letter;
  this.status = false;
 
  this.display = function() {
    if (this.status) {
      return this.letter;
    } else {
      return "_";
    }
  };
  this.update = function(letter) {
    if (letter == this.letter) {
      this.status = true;
    }
  };
};

module.exports = Letter;
