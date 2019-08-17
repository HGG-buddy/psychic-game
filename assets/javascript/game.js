
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
    console.log(computerGuess);
    // userGuess = event.key;


    var uncheckedLetters = event.key;
    var letters = "^[A-Za-z]+$";

    if (uncheckedLetters.match(letters)) {

        userGuess = uncheckedLetters;

        var computerGuessSplitDup = computerGuess.split([]); //split  generated word into array per letter


        var computerGuessSplit = [...new Set(computerGuessSplitDup)]; //Remove Duplicate letters in array

        if (chosenLetters.includes(userGuess)) {
            alert("You have chosen a duplicate letter, please try something else.");
        } else {
            if (computerGuess.includes(userGuess)) {  // match user input with generated word
                chosenLetters.push(userGuess); //add to chosenLetters Array
            }

            attemptRecords++; //add 1 attempt record 
            chosenLettersText.textContent = "Correctly chosen: " + chosenLetters;
            attemptRecordText.textContent = "Attempts: " + attemptRecords;
            userOption.textContent = "Your guess: " + userGuess;

            console.log(chosenLetters);
            console.log(attemptRecords);

        };
        // If PC and User array are the same length, run loop to check whether letter matches
        if (computerGuessSplit.length === chosenLetters.length) {
            outerloop:
            for (i = 0; i < computerGuessSplit.length; i++) {
                for (j = 0; j < chosenLetters.length; j++) {
                    if (computerGuessSplit[j] === chosenLetters[i]) {
                        continue outerloop;
                    }
                }

                console.log("User has not won");

            }

            // all elements of a[] were matched to 
            // elements of b[], so: return "success"
            console.log("User won");
            wins++;

            winRecordText.textContent = "No. of Life Saved: " + wins;
            attemptRecords = 0;
            chosenLetters = [];
            chosenLettersText.textContent = "Correctly chosen: " + chosenLetters;
            attemptRecordText.textContent = "Attempts: " + attemptRecords;
            userOption.textContent = "Your guess: " + userGuess;

            alert("You have guessed the right word: " + computerGuess + ". You have saved 1 life. Continue.");
            updateGuess();



        }

        if (attemptRecords >= attemptsLimit) {
            alert("You have reached your attempt limit. The word is " + computerGuess + ". Please refresh page to start game again.");
        }

    } else alert("Please input letters.") // check letter function
}


