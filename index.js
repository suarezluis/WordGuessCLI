var Word = require("./word");
var keypress = require("keypress");
var colors = require('colors');
var words = ["console", "command", "line"];
var wordString = words[Math.floor(Math.random() * words.length)];
var wordArray = wordString.split("");
var word = new Word(wordString);
var stage = 0;
var guessText = "";
var guessed = [];
var validInput = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

updateScreen();

// listen for the "keypress" event
process.stdin.on("keypress", function(ch, key) {
  if (key && key.ctrl && key.name == "c") {
    process.stdin.pause();
  }

  if (key != undefined) {
    
    
    if (validInput.indexOf("" + key.name) in validInput) {
      var input = key.name;

      word.check(input);

      //if letter in word and stage < 7
      if (wordArray.indexOf(input) in wordArray && stage < 7 && !(guessed.indexOf(input) in guessed)) {
        guessed.push(input);
        guessText = "Good Guess!";
      }
      if (!(guessed.indexOf(input) in guessed)) {
        guessed.push(input);
        guessText = "Wrong!";
        stage++;
      }
      if(stage == 9){stage++}
      updateScreen();
    }
  }

  
  
  // If won
  if (word.wordStatus().split(" ").toString() == wordArray.toString() && stage <= 7) {
    stage = 9
    
    guessText = "     Winner Winner!";
    updateScreen()
    console.log("     Great job!".green);
    console.log("")
    console.log("press any key to play again...".inverse);
    console.log(" ")
    
  }

  if (stage == 10) {
    
    wordString = words[Math.floor(Math.random() * words.length)];
    wordArray = wordString.split("");
    word = new Word(wordString);
    stage = 0;
    guessed = []
    guessText = "";
    updateScreen();
  }
  // If lost
  if (stage == 7) {
    guessText = "You are a loser!!";
    console.log(
      "     Are you even trying? the word was ".yellow + wordString.toUpperCase().green
    );
    console.log("")
    console.log("press any key to play again...".inverse);
    console.log(" ")
    guessed = [];
  }

  if (stage == 8) {
    wordString = words[Math.floor(Math.random() * words.length)];
    wordArray = wordString.split("");
    word = new Word(wordString);
    stage = 0;
    guessed = []
    guessText = "";
    updateScreen();
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();

function updateScreen() {
  console.clear();
  console.log(" ");
  console.log(" Welcome to the word Guessing Game, CLI Edition".rainbow);
  console.log("                "+" by: Luis Suarez ".inverse);
  console.log(" " + hangman(stage));
  console.log(" ");
  console.log(" Try to guess this word: ".blue + word.wordStatus().red);
  console.log(" ")
  console.log(" Guessed: ".yellow + guessed.toString().cyan);
  console.log(" ");
  console.log(" Guesses left: ".green + (7 - stage));
  console.log(" ");
  console.log(" " + guessText.red);
  console.log(" ");
  
}

function hangman(stage) {
  switch (stage) {
    case 0:
      return `
                        ________
                        |`.green+`      |`.green+`
                               |`.green+`
                               |`.green+`
                               |`.green+`
                               |`.green+`
                               |`.green+`
                               |`.green+`
                               |`.green+`
                 ================
           `.green;
       
             break;
           case 1:
             return `
                        ________
                        |`.green+`      |`.green+``.green+`
                       ( )`.magenta+`     |`.green+``.green+`
                               |`.green+``.green+`
                               |`.green+``.green+`
                               |`.green+``.green+`
                               |`.green+``.green+`
                               |`.green+``.green+`
                               |`.green+``.green+`
                 ================`.green+`
           `.green;
             break;
           case 2:
             return `
                        ________
                        |`.green+`      |`.green+``.green+`
                       ( )`.magenta+`     |`.green+``.green+`
                        !`.magenta+`      |`.green+``.green+`
                               |`.green+``.green+`
                               |`.green+``.green+`
                               |`.green+``.green+`
                               |`.green+``.green+`
                               |`.green+``.green+`
                 ================`.green+`
           `;
             break;
           case 3:
             return `
                        ________
                        |`.green+`      |`.green+``.green+`
                       ( )`.magenta+`     |`.green+`
                        !`.magenta+`      |`.green+`
                        |`.green+`\\     |`.green+`
                          '`.magenta+`    |`.green+`
                               |`.green+`
                               |`.green+`
                               |`.green+`
                 ================`.green+`
           `;
             break;
           case 4:
             return `
                        ________
                        |`.green+`      |`.green+``.green+`
                       ( )`.magenta+`     |`.green+`
                        !`.magenta+`      |`.green+`
                       /|`.green+`\\     |`.green+`
                      '`.magenta+`   '`.magenta+`    |`.green+`
                               |`.green+`
                               |`.green+`
                               |`.green+`
                 ================`.green+`
           `;
             break;
           case 5:
             return `
                        ________
                        |`.green+`      |`.green+``.green+`
                       ( )`.magenta+`     |`.green+`
                        !`.magenta+`      |`.green+`
                       /|`.green+`\\     |`.green+`
                      '`.magenta+` |`.green+` '`.magenta+`    |`.green+`
                               |`.green+`
                               |`.green+`
                               |`.green+`
                 ================`.green+`
           `;
             break;
           case 6:
             return `
                        ________
                        |`.green+`      |`.green+``.green+`
                       ( )`.magenta+`     |`.green+`
                        !`.magenta+`      |`.green+`
                       /|`.green+`\\     |`.green+`
                      '`.magenta+` |`.green+` '`.magenta+`    |`.green+`
                         \\`.blue+`     |`.green+`
                          \\`.blue+`_`.yellow+`   |`.green+`
                               |`.green+`
                 ================`.green+`
           `;
             break;
           case 7:
             return `
                        ________
                        |`.green+`      |`.green+``.green+`
                       ( )`.magenta+`     |`.green+`
                        !`.magenta+`      |`.green+`
                       /|`.green+`\\     |`.green+`
                      '`.magenta+` |`.green+` '`.magenta+`    |`.green+`
                       / \\`.blue+`     |`.green+`
                     _`.yellow+`/   \\`.blue+`_`.yellow+`   |`.green+`
                               |`.green+`
                 ================`.green+`
           `;
             break;
           case 9:
             return `
                        ________
                        |`.green+`      |`.green+``.green+`
                     .`.magenta+`     .`.magenta+`   |`.green+`
                      \\`.green+`( )`.magenta+`/    |`.green+`
                       \\`.green+`!`.magenta+`/     |`.green+`
                        |`.green+`      |`.green+``.green+`
                        |`.green+`      |`.green+``.green+`
                       / \\`.blue+`     |`.green+`
                     _`.yellow+`/   \\`.blue+`_`.yellow+`   |`.green+`
                 ================`.green+`
           `;
         
  
  }
}
