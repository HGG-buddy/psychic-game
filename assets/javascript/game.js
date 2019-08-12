

// Questions - line 60, 82


var userOption = document.getElementById("userChoice");
var instructText = document.getElementById("instruct");
var wordText = document.getElementById("word");
var winRecordText = document.getElementById("winRecord");
var attemptRecordText = document.getElementById("attempt");
var chosenLettersText = document.getElementById("letters");
var hangedText = document.getElementById("hanged");


var wins = 0;
var attemptRecords = 0;
var attemptsLimit = 15;
var chosenLetters = [];
var wordDatabase = ["software", "html", "javascript", "nodes", "console"];
var userGuess;
var computerGuess;



document.onkeyup = function (event) {

    var userGuess = event.key;
    var computerGuess = "sql"
    // wordDatabase[Math.floor(Math.random() * wordDatabase.length)];

    var computerGuessSplit = computerGuess.split([]); //split  generated word into array per letter


    if (chosenLetters.includes(userGuess)) {
        alert("You have chosen a duplicate letter, please try something else.");
    } else {
        if (computerGuess.includes(userGuess)) {  // match user input with generated word
            chosenLetters.push(userGuess); //add to chosenLetters Array
            attemptRecords++; //add 1 attempt record 

            chosenLettersText.textContent = "Chosen letters: " + chosenLetters;
            attemptRecordText.textContent = "Attempts: " + attemptRecords;
            userOption.textContent = "Your guess: " + userGuess;

            console.log(chosenLetters);
            console.log(attemptRecords);

        } else {
            attemptRecords++; //add 1 attempt record 
            chosenLettersText.textContent = "Chosen letters: " + chosenLetters;
            attemptRecordText.textContent = "Attempts: " + attemptRecords;
            userOption.textContent = "Your guess: " + userGuess;

            console.log(chosenLetters);
            console.log(attemptRecords);

        }

    };
    // ## check 2 arrays when same length to work out whether win. What if some works has duplicate letters? Formula can't handle.
    if (computerGuessSplit.length === chosenLetters.length) {
        outerloop:
        for (i = 0; i < computerGuessSplit.length; i++) {
            for (j = 0; j < chosenLetters.length; j++) {
                if (computerGuessSplit[j] === chosenLetters[i]) {
                    continue outerloop;
                }
            }
            // if we get to here, then no value of b[] matched 
            // the a[] value, so, do-something and return "failed":
            // "do something"
            console.log("User has not won");

        }

        // all elements of a[] were matched to 
        // elements of b[], so: return "success"
        console.log("User won");
        wins++;
        winRecordText.textContent = "Won record: " + wins;
        attemptRecords = 0;
        chosenLetters = [];

        
  // ## how to restart play after win without losing the win record?
  // Do I need 2 functions? with trigger to rerun game?
    }

    if(attemptRecords >= attemptsLimit) {
        alert("You have reached your attempt limit. Please refresh page to start game again.");
    }

}



// console.log(computerGuessSplit);




// if (attempts > attemptsLimit) what to do?
//     Validate input letters https://www.w3resource.com/javascript/form/all-letters-field.php
// console.log(wordDatabase[Math.floor(Math.random() * wordDatabase.length)]);





// var str = "javascript";
// var n = str.includes("n");
// console.log(n);


