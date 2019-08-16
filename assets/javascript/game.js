// QUESTIONS 
// key restricter not work - line 38 
// wordDatabasse somethings failed to pick a word




// Getting data from user interface
var userOption = document.getElementById("userChoice");
var instructText = document.getElementById("instruct");
var wordText = document.getElementById("word");
var winRecordText = document.getElementById("winRecord");
var attemptRecordText = document.getElementById("attempt");
var chosenLettersText = document.getElementById("letters");
var hangedText = document.getElementById("hanged");


// Settin default variable values
var wins = 0;
var attemptRecords = 0;
var attemptsLimit = 15;
var chosenLetters = [];
var wordDatabase = ["java", "php", "sql", "boostrap", "develop", "javascript"];
var userGuess;
var computerGuess = wordDatabase[Math.floor(Math.random() * wordDatabase.length)];


//Reset word on Win
function updateGuess() {
    computerGuess = wordDatabase[Math.floor(Math.random() * wordDatabase.length)];
}



// Master function
document.onkeyup = function (event) {
    userGuess = event.key;

    // Not working
    // var uncheckedLetters = event.key;
    // var letters = /^[A-Za-z]+$/;
    // if(uncheckedLetters.value.match(letters)) {

    // uncheckedLetters = userGuess;

    var computerGuessSplitDup = computerGuess.split([]); //split  generated word into array per letter


    var computerGuessSplit = [...new Set(computerGuessSplitDup)]; //Remove Duplicate letters in array

    if (chosenLetters.includes(userGuess)) {
        alert("You have chosen a duplicate letter, please try something else.");
    } else {
        if (computerGuess.includes(userGuess)) {  // match user input with generated word
            chosenLetters.push(userGuess); //add to chosenLetters Array
            attemptRecords++; //add 1 attempt record 

            chosenLettersText.textContent = "Correctly chosen: " + chosenLetters;
            attemptRecordText.textContent = "Attempts: " + attemptRecords;
            userOption.textContent = "Your guess: " + userGuess;

            console.log(chosenLetters);
            console.log(attemptRecords);
            console.log(computerGuess);
            console.log(computerGuessSplit);

        } else {
            attemptRecords++; //add 1 attempt record 
            chosenLettersText.textContent = "Correctly chosen: " + chosenLetters;
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
        updateGuess();

        winRecordText.textContent = "No. of Life Saved: " + wins;
        attemptRecords = 0;
        chosenLetters = [];
        chosenLettersText.textContent = "Correctly chosen: " + chosenLetters;
        attemptRecordText.textContent = "Attempts: " + attemptRecords;
        userOption.textContent = "Your guess: " + userGuess;

        alert("You have saved 1 life. Continue.")


        // ## how to restart play after win without losing the win record?
        // Do I need 2 functions? with trigger to rerun game?
    }

    if (attemptRecords >= attemptsLimit) {
        alert("You have reached your attempt limit. Please refresh page to start game again.");
    }

    // } else alert("Please input letters.") // check letter function
}


// console.log(computerGuessSplit);




// if (attempts > attemptsLimit) what to do?
//     Validate input letters https://www.w3resource.com/javascript/form/all-letters-field.php
// console.log(wordDatabase[Math.floor(Math.random() * wordDatabase.length)]);





// var str = "javascript";
// var n = str.includes("n");
// console.log(n);


